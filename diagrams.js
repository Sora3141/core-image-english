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

,

/* ---------- 不変化詞（第2弾）のコア図 ---------- */

/* of ── 全体から切り離された一部 */
pOf: SVG(`
  <path d="M96 62 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0" fill="none"
        stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <path d="M96 62 L96 20 A42 42 0 0 1 133 42 Z" fill="var(--bg)" stroke="var(--muted)"
        stroke-width="2" stroke-dasharray="4 4" opacity=".7"/>
  <path d="M224 62 L224 20 A42 42 0 0 1 261 42 Z" fill="var(--accent)"/>
  <line x1="150" y1="40" x2="196" y2="40" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M208 40 l-14 6 v-12 z" fill="var(--accent)"/>
  <text x="173" y="26" text-anchor="middle" font-size="11" fill="var(--accent)">切り離す</text>
  <text x="96" y="116" text-anchor="middle" font-size="11" fill="var(--muted)">全体</text>
  <text x="240" y="116" text-anchor="middle" font-size="11" fill="var(--muted)">a piece of cake</text>`)
  + CAP('off と同語源。根っこは「分離」'),

/* with ── そばに一緒にある */
pWith: SVG(`
  <path d="M60 24 h-16 v76 h16" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <path d="M260 24 h16 v76 h-16" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".5"/>
  <circle cx="124" cy="62" r="24" fill="var(--accent)"/>
  <circle cx="196" cy="62" r="18" fill="var(--accent)" opacity=".5"/>
  <text x="160" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">一緒にある</text>
  <text x="160" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">同伴 ・ 持ち物 ・ 道具</text>`)
  + CAP('向かい合って一緒なら「対立」にもなる'),

/* by ── ぴったり横 */
pBy: SVG(`
  <rect x="96" y="36" width="52" height="52" rx="6" fill="var(--accent)"/>
  <rect x="166" y="36" width="52" height="52" rx="6" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".55"/>
  <line x1="152" y1="30" x2="152" y2="94" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 3"/>
  <line x1="162" y1="30" x2="162" y2="94" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="157" y="22" text-anchor="middle" font-size="10.5" fill="var(--accent)">すぐ横</text>
  <text x="157" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">触れてはいないが、そば</text>`)
  + CAP('そばを通れば「経由」、その時までのそばなら「期限」'),

/* from ── 起点 */
pFrom: SVG(`
  <circle cx="46" cy="62" r="14" fill="var(--accent)"/>
  <line x1="66" y1="62" x2="248" y2="62" stroke="var(--accent)" stroke-width="3" opacity=".45"/>
  <path d="M262 62 l-16 7 v-14 z" fill="var(--accent)" opacity=".45"/>
  <path d="M46 34 v-14" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="46" y="16" text-anchor="middle" font-size="11" fill="var(--accent)">ここが起点</text>
  <text x="46" y="96" text-anchor="middle" font-size="11" fill="var(--muted)">from</text>
  <text x="248" y="96" text-anchor="end" font-size="11" fill="var(--muted)">to</text>`)
  + CAP('離れるからこそ「区別」「防ぐ」まで届く'),

/* about ── まわりに */
pAbout: SVG(`
  <circle cx="160" cy="60" r="12" fill="var(--accent)"/>
  <circle cx="160" cy="60" r="40" fill="none" stroke="var(--accent)" stroke-width="2.5"
          stroke-dasharray="6 6" opacity=".8"/>
  <text x="160" y="18" text-anchor="middle" font-size="11.5" fill="var(--accent)">まわり</text>
  <text x="160" y="114" text-anchor="middle" font-size="11" fill="var(--muted)">中心ぴったりではない</text>`)
  + CAP('数のまわりなら「およそ」、話題のまわりなら「について」'),

/* through ── 中を貫く */
pThrough: SVG(`
  <rect x="112" y="28" width="96" height="68" rx="8" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".55"/>
  <line x1="28" y1="62" x2="266" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M280 62 l-16 7 v-14 z" fill="var(--accent)"/>
  <text x="160" y="20" text-anchor="middle" font-size="11.5" fill="var(--accent)">中を貫く</text>
  <text x="160" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">入口から入って出口から出る</text>`)
  + CAP('だから「最初から最後まで」「やり遂げる」'),

/* across ── 表面を横切る */
pAcross: SVG(`
  <rect x="24" y="52" width="272" height="34" rx="4" fill="var(--muted)" opacity=".28"/>
  <path d="M74 96 Q160 6 246 96" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M246 96 l-13 -7 l-1 14 z" fill="var(--accent)"/>
  <text x="160" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">面をまたぐ</text>
  <text x="160" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">橋は across、トンネルは through</text>`)
  + CAP('中を貫くのではなく、表面を横切る'),

