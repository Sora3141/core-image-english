/* ============================================================
   コアイメージ英語 — アプリ本体
   ============================================================ */
/* 教科書は各データファイルを連結して作る（順序がそのまま目次の順序） */
const TEXTBOOK = [].concat(
  typeof PARTICLES !== 'undefined' ? PARTICLES : [],
  typeof VERBS     !== 'undefined' ? VERBS     : [],
  typeof GRAMMAR   !== 'undefined' ? GRAMMAR   : [],
  typeof WORDSETS  !== 'undefined' ? WORDSETS  : []
);

const KEY = 'coreEn.v1';
const INTERVALS = [0, 1, 3, 7, 21, 60];   // SRS: box → 次回までの日数
const DAY = 86400000;
const SESSION_SIZE = 10;

const store = load();
function load(){
  try { const o = JSON.parse(localStorage.getItem(KEY)) || {};
        return { rec:o.rec || {}, cells:o.cells || {} }; }
  catch(e){ return { rec:{}, cells:{} }; }
}
function save(){ localStorage.setItem(KEY, JSON.stringify(store)); }
function rec(id){
  return store.rec[id] || (store.rec[id] = { r:0, w:0, box:0, due:0 });
}
function grade(id, ok){
  const t = rec(id);
  if(ok){ t.r++; t.box = Math.min(t.box + 1, INTERVALS.length - 1); }
  else  { t.w++; t.box = 0; }
  t.due = Date.now() + INTERVALS[t.box] * DAY;
  save();
}

const state = { tab:'book', page:null, focusSense:null, quiz:null, cell:null, mxVerb:'get',
                vocab:null, vBand:1, vMode:'ja' };
const MATRIX_ID = '__matrix';
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);

/* 見出し語を例文中でハイライト
   文法ページの見出し（have + p.p. など）は正規表現の特殊文字を含むので、
   英単語1語のときだけハイライトする */
function markHead(en, head){
  if(!/^[a-zA-Z]+$/.test(head)) return esc(en);
  return esc(en).replace(new RegExp('\\b' + head + '\\b','g'), '<em>' + head + '</em>');
}

/* ============================================================
   教科書
   ============================================================ */
/* 見出し語が長いページでもグリフ枠からはみ出さないように */
function glyphSize(w){
  return w.length <= 2 ? 22 : w.length === 3 ? 19 : w.length === 4 ? 16 : 13;
}
/* 目次のグリフは glyph 優先（文法ページは headword が長いため） */
const pageGlyph = p => p.glyph || p.headword;
/* 見出しは title があればそちら（文法ページの日本語名） */
const pageName  = p => p.title || p.headword;

const TYPE_SECTION = [
  { type:'particle', label:'不変化詞のコア', note:'前置詞・副詞。ここが全体の土台' },
  { type:'verb',     label:'基本動詞のコア', note:'不変化詞と掛け算される側' },
  { type:'grammar',  label:'文法のコア',     note:'なぜそうなるかを原理から' },
  { type:'word',     label:'紛らわしい語',   note:'日本語では同じ訳なのに、英語では別物' }
];

