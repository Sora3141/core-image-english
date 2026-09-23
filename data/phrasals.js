/* ============================================================
   句動詞マトリクス ── 基本動詞 × 不変化詞 の交点
   「300個の熟語」ではなく「50個のコアの掛け算」として並べる
   v/p    : 動詞id / 不変化詞id（どちらも教科書ページのid）
   short  : マス目に出す2〜4字の短縮ラベル
   列の並びは、句動詞を作りやすい不変化詞から先に置いている
   ============================================================ */
const MATRIX_VERBS = [
  'get','take','put','come','go','make','have','turn','give','keep',
  'hold','break','run','look','bring','set','stand','let','call','cut',
  'pull','push','carry','fall','catch','leave','pass','work','play','pick'
];
const MATRIX_PARTICLES = [
  'up','out','off','on','down','in','over','back','away','through',
  'into','around','along','across','to','for','at','by','with','from',
  'about','of','under','against','between'
];

const PHRASALS = [
/* --- get ── 至る --- */
{v:'get',p:'up',short:'起きる',ja:'起きる・立ち上がる',en:'I get up at six.',note:'上に至る'},
{v:'get',p:'out',short:'出る',ja:'外に出る・抜け出す',en:'Get out of here.',note:'外に至る'},
{v:'get',p:'off',short:'降りる',ja:'降りる',en:'Get off at the next stop.',note:'分離に至る'},
{v:'get',p:'on',short:'乗る',ja:'（電車に）乗る・うまくやる',en:'I got on the wrong train.',note:'接触に至る'},
{v:'get',p:'down',short:'滅入る',ja:'落ち込ませる・降りる',en:"Don't let it get you down.",note:'下に至らせる'},
{v:'get',p:'in',short:'乗る',ja:'（車に）乗り込む・中に入る',en:'She got in the taxi.',note:'内側に至る'},
{v:'get',p:'over',short:'克服',ja:'克服する・立ち直る',en:"I can't get over it.",note:'越えたところまで至る'},
{v:'get',p:'back',short:'戻る',ja:'戻る・取り戻す',en:'I got back at midnight.',note:'元の位置に至る'},
{v:'get',p:'away',short:'逃げる',ja:'逃げる・離れる',en:'The thief got away.',note:'離れたところに至る'},
{v:'get',p:'through',short:'やり抜く',ja:'乗り切る・電話が通じる',en:'We got through it together.',note:'貫通に至る'},
{v:'get',p:'into',short:'ハマる',ja:'ハマる・中に入る',en:"I'm getting into jazz.",note:'中へ入り込むに至る'},
{v:'get',p:'around',short:'出回る',ja:'出回る・うまく避ける',en:'News gets around fast.',note:'周囲に至る'},
{v:'get',p:'along',short:'仲良く',ja:'うまくやっていく',en:'We get along well.',note:'沿って進むに至る'},
{v:'get',p:'at',short:'言わん',ja:'言わんとする',en:'What are you getting at?',note:'狙いの一点に至る'},
{v:'get',p:'to',short:'着く',ja:'到着する・本題に入る',en:'How do I get to the station?',note:'到達点まで至る'},

/* --- take ── 自分の方へ取る --- */
{v:'take',p:'up',short:'始める',ja:'（趣味などを）始める',en:'He took up tennis.',note:'取って持ち上げる'},
{v:'take',p:'out',short:'持出し',ja:'持ち出す・連れ出す',en:'Take out the trash.',note:'取って外へ'},
{v:'take',p:'off',short:'脱ぐ',ja:'脱ぐ・離陸する',en:'The plane took off.',note:'取って離す'},
{v:'take',p:'on',short:'引受け',ja:'引き受ける',en:'She took on the project.',note:'自分に接触させて取る'},
{v:'take',p:'down',short:'解体',ja:'取り壊す・書き留める',en:'They took down the old sign.',note:'取って下ろす'},
{v:'take',p:'in',short:'理解',ja:'理解する・取り込む',en:"It's a lot to take in.",note:'取って内側へ'},
{v:'take',p:'over',short:'引継ぎ',ja:'引き継ぐ・乗っ取る',en:'She took over the company.',note:'覆いかぶさるように取る'},
{v:'take',p:'back',short:'撤回',ja:'撤回する・返品する',en:'I take back what I said.',note:'言葉を元へ引き戻す'},
{v:'take',p:'away',short:'持ち去',ja:'持ち去る・取り上げる',en:'They took away his license.',note:'取って離していく'},
{v:'take',p:'around',short:'案内',ja:'案内して回る',en:'Let me take you around.',note:'連れてぐるりと回る'},
{v:'take',p:'to',short:'好む',ja:'好きになる・なつく',en:'The cat took to him at once.',note:'気持ちが相手まで届く'},
{v:'take',p:'for',short:'誤認',ja:'〜と思い込む・間違える',en:'I took him for a doctor.',note:'彼と医者を交換して取った'},

/* --- put ── 移動させて置く --- */
{v:'put',p:'up',short:'建てる',ja:'建てる・掲げる・泊める',en:'They put up a new sign.',note:'上に置く'},
{v:'put',p:'out',short:'消す',ja:'（火を）消す・外に出す',en:'He put out the fire.',note:'火を外に出して置く'},
{v:'put',p:'off',short:'延期',ja:'延期する',en:"Let's put off the meeting.",note:'自分から離して置く'},
{v:'put',p:'on',short:'着る',ja:'着る・（電源を）つける',en:'Put on your coat.',note:'接触させて置く'},
{v:'put',p:'down',short:'書く',ja:'下ろす・書き留める',en:'Put down your name here.',note:'紙の上に置く'},
{v:'put',p:'in',short:'費やす',ja:'入れる・（時間を）費やす',en:'She put in ten hours.',note:'内側に置く'},
{v:'put',p:'back',short:'戻す',ja:'元の場所に戻す',en:'Put it back on the shelf.',note:'元の位置に置く'},
{v:'put',p:'away',short:'しまう',ja:'片づける・しまう',en:'Put your toys away.',note:'離した場所に置く'},
{v:'put',p:'through',short:'つなぐ',ja:'電話をつなぐ・経験させる',en:'Please put me through to him.',note:'回線を貫いて置く'},
{v:'put',p:'across',short:'伝える',ja:'考えを伝える',en:'He put his point across well.',note:'相手側へ渡して置く'},

/* --- come ── 基準点へ近づく --- */
{v:'come',p:'up',short:'生じる',ja:'持ち上がる・生じる',en:'A problem came up.',note:'浮かび上がってくる'},
{v:'come',p:'out',short:'露見',ja:'明るみに出る・発売される',en:'The truth came out.',note:'表に出てくる'},
{v:'come',p:'off',short:'取れる',ja:'取れる・うまくいく',en:'The button came off.',note:'離れてくる'},
{v:'come',p:'on',short:'さあ',ja:'さあ来い・急いで',en:'Come on, we’re late!',note:'接触するところまで来い'},
{v:'come',p:'down',short:'下がる',ja:'下がる・降りてくる',en:'Prices are coming down.',note:'下がってくる'},
{v:'come',p:'in',short:'入る',ja:'入ってくる',en:'Come in, please.',note:'内側へ来る'},
{v:'come',p:'over',short:'寄る',ja:'（家に）立ち寄る',en:'Come over for dinner.',note:'こちら側へ越えてくる'},
{v:'come',p:'back',short:'戻る',ja:'戻ってくる',en:'He never came back.',note:'元の位置へ来る'},
{v:'come',p:'through',short:'切抜け',ja:'切り抜ける・届く',en:'She came through the surgery.',note:'貫いて出てくる'},
{v:'come',p:'into',short:'手に入',ja:'手に入れる・入ってくる',en:'He came into a fortune.',note:'中へ入ってくる'},
{v:'come',p:'around',short:'意識',ja:'立ち寄る・意識が戻る',en:'He came around after a minute.',note:'ぐるりと回って戻る'},
{v:'come',p:'along',short:'同行',ja:'一緒に来る・進む',en:'Come along with us.',note:'同じ線を一緒に来る'},
{v:'come',p:'across',short:'出くわ',ja:'偶然出会う・見つける',en:'I came across an old photo.',note:'横切って出会う'},
{v:'come',p:'at',short:'襲う',ja:'襲いかかる',en:'The dog came at me.',note:'私を的にして来る'},
{v:'come',p:'for',short:'取りに',ja:'取りに来る・迎えに来る',en:"I've come for my bag.",note:'それを目指して来る'},
{v:'come',p:'to',short:'意識',ja:'意識を取り戻す・〜に至る',en:'He came to after a minute.',note:'意識のところまで戻る'},

/* --- go ── 基準点から離れる --- */
{v:'go',p:'up',short:'上がる',ja:'上がる・値上がりする',en:'Prices went up again.',note:'上へ進む'},
{v:'go',p:'out',short:'外出',ja:'外出する・（火が）消える',en:'The candle went out.',note:'外へ離れる'},
{v:'go',p:'off',short:'鳴る',ja:'鳴り出す・爆発する・立ち去る',en:'My alarm went off at six.',note:'静けさから分離して出る'},
{v:'go',p:'on',short:'続ける',ja:'続ける・続く',en:'The show must go on.',note:'接触したまま進む'},
{v:'go',p:'down',short:'下がる',ja:'下がる・沈む・停止する',en:'The server went down.',note:'下へ進む'},
{v:'go',p:'in',short:'入る',ja:'中に入る',en:'He went in without knocking.',note:'内側へ進む'},
{v:'go',p:'over',short:'見直し',ja:'見直す・復習する',en:"Let's go over it once more.",note:'上をなぞって越えていく'},
{v:'go',p:'back',short:'戻る',ja:'戻る・さかのぼる',en:'I want to go back home.',note:'元の位置へ進む'},
{v:'go',p:'away',short:'去る',ja:'立ち去る・消える',en:'Go away!',note:'離れて遠ざかる'},
{v:'go',p:'through',short:'経験',ja:'経験する・くまなく調べる',en:'She went through a hard time.',note:'中を貫いて進む'},
{v:'go',p:'into',short:'詳述',ja:'詳しく立ち入る',en:"I won't go into details.",note:'中へ踏み込む'},
{v:'go',p:'around',short:'出回る',ja:'出回る・遠回りする',en:'A rumor is going around.',note:'周囲を回って進む'},
{v:'go',p:'along',short:'同行',ja:'一緒に行く・賛同する',en:"I'll go along with that.",note:'同じ線を一緒に進む'},
{v:'go',p:'at',short:'取組む',ja:'取り掛かる・襲いかかる',en:'She went at it all night.',note:'一点を狙って進む'},
{v:'go',p:'for',short:'選ぶ',ja:'選ぶ・狙う',en:"I'll go for the fish.",note:'それを目指して進む'},
{v:'go',p:'by',short:'過ぎる',ja:'（時が）過ぎる・そばを通る',en:'Time goes by so fast.',note:'そばを過ぎて進む'},
{v:'go',p:'to',short:'行く',ja:'〜へ行く',en:'I go to school by bike.',note:'到達点まで進む'},

/* --- make ── 力を加えて形にする --- */
{v:'make',p:'up',short:'捏造',ja:'でっち上げる・化粧する・仲直り',en:'He made up the whole story.',note:'無から上限まで作り上げる'},
{v:'make',p:'out',short:'判読',ja:'見分ける・理解する',en:"I can't make out his writing.",note:'形を表に出して作る'},
{v:'make',p:'off',short:'逃走',ja:'急いで逃げる',en:'The thief made off with it.',note:'その場から分離して離れる'},
{v:'make',p:'over',short:'改造',ja:'作り変える',en:'They made over the old café.',note:'ひっくり返して作り直す'},
{v:'make',p:'into',short:'変える',ja:'〜に作り変える',en:'They made it into a museum.',note:'別の形の中へ作り込む'},
{v:'make',p:'for',short:'向かう',ja:'〜の方へ向かう',en:'He made for the exit.',note:'そちらへ進路を作る'},

/* --- have ── 自分の圏内にある --- */
{v:'have',p:'on',short:'着てる',ja:'身につけている',en:'She had a red coat on.',note:'体に接触した状態で持つ'},
{v:'have',p:'out',short:'抜く',ja:'（歯などを）抜いてもらう',en:'I had a tooth out.',note:'外に出た状態で持つ'},
{v:'have',p:'over',short:'招く',ja:'（家に）招く',en:'We had them over for dinner.',note:'こちら側へ越えさせて持つ'},
{v:'have',p:'back',short:'返して',ja:'返してもらう',en:'Can I have my pen back?',note:'元の位置に戻った状態で持つ'},

/* --- turn ── 向きを変える --- */
{v:'turn',p:'up',short:'現れる',ja:'現れる・音量を上げる',en:'He turned up an hour late.',note:'向きが変わって浮上する'},
{v:'turn',p:'out',short:'判明',ja:'結果として〜だと分かる',en:'It turned out to be true.',note:'裏返して表が出る'},
{v:'turn',p:'off',short:'消す',ja:'（電源を）消す',en:'Turn off the TV.',note:'回して分離させる'},
{v:'turn',p:'on',short:'つける',ja:'（電源を）つける',en:'Turn on the light.',note:'回して接触させる'},
{v:'turn',p:'down',short:'断る',ja:'断る・音量を下げる',en:'She turned down the offer.',note:'向きを下に変える＝却下'},
{v:'turn',p:'in',short:'提出',ja:'提出する・寝る',en:'Turn in your report by Friday.',note:'内側へ向きを変えて収める'},
{v:'turn',p:'over',short:'裏返す',ja:'裏返す・引き渡す',en:'Turn over the card.',note:'ひっくり返す'},
{v:'turn',p:'back',short:'引返す',ja:'引き返す',en:'We had to turn back.',note:'元の向きへ戻す'},
{v:'turn',p:'away',short:'追返す',ja:'追い返す・顔をそむける',en:'They turned us away.',note:'向きを変えて離す'},
{v:'turn',p:'into',short:'変わる',ja:'〜に変わる',en:'Water turns into ice.',note:'別の形の中へ向きを変える'},
{v:'turn',p:'around',short:'振向く',ja:'振り向く・好転する',en:'The company turned around.',note:'ぐるりと向きが変わる'},
{v:'turn',p:'to',short:'頼る',ja:'（人に）頼る・〜に変わる',en:'He turned to me for help.',note:'その相手の方へ向く'},
{v:'turn',p:'against',short:'敵対',ja:'敵に回る',en:'They turned against him.',note:'向きを変えて逆らう'},

/* --- give ── 手放して渡す --- */
{v:'give',p:'up',short:'諦める',ja:'あきらめる・やめる',en:"Don't give up.",note:'上へ差し出して手放す'},
{v:'give',p:'out',short:'配る',ja:'配る・尽きる',en:'They gave out free samples.',note:'外へ配り出す'},
{v:'give',p:'off',short:'放つ',ja:'（においなどを）放つ',en:'The fire gave off smoke.',note:'分離して放つ'},
{v:'give',p:'in',short:'屈する',ja:'屈する・降参する',en:'He finally gave in.',note:'内側へ折れる'},
{v:'give',p:'back',short:'返す',ja:'返す',en:'Give it back to me.',note:'元の持ち主へ返す'},
{v:'give',p:'away',short:'譲る',ja:'ただであげる・秘密を漏らす',en:'She gave away her old books.',note:'手元から離して渡す'},

/* --- keep ── そのまま保ち続ける --- */
{v:'keep',p:'up',short:'ついて',ja:'ついていく・維持する',en:"I can't keep up with you.",note:'同じ高さを保ち続ける'},
{v:'keep',p:'out',short:'入れぬ',ja:'中に入れない',en:'Keep out!',note:'外の状態を保つ'},
{v:'keep',p:'off',short:'避ける',ja:'近づけない・控える',en:'Keep off the grass.',note:'分離を保つ'},
{v:'keep',p:'on',short:'し続',ja:'し続ける',en:'Keep on trying.',note:'接触を保ち続ける'},
{v:'keep',p:'down',short:'抑える',ja:'抑える・低く保つ',en:'Keep your voice down.',note:'低い状態を保つ'},
{v:'keep',p:'back',short:'引留め',ja:'引き留める・隠す',en:'He kept back the truth.',note:'後ろに保つ'},
{v:'keep',p:'away',short:'遠ざけ',ja:'遠ざける・近づかない',en:'Keep away from the fire.',note:'離れた状態を保つ'},
{v:'keep',p:'at',short:'粘る',ja:'粘り強く続ける',en:'Keep at it!',note:'一点に狙いを保つ'},
{v:'keep',p:'to',short:'守る',ja:'（約束などを）守る',en:'Keep to the schedule.',note:'その線に沿って保つ'},

/* --- hold ── つかんで動かさない --- */
{v:'hold',p:'up',short:'支える',ja:'支える・遅らせる・強盗する',en:'Traffic held us up.',note:'上に支えて止める'},
{v:'hold',p:'out',short:'持ちこ',ja:'持ちこたえる・差し出す',en:'Can you hold out a bit longer?',note:'外へ保ち続ける'},
{v:'hold',p:'off',short:'遅らせ',ja:'遅らせる・寄せつけない',en: "Let's hold off on that.",note:'分離を保つ'},
{v:'hold',p:'on',short:'待つ',ja:'ちょっと待つ・しがみつく',en:'Hold on a second.',note:'掴んだまま離さない'},
{v:'hold',p:'down',short:'押さえ',ja:'押さえつける・（職を）続ける',en:'Hold him down.',note:'下に押さえて動かさない'},
{v:'hold',p:'back',short:'抑える',ja:'抑える・ためらう',en:'He held back his tears.',note:'後ろに留めて出させない'},

/* --- break ── 続いていたものを断ち切る --- */
{v:'break',p:'up',short:'別れる',ja:'別れる・解散する',en:'They broke up last month.',note:'関係を断って分かれる'},
{v:'break',p:'out',short:'勃発',ja:'（戦争などが）起こる・脱出する',en:'A fire broke out.',note:'内から破って外へ'},
{v:'break',p:'off',short:'中断',ja:'途中でやめる・折れる',en:'He broke off the conversation.',note:'切って分離する'},
{v:'break',p:'down',short:'故障',ja:'故障する・泣き崩れる',en:'My car broke down.',note:'断たれて倒れる'},
{v:'break',p:'in',short:'侵入',ja:'押し入る・口を挟む',en:'Someone broke in last night.',note:'破って内側へ'},
{v:'break',p:'through',short:'突破',ja:'突破する',en:'The sun broke through the clouds.',note:'破って貫く'},
{v:'break',p:'into',short:'侵入',ja:'押し入る・急に始める',en:'They broke into the house.',note:'破って中へ入り込む'},
{v:'break',p:'away',short:'離脱',ja:'離脱する・振り切る',en:'He broke away from the group.',note:'断って離れていく'},

/* --- run ── なめらかに動き続ける --- */
{v:'run',p:'up',short:'積上げ',ja:'（借金などを）積み上げる',en:'He ran up a huge bill.',note:'上へ動き続けて積む'},
{v:'run',p:'out',short:'切らす',ja:'切らす・尽きる',en:'We ran out of milk.',note:'中身が走って外へ'},
{v:'run',p:'off',short:'逃げる',ja:'逃げ出す・印刷する',en:'He ran off with the money.',note:'分離して走り去る'},
{v:'run',p:'on',short:'動き続',ja:'動き続ける・長引く',en:'The meeting ran on.',note:'接触したまま動き続ける'},
{v:'run',p:'down',short:'衰える',ja:'衰える・ひく・けなす',en:'The battery is running down.',note:'下へ動いて力尽きる'},
{v:'run',p:'over',short:'ひく',ja:'車でひく・ざっと見る',en:'A car ran over the cat.',note:'上を越えて走る'},
{v:'run',p:'away',short:'逃走',ja:'逃げる・家出する',en:'The dog ran away.',note:'走って離れていく'},
{v:'run',p:'through',short:'ざっと',ja:'ざっと目を通す・通し稽古',en: "Let's run through it once.",note:'端から端まで走り抜ける'},
{v:'run',p:'into',short:'出くわ',ja:'ばったり会う・ぶつかる',en:'I ran into an old friend.',note:'走って中へ突っ込む'},
{v:'run',p:'around',short:'走回る',ja:'走り回る・忙しくする',en:"I've been running around all day.",note:'周囲を走り回る'},
{v:'run',p:'across',short:'出くわ',ja:'偶然見つける',en:'I ran across this book.',note:'横切って出会う'},
{v:'run',p:'along',short:'行きな',ja:'行きなさい',en:'Run along now.',note:'その線に沿って進め'},
{v:'run',p:'for',short:'立候補',ja:'立候補する',en:"He's running for mayor.",note:'それを目指して走る'},
{v:'run',p:'by',short:'相談',ja:'（案を）相談する',en:'Let me run it by my boss.',note:'相手のそばを通して見せる'},

/* --- look ── 意識して視線を向ける --- */
{v:'look',p:'up',short:'調べる',ja:'調べる・見上げる・好転する',en:'Look it up in the dictionary.',note:'一覧から引き上げて見る'},
{v:'look',p:'out',short:'注意',ja:'気をつける',en:'Look out! A car!',note:'外へ注意を向ける'},
{v:'look',p:'on',short:'傍観',ja:'傍観する・みなす',en:'They just looked on.',note:'接触せずそばで見る'},
{v:'look',p:'down',short:'見下す',ja:'見下ろす・見下す',en:"Don't look down on him.",note:'上から下へ視線を向ける'},
{v:'look',p:'in',short:'立寄る',ja:'ちょっと立ち寄る',en:"I'll look in on my way home.",note:'内側へ目を向ける'},
{v:'look',p:'over',short:'一読',ja:'ざっと目を通す',en:'Could you look over this?',note:'上をなぞって見る'},
{v:'look',p:'back',short:'振返る',ja:'振り返る・回想する',en:'Looking back, it was worth it.',note:'元の方へ視線を戻す'},
{v:'look',p:'away',short:'そらす',ja:'目をそらす',en:'She looked away.',note:'視線を離していく'},
{v:'look',p:'through',short:'目通し',ja:'ざっと目を通す・見透かす',en:'He looked through the report.',note:'端から端まで見る'},
{v:'look',p:'into',short:'調査',ja:'調査する',en:"We'll look into the matter.",note:'中まで目を入れる'},
{v:'look',p:'around',short:'見回る',ja:'見て回る・見回す',en:"I'm just looking around.",note:'周囲へ視線を回す'},
{v:'look',p:'for',short:'探す',ja:'探す',en:"I'm looking for my keys.",note:'それを目指して見る'},
{v:'look',p:'at',short:'見る',ja:'（じっと）見る',en:'Look at this.',note:'一点に視線を向ける'},
{v:'look',p:'to',short:'期待',ja:'頼りにする・期待する',en:'We look to you for guidance.',note:'その相手まで視線を届かせる'},

/* --- bring ── こちらへ持ってくる --- */
{v:'bring',p:'up',short:'持出す',ja:'話題に出す・育てる',en:'Don’t bring that up again.',note:'見えるところへ浮上させる'},
{v:'bring',p:'out',short:'引出す',ja:'引き出す・発売する',en:'It brings out the best in him.',note:'表へ運び出す'},
{v:'bring',p:'on',short:'招く',ja:'引き起こす',en:'Stress brought on the illness.',note:'接触させて呼び込む'},
{v:'bring',p:'down',short:'倒す',ja:'倒す・下げる',en:'The scandal brought him down.',note:'下へ運ぶ'},
{v:'bring',p:'in',short:'導入',ja:'導入する・稼ぐ',en:'They brought in a new rule.',note:'内側へ運び込む'},
{v:'bring',p:'back',short:'思出す',ja:'返す・思い出させる',en:'The song brings back memories.',note:'元の位置へ運び戻す'},
{v:'bring',p:'over',short:'持参',ja:'持ってくる・連れてくる',en:'Bring your friend over.',note:'こちら側へ越えさせる'},
{v:'bring',p:'along',short:'同伴',ja:'連れてくる・持ってくる',en:'Bring the kids along.',note:'同じ線を一緒に運ぶ'},

/* --- set ── 定位置に据える --- */
{v:'set',p:'up',short:'設置',ja:'設置する・立ち上げる',en:'They set up a new company.',note:'上に据えて立てる'},
{v:'set',p:'out',short:'出発',ja:'出発する・着手する',en:'We set out at dawn.',note:'定位置から外へ'},
{v:'set',p:'off',short:'出発',ja:'出発する・引き起こす',en:'The alarm set off a panic.',note:'定位置から分離して動く'},
{v:'set',p:'down',short:'記す',ja:'書き留める・下ろす',en:'He set down the rules.',note:'紙の上に据える'},
{v:'set',p:'in',short:'始まる',ja:'（悪いことが）始まる',en:'Winter has set in.',note:'内側に居座る'},
{v:'set',p:'back',short:'遅らせ',ja:'遅らせる・後退させる',en:'The rain set us back a week.',note:'元の位置へ押し戻す'},

/* --- stand ── 倒れずに立っている --- */
{v:'stand',p:'up',short:'立つ',ja:'立ち上がる・すっぽかす',en:'Please stand up.',note:'上へ立つ'},
{v:'stand',p:'out',short:'目立つ',ja:'目立つ',en:'Her work really stands out.',note:'外へ突き出て立つ'},
{v:'stand',p:'in',short:'代役',ja:'代役を務める',en:'Can you stand in for me?',note:'その位置に入って立つ'},
{v:'stand',p:'back',short:'下がる',ja:'後ろに下がる・距離を置く',en:'Stand back, please.',note:'後ろへ立つ'},
{v:'stand',p:'around',short:'ぶらつ',ja:'立ってぶらぶらする',en:'They stood around talking.',note:'周囲に立っている'},
{v:'stand',p:'for',short:'表す',ja:'〜を表す・支持する',en:'What does UK stand for?',note:'その代わりに立つ'},
{v:'stand',p:'by',short:'待機',ja:'待機する・味方する',en:"I'll stand by you.",note:'すぐそばに立つ'},
{v:'stand',p:'against',short:'対抗',ja:'立ち向かう',en:'He stood against the plan.',note:'逆らって立つ'},

/* --- let ── 妨げない --- */
{v:'let',p:'up',short:'弱まる',ja:'弱まる・手を緩める',en:'The rain finally let up.',note:'上へ力を抜く'},
{v:'let',p:'out',short:'漏らす',ja:'外へ出す・（声を）漏らす',en:'She let out a scream.',note:'外へ出るのを妨げない'},
{v:'let',p:'off',short:'見逃す',ja:'見逃す・降ろす',en:'The judge let him off.',note:'分離するのを妨げない'},
{v:'let',p:'on',short:'漏らす',ja:'秘密を漏らす',en:"Don't let on that you know.",note:'表に接触させてしまう'},
{v:'let',p:'down',short:'失望',ja:'がっかりさせる',en:'Don’t let me down.',note:'下へ落ちるのを止めない'},
{v:'let',p:'in',short:'入れる',ja:'中に入れる',en:'Let me in!',note:'内側へ入るのを妨げない'},

/* --- call ── 声を届かせる --- */
{v:'call',p:'up',short:'電話',ja:'電話する・呼び出す',en:'I called him up last night.',note:'声を上げて呼ぶ'},
{v:'call',p:'out',short:'呼出す',ja:'大声で呼ぶ・呼び出す',en:'She called out my name.',note:'声を外へ出す'},
{v:'call',p:'off',short:'中止',ja:'中止する',en:'They called off the game.',note:'予定から切り離す'},
{v:'call',p:'on',short:'訪ねる',ja:'訪ねる・指名する',en:'I called on my aunt.',note:'相手にはりついて声をかける'},
{v:'call',p:'in',short:'呼入れ',ja:'呼び入れる・電話を入れる',en:'He called in sick.',note:'内側へ声を入れる'},
{v:'call',p:'back',short:'折返し',ja:'折り返し電話する',en:"I'll call you back.",note:'元の相手へ返す'},
{v:'call',p:'around',short:'かけ回',ja:'あちこち電話する',en:'I called around to find one.',note:'周囲に声を回す'},
{v:'call',p:'for',short:'必要',ja:'必要とする・求める',en:'This calls for a celebration.',note:'それを目指して声を出す'},
{v:'call',p:'at',short:'立寄る',ja:'（場所に）立ち寄る',en:'The train calls at Kyoto.',note:'その一点に声をかける'},

/* --- cut ── 刃で一気に断つ --- */
{v:'cut',p:'up',short:'刻む',ja:'切り刻む',en:'Cut up the vegetables.',note:'すっかり切り分ける'},
{v:'cut',p:'out',short:'省く',ja:'省く・切り抜く・やめる',en:'Cut out the sugar.',note:'外へ切り出してなくす'},
{v:'cut',p:'off',short:'断つ',ja:'切り離す・遮断する',en:'They cut off the power.',note:'切って分離する'},
{v:'cut',p:'down',short:'減らす',ja:'減らす・切り倒す',en:'Cut down on coffee.',note:'下へ切り落として減らす'},
{v:'cut',p:'in',short:'割込み',ja:'割り込む',en:'A car cut in front of me.',note:'切って内側へ入る'},
{v:'cut',p:'back',short:'削減',ja:'削減する',en:'The company cut back on staff.',note:'元の水準まで切り戻す'},
{v:'cut',p:'through',short:'突切る',ja:'突っ切る・切り抜ける',en: "Let's cut through the park.",note:'切って貫く'},
{v:'cut',p:'across',short:'横切る',ja:'近道して横切る',en:'We cut across the field.',note:'切って横断する'},
{v:'cut',p:'into',short:'切込む',ja:'切り込む・割り込む',en:'It cut into my free time.',note:'切って中へ入り込む'},

/* --- pull ── 自分の方へ引く --- */
{v:'pull',p:'up',short:'停まる',ja:'車を停める・引き上げる',en:'A taxi pulled up.',note:'引いて上げて止める'},
{v:'pull',p:'out',short:'撤退',ja:'引き抜く・撤退する',en:'They pulled out of the deal.',note:'引いて外へ'},
{v:'pull',p:'off',short:'やり遂',ja:'やってのける・脱ぐ',en:'He pulled it off.',note:'引ききって外す'},
{v:'pull',p:'on',short:'羽織る',ja:'引っ張って着る',en:'She pulled on her boots.',note:'引いて体に接触させる'},
{v:'pull',p:'down',short:'解体',ja:'取り壊す・引き下げる',en:'They pulled down the old building.',note:'引いて下ろす'},
{v:'pull',p:'in',short:'到着',ja:'（電車が）到着する',en:'The train pulled in on time.',note:'引いて内側へ'},
{v:'pull',p:'over',short:'寄せる',ja:'路肩に寄せて停める',en:'Pull over here.',note:'越えて脇へ引く'},
{v:'pull',p:'back',short:'撤退',ja:'引き下がる・撤退する',en:'The troops pulled back.',note:'元の位置へ引く'},
{v:'pull',p:'away',short:'離れる',ja:'（車が）走り去る・引き離す',en:'The bus pulled away.',note:'引いて離れていく'},
{v:'pull',p:'through',short:'回復',ja:'切り抜ける・回復する',en:'She pulled through the illness.',note:'引いて貫き通る'},
{v:'pull',p:'into',short:'入る',ja:'（車が）入っていく',en:'We pulled into a parking lot.',note:'引いて中へ入る'},

/* --- push ── 自分から離す方へ押す --- */
{v:'push',p:'up',short:'押上げ',ja:'押し上げる・値を上げる',en:'Demand pushed up prices.',note:'押して上へ'},
{v:'push',p:'out',short:'押出す',ja:'押し出す・追い出す',en:'They pushed him out.',note:'押して外へ'},
{v:'push',p:'off',short:'出発',ja:'出発する・離岸する',en:'We pushed off at dawn.',note:'押して分離する'},
{v:'push',p:'on',short:'進む',ja:'先へ進み続ける',en:'Let’s push on a bit further.',note:'接触したまま押し進む'},
{v:'push',p:'down',short:'押下げ',ja:'押し下げる',en:'They pushed down costs.',note:'押して下へ'},
{v:'push',p:'in',short:'割込む',ja:'列に割り込む',en:'Don’t push in!',note:'押して内側へ'},
{v:'push',p:'back',short:'反発',ja:'押し戻す・反発する',en:'Staff pushed back on the plan.',note:'元の方へ押し返す'},
{v:'push',p:'away',short:'押のけ',ja:'押しのける・遠ざける',en:'He pushed her away.',note:'押して離していく'},
{v:'push',p:'through',short:'押通す',ja:'押し通す・成立させる',en:'They pushed the bill through.',note:'押して貫く'},
{v:'push',p:'around',short:'こき使',ja:'こき使う・いじめる',en:'Don’t let them push you around.',note:'あちこち押して回す'},
{v:'push',p:'for',short:'要求',ja:'強く求める',en:'They pushed for change.',note:'それを目指して押す'},

/* --- carry ── 支えながら運ぶ --- */
{v:'carry',p:'out',short:'実行',ja:'実行する・遂行する',en:'They carried out the plan.',note:'外の世界へ運び出す'},
{v:'carry',p:'on',short:'続ける',ja:'続ける',en:'Carry on with your work.',note:'接触したまま運び続ける'},
{v:'carry',p:'off',short:'やり遂',ja:'やってのける・さらう',en:'She carried it off perfectly.',note:'運んで持ち去る'},
{v:'carry',p:'over',short:'持越し',ja:'持ち越す',en:'The balance carries over.',note:'越えて次へ運ぶ'},
{v:'carry',p:'away',short:'夢中',ja:'夢中にさせる',en:'Don’t get carried away.',note:'運ばれて離れていく'},
{v:'carry',p:'through',short:'やり抜',ja:'最後までやり抜く',en:'He carried the project through.',note:'運んで貫き通す'},

/* --- fall ── 支えを失って落ちる --- */
{v:'fall',p:'down',short:'倒れる',ja:'転ぶ・倒れる',en:'He fell down the stairs.',note:'下へ落ちる'},
{v:'fall',p:'off',short:'落ちる',ja:'落ちる・減る',en:'Sales fell off sharply.',note:'離れて落ちる'},
{v:'fall',p:'out',short:'仲違い',ja:'仲たがいする・抜け落ちる',en:'They fell out over money.',note:'枠の外へ落ちる'},
{v:'fall',p:'over',short:'転ぶ',ja:'つまずいて倒れる',en:'She tripped and fell over.',note:'越えて倒れる'},
{v:'fall',p:'back',short:'後退',ja:'後退する・頼る',en:'The army fell back.',note:'元の位置へ落ちる'},
{v:'fall',p:'through',short:'流れる',ja:'（計画が）だめになる',en:'The deal fell through.',note:'底が抜けて落ちる'},
{v:'fall',p:'into',short:'陥る',ja:'〜に陥る・分類される',en:'He fell into bad habits.',note:'中へ落ち込む'},
{v:'fall',p:'in',short:'崩れる',ja:'崩れ落ちる',en:'The roof fell in.',note:'内側へ落ちる'},
{v:'fall',p:'for',short:'惚れる',ja:'惚れる・だまされる',en:'I fell for it completely.',note:'それを目指して落ちる'},

/* --- catch ── 動いているものを捕らえる --- */
{v:'catch',p:'up',short:'追付く',ja:'追いつく・近況を話す',en:"I'll catch up with you later.",note:'捕まえて同じ位置まで上がる'},
{v:'catch',p:'on',short:'流行る',ja:'人気が出る・理解する',en:'The trend caught on quickly.',note:'接触して広がる'},
{v:'catch',p:'out',short:'見破る',ja:'見破る・不意をつく',en:'The question caught me out.',note:'外に引き出して捕らえる'},

/* --- leave ── そのままにして離れる --- */
{v:'leave',p:'out',short:'除外',ja:'除外する・書き落とす',en:'You left out my name.',note:'枠の外に残す'},
{v:'leave',p:'off',short:'やめる',ja:'やめる・止まる',en:'Where did we leave off?',note:'切り離したまま離れる'},
{v:'leave',p:'on',short:'つけっ',ja:'つけっぱなしにする',en:'You left the light on.',note:'接触したまま離れる'},
{v:'leave',p:'over',short:'余る',ja:'余る・残る',en:'There’s some food left over.',note:'越えて残る'},
{v:'leave',p:'for',short:'出発',ja:'〜へ向けて出発する',en:'She left for Osaka.',note:'そちらを目指して離れる'},

/* --- pass ── 通り過ぎる --- */
{v:'pass',p:'up',short:'見送る',ja:'（機会を）逃す',en:'Don’t pass up this chance.',note:'上を通り過ぎてしまう'},
{v:'pass',p:'out',short:'気絶',ja:'気を失う・配る',en:'He passed out from the heat.',note:'意識が外へ出ていく'},
{v:'pass',p:'on',short:'伝える',ja:'伝える・次へ回す・断る',en:'Please pass on the message.',note:'接触を保って次へ渡す'},
{v:'pass',p:'off',short:'偽る',ja:'〜と偽る・収まる',en:'He passed it off as his own.',note:'すり替えて分離する'},
{v:'pass',p:'over',short:'見送る',ja:'見送る・無視する',en:'She was passed over for promotion.',note:'上を越えて通り過ぎる'},
{v:'pass',p:'by',short:'通過',ja:'そばを通り過ぎる',en:'He passed by without a word.',note:'すぐそばを過ぎる'},
{v:'pass',p:'away',short:'逝去',ja:'亡くなる',en:'He passed away last year.',note:'過ぎて離れていく'},
{v:'pass',p:'through',short:'通過',ja:'通り抜ける・経験する',en:'We passed through Kyoto.',note:'中を貫いて過ぎる'},
{v:'pass',p:'around',short:'回す',ja:'順に回す',en:'Pass the photos around.',note:'周囲へ順に渡す'},
{v:'pass',p:'for',short:'通用',ja:'〜として通用する',en:'He could pass for a student.',note:'その代わりとして通る'},

/* --- work ── 機能して結果を出す --- */
{v:'work',p:'out',short:'解決',ja:'解決する・運動する・うまくいく',en:'It all worked out fine.',note:'働きかけて出し切る'},
{v:'work',p:'on',short:'取組む',ja:'取り組む',en:"I'm working on it.",note:'対象にはりついて働く'},
{v:'work',p:'up',short:'高める',ja:'（気持ちを）高める・作り上げる',en:'He worked up the courage.',note:'上限まで働かせる'},
{v:'work',p:'off',short:'発散',ja:'（借金や怒りを）解消する',en:'She worked off her stress.',note:'働いて切り離す'},
{v:'work',p:'through',short:'やり抜',ja:'やり抜く・整理する',en:'We worked through the issues.',note:'働いて貫き通る'},
{v:'work',p:'at',short:'励む',ja:'努力する',en:'Keep working at it.',note:'一点を狙って働く'},
{v:'work',p:'around',short:'回避',ja:'うまく回避する',en:'We can work around that.',note:'周囲を回って進む'},

/* --- play ── 枠の中で自由に動く --- */
{v:'play',p:'back',short:'再生',ja:'再生する',en:'Play back the recording.',note:'元へ戻して流す'},
{v:'play',p:'down',short:'軽視',ja:'軽く見せる・控えめに言う',en:'He played down the risk.',note:'下げて見せる'},
{v:'play',p:'up',short:'強調',ja:'強調する・不調になる',en:'She played up her experience.',note:'上へ持ち上げて見せる'},
{v:'play',p:'on',short:'つけ込',ja:'つけ込む・利用する',en:'It plays on people’s fears.',note:'接触して働きかける'},
{v:'play',p:'along',short:'合わせ',ja:'話を合わせる',en:'Just play along for now.',note:'同じ線を一緒に進む'},
{v:'play',p:'around',short:'ふざけ',ja:'ふざける・いじってみる',en:'Stop playing around.',note:'周囲で自由に動く'},
{v:'play',p:'with',short:'いじる',ja:'いじる・もてあそぶ',en:"I'm just playing with the idea.",note:'一緒に手元で動かす'},

/* --- pick ── 選んでつまみ上げる --- */
{v:'pick',p:'up',short:'拾う',ja:'拾う・迎えに行く・身につける',en:"I'll pick you up at seven.",note:'つまんで上げる'},
{v:'pick',p:'out',short:'選出す',ja:'選び出す・見分ける',en:'Pick out the best one.',note:'つまんで外へ出す'},
{v:'pick',p:'on',short:'いじめ',ja:'いじめる・目をつける',en:'Stop picking on him.',note:'一人に狙いを定めてつつく'},
{v:'pick',p:'at',short:'つつく',ja:'少しずつつつく',en:'She just picked at her food.',note:'一点をつまむ'}
];