/* along ── 線に沿って */
pAlong: SVG(`
  <path d="M20 90 Q100 40 160 66 Q222 92 300 40" fill="none" stroke="var(--muted)"
        stroke-width="7" opacity=".3" stroke-linecap="round"/>
  <path d="M20 90 Q100 40 160 66 Q222 92 286 42" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M298 36 l-16 1 l6 12 z" fill="var(--accent)"/>
  <text x="150" y="26" text-anchor="middle" font-size="11.5" fill="var(--accent)">線に沿って進む</text>
  <text x="150" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">道 ・ 川 ・ 壁</text>`)
  + CAP('外れずに並んで進めれば「仲良くやる」'),

/* around ── 周囲を */
pAround: SVG(`
  <circle cx="160" cy="62" r="13" fill="var(--accent)" opacity=".5"/>
  <path d="M160 20 a42 42 0 1 1 -30 12" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <path d="M126 24 l15 -6 l3 15 z" fill="var(--accent)"/>
  <text x="160" y="108" text-anchor="middle" font-size="11" fill="var(--muted)">ぐるりと取り巻く</text>`)
  + CAP('一周すれば「まわりを」、半周すれば「向きが変わる」'),

/* back ── 元の位置へ */
pBack: SVG(`
  <circle cx="52" cy="80" r="13" fill="var(--accent)"/>
  <text x="52" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">元の位置</text>
  <path d="M66 74 Q160 20 252 66" fill="none" stroke="var(--muted)" stroke-width="2.5"
        stroke-dasharray="5 4" opacity=".55"/>
  <path d="M252 78 Q160 108 70 88" fill="none" stroke="var(--accent)" stroke-width="3"/>
  <path d="M58 86 l15 -6 l1 14 z" fill="var(--accent)"/>
  <circle cx="258" cy="72" r="11" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <text x="160" y="22" text-anchor="middle" font-size="11" fill="var(--muted)">行って</text>
  <text x="160" y="46" text-anchor="middle" font-size="11.5" fill="var(--accent)">戻ってくる</text>`)
  + CAP('もとは「背中」。背中の方向＝後ろ、そして元へ'),

/* away ── 離れていく */
pAway: SVG(`
  <circle cx="44" cy="62" r="20" fill="var(--accent)"/>
  <circle cx="128" cy="62" r="15" fill="var(--accent)" opacity=".6"/>
  <circle cx="200" cy="62" r="10" fill="var(--accent)" opacity=".35"/>
  <circle cx="256" cy="62" r="6" fill="var(--accent)" opacity=".18"/>
  <line x1="70" y1="36" x2="278" y2="36" stroke="var(--accent)" stroke-width="2" opacity=".5"/>
  <path d="M290 36 l-14 6 v-12 z" fill="var(--accent)" opacity=".5"/>
  <text x="180" y="26" text-anchor="middle" font-size="11.5" fill="var(--accent)">どんどん離れる</text>
  <text x="180" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">やがて見えなくなる</text>`)
  + CAP('離れきれば「消える」「亡くなる」まで届く'),

/* against ── 逆らって接触 */
pAgainst: SVG(`
  <rect x="152" y="22" width="14" height="78" rx="3" fill="var(--muted)" opacity=".5"/>
  <line x1="52" y1="62" x2="134" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M148 62 l-15 7 v-14 z" fill="var(--accent)"/>
  <line x1="268" y1="62" x2="186" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M172 62 l15 7 v-14 z" fill="var(--accent)"/>
  <text x="160" y="16" text-anchor="middle" font-size="11.5" fill="var(--accent)">正面からぶつかる</text>
  <text x="160" y="114" text-anchor="middle" font-size="11" fill="var(--muted)">for の正反対</text>`)
  + CAP('押し当てれば「もたれる」、流れに逆らえば「反対」'),

/* between ── 2つの間 */
pBetween: SVG(`
  <rect x="34" y="38" width="56" height="50" rx="6" fill="var(--accent)"/>
  <rect x="230" y="38" width="56" height="50" rx="6" fill="var(--accent)"/>
  <line x1="98" y1="63" x2="140" y2="63" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
  <line x1="180" y1="63" x2="222" y2="63" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="160" y="68" text-anchor="middle" font-size="12" fill="var(--accent)">間</text>
  <text x="160" y="26" text-anchor="middle" font-size="11" fill="var(--muted)">2つに挟まれた場所</text>
  <text x="160" y="108" text-anchor="middle" font-size="11" fill="var(--muted)">-tween は two と同語源</text>`)
  + CAP('個々を意識していれば3つ以上でも between'),

/* under ── 真下 */
pUnder: SVG(`
  <rect x="72" y="34" width="176" height="11" rx="3" fill="var(--muted)" opacity=".45"/>
  <rect x="130" y="60" width="60" height="34" rx="6" fill="var(--accent)"/>
  <line x1="160" y1="52" x2="160" y2="58" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M160 50 l6 10 h-12 z" fill="var(--accent)" transform="rotate(180 160 55)"/>
  <text x="160" y="24" text-anchor="middle" font-size="11" fill="var(--muted)">覆っているもの</text>
  <text x="160" y="112" text-anchor="middle" font-size="11.5" fill="var(--accent)">その真下にある</text>`)
  + CAP('over の正反対。押さえられていれば「支配下」'),