function viewBookList(){
  const sections = TYPE_SECTION.map(sec => {
    const pages = TEXTBOOK.filter(p => p.type === sec.type);
    if(!pages.length) return '';
    return `<div class="sec-label">${sec.label}　<span style="font-weight:400;letter-spacing:0">${
      esc(sec.note)}</span></div>` + pages.map(p => {
      const ex = EXERCISES.filter(e => e.ref === p.id);
      const ok = ex.filter(e => (store.rec[e.id]||{}).r > 0).length;
      const pct = ex.length ? Math.round(ok / ex.length * 100) : 0;
      return `<button class="btn toc-item" data-open="${p.id}">
        <span class="toc-glyph" style="font-size:${glyphSize(pageGlyph(p))}px">${esc(pageGlyph(p))}</span>
        <span class="toc-body">
          <b>${esc(pageName(p))} ── ${esc(p.core)}</b>
          <span>${p.senses.length}の派生 ・ 演習 ${ok}/${ex.length}</span>
          <span class="toc-bar"><i style="width:${pct}%"></i></span>
        </span>
      </button>`;
    }).join('');
  }).join('');

  const revealed = Object.keys(store.cells).length;
  const totalEx = EXERCISES.length;
  const doneEx  = EXERCISES.filter(e => (store.rec[e.id]||{}).r > 0).length;
  return `
    <h1>教科書</h1>
    <p class="sub">コアのイメージを掴めば、派生は自分で導ける</p>
    <div class="stat-row">
      <div class="stat"><b>${TEXTBOOK.length}</b><span>ページ</span></div>
      <div class="stat"><b>${doneEx}<span style="font-size:14px;color:var(--muted)">/${totalEx}</span></b><span>演習</span></div>
      <div class="stat"><b>${TEXTBOOK.reduce((n,p)=>n+p.senses.length,0)}</b><span>派生</span></div>
    </div>
    ${window.__installPrompt ? `<button class="btn install" data-install>
      <span class="ic">📲</span>
      <span><b>アプリとして追加</b>
      <span>ホーム画面から開けて、電波がなくても使えます</span></span>
    </button>` : ''}
    <button class="mx-entry" data-open="${MATRIX_ID}">
      <span class="ic">▦</span>
      <span>
        <b>句動詞マトリクス</b>
        <span>動詞 × 不変化詞 の交点 ── ${revealed}/${PHRASALS.length} マス</span>
      </span>
    </button>
    ${sections}`;
}

function viewBookPage(id){
  const p = TEXTBOOK.find(x => x.id === id);
  return `
    <button class="backlink" data-back>← 教科書</button>
    <div class="hero">
      <div class="word">${esc(p.headword)}</div>
      ${p.title ? `<div class="wordname">${esc(p.title)}</div>` : ''}
      <div class="corelabel">コア：${esc(p.core)}</div>
      ${DIAGRAMS[p.diagram] || ''}
      <p class="corenote">${esc(p.coreNote)}</p>
    </div>

    <div class="chips" id="chips">
      ${p.senses.map(s =>
        `<button class="chip" data-jump="${s.id}">${esc(s.chip || s.label)}</button>`).join('')}
    </div>

    <div class="sec-label">コアからの派生</div>
    ${p.senses.map(s => `
      <div class="sense" id="s-${s.id}">
        <h3>${esc(s.label)}</h3>
        <p class="gloss">${esc(s.gloss)}</p>
        ${s.examples.map(e => `
          <div class="ex">
            <div class="en">${markHead(e.en, p.headword)}</div>
            <div class="ja">${esc(e.ja)}</div>
            ${e.note ? `<div class="note">${esc(e.note)}</div>` : ''}
          </div>`).join('')}
      </div>`).join('')}

    <div class="sec-label">⚡ 豆知識</div>
    ${p.trivia.map(t => `
      <div class="trivia">
        <h4>${esc(t.title)}</h4>
        <p>${esc(t.body)}</p>
      </div>`).join('')}

    <button class="btn primary" data-quizref="${p.id}" style="margin-top:18px">
      このページの演習をやる</button>`;
}

/* ============================================================
   句動詞マトリクス ── 掛け算を目で見る
   ============================================================ */
const cellKey = (v,p) => v + '/' + p;
const findPhrasal = (v,p) => PHRASALS.find(x => x.v === v && x.p === p);

