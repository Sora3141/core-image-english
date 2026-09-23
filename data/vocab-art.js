/* ============================================================
   単語のイメージ図
   単語帳で語を開いたときと、テストの答え合わせの下に出す。

   色は CSS 変数を参照しているので、明暗どちらのテーマでも、
   アクセント色を変えても、そのまま馴染む。
   意味が2つある語は2枚並べ、どこが違うのかを絵で示す。
   ============================================================ */
const A = b => `<svg viewBox="0 0 240 140" role="img">${b}</svg>`;
const SP2 = '<line x1="120" y1="8" x2="120" y2="132" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 5"/>';
const LB = (x, y, t) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="11"
  fill="var(--muted)" font-family="-apple-system,sans-serif">${t}</text>`;

const VOCAB_ART = {

/* ---------- 意味が2つある語は、2枚並べて違いを見せる ---------- */
bank: A(SP2 + `
  <rect x="26" y="46" width="70" height="56" rx="4" fill="var(--accent)"/>
  <path d="M20 46 L61 24 L102 46 Z" fill="var(--accent)"/>
  ${[38,52,66,80].map(x=>`<rect x="${x}" y="62" width="6" height="30" fill="var(--bg)" opacity=".8"/>`).join('')}
  ${LB(61,120,'銀行')}
  <path d="M136 92 L166 58 L196 58 L226 92 Z" fill="var(--accent)" opacity=".45"/>
  <path d="M132 92 h96" stroke="var(--accent)" stroke-width="3"/>
  <path d="M132 100 q24 8 48 0 q24 -8 48 0" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".7"/>
  ${LB(180,120,'土手')}`),
court: A(SP2 + `
  <path d="M28 40 h66 v10 h-66 z" fill="var(--accent)"/>
  <path d="M61 22 L98 40 H24 Z" fill="var(--accent)"/>
  ${[34,56,78].map(x=>`<rect x="${x}" y="52" width="10" height="44" fill="var(--accent)" opacity=".7"/>`).join('')}
  <rect x="24" y="96" width="74" height="8" rx="2" fill="var(--accent)"/>
  ${LB(61,120,'裁判所')}
  <rect x="136" y="34" width="88" height="66" rx="3" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="180" y1="34" x2="180" y2="100" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="136" y1="67" x2="224" y2="67" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
  ${LB(180,120,'コート')}`),
board: A(SP2 + `
  <rect x="24" y="52" width="74" height="18" rx="3" fill="var(--accent)"/>
  <rect x="24" y="76" width="74" height="18" rx="3" fill="var(--accent)" opacity=".55"/>
  ${LB(61,120,'板')}
  <rect x="140" y="58" width="80" height="12" rx="3" fill="var(--accent)" opacity=".5"/>
  ${[152,180,208].map(x=>`<circle cx="${x}" cy="44" r="10" fill="var(--accent)"/>`).join('')}
  ${LB(180,120,'委員会（卓を囲む人）')}`),
second: A(SP2 + `
  <circle cx="61" cy="62" r="34" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <line x1="61" y1="62" x2="61" y2="38" stroke="var(--accent)" stroke-width="3"/>
  <line x1="61" y1="62" x2="80" y2="72" stroke="var(--accent)" stroke-width="2"/>
  ${LB(61,120,'秒（時計の最小）')}
  <rect x="140" y="46" width="26" height="32" rx="3" fill="var(--muted)" opacity=".45"/>
  <rect x="172" y="46" width="26" height="32" rx="3" fill="var(--accent)"/>
  <rect x="204" y="46" width="26" height="32" rx="3" fill="var(--muted)" opacity=".45"/>
  ${LB(185,120,'2番目')}`),
patient: A(SP2 + `
  <rect x="24" y="66" width="74" height="30" rx="6" fill="var(--accent)" opacity=".35"/>
  <circle cx="44" cy="58" r="12" fill="var(--accent)"/>
  <line x1="24" y1="96" x2="98" y2="96" stroke="var(--accent)" stroke-width="3"/>
  ${LB(61,120,'患者')}
  <rect x="150" y="70" width="60" height="26" rx="5" fill="var(--accent)"/>
  ${[164,180,196].map(x=>`<path d="M${x} 52 v12" stroke="var(--accent)" stroke-width="3"/>
    <path d="M${x} 68 l5 -9 h-10 z" fill="var(--accent)"/>`).join('')}
  ${LB(180,120,'耐えている')}`),
stock: A(SP2 + `
  ${[[30,62],[58,62],[30,86],[58,86]].map(([x,y])=>`<rect x="${x}" y="${y}" width="24" height="20" rx="2" fill="var(--accent)"/>`).join('')}
  <rect x="24" y="52" width="70" height="6" rx="2" fill="var(--muted)" opacity=".5"/>
  ${LB(59,120,'在庫')}
  <polyline points="140,94 160,76 178,84 198,52 218,44" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M218 44 l-12 2 l4 10 z" fill="var(--accent)"/>
  <line x1="136" y1="100" x2="224" y2="100" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
  ${LB(180,120,'株')}`),
picture: A(SP2 + `
  <rect x="26" y="38" width="70" height="56" rx="3" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M34 82 L54 58 L68 74 L80 62 L88 82 Z" fill="var(--accent)" opacity=".6"/>
  <circle cx="76" cy="52" r="6" fill="var(--accent)"/>
  ${LB(61,120,'絵')}
  <rect x="140" y="44" width="80" height="50" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <circle cx="180" cy="69" r="16" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <circle cx="180" cy="69" r="7" fill="var(--accent)"/>
  <rect x="164" y="36" width="20" height="10" rx="3" fill="var(--accent)"/>
  ${LB(180,120,'写真')}`),
light: A(SP2 + `
  <circle cx="61" cy="58" r="16" fill="var(--accent)"/>
  ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
    return `<line x1="${61+22*Math.cos(r)}" y1="${58+22*Math.sin(r)}" x2="${61+32*Math.cos(r)}" y2="${58+32*Math.sin(r)}" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`}).join('')}
  ${LB(61,120,'光')}
  <line x1="180" y1="24" x2="180" y2="40" stroke="var(--muted)" stroke-width="3"/>
  <line x1="142" y1="52" x2="218" y2="34" stroke="var(--accent)" stroke-width="4"/>
  <line x1="150" y1="50" x2="150" y2="62" stroke="var(--muted)" stroke-width="2"/>
  <line x1="210" y1="36" x2="210" y2="48" stroke="var(--muted)" stroke-width="2"/>
  <rect x="134" y="62" width="32" height="26" rx="4" fill="var(--muted)" opacity=".45"/>
  <rect x="196" y="48" width="28" height="18" rx="4" fill="var(--accent)"/>
  ${LB(210,86,'↑')}
  ${LB(180,120,'軽い（持ち上がる側）')}`),
star: A(SP2 + `
  <path d="M61 30 l9 20 22 3 -16 15 4 22 -19 -11 -19 11 4 -22 -16 -15 22 -3 z" fill="var(--accent)"/>
  ${LB(61,120,'星')}
  <circle cx="180" cy="56" r="17" fill="var(--accent)"/>
  <path d="M156 96 q24 -22 48 0 z" fill="var(--accent)"/>
  ${[[150,40],[212,40],[146,72],[216,72]].map(([x,y])=>`<path d="M${x} ${y-6} l3 6 6 1 -4.5 4 1 6 -5.5 -3 -5.5 3 1 -6 -4.5 -4 6 -1 z" fill="var(--accent)" opacity=".7"/>`).join('')}
  ${LB(180,120,'スター')}`),
back: A(SP2 + `
  <circle cx="70" cy="50" r="13" fill="var(--accent)"/>
  <rect x="56" y="66" width="28" height="34" rx="6" fill="var(--accent)"/>
  <line x1="44" y1="83" x2="24" y2="83" stroke="var(--accent)" stroke-width="3"/>
  <path d="M18 83 l12 6 v-12 z" fill="var(--accent)"/>
  ${LB(61,120,'後ろへ')}
  <circle cx="180" cy="46" r="13" fill="var(--muted)" opacity=".5"/>
  <rect x="164" y="62" width="32" height="40" rx="7" fill="var(--accent)"/>
  <line x1="180" y1="68" x2="180" y2="96" stroke="var(--bg)" stroke-width="2.5" opacity=".7"/>
  ${LB(180,120,'背中')}`),
right: A(SP2 + `
  <circle cx="61" cy="62" r="28" fill="none" stroke="var(--ok)" stroke-width="3"/>
  <path d="M47 62 l10 11 20 -22" fill="none" stroke="var(--ok)" stroke-width="4" stroke-linecap="round"/>
  ${LB(61,120,'正しい')}
  <line x1="146" y1="68" x2="200" y2="68" stroke="var(--accent)" stroke-width="4"/>
  <path d="M214 68 l-16 9 v-18 z" fill="var(--accent)"/>
  ${LB(180,120,'右')}`),
open: A(SP2 + `
  <rect x="30" y="28" width="60" height="76" rx="3" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <path d="M30 28 L14 40 v56 L30 104 Z" fill="var(--accent)"/>
  ${LB(56,124,'開く')}
  <rect x="150" y="28" width="60" height="76" rx="3" fill="var(--accent)"/>
  <circle cx="200" cy="66" r="4" fill="var(--bg)"/>
  ${LB(180,124,'閉じる（close）')}`),

/* ---------- 位置・方向・量 ---------- */
rise: A(`
  <line x1="24" y1="112" x2="216" y2="112" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
  <polyline points="34,100 78,78 122,58 166,38 204,22" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <path d="M216 18 l-14 2 l3 12 z" fill="var(--accent)"/>
  ${LB(120,132,'上がる')}`),
fall: A(SP2 + `
  <circle cx="61" cy="30" r="11" fill="var(--accent)" opacity=".35"/>
  <circle cx="61" cy="56" r="11" fill="var(--accent)" opacity=".6"/>
  <circle cx="61" cy="84" r="11" fill="var(--accent)"/>
  <path d="M61 100 h0" stroke="var(--accent)" stroke-width="3"/>
  <path d="M38 100 h46" stroke="var(--accent)" stroke-width="3"/>
  ${LB(61,124,'落ちる')}
  <path d="M180 34 v54" stroke="var(--accent)" stroke-width="3"/>
  ${[[164,48],[198,44],[170,68],[196,64]].map(([x,y],i)=>
    `<ellipse cx="${x}" cy="${y}" rx="9" ry="6" fill="var(--accent)"
      opacity="${0.5+i*0.12}" transform="rotate(${i%2?30:-25} ${x} ${y})"/>`).join('')}
  ${[[156,92],[186,96],[208,90]].map(([x,y])=>
    `<ellipse cx="${x}" cy="${y}" rx="9" ry="5" fill="var(--accent)" opacity=".4"/>`).join('')}
  ${LB(180,124,'秋（葉が落ちる季節）')}`),
increase: A(`
  ${[[36,86],[76,68],[116,50],[156,34],[196,18]].map(([x,y])=>`<rect x="${x}" y="${y}" width="28" height="${104-y}" rx="3" fill="var(--accent)" opacity=".85"/>`).join('')}
  <line x1="24" y1="104" x2="230" y2="104" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
  ${LB(120,126,'増える')}`),
reduce: A(`
  ${[[36,18],[76,34],[116,50],[156,68],[196,86]].map(([x,y])=>`<rect x="${x}" y="${y}" width="28" height="${104-y}" rx="3" fill="var(--accent)" opacity=".85"/>`).join('')}
  <line x1="24" y1="104" x2="230" y2="104" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
  ${LB(120,126,'減らす')}`),
high: A(`
  <line x1="24" y1="112" x2="216" y2="112" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <rect x="42" y="88" width="40" height="24" rx="3" fill="var(--muted)" opacity=".4"/>
  <rect x="150" y="26" width="40" height="86" rx="3" fill="var(--accent)"/>
  <line x1="108" y1="26" x2="140" y2="26" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
  ${LB(170,132,'高い')}`),
low: A(`
  <line x1="24" y1="112" x2="216" y2="112" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <rect x="42" y="26" width="40" height="86" rx="3" fill="var(--muted)" opacity=".4"/>
  <rect x="150" y="92" width="40" height="20" rx="3" fill="var(--accent)"/>
  <line x1="108" y1="92" x2="140" y2="92" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
  ${LB(170,132,'低い')}`),
near: A(`
  <circle cx="86" cy="66" r="15" fill="var(--accent)"/>
  <circle cx="134" cy="66" r="15" fill="var(--accent)" opacity=".5"/>
  <line x1="104" y1="66" x2="116" y2="66" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 3"/>
  ${LB(110,120,'近い')}`),
far: A(`
  <circle cx="34" cy="66" r="15" fill="var(--accent)"/>
  <circle cx="206" cy="66" r="15" fill="var(--accent)" opacity=".5"/>
  <line x1="54" y1="66" x2="186" y2="66" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 5" opacity=".6"/>
  ${LB(120,120,'遠い')}`),
full: A(SP2 + `
  <rect x="38" y="28" width="46" height="74" rx="5" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <rect x="42" y="34" width="38" height="64" rx="3" fill="var(--accent)"/>
  ${LB(61,124,'いっぱい')}
  <rect x="158" y="28" width="46" height="74" rx="5" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".6"/>
  <rect x="162" y="86" width="38" height="12" rx="2" fill="var(--muted)" opacity=".5"/>
  ${LB(181,124,'空')}`),
half: A(`
  <path d="M120 66 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M120 24 A42 42 0 0 1 120 108 Z" fill="var(--accent)"/>
  ${LB(120,130,'半分')}`),
top: A(`
  <rect x="84" y="30" width="72" height="16" rx="3" fill="var(--accent)"/>
  <rect x="84" y="54" width="72" height="16" rx="3" fill="var(--muted)" opacity=".4"/>
  <rect x="84" y="78" width="72" height="16" rx="3" fill="var(--muted)" opacity=".4"/>
  <path d="M66 38 l10 -10 v20 z" fill="var(--accent)" transform="rotate(180 71 38)"/>
  ${LB(120,120,'一番上')}`),
front: A(SP2 + `
  <circle cx="44" cy="66" r="16" fill="var(--accent)"/>
  <circle cx="86" cy="66" r="16" fill="var(--muted)" opacity=".4"/>
  ${LB(61,120,'前')}
  <circle cx="158" cy="66" r="16" fill="var(--muted)" opacity=".4"/>
  <circle cx="200" cy="66" r="16" fill="var(--accent)"/>
  ${LB(180,120,'後ろ')}`),
inside: A(SP2 + `
  <rect x="26" y="34" width="70" height="62" rx="7" fill="none" stroke="var(--muted)" stroke-width="3"/>
  <circle cx="61" cy="65" r="15" fill="var(--accent)"/>
  ${LB(61,120,'内側')}
  <rect x="146" y="34" width="70" height="62" rx="7" fill="none" stroke="var(--muted)" stroke-width="3"/>
  <circle cx="226" cy="65" r="13" fill="var(--accent)"/>
  ${LB(174,120,'外側')}`),
outside: A(`
  <rect x="60" y="30" width="80" height="70" rx="8" fill="none" stroke="var(--muted)" stroke-width="3"/>
  <circle cx="186" cy="65" r="16" fill="var(--accent)"/>
  <line x1="148" y1="65" x2="164" y2="65" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 3"/>
  ${LB(120,124,'枠の外')}`),
line: A(SP2 + `
  <path d="M22 66 h78" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
  ${LB(61,120,'線')}
  ${[146,166,186,206].map((x,i)=>
    `<circle cx="${x}" cy="66" r="10" fill="var(--accent)" opacity="${1-i*0.18}"/>`).join('')}
  <path d="M140 86 h72" stroke="var(--accent)" stroke-width="2" opacity=".4"/>
  ${LB(180,120,'一列に並ぶ→列・路線')}`),
point: A(`
  <circle cx="120" cy="60" r="9" fill="var(--accent)"/>
  <circle cx="120" cy="60" r="26" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".45"/>
  <circle cx="120" cy="60" r="42" fill="none" stroke="var(--accent)" stroke-width="2" opacity=".22"/>
  ${LB(120,124,'点')}`),
level: A(`
  ${[30,52,74].map((y,i)=>`<rect x="${60-i*0}" y="${y}" width="120" height="14" rx="3" fill="var(--accent)" opacity="${0.35+i*0.3}"/>`).join('')}
  <line x1="44" y1="37" x2="52" y2="37" stroke="var(--muted)" stroke-width="2"/>
  <line x1="44" y1="59" x2="52" y2="59" stroke="var(--muted)" stroke-width="2"/>
  <line x1="44" y1="81" x2="52" y2="81" stroke="var(--muted)" stroke-width="2"/>
  ${LB(120,120,'水準・段階')}`),
weight: A(`
  <line x1="120" y1="24" x2="120" y2="44" stroke="var(--muted)" stroke-width="3"/>
  <line x1="46" y1="44" x2="194" y2="44" stroke="var(--accent)" stroke-width="4"/>
  <line x1="66" y1="44" x2="66" y2="64" stroke="var(--muted)" stroke-width="2"/>
  <line x1="174" y1="44" x2="174" y2="64" stroke="var(--muted)" stroke-width="2"/>
  <rect x="44" y="64" width="44" height="26" rx="4" fill="var(--accent)"/>
  <rect x="152" y="64" width="44" height="26" rx="4" fill="var(--muted)" opacity=".45"/>
  ${LB(120,116,'重さ')}`),
/* ---------- 目に見えるもの ---------- */
water: A(`
  <path d="M120 22 C150 58 166 76 166 92 a46 46 0 0 1 -92 0 C74 76 90 58 120 22 z" fill="var(--accent)"/>
  <ellipse cx="104" cy="88" rx="9" ry="13" fill="var(--bg)" opacity=".3"/>
  ${LB(120,130,'水')}`),
tree: A(`
  <rect x="112" y="80" width="16" height="34" rx="3" fill="var(--muted)" opacity=".7"/>
  <circle cx="120" cy="58" r="30" fill="var(--accent)"/>
  <circle cx="94" cy="72" r="20" fill="var(--accent)" opacity=".85"/>
  <circle cx="146" cy="72" r="20" fill="var(--accent)" opacity=".85"/>
  <line x1="84" y1="114" x2="156" y2="114" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  ${LB(120,132,'木')}`),
window: A(`
  <rect x="68" y="24" width="104" height="84" rx="4" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <line x1="120" y1="24" x2="120" y2="108" stroke="var(--accent)" stroke-width="4"/>
  <line x1="68" y1="66" x2="172" y2="66" stroke="var(--accent)" stroke-width="4"/>
  <path d="M80 100 L100 74 L112 88 V100 Z" fill="var(--accent)" opacity=".3"/>
  ${LB(120,128,'窓')}`),
door: A(`
  <rect x="82" y="20" width="76" height="94" rx="4" fill="var(--accent)"/>
  <circle cx="146" cy="70" r="5" fill="var(--bg)"/>
  <line x1="74" y1="114" x2="166" y2="114" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  ${LB(120,132,'ドア')}`),
house: A(`
  <path d="M60 62 L120 20 L180 62 Z" fill="var(--accent)"/>
  <rect x="74" y="62" width="92" height="52" rx="3" fill="var(--accent)" opacity=".75"/>
  <rect x="108" y="82" width="24" height="32" rx="2" fill="var(--bg)" opacity=".85"/>
  <rect x="84" y="74" width="16" height="16" rx="2" fill="var(--bg)" opacity=".6"/>
  ${LB(120,132,'家')}`),
car: A(`
  <path d="M46 88 v-16 l18 -22 h74 l22 22 h26 v16 z" fill="var(--accent)"/>
  <rect x="72" y="54" width="30" height="18" rx="3" fill="var(--bg)" opacity=".75"/>
  <rect x="110" y="54" width="28" height="18" rx="3" fill="var(--bg)" opacity=".75"/>
  <circle cx="76" cy="90" r="13" fill="var(--muted)"/><circle cx="76" cy="90" r="5" fill="var(--bg)"/>
  <circle cx="162" cy="90" r="13" fill="var(--muted)"/><circle cx="162" cy="90" r="5" fill="var(--bg)"/>
  ${LB(120,126,'車')}`),
book: A(`
  <path d="M120 34 C104 24 78 24 62 30 v66 c16 -6 42 -6 58 4 z" fill="var(--accent)"/>
  <path d="M120 34 C136 24 162 24 178 30 v66 c-16 -6 -42 -6 -58 4 z" fill="var(--accent)" opacity=".7"/>
  <line x1="120" y1="34" x2="120" y2="104" stroke="var(--bg)" stroke-width="3"/>
  ${LB(120,128,'本')}`),
table: A(SP2 + `
  <rect x="28" y="56" width="66" height="9" rx="3" fill="var(--accent)"/>
  <rect x="34" y="65" width="7" height="30" rx="3" fill="var(--accent)" opacity=".75"/>
  <rect x="81" y="65" width="7" height="30" rx="3" fill="var(--accent)" opacity=".75"/>
  ${LB(61,120,'テーブル')}
  <rect x="146" y="38" width="70" height="58" rx="4" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <rect x="146" y="38" width="70" height="14" rx="4" fill="var(--accent)" opacity=".6"/>
  <path d="M146 66 h70 M146 81 h70 M170 52 v44 M193 52 v44" stroke="var(--accent)" stroke-width="2" opacity=".6"/>
  ${LB(180,120,'マス目に並べた表')}`),
hand: A(`
  <rect x="98" y="58" width="44" height="52" rx="12" fill="var(--accent)"/>
  ${[[100,34],[114,26],[128,26],[142,34]].map(([x,y],i)=>`<rect x="${x}" y="${y}" width="12" height="${62-y+6}" rx="6" fill="var(--accent)"/>`).join('')}
  <rect x="82" y="62" width="14" height="30" rx="7" fill="var(--accent)" transform="rotate(-24 89 77)"/>
  ${LB(120,132,'手')}`),
eye: A(`
  <path d="M46 66 Q120 16 194 66 Q120 116 46 66 z" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <circle cx="120" cy="66" r="22" fill="var(--accent)"/>
  <circle cx="120" cy="66" r="9" fill="var(--bg)"/>
  ${LB(120,130,'目')}`),
head: A(SP2 + `
  <circle cx="61" cy="52" r="20" fill="var(--accent)"/>
  <path d="M45 76 q16 8 32 0 l5 24 h-42 z" fill="var(--accent)" opacity=".35"/>
  ${LB(61,120,'頭（てっぺん）')}
  <circle cx="152" cy="60" r="14" fill="var(--accent)"/>
  <circle cx="182" cy="66" r="10" fill="var(--accent)" opacity=".45"/>
  <circle cx="204" cy="66" r="10" fill="var(--accent)" opacity=".45"/>
  <path d="M152 88 h60" stroke="var(--accent)" stroke-width="2" opacity=".4"/>
  ${LB(180,120,'先頭→長・向かう')}`),
heart: A(`
  <path d="M120 108 C60 72 62 34 92 34 c14 0 24 10 28 18 4 -8 14 -18 28 -18 30 0 32 38 -28 74 z" fill="var(--accent)"/>
  ${LB(120,130,'心臓・心')}`),
foot: A(`
  <path d="M96 28 c22 0 34 14 34 34 v22 c0 18 -10 28 -26 28 -18 0 -28 -12 -28 -28 0 -22 4 -56 20 -56 z" fill="var(--accent)"/>
  ${[[132,40],[146,50],[156,62]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="8" fill="var(--accent)" opacity=".8"/>`).join('')}
  ${LB(120,132,'足')}`),
key: A(`
  <circle cx="70" cy="66" r="24" fill="none" stroke="var(--accent)" stroke-width="9"/>
  <rect x="90" y="60" width="92" height="12" rx="3" fill="var(--accent)"/>
  <rect x="150" y="72" width="10" height="18" rx="2" fill="var(--accent)"/>
  <rect x="170" y="72" width="10" height="14" rx="2" fill="var(--accent)"/>
  ${LB(120,124,'鍵')}`),
box: A(`
  <path d="M60 52 L120 28 L180 52 v48 L120 116 L60 100 z" fill="var(--accent)" opacity=".8"/>
  <path d="M60 52 L120 74 L180 52" fill="none" stroke="var(--bg)" stroke-width="3"/>
  <line x1="120" y1="74" x2="120" y2="116" stroke="var(--bg)" stroke-width="3"/>
  ${LB(120,134,'箱')}`),
clock: A(`
  <circle cx="120" cy="64" r="42" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <line x1="120" y1="64" x2="120" y2="36" stroke="var(--accent)" stroke-width="4"/>
  <line x1="120" y1="64" x2="144" y2="76" stroke="var(--accent)" stroke-width="3"/>
  <circle cx="120" cy="64" r="4" fill="var(--accent)"/>
  ${LB(120,126,'時計')}`),
money: A(`
  <rect x="52" y="46" width="136" height="60" rx="5" fill="var(--accent)" opacity=".8"/>
  <circle cx="120" cy="76" r="18" fill="none" stroke="var(--bg)" stroke-width="3"/>
  <line x1="120" y1="58" x2="120" y2="94" stroke="var(--bg)" stroke-width="3"/>
  <rect x="62" y="34" width="136" height="12" rx="4" fill="var(--accent)" opacity=".4"/>
  ${LB(120,126,'お金')}`),
paper: A(SP2 + `
  <rect x="32" y="32" width="58" height="72" rx="3" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${LB(61,124,'紙')}
  <rect x="146" y="32" width="70" height="72" rx="3" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <rect x="154" y="40" width="54" height="10" rx="2" fill="var(--accent)"/>
  ${[58,68,78,88].map(y=>`<path d="M154 ${y} h24 M186 ${y} h22" stroke="var(--accent)"
    stroke-width="2" opacity=".55"/>`).join('')}
  ${LB(180,124,'紙→新聞・論文')}`),
fire: A(`
  <path d="M120 18 C142 46 158 58 158 80 a38 38 0 0 1 -76 0 c0 -16 10 -24 18 -34 4 12 10 16 14 10 -4 -14 -2 -28 6 -38 z" fill="var(--accent)"/>
  ${LB(120,130,'火')}`),
road: A(`
  <path d="M84 116 L108 24 h24 l24 92 z" fill="var(--muted)" opacity=".45"/>
  ${[36,58,80,102].map((y,i)=>`<rect x="${118-i*0.5}" y="${y}" width="6" height="12" rx="2" fill="var(--accent)"/>`).join('')}
  ${LB(120,134,'道')}`),
sea: A(`
  <rect x="34" y="52" width="172" height="58" rx="4" fill="var(--accent)" opacity=".35"/>
  ${[64,80,96].map(y=>`<path d="M34 ${y} q22 -8 44 0 q22 8 44 0 q22 -8 44 0 q22 8 40 0" fill="none" stroke="var(--accent)" stroke-width="3" opacity=".8"/>`).join('')}
  <circle cx="176" cy="34" r="14" fill="var(--accent)" opacity=".5"/>
  ${LB(120,130,'海')}`),
fish: A(`
  <path d="M60 66 C86 34 140 34 166 66 C140 98 86 98 60 66 z" fill="var(--accent)"/>
  <path d="M166 66 L200 44 v44 z" fill="var(--accent)" opacity=".7"/>
  <circle cx="86" cy="58" r="5" fill="var(--bg)"/>
  ${LB(120,124,'魚')}`),
dog: A(`
  <ellipse cx="112" cy="82" rx="46" ry="24" fill="var(--accent)"/>
  <circle cx="166" cy="62" r="22" fill="var(--accent)"/>
  <path d="M152 44 l-6 -20 14 8 z" fill="var(--accent)"/>
  <circle cx="176" cy="58" r="4" fill="var(--bg)"/>
  <path d="M66 74 q-16 -14 -6 -26" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
  ${[86,110,134].map(x=>`<rect x="${x}" y="100" width="10" height="16" rx="4" fill="var(--accent)" opacity=".8"/>`).join('')}
  ${LB(120,134,'犬')}`),
train: A(SP2 + `
  <rect x="26" y="52" width="72" height="34" rx="6" fill="var(--accent)"/>
  <rect x="34" y="60" width="18" height="14" rx="3" fill="var(--bg)" opacity=".85"/>
  <rect x="58" y="60" width="18" height="14" rx="3" fill="var(--bg)" opacity=".85"/>
  <circle cx="42" cy="92" r="6" fill="var(--muted)"/><circle cx="82" cy="92" r="6" fill="var(--muted)"/>
  <path d="M16 100 h92" stroke="var(--accent)" stroke-width="2.5"/>
  ${LB(61,124,'列車')}
  <circle cx="160" cy="44" r="10" fill="var(--accent)" opacity=".4"/>
  <circle cx="180" cy="44" r="10" fill="var(--accent)" opacity=".7"/>
  <circle cx="200" cy="44" r="10" fill="var(--accent)"/>
  <path d="M148 66 q32 14 64 0" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M212 66 l-11 7 v-13 z" fill="var(--accent)"/>
  <path d="M160 86 l10 9 20 -20" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
  ${LB(180,124,'繰り返す→訓練する')}`),
bus: A(`
  <rect x="48" y="34" width="144" height="58" rx="8" fill="var(--accent)"/>
  ${[60,92,124,156].map(x=>`<rect x="${x}" y="44" width="24" height="20" rx="3" fill="var(--bg)" opacity=".75"/>`).join('')}
  <circle cx="78" cy="94" r="12" fill="var(--muted)"/>
  <circle cx="164" cy="94" r="12" fill="var(--muted)"/>
  ${LB(120,126,'バス')}`),
phone: A(`
  <rect x="94" y="16" width="52" height="98" rx="9" fill="var(--accent)"/>
  <rect x="100" y="28" width="40" height="70" rx="3" fill="var(--bg)" opacity=".85"/>
  <circle cx="120" cy="106" r="4" fill="var(--bg)" opacity=".7"/>
  ${LB(120,132,'電話')}`),
computer: A(`
  <rect x="58" y="26" width="124" height="74" rx="6" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <rect x="68" y="36" width="104" height="54" rx="2" fill="var(--accent)" opacity=".3"/>
  <rect x="88" y="104" width="64" height="8" rx="3" fill="var(--accent)"/>
  ${LB(120,130,'コンピュータ')}`),
face: A(SP2 + `
  <circle cx="61" cy="62" r="30" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <circle cx="51" cy="55" r="4" fill="var(--accent)"/><circle cx="71" cy="55" r="4" fill="var(--accent)"/>
  <path d="M49 72 q12 9 24 0" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
  ${LB(61,120,'顔')}
  <circle cx="152" cy="62" r="17" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <circle cx="158" cy="58" r="3" fill="var(--accent)"/>
  <rect x="196" y="36" width="22" height="52" rx="4" fill="var(--accent)" opacity=".8"/>
  <path d="M174 62 h14" stroke="var(--accent)" stroke-width="3"/>
  <path d="M192 62 l-11 6 v-12 z" fill="var(--accent)"/>
  ${LB(180,120,'向き合う→直面する')}`),
baby: A(`
  <circle cx="120" cy="48" r="26" fill="var(--accent)"/>
  <circle cx="112" cy="46" r="4" fill="var(--bg)"/><circle cx="128" cy="46" r="4" fill="var(--bg)"/>
  <path d="M112 56 q8 7 16 0" fill="none" stroke="var(--bg)" stroke-width="3" stroke-linecap="round"/>
  <path d="M86 112 q34 -34 68 0 z" fill="var(--accent)" opacity=".7"/>
  ${LB(120,132,'赤ちゃん')}`),
night: A(SP2 + `
  <path d="M74 38 a26 26 0 1 0 0 52 a20 20 0 0 1 0 -52 z" fill="var(--accent)"/>
  ${[[34,36],[96,32],[40,86]].map(([x,y])=>`<path d="M${x} ${y-5} l2.5 5 5 1 -4 3.5 1 5 -4.5 -2.5 -4.5 2.5 1 -5 -4 -3.5 5 -1 z" fill="var(--accent)" opacity=".8"/>`).join('')}
  ${LB(61,120,'夜')}
  <circle cx="180" cy="64" r="20" fill="var(--accent)"/>
  ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
    return `<line x1="${180+26*Math.cos(r)}" y1="${64+26*Math.sin(r)}" x2="${180+34*Math.cos(r)}" y2="${64+34*Math.sin(r)}" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`}).join('')}
  ${LB(180,120,'昼（day）')}`),
year: A(`
  <rect x="50" y="28" width="140" height="84" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <rect x="50" y="28" width="140" height="18" rx="6" fill="var(--accent)"/>
  ${[0,1,2,3].map(r=>[0,1,2,3,4,5].map(c=>
    `<rect x="${60+c*21}" y="${54+r*13}" width="13" height="8" rx="2" fill="var(--accent)" opacity="${0.25+r*0.12}"/>`).join('')).join('')}
  ${LB(120,130,'年（月が12）')}`),
week: A(`
  ${[0,1,2,3,4,5,6].map(i=>`<rect x="${34+i*26}" y="48" width="20" height="36" rx="4"
    fill="var(--accent)" opacity="${i>=5?0.4:0.9}"/>`).join('')}
  <line x1="30" y1="96" x2="212" y2="96" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
  ${LB(120,120,'週（7日でひと巡り）')}`),
morning: A(`
  <line x1="24" y1="92" x2="216" y2="92" stroke="var(--muted)" stroke-width="3" opacity=".5"/>
  <circle cx="120" cy="86" r="24" fill="var(--accent)"/>
  ${[200,225,250,275,300,325].map(a=>{const r=a*Math.PI/180;
    return `<line x1="${120+30*Math.cos(r)}" y1="${86+30*Math.sin(r)}" x2="${120+40*Math.cos(r)}" y2="${86+40*Math.sin(r)}" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`}).join('')}
  <path d="M120 56 v-14" stroke="var(--accent)" stroke-width="3"/>
  <path d="M120 34 l7 12 h-14 z" fill="var(--accent)"/>
  ${LB(120,116,'朝（日が昇る）')}`),
school: A(`
  <path d="M56 56 L120 22 L184 56 Z" fill="var(--accent)"/>
  <rect x="70" y="56" width="100" height="58" rx="3" fill="var(--accent)" opacity=".7"/>
  ${[82,112,142].map(x=>`<rect x="${x}" y="70" width="18" height="18" rx="2" fill="var(--bg)" opacity=".8"/>`).join('')}
  <rect x="108" y="92" width="24" height="22" rx="2" fill="var(--bg)" opacity=".85"/>
  <line x1="120" y1="22" x2="120" y2="8" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M120 10 h18 v10 h-18 z" fill="var(--accent)"/>
  ${LB(120,132,'学校')}`),
food: A(`
  <ellipse cx="120" cy="80" rx="60" ry="22" fill="var(--accent)" opacity=".35"/>
  <ellipse cx="120" cy="76" rx="42" ry="15" fill="var(--accent)"/>
  <path d="M60 46 v30" stroke="var(--muted)" stroke-width="3"/>
  <path d="M54 46 v12 M60 46 v12 M66 46 v12" stroke="var(--muted)" stroke-width="2"/>
  <path d="M180 46 v30" stroke="var(--muted)" stroke-width="3"/>
  <ellipse cx="180" cy="52" rx="7" ry="10" fill="none" stroke="var(--muted)" stroke-width="2.5"/>
  ${LB(120,120,'食べ物')}`),
/* ---------- 意味が2つある語（2枚並べて違いを見せる） ---------- */
arm: A(SP2 + `
  <circle cx="50" cy="32" r="12" fill="var(--accent)" opacity=".5"/>
  <path d="M50 46 q0 24 14 32 q14 8 30 2" fill="none" stroke="var(--accent)" stroke-width="13" stroke-linecap="round"/>
  ${LB(61,124,'腕')}
  <path d="M158 30 l26 10 v26 q0 24 -26 34 q-26 -10 -26 -34 v-26 z"
    fill="var(--accent)" opacity=".3" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M196 34 l14 -6 -4 14 -30 30" stroke="var(--accent)" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M170 64 l-12 12" stroke="var(--accent)" stroke-width="7" stroke-linecap="round"/>
  ${LB(180,124,'武器（複数形 arms）')}`),
body: A(SP2 + `
  <circle cx="61" cy="34" r="13" fill="var(--accent)"/>
  <rect x="47" y="52" width="28" height="40" rx="8" fill="var(--accent)"/>
  <rect x="50" y="94" width="8" height="20" rx="4" fill="var(--accent)" opacity=".8"/>
  <rect x="64" y="94" width="8" height="20" rx="4" fill="var(--accent)" opacity=".8"/>
  ${LB(61,132,'体')}
  <ellipse cx="180" cy="66" rx="46" ry="34" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${[[162,54],[198,54],[170,80],[196,80]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="var(--accent)"/>`).join('')}
  ${LB(180,120,'団体')}`),
floor: A(SP2 + `
  <rect x="24" y="84" width="74" height="10" rx="2" fill="var(--accent)"/>
  <circle cx="44" cy="72" r="9" fill="var(--accent)" opacity=".5"/>
  <rect x="62" y="62" width="22" height="22" rx="3" fill="var(--accent)" opacity=".5"/>
  ${LB(61,120,'床')}
  ${[34,56,78].map((y,i)=>`<rect x="144" y="${y}" width="72" height="18" rx="2"
    fill="var(--accent)" opacity="${i===1?1:0.4}"/>`).join('')}
  ${LB(180,120,'階')}`),
field: A(SP2 + `
  <rect x="24" y="70" width="74" height="30" rx="3" fill="var(--accent)" opacity=".4"/>
  ${[32,48,64,80].map(x=>`<path d="M${x} 70 v-14" stroke="var(--accent)" stroke-width="3"/>`).join('')}
  ${LB(61,120,'野原')}
  <circle cx="180" cy="64" r="34" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
  <circle cx="180" cy="64" r="14" fill="var(--accent)"/>
  ${LB(180,120,'分野（守備範囲）')}`),
space: A(SP2 + `
  <rect x="22" y="48" width="26" height="40" rx="4" fill="var(--accent)" opacity=".7"/>
  <rect x="74" y="48" width="26" height="40" rx="4" fill="var(--accent)" opacity=".7"/>
  <path d="M52 68 h18" stroke="var(--accent)" stroke-width="2"/>
  <path d="M52 68 l7 -5 v10 z M70 68 l-7 -5 v10 z" fill="var(--accent)"/>
  ${LB(61,124,'あいだの空き')}
  <circle cx="180" cy="62" r="17" fill="var(--accent)" opacity=".35"/>
  <ellipse cx="180" cy="62" rx="34" ry="12" fill="none" stroke="var(--accent)" stroke-width="2.5"
    transform="rotate(-20 180 62)"/>
  ${[[146,34],[214,38],[150,92],[212,88]].map(([x,y])=>
    `<path d="M${x} ${y-4} l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--accent)" opacity=".6"/>`).join('')}
  ${LB(180,124,'宇宙')}`),
ground: A(SP2 + `
  <rect x="24" y="76" width="74" height="26" rx="3" fill="var(--accent)" opacity=".5"/>
  <path d="M24 76 h74" stroke="var(--accent)" stroke-width="3"/>
  ${LB(61,120,'地面')}
  <rect x="146" y="44" width="70" height="42" rx="5" fill="var(--accent)" opacity=".25"/>
  <path d="M152 86 h58" stroke="var(--accent)" stroke-width="4"/>
  ${LB(180,120,'根拠（土台）')}`),
area: A(SP2 + `
  <path d="M28 46 l66 -10 v56 l-66 12 z" fill="var(--accent)" opacity=".4" stroke="var(--accent)" stroke-width="2.5"/>
  ${LB(61,120,'地域')}
  <circle cx="180" cy="62" r="32" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M180 62 L180 30 A32 32 0 0 1 208 78 Z" fill="var(--accent)"/>
  ${LB(180,120,'分野（占める範囲）')}`),
park: A(SP2 + `
  <circle cx="52" cy="50" r="17" fill="var(--accent)"/>
  <rect x="48" y="66" width="8" height="18" fill="var(--muted)" opacity=".6"/>
  <rect x="70" y="72" width="26" height="6" rx="2" fill="var(--accent)" opacity=".7"/>
  <rect x="72" y="78" width="4" height="10" fill="var(--accent)" opacity=".5"/>
  <rect x="90" y="78" width="4" height="10" fill="var(--accent)" opacity=".5"/>
  ${LB(61,120,'公園')}
  <rect x="148" y="62" width="58" height="24" rx="5" fill="var(--accent)"/>
  <circle cx="162" cy="88" r="7" fill="var(--muted)"/><circle cx="192" cy="88" r="7" fill="var(--muted)"/>
  <rect x="140" y="44" width="80" height="4" rx="2" fill="var(--accent)" opacity=".5"/>
  <rect x="140" y="98" width="80" height="4" rx="2" fill="var(--accent)" opacity=".5"/>
  ${LB(180,120,'駐車する')}`),
store: A(SP2 + `
  <rect x="26" y="52" width="70" height="46" rx="3" fill="var(--accent)" opacity=".7"/>
  <path d="M20 52 h82 l-8 -16 h-66 z" fill="var(--accent)"/>
  <rect x="48" y="72" width="26" height="26" rx="2" fill="var(--bg)" opacity=".8"/>
  ${LB(61,120,'店')}
  ${[[150,50],[180,50],[210,50],[150,76],[180,76],[210,76]].map(([x,y])=>
    `<rect x="${x-12}" y="${y}" width="24" height="20" rx="3" fill="var(--accent)" opacity=".8"/>`).join('')}
  ${LB(180,120,'蓄える')}`),
hard: A(SP2 + `
  <rect x="34" y="46" width="54" height="42" rx="4" fill="var(--accent)"/>
  <path d="M28 54 l-10 -10 M28 80 l-10 10" stroke="var(--accent)" stroke-width="3"/>
  <path d="M94 54 l10 -10 M94 80 l10 10" stroke="var(--accent)" stroke-width="3"/>
  ${LB(61,120,'硬い')}
  <path d="M148 92 L166 52 L184 78 L202 34 L216 60" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <text x="180" y="24" text-anchor="middle" font-size="13" fill="var(--accent)">?</text>
  ${LB(180,120,'難しい')}`),
short: A(SP2 + `
  <rect x="30" y="58" width="32" height="12" rx="5" fill="var(--accent)"/>
  <rect x="30" y="80" width="62" height="12" rx="5" fill="var(--muted)" opacity=".35"/>
  ${LB(61,124,'短い')}
  <path d="M146 40 h68" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 4"/>
  <rect x="160" y="62" width="40" height="38" rx="4" fill="var(--accent)" opacity=".7"/>
  <path d="M180 58 v-14" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M180 44 l-5 9 h10 z" fill="var(--accent)"/>
  ${LB(180,124,'目標に届かない→不足')}`),
lose: A(SP2 + `
  <path d="M30 56 q0 -10 10 -10 h34 q10 0 10 10 q0 14 -18 14 h-18 q-18 0 -18 -14 z"
    fill="var(--accent)" opacity=".35"/>
  <circle cx="57" cy="86" r="9" fill="var(--accent)" opacity=".6"/>
  <circle cx="57" cy="106" r="7" fill="var(--accent)" opacity=".3"/>
  ${LB(61,128,'手から離れる→失う')}
  <rect x="142" y="76" width="30" height="22" rx="3" fill="var(--muted)" opacity=".4"/>
  <rect x="186" y="50" width="30" height="48" rx="3" fill="var(--accent)"/>
  <path d="M201 42 l4 8 9 1 -6.5 6 1.5 9 -8 -4.5 -8 4.5 1.5 -9 -6.5 -6 9 -1 z" fill="var(--accent)"/>
  ${LB(180,128,'相手が上→負ける')}`),
change: A(SP2 + `
  <rect x="24" y="48" width="34" height="34" rx="5" fill="var(--accent)" opacity=".45"/>
  <path d="M64 58 h14" stroke="var(--accent)" stroke-width="3"/>
  <path d="M82 58 l-11 6 v-12 z" fill="var(--accent)"/>
  <path d="M82 76 h-14" stroke="var(--accent)" stroke-width="3" opacity=".4"/>
  <path d="M64 76 l11 -6 v12 z" fill="var(--accent)" opacity=".4"/>
  <circle cx="90" cy="66" r="16" fill="var(--accent)"/>
  ${LB(61,120,'別のものになる')}
  <rect x="142" y="42" width="30" height="42" rx="3" fill="var(--accent)" opacity=".75"/>
  <path d="M178 62 h10" stroke="var(--accent)" stroke-width="3"/>
  <path d="M192 62 l-11 6 v-12 z" fill="var(--accent)"/>
  ${[[202,48],[216,54],[204,72],[218,78]].map(([x,y])=>
    `<circle cx="${x}" cy="${y}" r="7" fill="var(--accent)" opacity=".8"/>`).join('')}
  ${LB(180,120,'くずした残り→おつり')}`),
share: A(`
  <rect x="94" y="30" width="52" height="34" rx="5" fill="var(--accent)"/>
  <path d="M104 72 L70 96 M136 72 L170 96" stroke="var(--accent)" stroke-width="3"/>
  <circle cx="58" cy="104" r="14" fill="var(--accent)" opacity=".7"/>
  <circle cx="182" cy="104" r="14" fill="var(--accent)" opacity=".7"/>
  ${LB(120,132,'分け合う')}`),

/* ---------- 対になる形容詞 ---------- */
big: A(SP2 + `
  <rect x="30" y="34" width="62" height="62" rx="6" fill="var(--accent)"/>
  ${LB(61,120,'大きい')}
  <rect x="168" y="70" width="26" height="26" rx="4" fill="var(--accent)" opacity=".7"/>
  ${LB(180,120,'小さい（small）')}`),
long: A(SP2 + `
  <rect x="20" y="60" width="82" height="12" rx="5" fill="var(--accent)"/>
  ${LB(61,120,'長い')}
  <rect x="164" y="60" width="32" height="12" rx="5" fill="var(--accent)" opacity=".7"/>
  ${LB(180,120,'短い（short）')}`),
hot: A(SP2 + `
  <rect x="52" y="38" width="18" height="52" rx="9" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <rect x="56" y="50" width="10" height="40" rx="5" fill="var(--accent)"/>
  <circle cx="61" cy="96" r="13" fill="var(--accent)"/>
  ${[46,61,76].map(x=>`<path d="M${x} 30 q5 -7 0 -14" fill="none" stroke="var(--accent)"
    stroke-width="2.5" stroke-linecap="round" opacity=".6"/>`).join('')}
  ${LB(61,128,'熱い')}
  <rect x="171" y="38" width="18" height="52" rx="9" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <rect x="175" y="78" width="10" height="12" rx="5" fill="var(--accent)" opacity=".6"/>
  <circle cx="180" cy="96" r="13" fill="var(--accent)" opacity=".6"/>
  ${LB(180,128,'冷たい（cold）')}`),
new: A(SP2 + `
  <rect x="32" y="42" width="58" height="52" rx="5" fill="var(--accent)"/>
  ${[[24,36],[98,36],[24,100]].map(([x,y])=>`<path d="M${x} ${y-5} l2.5 5 5 1 -4 3.5 1 5 -4.5 -2.5 -4.5 2.5 1 -5 -4 -3.5 5 -1 z" fill="var(--accent)"/>`).join('')}
  ${LB(61,120,'新しい')}
  <rect x="151" y="42" width="58" height="52" rx="5" fill="var(--muted)" opacity=".45"/>
  <path d="M158 56 h30 M158 68 h22 M158 80 h34" stroke="var(--bg)" stroke-width="2" opacity=".5"/>
  <path d="M151 60 q14 6 28 -2 q14 -8 30 2" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".6"/>
  ${LB(180,120,'古い（old）')}`),
young: A(SP2 + `
  <circle cx="61" cy="46" r="17" fill="var(--accent)"/>
  <rect x="49" y="68" width="24" height="30" rx="7" fill="var(--accent)"/>
  ${LB(61,120,'若い')}
  <circle cx="180" cy="42" r="17" fill="var(--muted)" opacity=".5"/>
  <path d="M168 64 q12 6 24 0 l4 34 h-32 z" fill="var(--muted)" opacity=".5"/>
  <path d="M202 70 l6 34" stroke="var(--muted)" stroke-width="3" opacity=".6"/>
  ${LB(180,120,'年をとった（old）')}`),
strong: A(SP2 + `
  <circle cx="61" cy="72" r="11" fill="var(--accent)"/>
  <path d="M61 83 v14" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>
  <path d="M61 83 l-14 16 M61 83 l14 16" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
  <path d="M61 72 v-14 M34 58 h54" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
  <rect x="24" y="46" width="14" height="24" rx="4" fill="var(--accent)"/>
  <rect x="84" y="46" width="14" height="24" rx="4" fill="var(--accent)"/>
  ${LB(61,124,'重さに耐える')}
  <circle cx="180" cy="66" r="11" fill="var(--muted)" opacity=".55"/>
  <path d="M180 77 v14" stroke="var(--muted)" stroke-width="5" stroke-linecap="round" opacity=".55"/>
  <path d="M180 77 l-13 16 M180 77 l13 16" stroke="var(--muted)" stroke-width="4" stroke-linecap="round" opacity=".55"/>
  <rect x="150" y="34" width="60" height="16" rx="4" fill="var(--muted)" opacity=".4"/>
  <path d="M164 56 l-6 6 M196 56 l6 6" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  ${LB(180,124,'つぶれる（weak）')}`),
fast: A(SP2 + `
  <circle cx="74" cy="64" r="14" fill="var(--accent)"/>
  ${[52,60,68].map((y,i)=>`<path d="M${52-i*10} ${y} h${26+i*8}" stroke="var(--accent)" stroke-width="3" opacity="${0.8-i*0.2}"/>`).join('')}
  ${LB(61,120,'速い')}
  <circle cx="180" cy="64" r="14" fill="var(--muted)" opacity=".5"/>
  <path d="M152 88 q28 8 56 0" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 5" opacity=".5"/>
  ${LB(180,120,'遅い（slow）')}`),
deep: A(SP2 + `
  <rect x="26" y="34" width="70" height="8" rx="3" fill="var(--accent)" opacity=".5"/>
  <path d="M30 42 v54 h62 v-54" fill="var(--accent)" opacity=".25" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M61 46 v44" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 3"/>
  <path d="M61 96 l6 -12 h-12 z" fill="var(--accent)"/>
  ${LB(61,120,'深い')}
  <rect x="146" y="34" width="70" height="8" rx="3" fill="var(--accent)" opacity=".5"/>
  <path d="M150 42 v18 h62 v-18" fill="var(--accent)" opacity=".25" stroke="var(--accent)" stroke-width="2.5"/>
  ${LB(180,120,'浅い')}`),
wide: A(SP2 + `
  <rect x="22" y="52" width="78" height="34" rx="4" fill="var(--accent)" opacity=".7"/>
  <path d="M22 96 h78" stroke="var(--accent)" stroke-width="2"/>
  <path d="M26 92 l-6 4 6 4 M96 92 l6 4 -6 4" stroke="var(--accent)" stroke-width="2" fill="none"/>
  ${LB(61,124,'広い')}
  <rect x="164" y="52" width="32" height="34" rx="4" fill="var(--accent)" opacity=".7"/>
  <path d="M164 96 h32" stroke="var(--accent)" stroke-width="2"/>
  ${LB(180,124,'狭い')}`),
dark: A(SP2 + `
  <path d="M74 36 a30 30 0 1 0 22 54 a24 24 0 1 1 -22 -54 z" fill="var(--accent)" opacity=".75"/>
  ${[[34,40],[92,34],[42,86]].map(([x,y])=>
    `<path d="M${x} ${y-4} l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--accent)" opacity=".5"/>`).join('')}
  ${LB(61,124,'暗い')}
  <circle cx="180" cy="62" r="16" fill="var(--accent)"/>
  ${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
    return `<line x1="${180+22*Math.cos(r)}" y1="${62+22*Math.sin(r)}" x2="${180+31*Math.cos(r)}" y2="${62+31*Math.sin(r)}" stroke="var(--accent)" stroke-width="3"/>`}).join('')}
  ${LB(180,124,'明るい（bright）')}`),
clean: A(SP2 + `
  <rect x="28" y="40" width="66" height="50" rx="5" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M44 66 l10 11 22 -24" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
  ${LB(61,120,'きれい')}
  <rect x="147" y="40" width="66" height="50" rx="5" fill="none" stroke="var(--muted)" stroke-width="3" opacity=".6"/>
  ${[[160,54],[192,50],[170,76],[200,72],[182,64]].map(([x,y])=>
    `<circle cx="${x}" cy="${y}" r="5" fill="var(--muted)" opacity=".5"/>`).join('')}
  ${LB(180,120,'汚い')}`),
poor: A(SP2 + `
  <rect x="38" y="52" width="46" height="42" rx="6" fill="none" stroke="var(--muted)" stroke-width="3"/>
  <circle cx="61" cy="74" r="6" fill="var(--muted)" opacity=".5"/>
  ${LB(61,120,'貧しい')}
  <rect x="157" y="52" width="46" height="42" rx="6" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${[[168,64],[180,64],[192,64],[168,80],[180,80],[192,80]].map(([x,y])=>
    `<circle cx="${x}" cy="${y}" r="5" fill="var(--accent)"/>`).join('')}
  ${LB(180,120,'豊か（rich）')}`),
round: A(`
  <circle cx="78" cy="64" r="32" fill="var(--accent)"/>
  <rect x="132" y="32" width="64" height="64" rx="3" fill="var(--muted)" opacity=".4"/>
  ${LB(78,120,'丸い')}
  ${LB(164,120,'四角い')}`),
/* ---------- 具体物 ---------- */
bed: A(`
  <rect x="34" y="72" width="152" height="26" rx="5" fill="var(--accent)"/>
  <rect x="34" y="44" width="16" height="54" rx="4" fill="var(--accent)"/>
  <rect x="170" y="60" width="16" height="38" rx="4" fill="var(--accent)" opacity=".7"/>
  <rect x="58" y="58" width="40" height="18" rx="6" fill="var(--bg)" opacity=".9"/>
  ${LB(110,124,'ベッド')}`),
card: A(`
  <rect x="62" y="34" width="96" height="62" rx="7" fill="var(--accent)"/>
  <rect x="72" y="50" width="30" height="20" rx="3" fill="var(--bg)" opacity=".8"/>
  <path d="M72 82 h74" stroke="var(--bg)" stroke-width="3" opacity=".7"/>
  ${LB(110,124,'カード')}`),
page: A(`
  <rect x="74" y="26" width="72" height="88" rx="4" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${[44,58,72,86].map(y=>`<path d="M86 ${y} h48" stroke="var(--accent)" stroke-width="2.5" opacity=".6"/>`).join('')}
  <path d="M146 26 l-18 18 h18 z" fill="var(--bg)" stroke="var(--accent)" stroke-width="2.5"/>
  ${LB(110,132,'ページ')}`),
machine: A(`
  <rect x="58" y="42" width="104" height="60" rx="7" fill="var(--accent)" opacity=".85"/>
  <circle cx="88" cy="72" r="16" fill="none" stroke="var(--bg)" stroke-width="4"/>
  ${[0,72,144,216,288].map(a=>{const r=a*Math.PI/180;
    return `<line x1="${88+16*Math.cos(r)}" y1="${72+16*Math.sin(r)}" x2="${88+23*Math.cos(r)}" y2="${72+23*Math.sin(r)}" stroke="var(--bg)" stroke-width="4"/>`}).join('')}
  <circle cx="132" cy="62" r="9" fill="none" stroke="var(--bg)" stroke-width="3"/>
  <rect x="120" y="82" width="28" height="7" rx="3" fill="var(--bg)" opacity=".8"/>
  ${LB(110,124,'機械')}`),
voice: A(`
  <path d="M62 52 q-8 20 0 40 q10 -6 18 -20 q-8 -14 -18 -20 z" fill="var(--accent)"/>
  ${[26,42,58].map((d,i)=>`<path d="M92 ${72-d*0.7} q${d*0.7} ${d*0.7} 0 ${d*1.4}" fill="none"
    stroke="var(--accent)" stroke-width="3" opacity="${0.9-i*0.25}"/>`).join('')}
  ${LB(110,126,'声')}`),
music: A(`
  <path d="M84 84 v-44 l44 -10 v44" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <ellipse cx="76" cy="86" rx="12" ry="9" fill="var(--accent)" transform="rotate(-18 76 86)"/>
  <ellipse cx="120" cy="76" rx="12" ry="9" fill="var(--accent)" transform="rotate(-18 120 76)"/>
  <path d="M84 50 l44 -10" stroke="var(--accent)" stroke-width="6"/>
  ${LB(110,124,'音楽')}`),
animal: A(`
  <ellipse cx="108" cy="72" rx="36" ry="22" fill="var(--accent)"/>
  <circle cx="150" cy="58" r="16" fill="var(--accent)"/>
  <path d="M142 46 l-4 -12 8 6 z M158 46 l4 -12 -8 6 z" fill="var(--accent)"/>
  ${[84,100,116,132].map(x=>`<rect x="${x}" y="90" width="7" height="18" rx="3" fill="var(--accent)"/>`).join('')}
  <path d="M72 66 q-16 -10 -14 -22" fill="none" stroke="var(--accent)" stroke-width="4"/>
  ${LB(110,128,'動物')}`),
air: A(`
  <circle cx="110" cy="66" r="36" fill="none" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 5"/>
  ${[[92,56],[122,50],[104,76],[128,72],[112,62]].map(([x,y],i)=>
    `<circle cx="${x}" cy="${y}" r="${4+i%2}" fill="var(--accent)" opacity=".55"/>`).join('')}
  <path d="M42 44 q18 -8 34 0 M42 88 q18 8 34 0" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
  <path d="M144 44 q18 -8 34 0 M144 88 q18 8 34 0" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
  ${LB(110,126,'空気（見えないが在る）')}`),
wall: A(`
  ${[[54,44],[104,44],[154,44],[42,66],[92,66],[142,66],[54,88],[104,88],[154,88]].map(([x,y])=>
    `<rect x="${x}" y="${y}" width="44" height="18" rx="2" fill="var(--accent)" opacity=".8"
      stroke="var(--bg)" stroke-width="2"/>`).join('')}
  ${LB(110,126,'壁')}`),
street: A(`
  <path d="M74 110 L98 30 h24 l24 80 z" fill="var(--accent)" opacity=".3"/>
  ${[40,58,76,94].map((y,i)=>`<rect x="${109-2.5-i*0.6}" y="${y}" width="${5+i*1.2}" height="${8+i*2}"
    rx="2" fill="var(--accent)"/>`).join('')}
  ${LB(110,128,'通り')}`),
station: A(`
  <rect x="62" y="30" width="96" height="40" rx="5" fill="var(--accent)" opacity=".85"/>
  <path d="M54 30 h112 l-10 -14 h-92 z" fill="var(--accent)"/>
  <circle cx="110" cy="48" r="10" fill="var(--bg)"/>
  <path d="M110 43 v5 l4 3" stroke="var(--accent)" stroke-width="2" fill="none"/>
  <rect x="30" y="76" width="160" height="10" rx="3" fill="var(--accent)" opacity=".45"/>
  <path d="M26 98 h168 M26 108 h168" stroke="var(--accent)" stroke-width="2.5"/>
  ${[44,80,116,152,188].map(x=>`<path d="M${x} 94 v18" stroke="var(--accent)" stroke-width="2" opacity=".4"/>`).join('')}
  ${LB(110,132,'駅（ホームと線路）')}`),
village: A(`
  ${[[52,74],[104,66],[156,78]].map(([x,y])=>`
    <rect x="${x-18}" y="${y}" width="36" height="28" rx="3" fill="var(--accent)" opacity=".8"/>
    <path d="M${x-24} ${y} l24 -18 24 18 z" fill="var(--accent)"/>`).join('')}
  <path d="M24 108 q50 -10 86 0 q50 10 76 0" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
  ${LB(110,130,'村')}`),
garden: A(`
  <rect x="40" y="76" width="140" height="26" rx="4" fill="var(--accent)" opacity=".3"/>
  ${[[62,56],[96,48],[130,58],[162,52]].map(([x,y],i)=>`
    <path d="M${x} 76 v-${76-y-8}" stroke="var(--accent)" stroke-width="3"/>
    <circle cx="${x}" cy="${y}" r="9" fill="var(--accent)" opacity="${0.6+i*0.1}"/>`).join('')}
  ${LB(110,124,'庭')}`),
hospital: A(`
  <rect x="62" y="40" width="96" height="62" rx="6" fill="var(--accent)" opacity=".85"/>
  <rect x="100" y="52" width="20" height="40" rx="3" fill="var(--bg)"/>
  <rect x="90" y="62" width="40" height="20" rx="3" fill="var(--bg)"/>
  ${LB(110,126,'病院')}`),
world: A(`
  <circle cx="110" cy="66" r="38" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <ellipse cx="110" cy="66" rx="16" ry="38" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".7"/>
  <path d="M74 52 h72 M72 80 h76 M72 66 h76" stroke="var(--accent)" stroke-width="2.5" opacity=".7"/>
  ${LB(110,126,'世界')}`),
color: A(`
  ${[['#e06c2b',56],['#2f7fd4',86],['#3a9e63',116],['#8b5fc7',146]].map(([c,x])=>
    `<circle cx="${x}" cy="66" r="21" fill="${c}" opacity=".85"/>`).join('')}
  ${LB(110,120,'色')}`),

/* ---------- 動作 ---------- */
walk: A(`
  <circle cx="104" cy="32" r="12" fill="var(--accent)"/>
  <path d="M104 46 v30" stroke="var(--accent)" stroke-width="7" stroke-linecap="round"/>
  <path d="M104 76 l-20 30 M104 76 l22 28" stroke="var(--accent)" stroke-width="7" stroke-linecap="round"/>
  <path d="M104 56 l-20 12 M104 56 l20 8" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" opacity=".7"/>
  ${LB(110,128,'歩く')}`),
stop: A(SP2 + `
  <circle cx="61" cy="62" r="28" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <rect x="48" y="49" width="26" height="26" rx="4" fill="var(--accent)"/>
  <path d="M14 62 h18" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 4" opacity=".6"/>
  ${LB(61,120,'止まる')}
  <rect x="176" y="34" width="8" height="58" rx="3" fill="var(--accent)" opacity=".6"/>
  <rect x="164" y="34" width="34" height="18" rx="3" fill="var(--accent)"/>
  <circle cx="148" cy="80" r="9" fill="var(--accent)" opacity=".5"/>
  <circle cx="210" cy="80" r="9" fill="var(--accent)" opacity=".5"/>
  ${LB(180,120,'止まる場所→停留所')}`),
throw: A(`
  <circle cx="48" cy="40" r="11" fill="var(--accent)"/>
  <path d="M48 52 v26 M48 78 l-12 24 M48 78 l14 22" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
  <path d="M48 58 l22 -14" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
  <path d="M74 40 Q130 6 186 62" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 5" opacity=".7"/>
  <circle cx="188" cy="66" r="10" fill="var(--accent)"/>
  ${LB(110,126,'投げる')}`),
build: A(`
  ${[[78,88],[110,88],[142,88],[94,66],[126,66],[110,44]].map(([x,y],i)=>
    `<rect x="${x-14}" y="${y}" width="28" height="20" rx="3" fill="var(--accent)"
      opacity="${0.5+i*0.09}" stroke="var(--bg)" stroke-width="2"/>`).join('')}
  <path d="M40 108 h140" stroke="var(--accent)" stroke-width="3"/>
  ${LB(110,130,'積み上げて建てる')}`),
fill: A(`
  <path d="M80 34 v58 a30 30 0 0 0 60 0 v-58" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M82 60 v32 a28 28 0 0 0 56 0 v-32 z" fill="var(--accent)" opacity=".55"/>
  <path d="M110 12 v14" stroke="var(--accent)" stroke-width="3"/>
  <path d="M110 30 l-6 -10 h12 z" fill="var(--accent)"/>
  ${LB(110,134,'満たす')}`),
meet: A(`
  <circle cx="54" cy="66" r="15" fill="var(--accent)"/>
  <circle cx="166" cy="66" r="15" fill="var(--accent)"/>
  <path d="M74 66 h26" stroke="var(--accent)" stroke-width="3"/>
  <path d="M104 66 l-12 6 v-12 z" fill="var(--accent)"/>
  <path d="M146 66 h-26" stroke="var(--accent)" stroke-width="3"/>
  <path d="M116 66 l12 -6 v12 z" fill="var(--accent)"/>
  ${LB(110,120,'会う')}`),
follow: A(`
  <circle cx="150" cy="60" r="15" fill="var(--accent)"/>
  <circle cx="100" cy="60" r="15" fill="var(--accent)" opacity=".6"/>
  <circle cx="54" cy="60" r="15" fill="var(--accent)" opacity=".35"/>
  <path d="M72 60 h12 M122 60 h12" stroke="var(--accent)" stroke-width="3"/>
  <path d="M88 60 l-10 5 v-10 z M138 60 l-10 5 v-10 z" fill="var(--accent)"/>
  ${LB(110,116,'後ろについていく')}`),
win: A(`
  <rect x="146" y="38" width="34" height="62" rx="4" fill="var(--accent)"/>
  <rect x="96" y="62" width="34" height="38" rx="4" fill="var(--muted)" opacity=".45"/>
  <rect x="46" y="74" width="34" height="26" rx="4" fill="var(--muted)" opacity=".3"/>
  <path d="M163 30 l4 8 9 1 -6.5 6 1.5 9 -8 -4.5 -8 4.5 1.5 -9 -6.5 -6 9 -1 z" fill="var(--accent)"/>
  ${LB(110,124,'勝つ')}`),
join: A(`
  <circle cx="72" cy="66" r="28" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${[[62,58],[84,58],[68,76],[86,76]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="var(--accent)" opacity=".7"/>`).join('')}
  <path d="M112 66 h26" stroke="var(--accent)" stroke-width="3"/>
  <path d="M142 66 l-12 6 v-12 z" fill="var(--accent)"/>
  <circle cx="176" cy="66" r="12" fill="var(--accent)"/>
  ${LB(110,120,'仲間に入る')}`),
balance: A(`
  <path d="M110 24 v16" stroke="var(--accent)" stroke-width="3"/>
  <path d="M48 44 h124" stroke="var(--accent)" stroke-width="4"/>
  <path d="M48 44 v14 M172 44 v14" stroke="var(--accent)" stroke-width="2"/>
  <path d="M28 58 h40 l-20 22 z" fill="var(--accent)" opacity=".7"/>
  <path d="M152 58 h40 l-20 22 z" fill="var(--accent)" opacity=".7"/>
  <path d="M110 40 v52 M92 104 h36" stroke="var(--accent)" stroke-width="3"/>
  ${LB(110,126,'釣り合い')}`),
measure: A(`
  <rect x="34" y="56" width="152" height="26" rx="3" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${[52,70,88,106,124,142,160].map((x,i)=>
    `<path d="M${x} 56 v${i%2?8:14}" stroke="var(--accent)" stroke-width="2.5"/>`).join('')}
  ${LB(110,106,'測る')}`),

/* ---------- 抽象（形で見せる） ---------- */
question: A(`
  <circle cx="110" cy="62" r="34" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <path d="M98 52 q0 -14 13 -14 q13 0 13 12 q0 10 -13 13 v7" fill="none"
    stroke="var(--accent)" stroke-width="4.5" stroke-linecap="round"/>
  <circle cx="111" cy="84" r="4" fill="var(--accent)"/>
  ${LB(110,120,'質問')}`),
answer: A(`
  <circle cx="110" cy="62" r="34" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <path d="M92 62 l13 14 30 -30" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
  ${LB(110,120,'答え')}`),
idea: A(`
  <path d="M110 24 a24 24 0 0 1 14 43 v9 h-28 v-9 a24 24 0 0 1 14 -43 z" fill="var(--accent)" opacity=".85"/>
  <rect x="98" y="80" width="24" height="6" rx="2" fill="var(--accent)"/>
  <rect x="100" y="90" width="20" height="6" rx="2" fill="var(--accent)" opacity=".7"/>
  ${[[70,28],[150,28],[58,62],[162,62]].map(([x,y])=>
    `<path d="M${x} ${y} l${x<110?10:-10} ${y<50?8:-8}" stroke="var(--accent)" stroke-width="3" opacity=".6"/>`).join('')}
  ${LB(110,120,'ひらめき')}`),
goal: A(`
  <circle cx="110" cy="62" r="36" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".4"/>
  <circle cx="110" cy="62" r="23" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".6"/>
  <circle cx="110" cy="62" r="10" fill="var(--accent)"/>
  <path d="M26 20 L104 58" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
  ${LB(110,120,'めざす的')}`),
direction: A(`
  <circle cx="110" cy="62" r="8" fill="var(--accent)"/>
  ${[0,45,90,135,180,225,270,315].map((a,i)=>{const r=a*Math.PI/180,
    x1=110+16*Math.cos(r), y1=62+16*Math.sin(r), x2=110+36*Math.cos(r), y2=62+36*Math.sin(r);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--accent)" stroke-width="${i===0?4:2.5}" opacity="${i===0?1:0.45}"/>`}).join('')}
  <path d="M152 62 l-12 6 v-12 z" fill="var(--accent)"/>
  ${LB(110,120,'向き')}`),
size: A(`
  <rect x="52" y="34" width="60" height="60" rx="5" fill="var(--accent)" opacity=".3"/>
  <rect x="122" y="60" width="34" height="34" rx="4" fill="var(--accent)" opacity=".6"/>
  <rect x="166" y="76" width="18" height="18" rx="3" fill="var(--accent)"/>
  <path d="M52 106 h132" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
  ${LB(110,128,'大きさの度合い')}`),
shape: A(`
  <circle cx="58" cy="64" r="22" fill="var(--accent)" opacity=".8"/>
  <rect x="88" y="42" width="44" height="44" rx="4" fill="var(--accent)" opacity=".6"/>
  <path d="M166 42 l24 42 h-48 z" fill="var(--accent)" opacity=".9"/>
  ${LB(110,114,'形')}`),
same: A(SP2 + `
  <rect x="34" y="46" width="24" height="42" rx="4" fill="var(--accent)"/>
  <rect x="66" y="46" width="24" height="42" rx="4" fill="var(--accent)"/>
  <path d="M40 100 h44" stroke="var(--accent)" stroke-width="2.5"/>
  ${LB(61,120,'同じ')}
  <rect x="152" y="46" width="24" height="42" rx="4" fill="var(--accent)"/>
  <circle cx="198" cy="67" r="15" fill="var(--muted)" opacity=".55"/>
  ${LB(180,120,'異なる（different）')}`),
first: A(`
  <circle cx="44" cy="62" r="18" fill="var(--accent)"/>
  <text x="44" y="68" text-anchor="middle" font-size="17" font-weight="700" fill="var(--bg)">1</text>
  ${[100,146,186].map((x,i)=>`<circle cx="${x}" cy="62" r="${15-i}" fill="var(--muted)" opacity="${0.4-i*0.1}"/>`).join('')}
  <path d="M26 92 h168" stroke="var(--accent)" stroke-width="2" opacity=".4"/>
  <path d="M194 92 l-12 5 v-10 z" fill="var(--accent)" opacity=".4"/>
  ${LB(110,120,'列の先頭')}`),
before: A(`
  <path d="M26 66 h168" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
  <path d="M194 66 l-12 6 v-12 z" fill="var(--accent)" opacity=".5"/>
  <circle cx="110" cy="66" r="11" fill="var(--accent)"/>
  <circle cx="58" cy="66" r="11" fill="var(--accent)" opacity=".55"/>
  <circle cx="164" cy="66" r="11" fill="var(--accent)" opacity=".55"/>
  ${LB(58,96,'before')}
  ${LB(110,96,'基準')}
  ${LB(164,96,'after')}
  ${LB(110,124,'時間の流れの上の位置')}`)
};