/* into ── 外から中へ */
pInto: SVG(`
  <rect x="172" y="28" width="112" height="68" rx="8" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".55"/>
  <circle cx="44" cy="62" r="14" fill="var(--accent)" opacity=".4"/>
  <line x1="66" y1="62" x2="212" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M226 62 l-16 7 v-14 z" fill="var(--accent)"/>
  <circle cx="254" cy="62" r="14" fill="var(--accent)"/>
  <text x="140" y="42" text-anchor="middle" font-size="11.5" fill="var(--accent)">in ＋ to</text>
  <text x="140" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">外から中へ入って到達する</text>`)
  + CAP('in が「状態」なら、into は「動き」')

,

/* ---------- 基本動詞（第2弾）のコア図 ---------- */

vGive: SVG(`
  <circle cx="52" cy="60" r="21" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <text x="52" y="65" text-anchor="middle" font-size="11" fill="var(--muted)">自分</text>
  <rect x="88" y="46" width="34" height="28" rx="5" fill="var(--accent)"/>
  <line x1="132" y1="60" x2="216" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M230 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <circle cx="264" cy="60" r="21" fill="var(--accent)"/>
  <text x="176" y="42" text-anchor="middle" font-size="11.5" fill="var(--accent)">手放して渡す</text>
  <text x="264" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">相手</text>`)
  + CAP('take（自分の方へ取る）のちょうど反対'),

vKeep: SVG(`
  ${[52,120,188,256].map(x=>`<rect x="${x-22}" y="42" width="44" height="40" rx="6"
      fill="var(--accent)" opacity=".9"/>`).join('')}
  <line x1="24" y1="100" x2="290" y2="100" stroke="var(--muted)" stroke-width="2" opacity=".4"/>
  <path d="M296 100 l-12 5 v-10 z" fill="var(--muted)" opacity=".4"/>
  <text x="160" y="26" text-anchor="middle" font-size="11.5" fill="var(--accent)">形を変えずに保ち続ける</text>
  <text x="160" y="116" text-anchor="middle" font-size="11" fill="var(--muted)">時間</text>`)
  + CAP('だから keep + -ing は「し続ける」'),

vHold: SVG(`
  <circle cx="160" cy="60" r="26" fill="var(--accent)"/>
  <path d="M104 34 q-14 26 0 52" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
  <path d="M216 34 q14 26 0 52" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
  <line x1="60" y1="60" x2="96" y2="60" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="224" y1="60" x2="260" y2="60" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="160" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">つかんで動かさない</text>
  <text x="160" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">Hold on. ＝ 掴んだまま待って</text>`)
  + CAP('留める対象が場なら「開催する」'),

vBreak: SVG(`
  <line x1="24" y1="60" x2="134" y2="60" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
  <line x1="186" y1="60" x2="296" y2="60" stroke="var(--accent)" stroke-width="5" stroke-linecap="round"/>
  <path d="M152 30 l12 24 l-10 12 l14 24" fill="none" stroke="var(--accent)" stroke-width="2.5"
        stroke-dasharray="3 4" opacity=".8"/>
  <text x="160" y="22" text-anchor="middle" font-size="11.5" fill="var(--accent)">続いていたものが断たれる</text>
  <text x="160" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">物 ・ 約束 ・ 記録 ・ 静けさ</text>`)
  + CAP('だから「休憩」も break ── 作業の連続を切る'),

vRun: SVG(`
  <path d="M20 68 q28 -34 56 0 q28 34 56 0 q28 -34 56 0 q28 34 56 0 q14 -17 26 -9"
        fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <path d="M296 56 l-16 2 l5 12 z" fill="var(--accent)"/>
  <text x="160" y="26" text-anchor="middle" font-size="11.5" fill="var(--accent)">なめらかに動き続ける</text>
  <text x="160" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">人・水・機械・組織</text>`)
  + CAP('止めずに動かし続けるから「経営する」'),

vLook: SVG(`
  <path d="M40 60 q26 -22 52 0 q-26 22 -52 0 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="66" cy="60" r="8" fill="var(--accent)"/>
  <line x1="104" y1="60" x2="214" y2="60" stroke="var(--accent)" stroke-width="3" stroke-dasharray="7 5"/>
  <path d="M228 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <circle cx="256" cy="60" r="16" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <text x="166" y="40" text-anchor="middle" font-size="11.5" fill="var(--accent)">意識して目を向ける</text>
  <text x="166" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">向ける先が要る → look at / for</text>`)
  + CAP('see は目に入る、watch は追い続ける'),

vBring: SVG(`
  <circle cx="264" cy="60" r="21" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <text x="264" y="65" text-anchor="middle" font-size="11" fill="var(--muted)">自分</text>
  <rect x="44" y="46" width="34" height="28" rx="5" fill="var(--accent)"/>
  <line x1="228" y1="60" x2="96" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M84 60 l16 7 v-14 z" fill="var(--accent)"/>
  <text x="156" y="42" text-anchor="middle" font-size="11.5" fill="var(--accent)">こちらへ持ってくる</text>
  <text x="156" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">take は逆向き</text>`)
  + CAP('向きを決めるのは、話し手がどこにいるか'),

