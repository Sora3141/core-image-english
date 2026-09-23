/* ============================================================
   コア図 ── 各ページ冒頭に出す模式図
   viewBox は 0 0 320 120 で統一。色は CSS 変数を参照するので
   ライト/ダークどちらでも成立する
   ============================================================ */
const CAP = t => `<p class="center dia-cap">${t}</p>`;
const SVG = b => `<svg class="diagram" viewBox="0 0 320 120" width="320" height="120" role="img">${b}</svg>`;
const SPLIT = '<line x1="160" y1="6" x2="160" y2="114" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 5"/>';

const DIAGRAMS = {

/* on ── 接触。上でも下でも、ふれていれば on */
contact: SVG(SPLIT + `
  <rect x="22" y="74" width="116" height="9" rx="2" fill="var(--muted)" opacity=".35"/>
  <rect x="52" y="44" width="56" height="30" rx="5" fill="var(--accent)" opacity=".9"/>
  <line x1="46" y1="74" x2="114" y2="74" stroke="var(--accent)" stroke-width="3.5"/>
  <text x="80" y="36" text-anchor="middle" font-size="10.5" fill="var(--accent)">接触</text>
  <text x="80" y="100" text-anchor="middle" font-size="11" fill="var(--muted)">on the table</text>
  <rect x="182" y="32" width="116" height="9" rx="2" fill="var(--muted)" opacity=".35"/>
  <rect x="212" y="41" width="56" height="30" rx="5" fill="var(--accent)" opacity=".9"/>
  <line x1="206" y1="41" x2="274" y2="41" stroke="var(--accent)" stroke-width="3.5"/>
  <text x="240" y="86" text-anchor="middle" font-size="10.5" fill="var(--accent)">接触</text>
  <text x="240" y="100" text-anchor="middle" font-size="11" fill="var(--muted)">on the ceiling</text>`)
  + CAP('上でも下でも、ふれていれば on'),

/* in ── 囲まれた内側。空間でも期間でも同じ */
container: SVG(SPLIT + `
  <rect x="32" y="34" width="100" height="62" rx="7" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <circle cx="82" cy="65" r="16" fill="var(--accent)"/>
  <text x="82" y="26" text-anchor="middle" font-size="10.5" fill="var(--accent)">囲まれている</text>
  <text x="82" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">in the box</text>
  <line x1="192" y1="42" x2="192" y2="88" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <line x1="288" y1="42" x2="288" y2="88" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <line x1="192" y1="65" x2="288" y2="65" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <circle cx="240" cy="65" r="12" fill="var(--accent)"/>
  <text x="240" y="30" text-anchor="middle" font-size="10.5" fill="var(--accent)">期間の内側</text>
  <text x="240" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">in April</text>`)
  + CAP('境界のあるものの内側にいれば in'),

/* at ── 広がりのない一点 */
point: SVG(SPLIT + `
  <line x1="24" y1="72" x2="140" y2="72" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <circle cx="82" cy="72" r="6" fill="var(--accent)"/>
  <path d="M82 40 l7 16 h-14 z" fill="var(--accent)"/>
  <line x1="82" y1="56" x2="82" y2="68" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="82" y="32" text-anchor="middle" font-size="10.5" fill="var(--accent)">一点</text>
  <text x="82" y="102" text-anchor="middle" font-size="11" fill="var(--muted)">at the station</text>
  <circle cx="254" cy="66" r="24" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".45"/>
  <circle cx="254" cy="66" r="13" fill="none" stroke="var(--muted)" stroke-width="2" opacity=".45"/>
  <circle cx="254" cy="66" r="5" fill="var(--accent)"/>
  <line x1="182" y1="66" x2="242" y2="66" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M250 66 l-11 5 v-10 z" fill="var(--accent)"/>
  <text x="254" y="32" text-anchor="middle" font-size="10.5" fill="var(--accent)">狙いの的</text>
  <text x="254" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">look at me</text>`)
  + CAP('広がりを持たない、ただの一点'),

/* to ── 向かって、着く */
arrowTo: SVG(`
  <circle cx="34" cy="60" r="8" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <line x1="48" y1="60" x2="248" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M262 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <rect x="266" y="32" width="12" height="56" rx="3" fill="var(--accent)"/>
  <text x="152" y="44" text-anchor="middle" font-size="11.5" fill="var(--accent)">到達する</text>
  <text x="152" y="92" text-anchor="middle" font-size="11" fill="var(--muted)">go to school ／ give it to me</text>`)
  + CAP('矢印が相手にちゃんと届く'),

/* for ── 向いているだけ。着いたとは言っていない */
arrowFor: SVG(`
  <circle cx="34" cy="60" r="8" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <line x1="48" y1="60" x2="180" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M194 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <line x1="200" y1="60" x2="262" y2="60" stroke="var(--muted)" stroke-width="2.5"
        stroke-dasharray="4 5" opacity=".6"/>
  <rect x="266" y="32" width="12" height="56" rx="3" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".6"/>
  <text x="120" y="44" text-anchor="middle" font-size="11.5" fill="var(--accent)">向かう</text>
  <text x="222" y="88" text-anchor="middle" font-size="11" fill="var(--muted)">着いたかは不明</text>
  <text x="120" y="88" text-anchor="middle" font-size="11" fill="var(--muted)">leave for Tokyo</text>`)
  + CAP('向きだけを示す。到達は含まない'),

/* up ── 上へ、そして上限まで */
up: SVG(SPLIT + `
  <line x1="78" y1="98" x2="78" y2="36" stroke="var(--accent)" stroke-width="3"/>
  <path d="M78 24 l8 16 h-16 z" fill="var(--accent)"/>
  <text x="78" y="114" text-anchor="middle" font-size="11" fill="var(--muted)">stand up</text>
  <rect x="216" y="28" width="46" height="74" rx="5" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <rect x="220" y="40" width="38" height="58" rx="3" fill="var(--accent)"/>
  <line x1="208" y1="34" x2="270" y2="34" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="3 3"/>
  <text x="239" y="22" text-anchor="middle" font-size="10.5" fill="var(--accent)">上限</text>
  <text x="239" y="114" text-anchor="middle" font-size="11" fill="var(--muted)">eat up</text>`)
  + CAP('上へ ── そして「上限まで＝すっかり」'),

/* down ── 下へ、そして紙に落とす */
down: SVG(SPLIT + `
  <line x1="78" y1="26" x2="78" y2="88" stroke="var(--accent)" stroke-width="3"/>
  <path d="M78 100 l8 -16 h-16 z" fill="var(--accent)"/>
  <text x="78" y="114" text-anchor="middle" font-size="11" fill="var(--muted)">sit down</text>
  <circle cx="239" cy="30" r="11" fill="var(--accent)" opacity=".45"/>
  <line x1="239" y1="44" x2="239" y2="66" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
  <path d="M239 76 l7 -14 h-14 z" fill="var(--accent)"/>
  <rect x="204" y="80" width="70" height="20" rx="3" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <text x="239" y="114" text-anchor="middle" font-size="11" fill="var(--muted)">write down</text>`)
  + CAP('下へ ── 紙の上に落とせば「書き留める」'),

/* out ── 内から外へ */
out: SVG(`
  <path d="M112 30 H42 a6 6 0 0 0 -6 6 V86 a6 6 0 0 0 6 6 H112"
        fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <circle cx="86" cy="61" r="12" fill="var(--accent)" opacity=".35"/>
  <circle cx="150" cy="61" r="12" fill="var(--accent)" opacity=".6"/>
  <circle cx="216" cy="61" r="14" fill="var(--accent)"/>
  <line x1="236" y1="61" x2="278" y2="61" stroke="var(--accent)" stroke-width="3"/>
  <path d="M290 61 l-16 7 v-14 z" fill="var(--accent)"/>
  <text x="180" y="34" text-anchor="middle" font-size="11.5" fill="var(--accent)">内から外へ</text>
  <text x="170" y="104" text-anchor="middle" font-size="11" fill="var(--muted)">go out ／ run out of</text>`)
  + CAP('中身が外へ出きれば「尽きる」'),

/* off ── 分離。on の正反対 */
off: SVG(SPLIT + `
  <rect x="24" y="78" width="112" height="9" rx="2" fill="var(--muted)" opacity=".35"/>
  <rect x="52" y="48" width="56" height="30" rx="5" fill="var(--accent)" opacity=".9"/>
  <line x1="46" y1="78" x2="114" y2="78" stroke="var(--accent)" stroke-width="3.5"/>
  <text x="80" y="38" text-anchor="middle" font-size="10.5" fill="var(--muted)">on ＝ 接触</text>
  <text x="80" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">put on</text>
  <rect x="184" y="78" width="112" height="9" rx="2" fill="var(--muted)" opacity=".35"/>
  <rect x="206" y="36" width="56" height="30" rx="5" fill="var(--accent)" opacity=".9"/>
  <line x1="196" y1="73" x2="272" y2="73" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
  <line x1="282" y1="72" x2="282" y2="46" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M282 36 l7 12 h-14 z" fill="var(--accent)"/>
  <text x="234" y="28" text-anchor="middle" font-size="10.5" fill="var(--muted)">off ＝ 分離</text>
  <text x="234" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">take off</text>`)
  + CAP('くっついていたものが離れる ── on の正反対'),

/* over ── 弧を描いて越える */
over: SVG(`
  <rect x="146" y="62" width="30" height="42" rx="3" fill="var(--muted)" opacity=".38"/>
  <path d="M44 100 Q161 6 278 100" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M278 100 l-14 -6 l2 13 z" fill="var(--accent)"/>
  <circle cx="44" cy="100" r="6" fill="var(--accent)"/>
  <text x="161" y="34" text-anchor="middle" font-size="11.5" fill="var(--accent)">弧を描いて越える</text>
  <text x="161" y="113" text-anchor="middle" font-size="11" fill="var(--muted)">jump over ／ get over</text>`)
  + CAP('越え切ってしまえば「終わった」')
,

/* ---------- 基本動詞のコア図 ---------- */

/* get ── いまの状態から、その状態へ至る */
vGet: SVG(`
  <circle cx="62" cy="58" r="19" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <line x1="92" y1="58" x2="222" y2="58" stroke="var(--accent)" stroke-width="3"/>
  <path d="M236 58 l-16 7 v-14 z" fill="var(--accent)"/>
  <circle cx="262" cy="58" r="19" fill="var(--accent)"/>
  <text x="160" y="40" text-anchor="middle" font-size="11.5" fill="var(--accent)">至る</text>
  <text x="62" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">いまの状態</text>
  <text x="262" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">その状態</text>
  <text x="160" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">get tired ／ get home</text>`)
  + CAP('be が「状態」なら、get は「状態への変化」'),

/* take ── 自分の方へ引き寄せる */
vTake: SVG(`
  <rect x="44" y="44" width="40" height="32" rx="5" fill="var(--accent)"/>
  <line x1="98" y1="60" x2="208" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M222 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <circle cx="254" cy="60" r="21" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <text x="254" y="65" text-anchor="middle" font-size="11" fill="var(--muted)">自分</text>
  <text x="155" y="42" text-anchor="middle" font-size="11.5" fill="var(--accent)">自分の方へ取る</text>
  <text x="155" y="100" text-anchor="middle" font-size="11" fill="var(--muted)">take this one ／ take a seat</text>`)
  + CAP('だから「選ぶ」「引き受ける」まで届く'),

/* put ── 移動させて、ある位置に置く */
vPut: SVG(`
  <rect x="58" y="20" width="44" height="30" rx="5" fill="var(--accent)"/>
  <path d="M112 36 Q170 22 214 56" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
  <path d="M222 62 l-6 -15 l-9 9 z" fill="var(--accent)"/>
  <rect x="200" y="62" width="44" height="30" rx="5" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <rect x="180" y="94" width="86" height="8" rx="2" fill="var(--muted)" opacity=".35"/>
  <text x="168" y="18" text-anchor="middle" font-size="11.5" fill="var(--accent)">位置に置く</text>
  <text x="140" y="114" text-anchor="middle" font-size="11" fill="var(--muted)">put it on the table</text>`)
  + CAP('置き先は場所とは限らない。言葉にも状態にも置ける'),

/* come ── 基準点へ近づく */
vCome: SVG(`
  <line x1="48" y1="58" x2="200" y2="58" stroke="var(--accent)" stroke-width="3"/>
  <path d="M214 58 l-16 7 v-14 z" fill="var(--accent)"/>
  <circle cx="248" cy="58" r="20" fill="var(--accent)"/>
  <text x="248" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">基準点</text>
  <text x="128" y="40" text-anchor="middle" font-size="11.5" fill="var(--accent)">近づく</text>
  <text x="128" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">I’m coming!</text>`)
  + CAP('基準点は話し手とは限らない ── 相手の場所にも置ける'),

/* go ── 基準点から離れる */
vGo: SVG(`
  <circle cx="64" cy="58" r="20" fill="var(--accent)"/>
  <line x1="100" y1="58" x2="252" y2="58" stroke="var(--accent)" stroke-width="3"/>
  <path d="M266 58 l-16 7 v-14 z" fill="var(--accent)"/>
  <text x="64" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">基準点</text>
  <text x="186" y="40" text-anchor="middle" font-size="11.5" fill="var(--accent)">離れていく</text>
  <text x="186" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">go out ／ go bad</text>`)
  + CAP('正常な状態から離れれば「悪くなる」'),

/* make ── 力を加えて形にする */
vMake: SVG(`
  <path d="M42 72 q-6 -22 18 -26 q14 -14 30 -2 q22 -4 20 20 q4 16 -16 16 h-38 q-14 0 -14 -8 z"
        fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <text x="70" y="102" text-anchor="middle" font-size="11" fill="var(--muted)">素材</text>
  <line x1="130" y1="58" x2="196" y2="58" stroke="var(--accent)" stroke-width="3"/>
  <path d="M210 58 l-16 7 v-14 z" fill="var(--accent)"/>
  <line x1="163" y1="20" x2="163" y2="38" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M163 46 l7 -12 h-14 z" fill="var(--accent)"/>
  <text x="163" y="16" text-anchor="middle" font-size="10.5" fill="var(--accent)">力</text>
  <rect x="226" y="38" width="52" height="42" rx="5" fill="var(--accent)"/>
  <text x="252" y="102" text-anchor="middle" font-size="11" fill="var(--muted)">形になる</text>`)
  + CAP('力が人に向かえば「させる」、状態に向かえば「〜にする」'),

/* have ── 自分の圏内にある */
vHave: SVG(`
  <circle cx="160" cy="58" r="48" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="6 5"/>
  <rect x="122" y="46" width="26" height="24" rx="4" fill="var(--accent)" opacity=".85"/>
  <circle cx="172" cy="42" r="12" fill="var(--accent)" opacity=".85"/>
  <path d="M182 82 l13 -22 l13 22 z" fill="var(--accent)" opacity=".5"/>
  <text x="160" y="16" text-anchor="middle" font-size="11.5" fill="var(--accent)">自分の圏内</text>
  <text x="160" y="116" text-anchor="middle" font-size="11" fill="var(--muted)">物・出来事・体調・済んだ経験</text>`)
  + CAP('現在完了の have も「済んだ状態を今持っている」'),

/* turn ── 向きを変える */
vTurn: SVG(`
  <path d="M160 18 a40 40 0 1 1 -28 12" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <path d="M126 22 l14 -6 l4 15 z" fill="var(--accent)"/>
  <text x="160" y="64" text-anchor="middle" font-size="11.5" fill="var(--accent)">向きを</text>
  <text x="160" y="80" text-anchor="middle" font-size="11.5" fill="var(--accent)">変える</text>
  <text x="160" y="116" text-anchor="middle" font-size="11" fill="var(--muted)">turn right ／ turn red ／ turn on</text>`)
  + CAP('体の向きでも、ページでも、状態でも')

,

/* ---------- 文法のコア図 ---------- */

/* 過去形 ── いまここからの距離 */
gPast: SVG(`
  <circle cx="40" cy="60" r="13" fill="var(--accent)"/>
  <text x="40" y="96" text-anchor="middle" font-size="11" fill="var(--muted)">いま</text>
  <line x1="62" y1="28" x2="196" y2="28" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M210 28 l-14 6 v-12 z" fill="var(--accent)"/>
  <text x="258" y="32" text-anchor="middle" font-size="11" fill="var(--muted)">時間的</text>
  <line x1="62" y1="60" x2="196" y2="60" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M210 60 l-14 6 v-12 z" fill="var(--accent)"/>
  <text x="258" y="64" text-anchor="middle" font-size="11" fill="var(--muted)">現実から</text>
  <line x1="62" y1="92" x2="196" y2="92" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M210 92 l-14 6 v-12 z" fill="var(--accent)"/>
  <text x="258" y="96" text-anchor="middle" font-size="11" fill="var(--muted)">心理的</text>
  <text x="130" y="16" text-anchor="middle" font-size="11.5" fill="var(--accent)">距離をとる</text>`)
  + CAP('どの距離でも、形はぜんぶ過去形'),

/* to不定詞と動名詞 */
gInfGer: SVG(SPLIT + `
  <circle cx="34" cy="62" r="9" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <line x1="50" y1="62" x2="116" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M130 62 l-15 7 v-14 z" fill="var(--accent)"/>
  <text x="84" y="40" text-anchor="middle" font-size="12" fill="var(--accent)">to</text>
  <text x="84" y="94" text-anchor="middle" font-size="11" fill="var(--muted)">これから向かう</text>
  <rect x="204" y="46" width="72" height="34" rx="6" fill="var(--accent)"/>
  <text x="240" y="40" text-anchor="middle" font-size="12" fill="var(--accent)">-ing</text>
  <text x="240" y="94" text-anchor="middle" font-size="11" fill="var(--muted)">すでにある行為</text>`)
  + CAP('stop to smoke ／ stop smoking の差はこれだけ'),

/* 冠詞 ── 輪郭と特定 */
gArticle: SVG(`
  <line x1="107" y1="8" x2="107" y2="100" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 5"/>
  <line x1="213" y1="8" x2="213" y2="100" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 5"/>
  <text x="53" y="26" text-anchor="middle" font-size="15" font-family="Georgia,serif" fill="var(--accent)">a</text>
  <circle cx="53" cy="62" r="19" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="53" y="98" text-anchor="middle" font-size="10.5" fill="var(--muted)">輪郭のある1つ</text>
  <text x="160" y="26" text-anchor="middle" font-size="15" font-family="Georgia,serif" fill="var(--accent)">the</text>
  <circle cx="160" cy="62" r="19" fill="var(--accent)"/>
  <path d="M160 36 l6 -11 h-12 z" fill="var(--accent)"/>
  <text x="160" y="98" text-anchor="middle" font-size="10.5" fill="var(--muted)">あれ、と指せる</text>
  <text x="267" y="26" text-anchor="middle" font-size="15" font-family="Georgia,serif" fill="var(--accent)">—</text>
  <path d="M238 70 q10 -14 20 0 q10 14 20 0 q6 -8 12 -2" fill="none" stroke="var(--accent)"
        stroke-width="2.5" opacity=".8"/>
  <path d="M238 56 q10 -14 20 0 q10 14 20 0 q6 -8 12 -2" fill="none" stroke="var(--accent)"
        stroke-width="2.5" opacity=".45"/>
  <text x="267" y="98" text-anchor="middle" font-size="10.5" fill="var(--muted)">輪郭がない</text>`)
  + CAP('冠詞は、その名詞をどう見ているかの宣言'),

/* 現在形 ── いつもそう */
gPresent: SVG(`
  <line x1="24" y1="62" x2="296" y2="62" stroke="var(--muted)" stroke-width="2.5" opacity=".45"/>
  ${[52,110,168,226,284].map(x => `<circle cx="${x}" cy="62" r="8" fill="var(--accent)"/>`).join('')}
  <text x="160" y="36" text-anchor="middle" font-size="11.5" fill="var(--accent)">いつもそう</text>
  <text x="34" y="92" font-size="11" fill="var(--muted)">過去</text>
  <text x="286" y="92" text-anchor="end" font-size="11" fill="var(--muted)">未来</text>`)
  + CAP('現在形は「今」ではなく「いつも」の話'),

/* 進行形 ── 途中の一コマ */
gProgress: SVG(`
  ${[20,78,136,194,252].map((x,i) => `<rect x="${x}" y="40" width="50" height="42" rx="4"
      fill="${i===2?'var(--accent)':'none'}" stroke="${i===2?'var(--accent)':'var(--muted)'}"
      stroke-width="2.5" opacity="${i===2?1:.45}"/>`).join('')}
  <text x="161" y="28" text-anchor="middle" font-size="11.5" fill="var(--accent)">途中の一コマ</text>
  <text x="161" y="104" text-anchor="middle" font-size="11" fill="var(--muted)">始まりも終わりもある＝一時的</text>`)
  + CAP('だから always と組むと「いつもいつも」になる'),

/* 現在完了 ── 済んだ状態を今持っている */
gPerfect: SVG(`
  <circle cx="48" cy="84" r="10" fill="var(--muted)" opacity=".55"/>
  <text x="48" y="108" text-anchor="middle" font-size="11" fill="var(--muted)">済んだこと</text>
  <path d="M62 78 Q140 16 208 50" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M220 55 l-16 -2 l6 -12 z" fill="var(--accent)"/>
  <rect x="216" y="38" width="80" height="46" rx="8" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="256" cy="61" r="12" fill="var(--accent)"/>
  <text x="256" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">いま持っている</text>
  <text x="256" y="108" text-anchor="middle" font-size="11" fill="var(--muted)">だから現在の話</text>`)
  + CAP('have は普通の have と同じ「持っている」'),

/* 助動詞 ── 判断の強さ */
gModal: SVG(`
  <line x1="28" y1="66" x2="292" y2="66" stroke="var(--muted)" stroke-width="2.5" opacity=".45"/>
  ${[['may',62],['can',126],['should',196],['must',266]].map(([t,x],i) =>
    `<line x1="${x}" y1="58" x2="${x}" y2="74" stroke="var(--accent)" stroke-width="3"/>
     <text x="${x}" y="48" text-anchor="middle" font-size="12" font-family="Georgia,serif"
       fill="var(--accent)">${t}</text>`).join('')}
  <text x="30" y="96" font-size="11" fill="var(--muted)">弱い</text>
  <text x="160" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">話し手の判断の強さ</text>
  <text x="290" y="96" text-anchor="end" font-size="11" fill="var(--muted)">強い</text>`)
  + CAP('出来事ではなく、それを見ている話し手の心'),

/* 受動態 ── 主役の入れ替え */
gPassive: SVG(`
  <circle cx="54" cy="32" r="14" fill="var(--accent)"/>
  <text x="54" y="37" text-anchor="middle" font-size="12" fill="var(--bg)">A</text>
  <line x1="74" y1="32" x2="122" y2="32" stroke="var(--muted)" stroke-width="2.5"/>
  <path d="M134 32 l-13 6 v-12 z" fill="var(--muted)"/>
  <circle cx="152" cy="32" r="14" fill="none" stroke="var(--muted)" stroke-width="2.5"/>
  <text x="152" y="37" text-anchor="middle" font-size="12" fill="var(--muted)">B</text>
  <text x="196" y="37" font-size="11" fill="var(--muted)">能動 ── A が主役</text>
  <circle cx="54" cy="84" r="14" fill="var(--accent)"/>
  <text x="54" y="89" text-anchor="middle" font-size="12" fill="var(--bg)">B</text>
  <path d="M74 84 l13 6 v-12 z" fill="var(--accent)"/>
  <line x1="86" y1="84" x2="134" y2="84" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="152" cy="84" r="14" fill="none" stroke="var(--muted)" stroke-width="2.5"/>
  <text x="152" y="89" text-anchor="middle" font-size="12" fill="var(--muted)">A</text>
  <text x="196" y="89" font-size="11" fill="var(--accent)">受動 ── B が主役</text>`)
  + CAP('カメラを向ける先を入れ替える装置'),

/* 関係代名詞 ── 貼る向き */
gRelative: SVG(`
  <rect x="24" y="24" width="94" height="30" rx="5" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".55"/>
  <text x="71" y="44" text-anchor="middle" font-size="11" fill="var(--muted)">昨日会った</text>
  <path d="M124 39 l13 6 v-12 z" fill="var(--muted)"/>
  <rect x="142" y="24" width="44" height="30" rx="5" fill="var(--muted)" opacity=".4"/>
  <text x="164" y="44" text-anchor="middle" font-size="12" fill="var(--text)">人</text>
  <text x="252" y="44" text-anchor="middle" font-size="11" fill="var(--muted)">日本語は前から</text>
  <rect x="24" y="72" width="76" height="30" rx="5" fill="var(--accent)"/>
  <text x="62" y="92" text-anchor="middle" font-size="12" font-family="Georgia,serif" fill="var(--bg)">the person</text>
  <path d="M118 87 l-13 6 v-12 z" fill="var(--accent)"/>
  <rect x="122" y="72" width="102" height="30" rx="5" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="173" y="92" text-anchor="middle" font-size="11" font-family="Georgia,serif" fill="var(--accent)">I met yesterday</text>
  <text x="270" y="92" text-anchor="middle" font-size="11" fill="var(--accent)">英語は後ろから</text>`)
  + CAP('難しいのではなく、貼る向きが逆なだけ'),

/* do ── 動詞の代理人 */
gDo: SVG(`
  <rect x="24" y="44" width="52" height="34" rx="6" fill="var(--accent)"/>
  <text x="50" y="67" text-anchor="middle" font-size="16" font-family="Georgia,serif" fill="var(--bg)">Do</text>
  <text x="94" y="67" font-size="16" font-family="Georgia,serif" fill="var(--text)">you like it?</text>
  <path d="M182 40 Q118 8 56 36" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
  <path d="M48 40 l14 -7 l2 13 z" fill="var(--accent)"/>
  <text x="122" y="20" text-anchor="middle" font-size="11" fill="var(--accent)">代理で頭に立つ</text>
  <text x="160" y="100" text-anchor="middle" font-size="11" fill="var(--muted)">一般動詞は文の頭に出られない</text>`)
  + CAP('だから be動詞と助動詞には do が要らない')


};