function viewMatrix(){
  const sel  = state.cell;
  const verb = state.mxVerb;
  /* 句動詞を1つも作らない不変化詞は列から外す（そのこと自体は下に明記する） */
  const cols = MATRIX_PARTICLES.filter(p => PHRASALS.some(x => x.p === p));
  const dead = MATRIX_PARTICLES.filter(p => !cols.includes(p));

  /* ---- 俯瞰マップ：750マスの全体像を1画面に ---- */
  const map = [
    '<div class="mmap-corner"></div>',
    ...cols.map(p => `<div class="mmap-h">${p}</div>`),
    ...MATRIX_VERBS.flatMap(v => [
      `<div class="mmap-v ${v === verb ? 'sel' : ''}">${v}</div>`,
      ...cols.map(p => {
        const ph = findPhrasal(v, p);
        if(!ph) return '<div class="mmap-c"></div>';
        return `<div class="mmap-c ${store.cells[cellKey(v,p)] ? 'done' : 'has'}"></div>`;
      })
    ])
  ].join('');

  /* ---- 選んだ動詞の行 ---- */
  const page = TEXTBOOK.find(x => x.id === verb);
  const rows = PHRASALS.filter(x => x.v === verb);
  const cards = rows.map(ph => {
    const key  = cellKey(ph.v, ph.p);
    const open = !!store.cells[key];
    const cls  = 'pv-card ' + (open ? 'done' : 'hidden') + (sel === key ? ' sel' : '');
    return `<button class="${cls}" data-cell="${key}">
      <span class="p">${esc(verb)} ${esc(ph.p)}</span>
      <span class="m">${open ? esc(ph.short === ph.ja ? ph.ja : ph.ja) : 'タップして開く'}</span>
    </button>`;
  }).join('');

  /* ---- 選んだマスの詳細 ---- */
  let detail = '';
  if(sel){
    const [v,p] = sel.split('/');
    const ph = findPhrasal(v,p);
    const vp = TEXTBOOK.find(x => x.id === v), pp = TEXTBOOK.find(x => x.id === p);
    detail = `<div class="card mx-detail">
      <div class="formula"><b>${esc(v)}</b> × <b>${esc(p)}</b></div>
      <div class="cores">${esc(vp.core)} × ${esc(pp.core)}</div>
      <div class="mean">${esc(ph.ja)}</div>
      ${ph.note ? `<div class="note">${esc(ph.note)}</div>` : ''}
      <div class="sample">${esc(ph.en)}</div>
      <div class="mx-links">
        <button class="linkto" data-goto="${v}" data-sense="">📖 ${esc(v)}</button>
        <button class="linkto" data-goto="${p}" data-sense="">📖 ${esc(p)}</button>
      </div>
    </div>`;
  }

  const revealed = Object.keys(store.cells).length;
  return `
    <button class="backlink" data-back>← 教科書</button>
    <h1>句動詞マトリクス</h1>
    <p class="sub">${PHRASALS.length}個の熟語ではなく、${MATRIX_VERBS.length}＋${cols.length}個のコアの掛け算として見る</p>
    <div class="progress"><i style="width:${revealed / PHRASALS.length * 100}%"></i></div>
    <p class="sub" style="margin:-10px 0 12px">${revealed} / ${PHRASALS.length} マス</p>

    <div class="mmap-legend">
      <span><i style="background:var(--accent)"></i>開いた</span>
      <span><i style="background:var(--line)"></i>まだ</span>
      <span><i style="background:transparent;border:1px solid var(--line)"></i>使われない組み合わせ</span>
    </div>
    <div class="mmap-wrap">
      <div class="mmap" style="grid-template-columns:44px repeat(${cols.length}, 11px)">${map}</div>
    </div>
    <p class="sub" style="margin:8px 0 0; font-size:12px">
      ${esc(dead.join(' / '))} は句動詞をまったく作らない。前置詞ではあっても、動詞にくっつく副詞辞にはならないため。
    </p>

    <div class="vchips">
      ${MATRIX_VERBS.map(v => `<button class="vchip" data-verb="${v}"
        aria-current="${v === verb}">${esc(v)}<span class="n">${
          PHRASALS.filter(x => x.v === v).length}</span></button>`).join('')}
    </div>

    <p class="pv-head"><b>${esc(verb)}</b> ── ${esc(page.core)}　・　${rows.length}個</p>
    <div class="pv-grid">${cards}</div>
    ${detail}`;
}

/* ============================================================
   演習
   ============================================================ */
const KIND_LABEL = { core:'コア適用', fill:'用法穴埋め', meaning:'意味選択', spell:'スペル入力' };

function buildQueue(onlyWrong){
  const now = Date.now();
  let pool = EXERCISES.filter(e => {
    const t = store.rec[e.id];
    if(onlyWrong) return t && t.w > 0 && t.due <= now;
    return !t || t.due <= now;
  });
  return { list: shuffle(pool).slice(0, SESSION_SIZE), i:0, sel:null, right:0 };
}