vSet: SVG(`
  <rect x="54" y="20" width="52" height="38" rx="5" fill="var(--accent)"/>
  <path d="M116 42 Q168 30 200 58" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
  <path d="M210 64 l-7 -14 l-8 9 z" fill="var(--accent)"/>
  <rect x="192" y="64" width="52" height="38" rx="5" fill="var(--accent)"/>
  <rect x="186" y="58" width="64" height="50" rx="7" fill="none" stroke="var(--accent)"
        stroke-width="2.5" stroke-dasharray="4 4"/>
  <text x="152" y="18" text-anchor="middle" font-size="11.5" fill="var(--accent)">定位置にきちんと据える</text>`)
  + CAP('put より「置き場所が決まっている」'),

vStand: SVG(`
  <rect x="140" y="20" width="40" height="66" rx="6" fill="var(--accent)"/>
  <rect x="106" y="88" width="108" height="9" rx="3" fill="var(--muted)" opacity=".45"/>
  <line x1="88" y1="52" x2="128" y2="52" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M132 52 l-12 5 v-10 z" fill="var(--accent)"/>
  <line x1="232" y1="52" x2="192" y2="52" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M188 52 l12 5 v-10 z" fill="var(--accent)"/>
  <text x="160" y="14" text-anchor="middle" font-size="11" fill="var(--accent)">押されても倒れない</text>
  <text x="160" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">I can’t stand it. ＝ 立っていられない</text>`)
  + CAP('自分の力で垂直を保つ'),

vLet: SVG(`
  <rect x="140" y="14" width="10" height="34" rx="3" fill="var(--muted)" opacity=".5"/>
  <rect x="140" y="76" width="10" height="34" rx="3" fill="var(--muted)" opacity=".5"/>
  <line x1="36" y1="62" x2="228" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M242 62 l-16 7 v-14 z" fill="var(--accent)"/>
  <circle cx="48" cy="62" r="11" fill="var(--accent)"/>
  <text x="145" y="8" text-anchor="middle" font-size="10.5" fill="var(--muted)">門は開いたまま</text>
  <text x="190" y="100" text-anchor="middle" font-size="11.5" fill="var(--accent)">止めないでおく</text>`)
  + CAP('make は力を加える、let は何もしない'),

vCall: SVG(`
  <circle cx="70" cy="60" r="15" fill="var(--accent)"/>
  ${[36,58,80].map((r,i)=>`<path d="M92 ${60-r*0.62} a${r} ${r} 0 0 1 0 ${r*1.24}" fill="none"
      stroke="var(--accent)" stroke-width="2.5" opacity="${0.8-i*0.22}"/>`).join('')}
  <circle cx="266" cy="60" r="15" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".55"/>
  <text x="168" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">声を届かせる</text>
  <text x="168" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">呼ぶ ・ 電話 ・ 〜と呼ぶ</text>`)
  + CAP('call back は元へ返す、call off は切り離す'),

vCut: SVG(`
  <rect x="44" y="34" width="96" height="56" rx="6" fill="var(--accent)"/>
  <rect x="180" y="34" width="96" height="56" rx="6" fill="var(--accent)"/>
  <line x1="160" y1="16" x2="160" y2="104" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
  <path d="M152 12 l8 -10 l8 10 z" fill="var(--accent)"/>
  <text x="160" y="116" text-anchor="middle" font-size="11" fill="var(--muted)">刃で一気に分ける</text>`)
  + CAP('break は壊れて断たれる、cut は意図して切る'),

vPull: SVG(`
  <circle cx="264" cy="60" r="21" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <text x="264" y="65" text-anchor="middle" font-size="11" fill="var(--muted)">自分</text>
  <rect x="44" y="44" width="46" height="32" rx="5" fill="var(--accent)"/>
  <line x1="228" y1="60" x2="106" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M96 60 l16 7 v-14 z" fill="var(--accent)"/>
  <text x="162" y="40" text-anchor="middle" font-size="11.5" fill="var(--accent)">自分の方へ引く</text>`)
  + CAP('基準はいつも「自分」── push の正反対'),

vPush: SVG(`
  <circle cx="56" cy="60" r="21" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <text x="56" y="65" text-anchor="middle" font-size="11" fill="var(--muted)">自分</text>
  <line x1="92" y1="60" x2="212" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M226 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <rect x="234" y="44" width="46" height="32" rx="5" fill="var(--accent)"/>
  <text x="158" y="40" text-anchor="middle" font-size="11.5" fill="var(--accent)">自分から離す方へ押す</text>`)
  + CAP('ドアの PUSH / PULL は読む人が基準'),

