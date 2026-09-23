/* ============================================================
   コアイメージ英語 — アプリ本体
   ============================================================ */
/* 教科書は各データファイルを連結して作る（順序がそのまま目次の順序） */
const TEXTBOOK = [].concat(
  typeof PARTICLES !== 'undefined' ? PARTICLES : [],
  typeof VERBS     !== 'undefined' ? VERBS     : [],
  typeof GRAMMAR   !== 'undefined' ? GRAMMAR   : []
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

const state = { tab:'book', page:null, focusSense:null, quiz:null, cell:null };
const MATRIX_ID = '__matrix';
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);

/* 見出し語を例文中でハイライト */
function markHead(en, head){
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
  { type:'grammar',  label:'文法のコア',     note:'なぜそうなるかを原理から' }
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
    <button class="mx-entry" data-open="${MATRIX_ID}">
      <span class="ic">▦</span>
      <span>
        <b>句動詞マトリクス</b>
        <span>動詞 × 不変化詞 の交点 ── ${revealed}/${PHRASALS.length} マス</span>
      </span>
    </button>
    ${sections}`;
}

/* ============================================================
   句動詞マトリクス ── 掛け算を目で見る
   ============================================================ */
const cellKey = (v,p) => v + '/' + p;
const findPhrasal = (v,p) => PHRASALS.find(x => x.v === v && x.p === p);

function viewMatrix(){
  const sel = state.cell;
  const grid = [
    '<div class="mx-corner"></div>',
    ...MATRIX_PARTICLES.map(p => `<div class="mx-h">${p}</div>`),
    ...MATRIX_VERBS.flatMap(v => [
      `<div class="mx-v">${v}</div>`,
      ...MATRIX_PARTICLES.map(p => {
        const ph = findPhrasal(v, p);
        if(!ph) return '<div class="mx-cell none"></div>';
        const key  = cellKey(v,p);
        const open = !!store.cells[key];
        const cls  = 'mx-cell ' + (open ? 'done' : 'hidden') + (sel === key ? ' sel' : '');
        return `<button class="${cls}" data-cell="${key}">${open ? esc(ph.short) : '?'}</button>`;
      })
    ])
  ].join('');

  let detail = `<div class="card" style="color:var(--muted);font-size:13.5px;line-height:1.9;margin-top:14px">
      マスをタップすると意味が出ます。<br>
      意味を<b style="color:var(--text)">先に自分で推測してから</b>開くと、コアが身についているか確かめられます。<br>
      空白のマスは「その組み合わせは使われない」という情報です。
    </div>`;

  if(sel){
    const [v,p] = sel.split('/');
    const ph = findPhrasal(v,p);
    const vp = TEXTBOOK.find(x => x.id === v), pp = TEXTBOOK.find(x => x.id === p);
    detail = `<div class="card mx-detail">
      <div class="formula"><b>${esc(v)}</b> × <b>${esc(p)}</b></div>
      <div class="cores">${esc(vp.core)} × ${esc(pp.core)}</div>
      <div class="mean">${esc(ph.ja)}</div>
      <div class="note">${esc(ph.note)}</div>
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
    <p class="sub">300個の熟語ではなく、50個のコアの掛け算として見る</p>
    <div class="progress"><i style="width:${revealed / PHRASALS.length * 100}%"></i></div>
    <p class="sub" style="margin:-10px 0 14px">${revealed} / ${PHRASALS.length} マス　・　横にスクロールできます →</p>
    <div class="mx-wrap"><div class="mx">${grid}</div></div>
    ${detail}`;
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
   復習
   ============================================================ */
function viewReview(){
  const now = Date.now();
  const wrong = EXERCISES.filter(e => (store.rec[e.id]||{}).w > 0);
  const dueNow = wrong.filter(e => store.rec[e.id].due <= now);
  if(!wrong.length) return `
    <h1>復習</h1>
    <div class="empty"><span class="ic">🔁</span>
      間違えた問題がここに溜まります。<br>正解するたびに次回の間隔が延びます。</div>`;
  return `
    <h1>復習</h1>
    <p class="sub">間隔反復：0日 → 1 → 3 → 7 → 21 → 60日</p>
    ${dueNow.length ? `<button class="btn primary" data-startwrong style="margin-bottom:16px">
      ${dueNow.length}問を復習する</button>` : ''}
    ${wrong.map(e => {
      const t = store.rec[e.id];
      const left = Math.max(0, Math.ceil((t.due - now) / DAY));
      return `<div class="card" style="padding:13px 15px">
        <div style="font-family:Georgia,serif;font-size:15px">${renderSentence(e)}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px">
          ${KIND_LABEL[e.kind]} ・ 誤 ${t.w} / 正 ${t.r} ・
          ${left ? `あと ${left} 日` : '<span style="color:var(--accent)">出題できます</span>'}
        </div></div>`;
    }).join('')}`;
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
  const bar = document.getElementById('chips');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const id = e.target.id.slice(2);
      chips.forEach(c => c.setAttribute('aria-current', String(c.dataset.jump === id)));
      const active = document.querySelector('.chip[aria-current="true"]');
      if(active && bar) bar.scrollTo({ left: active.offsetLeft - 60, behavior:'smooth' });
    });
  }, { rootMargin:'-58px 0px -65% 0px' });
  document.querySelectorAll('.sense').forEach(el => io.observe(el));
  const onScroll = () => bar && bar.classList.toggle('stuck', window.scrollY > 0);
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
}

function render(){
  let html;
  if(state.tab === 'book')        html = state.page === MATRIX_ID ? viewMatrix()
                                       : state.page ? viewBookPage(state.page) : viewBookList();
  else if(state.tab === 'quiz')   html = viewQuiz();
  else                            html = viewReview();
  $('#view').innerHTML = html;

  document.querySelectorAll('#tabs button').forEach(b =>
    b.setAttribute('aria-selected', b.dataset.tab === state.tab));

  window.scrollTo(0, 0);
  if(state.tab === 'book' && state.page && state.page !== MATRIX_ID){
    watchSenses();
    if(state.focusSense){ jumpTo(state.focusSense); state.focusSense = null; }
  }
}

document.addEventListener('click', ev => {
  const t = ev.target.closest('[data-tab],[data-open],[data-back],[data-pick],[data-next],' +
    '[data-start],[data-startover],[data-startwrong],[data-goto],[data-quizref],[data-jump],[data-cell]');
  if(!t) return;
  const d = t.dataset;

  if(d.jump){ jumpTo(d.jump); return; }   // 再描画するとスクロール位置が飛ぶ

  if(d.tab !== undefined){ state.tab = d.tab; state.page = null; }
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

  render();
});

render();