function startQuiz(ref, onlyWrong){
  state.quiz = buildQueue(onlyWrong);
  if(ref) state.quiz.list = shuffle(EXERCISES.filter(e => e.ref === ref)).slice(0, SESSION_SIZE);
  state.quiz.i = 0; state.quiz.sel = null; state.quiz.right = 0;
}

function renderSentence(e){
  if(e.kind === 'fill')
    return esc(e.prompt).replace('___', '<span class="blank">____</span>');
  return esc(e.prompt);
}

function viewQuiz(){
  const q = state.quiz;
  if(!q) return viewQuizStart();
  if(q.i >= q.list.length) return viewQuizDone();

  const e = q.list[q.i];
  const answered = q.sel !== null;
  const ok = answered && q.sel === e.answer;
  const mono = e.kind === 'fill' ? ' mono' : '';

  return `
    <div class="progress"><i style="width:${(q.i / q.list.length) * 100}%"></i></div>
    <div class="q-meta">
      <span class="q-kind">${KIND_LABEL[e.kind]}</span>
      <span>${q.i + 1} / ${q.list.length}</span>
    </div>
    <div class="q-prompt"><div class="sent">${renderSentence(e)}</div></div>
    <p class="q-ask">${esc(e.question)}</p>

    ${e.choices.map((c, i) => {
      let cls = 'btn choice' + mono;
      if(answered && i === e.answer) cls += ' correct';
      else if(answered && i === q.sel) cls += ' wrong';
      return `<button class="${cls}" data-pick="${i}" ${answered ? 'disabled' : ''}>
        <span class="num">${i + 1}</span><span class="txt">${esc(c)}</span></button>`;
    }).join('')}

    ${answered ? `
      <div class="card" style="margin-top:14px">
        <div class="verdict ${ok ? 'ok' : 'ng'}">${ok ? '◎ 正解' : '✗ 不正解'}</div>
        <p class="explain">${esc(e.explain)}</p>
        <button class="linkto" data-goto="${(e.jumpTo || e.ref + '/' + e.refSense).split('/')[0]}"
          data-sense="${(e.jumpTo || e.ref + '/' + e.refSense).split('/')[1]}">
          📖 ${e.jumpTo ? esc(e.jumpTo.split('/')[0]) + ' のコアで確認' : '教科書で確認'}</button>
      </div>
      <button class="btn primary" data-next style="margin-top:12px">
        ${q.i + 1 < q.list.length ? '次へ' : '結果を見る'}</button>` : ''}`;
}

function viewQuizStart(){
  const now = Date.now();
  const due = EXERCISES.filter(e => { const t = store.rec[e.id]; return !t || t.due <= now; }).length;
  const learned = EXERCISES.filter(e => (store.rec[e.id]||{}).r > 0).length;
  return `
    <h1>演習</h1>
    <p class="sub">誤答は「コアを取り違えたら選ぶもの」だけを並べています</p>
    <div class="stat-row">
      <div class="stat"><b>${due}</b><span>いま出題できる</span></div>
      <div class="stat"><b>${learned}</b><span>正解済み</span></div>
      <div class="stat"><b>${EXERCISES.length}</b><span>全問題</span></div>
    </div>
    ${due ? `<button class="btn primary" data-start>${Math.min(due, SESSION_SIZE)}問はじめる</button>`
          : `<div class="empty"><span class="ic">✓</span>
               いま出題できる問題はありません。<br>復習タブで間隔があくのを待ちます。</div>`}`;
}

function viewQuizDone(){
  const q = state.quiz, n = q.list.length;
  const pct = Math.round(q.right / n * 100);
  return `
    <div class="big">${pct === 100 ? '🎉' : pct >= 70 ? '👍' : '📖'}</div>
    <h1 class="center">${q.right} / ${n} 正解</h1>
    <p class="sub center">${
      pct === 100 ? 'コアが掴めています' :
      pct >= 70  ? '間違えた問題は復習に回りました' :
                   'もう一度 on のページを読むのがおすすめです'}</p>
    <button class="btn primary" data-startover style="margin-top:20px">続ける</button>
    <button class="btn" data-tab="book" style="margin-top:10px">📖 教科書を読む</button>`;
}