vCarry: SVG(`
  <circle cx="86" cy="66" r="18" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".6"/>
  <rect x="68" y="24" width="36" height="24" rx="4" fill="var(--accent)"/>
  <line x1="86" y1="48" x2="86" y2="48" stroke="var(--accent)" stroke-width="2.5"/>
  <line x1="120" y1="60" x2="240" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M254 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <text x="188" y="42" text-anchor="middle" font-size="11.5" fill="var(--accent)">支えたまま移動する</text>
  <text x="160" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">重さを引き受けたまま進む</text>`)
  + CAP('外へ運び出せば carry out ＝ 実行する'),

vFall: SVG(`
  <rect x="136" y="16" width="48" height="30" rx="5" fill="var(--accent)" opacity=".35"/>
  <line x1="160" y1="52" x2="160" y2="80" stroke="var(--accent)" stroke-width="3" stroke-dasharray="5 4"/>
  <path d="M160 92 l9 -16 h-18 z" fill="var(--accent)"/>
  <rect x="106" y="96" width="108" height="9" rx="3" fill="var(--muted)" opacity=".45"/>
  <text x="240" y="40" text-anchor="middle" font-size="11" fill="var(--muted)">支えを失って</text>
  <text x="240" y="58" text-anchor="middle" font-size="11.5" fill="var(--accent)">落ちる</text>`)
  + CAP('自分では止められない ── だから「恋に落ちる」'),

vCatch: SVG(`
  <circle cx="58" cy="34" r="11" fill="var(--accent)" opacity=".3"/>
  <circle cx="110" cy="46" r="11" fill="var(--accent)" opacity=".55"/>
  <circle cx="162" cy="58" r="12" fill="var(--accent)"/>
  <path d="M196 30 q26 30 0 60" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
  <path d="M188 40 q16 20 0 40" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
  <text x="160" y="20" text-anchor="middle" font-size="11.5" fill="var(--accent)">動いているものを捕らえる</text>
  <text x="160" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">ボール ・ 電車 ・ 風邪 ・ 言葉</text>`)
  + CAP('間に合ってつかまえる'),

vLeave: SVG(`
  <rect x="62" y="48" width="42" height="32" rx="5" fill="var(--accent)"/>
  <text x="83" y="100" text-anchor="middle" font-size="11" fill="var(--muted)">残る</text>
  <circle cx="150" cy="62" r="14" fill="var(--accent)" opacity=".35"/>
  <line x1="172" y1="62" x2="250" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M264 62 l-16 7 v-14 z" fill="var(--accent)"/>
  <text x="212" y="42" text-anchor="middle" font-size="11.5" fill="var(--accent)">そのままにして離れる</text>`)
  + CAP('自分が離れれば「去る」、物が残れば「置いていく」'),

vPass: SVG(`
  <rect x="152" y="18" width="12" height="84" rx="3" fill="var(--muted)" opacity=".45"/>
  <circle cx="54" cy="60" r="12" fill="var(--accent)" opacity=".35"/>
  <circle cx="158" cy="60" r="12" fill="var(--accent)" opacity=".7"/>
  <circle cx="262" cy="60" r="12" fill="var(--accent)"/>
  <line x1="74" y1="60" x2="240" y2="60" stroke="var(--accent)" stroke-width="2.5" opacity=".5"/>
  <path d="M252 60 l-14 6 v-12 z" fill="var(--accent)" opacity=".5"/>
  <text x="160" y="110" text-anchor="middle" font-size="11" fill="var(--muted)">基準点を横切って向こうへ</text>`)
  + CAP('人・時間・合格ライン・手から手へ'),

vWork: SVG(`
  <circle cx="86" cy="60" r="30" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${[0,60,120,180,240,300].map(a=>`<line x1="${86+26*Math.cos(a*Math.PI/180)}"
      y1="${60+26*Math.sin(a*Math.PI/180)}" x2="${86+38*Math.cos(a*Math.PI/180)}"
      y2="${60+38*Math.sin(a*Math.PI/180)}" stroke="var(--accent)" stroke-width="3.5"/>`).join('')}
  <line x1="136" y1="60" x2="216" y2="60" stroke="var(--accent)" stroke-width="3"/>
  <path d="M230 60 l-16 7 v-14 z" fill="var(--accent)"/>
  <text x="264" y="65" text-anchor="middle" font-size="11.5" fill="var(--accent)">結果</text>
  <text x="160" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">人・機械・方法、何が主語でもよい</text>`)
  + CAP('コアは「働く」ではなく「ちゃんと機能する」'),

vPlay: SVG(`
  <rect x="44" y="24" width="232" height="66" rx="8" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".5"/>
  <path d="M70 76 L112 36 L152 74 L196 34 L246 72" fill="none" stroke="var(--accent)" stroke-width="3"/>
  ${[70,112,152,196,246].map((x,i)=>`<circle cx="${x}" cy="${[76,36,74,34,72][i]}" r="5" fill="var(--accent)"/>`).join('')}
  <text x="160" y="16" text-anchor="middle" font-size="11" fill="var(--muted)">ルール・楽譜・台本という枠</text>
  <text x="160" y="110" text-anchor="middle" font-size="11.5" fill="var(--accent)">その中で自由に動く</text>`)
  + CAP('競技も、楽器も、演技も、再生も play'),

