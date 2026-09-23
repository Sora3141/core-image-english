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
fall: A(`
  <line x1="24" y1="26" x2="216" y2="26" stroke="var(--muted)" stroke-width="2" opacity=".5"/>
  <polyline points="34,38 78,58 122,78 166,94 204,110" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <path d="M216 116 l-14 -3 l1 -12 z" fill="var(--accent)"/>
  ${LB(120,134,'落ちる・下がる')}`),
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
line: A(`
  <line x1="24" y1="50" x2="216" y2="50" stroke="var(--accent)" stroke-width="4"/>
  ${[44,84,124,164,204].map(x=>`<circle cx="${x}" cy="88" r="11" fill="var(--accent)" opacity=".6"/>`).join('')}
  ${LB(120,124,'線 ／ 並び')}`),
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
table: A(`
  <rect x="48" y="52" width="144" height="12" rx="3" fill="var(--accent)"/>
  <rect x="58" y="64" width="12" height="48" rx="3" fill="var(--accent)" opacity=".7"/>
  <rect x="170" y="64" width="12" height="48" rx="3" fill="var(--accent)" opacity=".7"/>
  ${LB(120,132,'テーブル')}`),
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
head: A(`
  <circle cx="120" cy="60" r="34" fill="var(--accent)"/>
  <rect x="104" y="94" width="32" height="20" rx="6" fill="var(--accent)" opacity=".6"/>
  ${LB(120,132,'頭')}`),
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
paper: A(`
  <rect x="78" y="22" width="84" height="94" rx="4" fill="var(--accent)" opacity=".2" stroke="var(--accent)" stroke-width="3"/>
  ${[42,58,74,90].map(y=>`<line x1="92" y1="${y}" x2="148" y2="${y}" stroke="var(--accent)" stroke-width="3" opacity=".7"/>`).join('')}
  ${LB(120,132,'紙')}`),
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
train: A(`
  <rect x="44" y="40" width="152" height="52" rx="8" fill="var(--accent)"/>
  ${[60,94,128,162].map(x=>`<rect x="${x}" y="52" width="24" height="18" rx="3" fill="var(--bg)" opacity=".75"/>`).join('')}
  <line x1="34" y1="104" x2="206" y2="104" stroke="var(--muted)" stroke-width="3" opacity=".6"/>
  ${[52,86,120,154,188].map(x=>`<rect x="${x}" y="98" width="5" height="12" fill="var(--muted)" opacity=".5"/>`).join('')}
  ${LB(120,130,'電車')}`),
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
face: A(`
  <circle cx="120" cy="62" r="42" fill="none" stroke="var(--accent)" stroke-width="4"/>
  <circle cx="104" cy="54" r="5" fill="var(--accent)"/>
  <circle cx="136" cy="54" r="5" fill="var(--accent)"/>
  <path d="M100 76 q20 16 40 0" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
  ${LB(120,126,'顔')}`),
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
  ${LB(120,120,'食べ物')}`)
};