/* ============================================================
   単語 ── NGSL 上位1000語
   コアページを持つ語は、暗記ではなくそのページへ誘導する
   ============================================================ */
const BANDS = [
  { id:1, label:'1〜333位',    note:'最頻出' },
  { id:2, label:'334〜666位',  note:'頻出'   },
  { id:3, label:'667〜1000位', note:'基礎'   }
];
const V_MODES = [
  { id:'ja',    label:'英 → 日', note:'4択' },
  { id:'en',    label:'日 → 英', note:'4択' },
  { id:'spell', label:'スペル',  note:'入力' }
];
const bandOf = w => w[2] <= 333 ? 1 : w[2] <= 666 ? 2 : 3;
const vKey   = w => 'w:' + w[0];

function buildVocabQueue(onlyWrong){
  const now = Date.now();
  const pool = VOCAB.filter(w => {
    const t = store.rec[vKey(w)];
    if(onlyWrong) return t && t.w > 0 && t.due <= now;   // 復習タブから：帯をまたいで誤答だけ
    return bandOf(w) === state.vBand && (!t || t.due <= now);
  });
  return { list: shuffle(pool).slice(0, SESSION_SIZE), i:0, sel:null, right:0, typed:'', judged:false };
}

/* 4択の誤答は同じ帯から引く（難易度をそろえるため） */
function vocabChoices(w){
  const same = VOCAB.filter(x => bandOf(x) === bandOf(w) && x[0] !== w[0] && x[1] !== w[1]);
  const wrong = shuffle(same).slice(0, 3);
  return shuffle([w, ...wrong]);
}

function viewVocabStart(){
  const now = Date.now();
  const band = VOCAB.filter(w => bandOf(w) === state.vBand);
  const due  = band.filter(w => { const t = store.rec[vKey(w)]; return !t || t.due <= now; }).length;
  const learned = VOCAB.filter(w => (store.rec[vKey(w)]||{}).r > 0).length;
  const withPage = band.filter(w => w[6]).length;
  return `
    <h1>単語</h1>
    <p class="sub">NGSL 頻度順の上位1000語</p>
    <div class="stat-row">
      <div class="stat"><b>${learned}<span style="font-size:14px;color:var(--muted)">/1000</span></b><span>正解済み</span></div>
      <div class="stat"><b>${due}</b><span>出題できる</span></div>
      <div class="stat"><b>${withPage}</b><span>コアページあり</span></div>
    </div>

    <div class="sec-label">どの帯を</div>
    <div class="seg">${BANDS.map(b => `<button data-vband="${b.id}" aria-current="${b.id === state.vBand}">
      ${b.label}<small>${b.note}</small></button>`).join('')}</div>

    <div class="sec-label">出題のしかた</div>
    <div class="seg">${V_MODES.map(m => `<button data-vmode="${m.id}" aria-current="${m.id === state.vMode}">
      ${m.label}<small>${m.note}</small></button>`).join('')}</div>

    ${due ? `<button class="btn primary" data-vstart style="margin-top:6px">${
        Math.min(due, SESSION_SIZE)}語はじめる</button>`
          : `<div class="empty"><span class="ic">✓</span>
               この帯でいま出題できる語はありません。<br>別の帯を選ぶか、間隔があくのを待ちます。</div>`}

    <div class="card" style="margin-top:16px;color:var(--muted);font-size:13px;line-height:1.85">
      この1000語のうち<b style="color:var(--text)">66語</b>は、教科書にコアページを持っています。
      その語が出たときは暗記せず、<b style="color:var(--text)">コアから入る</b>ようにしてください。
      答え合わせの画面からそのページへ飛べます。
    </div>`;
}