vPick: SVG(`
  ${[70,118,166].map((x,i)=>`<circle cx="${x}" cy="84" r="13" fill="var(--muted)" opacity=".35"/>`).join('')}
  <circle cx="232" cy="34" r="15" fill="var(--accent)"/>
  <path d="M214 76 Q222 52 230 44" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="4 4"/>
  <circle cx="214" cy="84" r="13" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="3 3"/>
  <text x="232" y="66" text-anchor="middle" font-size="11" fill="var(--accent)">これ1つ</text>
  <text x="140" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">指先で一つだけ選び取る</text>`)
  + CAP('choose は比べて選ぶ、pick はぱっとつまむ')

,

/* ---------- 紛らわしい語のコア図 ---------- */

/* say / tell ── 言葉の中身か、届ける相手か */
wSay: SVG(SPLIT + `
  <circle cx="44" cy="62" r="13" fill="var(--accent)"/>
  <path d="M68 44 h58 a6 6 0 0 1 6 6 v24 a6 6 0 0 1 -6 6 h-46 l-12 10 v-10 a6 6 0 0 1 -6 -6
           v-24 a6 6 0 0 1 6 -6 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="99" y="68" text-anchor="middle" font-size="11" fill="var(--accent)">言葉</text>
  <text x="80" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">say ＝ 中身</text>
  <circle cx="196" cy="62" r="13" fill="var(--accent)"/>
  <line x1="216" y1="62" x2="252" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M264 62 l-14 6 v-12 z" fill="var(--accent)"/>
  <circle cx="284" cy="62" r="13" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".7"/>
  <text x="240" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">tell ＝ 相手</text>`)
  + CAP('×say me ／ ○tell me ／ ○say to me'),

/* see / look ── 入ってくるか、向けるか */
wSee: SVG(SPLIT + `
  <path d="M28 62 q26 -20 52 0 q-26 20 -52 0 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="54" cy="62" r="7" fill="var(--accent)"/>
  <line x1="140" y1="62" x2="94" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M84 62 l14 6 v-12 z" fill="var(--accent)"/>
  <text x="80" y="34" text-anchor="middle" font-size="11.5" fill="var(--accent)">入ってくる</text>
  <text x="80" y="102" text-anchor="middle" font-size="11" fill="var(--muted)">see / hear</text>
  <path d="M182 62 q26 -20 52 0 q-26 20 -52 0 z" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <circle cx="208" cy="62" r="7" fill="var(--accent)"/>
  <line x1="248" y1="62" x2="286" y2="62" stroke="var(--accent)" stroke-width="3" stroke-dasharray="6 4"/>
  <path d="M296 62 l-14 6 v-12 z" fill="var(--accent)"/>
  <text x="238" y="34" text-anchor="middle" font-size="11.5" fill="var(--accent)">こちらから向ける</text>
  <text x="238" y="102" text-anchor="middle" font-size="11" fill="var(--muted)">look at / listen to</text>`)
  + CAP('向ける側にだけ、向ける先を示す前置詞が要る'),

/* big / large / great / huge */
wBig: SVG(`
  ${[['big',44,26],['large',110,34],['great',180,42],['huge',256,54]].map(([t,x,r]) =>
    `<rect x="${x-r/2}" y="${74-r}" width="${r}" height="${r}" rx="4" fill="var(--accent)"
       opacity="${0.55+r/160}"/>
     <text x="${x}" y="92" text-anchor="middle" font-size="11" font-family="Georgia,serif"
       fill="var(--muted)">${t}</text>`).join('')}
  <text x="44" y="108" text-anchor="middle" font-size="10" fill="var(--accent)">主観</text>
  <text x="110" y="108" text-anchor="middle" font-size="10" fill="var(--accent)">測れる</text>
  <text x="180" y="108" text-anchor="middle" font-size="10" fill="var(--accent)">程度</text>
  <text x="256" y="108" text-anchor="middle" font-size="10" fill="var(--accent)">圧倒的</text>`)
  + CAP('サイズの大小ではなく、どこを見ているかが違う'),

/* borrow / use ── 持ち出すか、その場か */
wBorrow: SVG(SPLIT + `
  <rect x="26" y="40" width="46" height="44" rx="6" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".55"/>
  <line x1="82" y1="62" x2="118" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M130 62 l-14 6 v-12 z" fill="var(--accent)"/>
  <rect x="136" y="48" width="28" height="28" rx="5" fill="var(--accent)"/>
  <text x="80" y="30" text-anchor="middle" font-size="11.5" fill="var(--accent)">持ち出す</text>
  <text x="90" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">borrow</text>
  <rect x="198" y="40" width="76" height="44" rx="6" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".55"/>
  <rect x="222" y="48" width="28" height="28" rx="5" fill="var(--accent)"/>
  <path d="M236 88 a16 16 0 1 0 0.1 0" fill="none" stroke="var(--accent)" stroke-width="2"
        stroke-dasharray="3 3" opacity=".7"/>
  <text x="236" y="30" text-anchor="middle" font-size="11.5" fill="var(--accent)">その場で使う</text>
  <text x="236" y="118" text-anchor="middle" font-size="11" fill="var(--muted)">use</text>`)
  + CAP('動かせるかどうかで borrow と use が割れる'),