function viewVocabDone(){
  const q = state.vocab, n = q.list.length;
  const pct = Math.round(q.right / n * 100);
  return `
    <div class="big">${pct === 100 ? '🎉' : pct >= 70 ? '👍' : '🔤'}</div>
    <h1 class="center">${q.right} / ${n} 正解</h1>
    <p class="sub center">間違えた語は復習に回りました</p>
    <button class="btn primary" data-vstart style="margin-top:20px">続ける</button>
    <button class="btn" data-tab="vocab" style="margin-top:10px">単語トップへ</button>`;
}

function viewVocab(){
  const q = state.vocab;
  if(!q) return viewVocabStart();
  if(q.i >= q.list.length) return viewVocabDone();

  const w = q.list[q.i];
  const mode = state.vMode;
  const answered = q.judged;
  const ok = answered && (mode === 'spell'
    ? q.typed.trim().toLowerCase() === w[0].toLowerCase()
    : q.sel === w[0]);

  /* 問題文 */
  let prompt, body;
  if(mode === 'ja'){
    prompt = `<div class="v-word">${esc(w[0])}</div><div class="v-ipa">${esc(w[5])}</div>`;
    body = q.choices.map(c => {
      let cls = 'btn choice';
      if(answered && c[0] === w[0]) cls += ' correct';
      else if(answered && c[0] === q.sel) cls += ' wrong';
      return `<button class="${cls}" data-vpick="${esc(c[0])}" ${answered ? 'disabled' : ''}>
        <span class="txt">${esc(c[1])}</span></button>`;
    }).join('');
  } else if(mode === 'en'){
    prompt = `<div class="v-ja">${esc(w[1])}</div>`;
    body = q.choices.map(c => {
      let cls = 'btn choice mono';
      if(answered && c[0] === w[0]) cls += ' correct';
      else if(answered && c[0] === q.sel) cls += ' wrong';
      return `<button class="${cls}" data-vpick="${esc(c[0])}" ${answered ? 'disabled' : ''}>
        <span class="txt">${esc(c[0])}</span></button>`;
    }).join('');
  } else {
    const blank = '_'.repeat(Math.max(3, w[0].length));
    const masked = esc(w[3]).replace(new RegExp('\\b' + w[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b','ig'),
                                     `<span class="v-blank">${blank}</span>`);
    prompt = `<div class="v-ja">${esc(w[1])}</div>
      <div class="v-ex">${masked}<div class="ja">${esc(w[4])}</div></div>`;
    body = `<input class="v-input ${answered ? (ok ? 'ok' : 'ng') : ''}" id="vin"
       type="text" inputmode="latin" autocapitalize="off" autocorrect="off" spellcheck="false"
       value="${esc(q.typed)}" placeholder="英語を入力" ${answered ? 'disabled' : ''}>
      ${answered ? '' : '<button class="btn primary" data-vcheck style="margin-top:10px">答え合わせ</button>'}`;
  }

  return `
    <div class="progress"><i style="width:${(q.i / q.list.length) * 100}%"></i></div>
    <div class="q-meta">
      <span class="q-kind">${V_MODES.find(m => m.id === mode).label}</span>
      <span>${q.i + 1} / ${q.list.length}　・　${w[2]}位</span>
    </div>
    <div class="q-prompt">${prompt}</div>
    ${body}

    ${answered ? `
      <div class="card" style="margin-top:14px">
        <div class="verdict ${ok ? 'ok' : 'ng'}">${ok ? '◎ 正解' : '✗ 不正解'}</div>
        <div class="v-word" style="font-size:26px">${esc(w[0])}</div>
        <div class="v-ipa">${esc(w[5])}</div>
        <div class="v-ja" style="font-size:18px;margin-top:8px">${esc(w[1])}</div>
        <div class="v-ex">${esc(w[3])}<div class="ja">${esc(w[4])}</div></div>
        ${w[6] ? `<button class="linkto" data-goto="${w[6]}" data-sense=""
            style="margin-top:12px">📖 この語はコアページがあります</button>` : ''}
      </div>
      <button class="btn primary" data-vnext style="margin-top:12px">
        ${q.i + 1 < q.list.length ? '次へ' : '結果を見る'}</button>` : ''}`;
}

/* ============================================================
   復習
   ============================================================ */
function viewReview(){
  const now = Date.now();
  const wrongEx = EXERCISES.filter(e => (store.rec[e.id]||{}).w > 0);
  const wrongV  = VOCAB.filter(w => (store.rec[vKey(w)]||{}).w > 0);
  const dueEx   = wrongEx.filter(e => store.rec[e.id].due <= now);
  const dueV    = wrongV.filter(w => store.rec[vKey(w)].due <= now);

  if(!wrongEx.length && !wrongV.length) return `
    <h1>復習</h1>
    <div class="empty"><span class="ic">🔁</span>
      間違えた問題と単語がここに溜まります。<br>正解するたびに次回の間隔が延びます。</div>`;

  const row = (title, sub, t) => {
    const left = Math.max(0, Math.ceil((t.due - now) / DAY));
    return `<div class="card" style="padding:12px 15px">
      <div style="font-family:Georgia,serif;font-size:15px">${title}</div>
      <div style="font-size:12px;color:var(--muted);margin-top:4px">
        ${sub} ・ 誤 ${t.w} / 正 ${t.r} ・
        ${left ? `あと ${left} 日` : '<span style="color:var(--accent)">出題できます</span>'}
      </div></div>`;
  };

  return `
    <h1>復習</h1>
    <p class="sub">間隔反復：0日 → 1 → 3 → 7 → 21 → 60日</p>
    <div class="stat-row">
      <div class="stat"><b>${wrongEx.length}</b><span>演習</span></div>
      <div class="stat"><b>${wrongV.length}</b><span>単語</span></div>
      <div class="stat"><b>${dueEx.length + dueV.length}</b><span>いま出せる</span></div>
    </div>
    ${dueEx.length ? `<button class="btn primary" data-startwrong style="margin-bottom:8px">
      演習を ${Math.min(dueEx.length, SESSION_SIZE)}問 復習する</button>` : ''}
    ${dueV.length ? `<button class="btn primary" data-vstartwrong style="margin-bottom:16px">
      単語を ${Math.min(dueV.length, SESSION_SIZE)}語 復習する</button>` : ''}

    ${wrongEx.length ? `<div class="sec-label">演習</div>` : ''}
    ${wrongEx.map(e => row(renderSentence(e), KIND_LABEL[e.kind], store.rec[e.id])).join('')}

    ${wrongV.length ? `<div class="sec-label">単語</div>` : ''}
    ${wrongV.map(w => row(esc(w[0]) + ' <span style="font-family:inherit;font-size:13px;color:var(--muted)">'
        + esc(w[1]) + '</span>', w[2] + '位', store.rec[vKey(w)])).join('')}`;
}

/* ============================================================
   ルーティング
   ============================================================ */
/* 該当の派生へスクロールし、一瞬ハイライトする */
function jumpTo(senseId){
  const el = document.getElementById('s-' + senseId);
  if(!el) return;
  el.scrollIntoView({ block:'start', behavior:'smooth' });
  el.classList.add('focus');
  clearTimeout(jumpTo._t);
  jumpTo._t = setTimeout(() => el.classList.remove('focus'), 1800);
}

/* スクロール位置に応じて、いまどの派生を読んでいるかをチップに反映 */
function watchSenses(){
  const chips = document.querySelectorAll('.chip');
  if(!chips.length) return;
  const bar  = document.getElementById('chips');
  const view = document.getElementById('view');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const id = e.target.id.slice(2);
      chips.forEach(c => c.setAttribute('aria-current', String(c.dataset.jump === id)));
      const active = document.querySelector('.chip[aria-current="true"]');
      if(active && bar) bar.scrollTo({ left: active.offsetLeft - 60, behavior:'smooth' });
    });
  }, { root: view, rootMargin:'-58px 0px -65% 0px' });
  document.querySelectorAll('.sense').forEach(el => io.observe(el));
  const onScroll = () => bar && bar.classList.toggle('stuck', view.scrollTop > 0);
  view.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