/* hope / wish ── 現実の内か外か */
wHope: SVG(`
  <line x1="160" y1="16" x2="160" y2="104" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
  <circle cx="86" cy="60" r="34" fill="var(--accent)" opacity=".18"/>
  <text x="86" y="64" text-anchor="middle" font-size="13" font-family="Georgia,serif"
        fill="var(--accent)">hope</text>
  <text x="86" y="22" text-anchor="middle" font-size="11" fill="var(--muted)">ありうる</text>
  <circle cx="238" cy="60" r="34" fill="none" stroke="var(--accent)" stroke-width="2.5"
          stroke-dasharray="5 4"/>
  <text x="238" y="64" text-anchor="middle" font-size="13" font-family="Georgia,serif"
        fill="var(--accent)">wish</text>
  <text x="238" y="22" text-anchor="middle" font-size="11" fill="var(--muted)">ありえない</text>
  <text x="160" y="118" text-anchor="middle" font-size="11" fill="var(--muted)">現実の線</text>`)
  + CAP('現実の外だから、wish の後ろは過去形になる'),

/* another / the other / the others */
wOther: SVG(`
  <text x="52" y="22" text-anchor="middle" font-size="11" fill="var(--accent)">another</text>
  ${[36,68,100].map((x,i)=>`<circle cx="${x}" cy="56" r="11" fill="var(--accent)"
     opacity="${i===0?1:0.3}"/>`).join('')}
  <text x="68" y="84" text-anchor="middle" font-size="10" fill="var(--muted)">不特定の1つ</text>
  <line x1="130" y1="16" x2="130" y2="96" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 4"/>
  <text x="176" y="22" text-anchor="middle" font-size="11" fill="var(--accent)">the other</text>
  <circle cx="158" cy="56" r="11" fill="var(--muted)" opacity=".4"/>
  <circle cx="194" cy="56" r="11" fill="var(--accent)"/>
  <text x="176" y="84" text-anchor="middle" font-size="10" fill="var(--muted)">2つのうちの残り</text>
  <line x1="222" y1="16" x2="222" y2="96" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 4"/>
  <text x="270" y="22" text-anchor="middle" font-size="11" fill="var(--accent)">the others</text>
  <circle cx="242" cy="56" r="11" fill="var(--muted)" opacity=".4"/>
  ${[268,294].map(x=>`<circle cx="${x}" cy="56" r="11" fill="var(--accent)"/>`).join('')}
  <text x="272" y="84" text-anchor="middle" font-size="10" fill="var(--muted)">残り全部</text>`)
  + CAP('the が付けば「あれ」と特定できる残り'),

/* few / a few ── a があるかないか */
wFew: SVG(SPLIT + `
  <rect x="34" y="34" width="92" height="52" rx="7" fill="none" stroke="var(--muted)"
        stroke-width="2.5" opacity=".5"/>
  <circle cx="58" cy="70" r="7" fill="var(--accent)" opacity=".4"/>
  <text x="80" y="26" text-anchor="middle" font-size="13" font-family="Georgia,serif"
        fill="var(--muted)">few</text>
  <text x="80" y="104" text-anchor="middle" font-size="11" fill="var(--ng)">ほとんど「ない」</text>
  <rect x="194" y="34" width="92" height="52" rx="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  ${[216,240,264].map(x=>`<circle cx="${x}" cy="70" r="7" fill="var(--accent)"/>`).join('')}
  <text x="240" y="26" text-anchor="middle" font-size="13" font-family="Georgia,serif"
        fill="var(--accent)"><tspan font-weight="700">a</tspan> few</text>
  <text x="240" y="104" text-anchor="middle" font-size="11" fill="var(--ok)">少し「ある」</text>`)
  + CAP('a は【輪郭のある1つ】── 存在が見えている印'),

/* remember / remind */
wRemember: SVG(SPLIT + `
  <circle cx="80" cy="62" r="24" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <path d="M80 44 a12 12 0 1 1 -0.1 0" fill="none" stroke="var(--accent)" stroke-width="2"
        opacity=".6"/>
  <text x="80" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">自分の中で</text>
  <text x="80" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">remember</text>
  <circle cx="196" cy="62" r="16" fill="var(--accent)"/>
  <line x1="218" y1="62" x2="254" y2="62" stroke="var(--accent)" stroke-width="3"/>
  <path d="M266 62 l-14 6 v-12 z" fill="var(--accent)"/>
  <circle cx="286" cy="62" r="16" fill="none" stroke="var(--muted)" stroke-width="2.5" opacity=".7"/>
  <text x="240" y="24" text-anchor="middle" font-size="11.5" fill="var(--accent)">人に思い出させる</text>
  <text x="240" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">remind + 人</text>`)
  + CAP('remind には必ず相手が要る'),

/* cost / take / spend / pay ── 2つの軸 */
wCost: SVG(`
  <line x1="92" y1="18" x2="92" y2="104" stroke="var(--line)" stroke-width="2"/>
  <line x1="24" y1="48" x2="300" y2="48" stroke="var(--line)" stroke-width="2"/>
  <text x="168" y="34" text-anchor="middle" font-size="11" fill="var(--muted)">お金</text>
  <text x="256" y="34" text-anchor="middle" font-size="11" fill="var(--muted)">時間</text>
  <text x="56" y="72" text-anchor="middle" font-size="11" fill="var(--muted)">物が主語</text>
  <text x="56" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">人が主語</text>
  <text x="168" y="74" text-anchor="middle" font-size="14" font-family="Georgia,serif"
        fill="var(--accent)">cost</text>
  <text x="256" y="74" text-anchor="middle" font-size="14" font-family="Georgia,serif"
        fill="var(--accent)">take</text>
  <text x="168" y="100" text-anchor="middle" font-size="14" font-family="Georgia,serif"
        fill="var(--accent)">pay</text>
  <text x="256" y="100" text-anchor="middle" font-size="14" font-family="Georgia,serif"
        fill="var(--accent)">spend</text>`)
  + CAP('「何が主語か」を決めれば、使う語は自動で決まる'),

/* arrive / reach / get to */
wArrive: SVG(`
  ${[['arrive',30,'at / in','var(--accent)'],['reach',58,'（なし）','var(--ok)'],
     ['get',86,'to','var(--accent)']].map(([v,y,p,c]) =>
    `<text x="26" y="${y+5}" font-size="14" font-family="Georgia,serif" fill="var(--text)">${v}</text>
     <text x="112" y="${y+5}" font-size="12" font-family="Georgia,serif" fill="${c}">${p}</text>
     <line x1="176" y1="${y}" x2="228" y2="${y}" stroke="var(--accent)" stroke-width="2.5"/>
     <path d="M240 ${y} l-13 6 v-12 z" fill="var(--accent)"/>
     <rect x="246" y="${y-11}" width="10" height="22" rx="3" fill="var(--accent)"/>`).join('')}
  <text x="112" y="18" font-size="10.5" fill="var(--muted)">前置詞</text>
  <text x="160" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">reach だけが他動詞</text>`)
  + CAP('意味はほぼ同じ。違うのは後ろの形だけ'),

/* hard / hardly ── -ly で意味が変わる */
wLy: SVG(`
  <text x="70" y="42" text-anchor="middle" font-size="15" font-family="Georgia,serif"
        fill="var(--accent)">hard</text>
  <text x="70" y="62" text-anchor="middle" font-size="11" fill="var(--muted)">一生懸命</text>
  <text x="160" y="46" text-anchor="middle" font-size="13" fill="var(--muted)">+ ly</text>
  <line x1="106" y1="40" x2="196" y2="40" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="5 4"/>
  <path d="M208 40 l-14 6 v-12 z" fill="var(--accent)"/>
  <text x="256" y="42" text-anchor="middle" font-size="15" font-family="Georgia,serif"
        fill="var(--accent)">hardly</text>
  <text x="256" y="62" text-anchor="middle" font-size="11" fill="var(--muted)">ほとんど〜ない</text>
  <text x="160" y="92" text-anchor="middle" font-size="11.5" fill="var(--ng)">意味がほぼ反対になる</text>
  <text x="160" y="112" text-anchor="middle" font-size="11" fill="var(--muted)">late / lately ・ near / nearly も同じ</text>`)
  + CAP('-ly は「副詞化」とは限らない'),

/* some / any */
wSome: SVG(SPLIT + `
  <rect x="34" y="32" width="92" height="56" rx="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  ${[58,80,102].map(x=>`<circle cx="${x}" cy="62" r="9" fill="var(--accent)"/>`).join('')}
  <text x="80" y="24" text-anchor="middle" font-size="13" font-family="Georgia,serif"
        fill="var(--accent)">some</text>
  <text x="80" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">あると思っている</text>
  <rect x="194" y="32" width="92" height="56" rx="7" fill="none" stroke="var(--muted)"
        stroke-width="2.5" stroke-dasharray="5 4" opacity=".7"/>
  <text x="240" y="70" text-anchor="middle" font-size="26" fill="var(--muted)" opacity=".6">?</text>
  <text x="240" y="24" text-anchor="middle" font-size="13" font-family="Georgia,serif"
        fill="var(--muted)">any</text>
  <text x="240" y="106" text-anchor="middle" font-size="11" fill="var(--muted)">あるかどうか未定</text>`)
  + CAP('だから勧誘の疑問文には some が使える')


};