function render(){
  let html;
  if(state.tab === 'book')        html = state.page === MATRIX_ID ? viewMatrix()
                                       : state.page ? viewBookPage(state.page) : viewBookList();
  else if(state.tab === 'quiz')   html = viewQuiz();
  else if(state.tab === 'vocab')  html = viewVocab();
  else                            html = viewReview();
  $('#view').innerHTML = html;

  document.querySelectorAll('#tabs button').forEach(b =>
    b.setAttribute('aria-selected', b.dataset.tab === state.tab));

  $('#view').scrollTop = 0;
  const vin = document.getElementById('vin');
  if(vin && !vin.disabled) vin.focus();
  if(state.tab === 'book' && state.page && state.page !== MATRIX_ID){
    watchSenses();
    if(state.focusSense){ jumpTo(state.focusSense); state.focusSense = null; }
  }
}

document.addEventListener('click', ev => {
  const t = ev.target.closest('[data-tab],[data-open],[data-back],[data-pick],[data-next],' +
    '[data-start],[data-startover],[data-startwrong],[data-goto],[data-quizref],[data-jump],'+
    '[data-cell],[data-verb],[data-vband],[data-vmode],[data-vstart],[data-vpick],'+
    '[data-vcheck],[data-vnext],[data-vstartwrong],[data-install]');
  if(!t) return;
  const d = t.dataset;

  if(d.jump){ jumpTo(d.jump); return; }   // 再描画するとスクロール位置が飛ぶ

  if(d.install !== undefined){
    const p = window.__installPrompt;
    if(p){ window.__installPrompt = null; p.prompt(); }
    render(); return;
  }

  if(d.tab !== undefined){ state.tab = d.tab; state.page = null;
                           if(d.tab === 'vocab') state.vocab = null; }
  else if(d.open)         { state.page = d.open; state.cell = null; }
  else if(d.back !== undefined){ state.page = null; }
  else if(d.quizref)      { state.tab = 'quiz'; state.page = null; startQuiz(d.quizref); }
  else if(d.start !== undefined || d.startover !== undefined){ startQuiz(null, false); }
  else if(d.startwrong !== undefined){ startQuiz(null, true); }
  else if(d.goto)         { state.tab = 'book'; state.page = d.goto; state.focusSense = d.sense || null; }
  else if(d.pick !== undefined){
    const q = state.quiz, e = q.list[q.i];
    if(q.sel !== null) return;
    q.sel = +d.pick;
    const ok = q.sel === e.answer;
    if(ok) q.right++;
    grade(e.id, ok);
  }
  else if(d.next !== undefined){ state.quiz.i++; state.quiz.sel = null; }
  else if(d.cell)         { state.cell = d.cell; store.cells[d.cell] = 1; save(); }
  else if(d.verb)         { state.mxVerb = d.verb; state.cell = null; }
  else if(d.vband)        { state.vBand = +d.vband; state.vocab = null; }
  else if(d.vmode)        { state.vMode = d.vmode;  state.vocab = null; }
  else if(d.vstart !== undefined || d.vstartwrong !== undefined){
    const onlyWrong = d.vstartwrong !== undefined;
    state.vocab = buildVocabQueue(onlyWrong);
    if(onlyWrong) state.tab = 'vocab';
    if(state.vocab.list.length) state.vocab.choices = vocabChoices(state.vocab.list[0]);
  }
  else if(d.vpick){
    const q = state.vocab; if(q.judged) return;
    q.sel = d.vpick; q.judged = true;
    const w = q.list[q.i], ok = q.sel === w[0];
    if(ok) q.right++;
    grade(vKey(w), ok);
  }
  else if(d.vcheck !== undefined){
    const q = state.vocab; if(q.judged) return;
    const el = document.getElementById('vin');
    q.typed = el ? el.value : '';
    q.judged = true;
    const w = q.list[q.i];
    const ok = q.typed.trim().toLowerCase() === w[0].toLowerCase();
    if(ok) q.right++;
    grade(vKey(w), ok);
  }
  else if(d.vnext !== undefined){
    const q = state.vocab;
    q.i++; q.sel = null; q.typed = ''; q.judged = false;
    if(q.i < q.list.length) q.choices = vocabChoices(q.list[q.i]);
  }

  render();
});

render();
