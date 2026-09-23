/* ============================================================
   句動詞マトリクス ── 基本動詞 × 不変化詞 の交点
   「300個の熟語」ではなく「50個のコアの掛け算」として並べる
   v/p    : 動詞id / 不変化詞id（どちらも教科書ページのid）
   short  : マス目に出す2〜4字の短縮ラベル
   ============================================================ */
const MATRIX_VERBS     = ['get','take','put','come','go','make','have','turn'];
const MATRIX_PARTICLES = ['on','off','up','down','out','in','over','to','for','at'];

const PHRASALS = [
/* --- get ── 至る --- */
{v:'get', p:'on',   short:'乗る',   ja:'（電車・バスに）乗る／うまくやる', en:'I got on the wrong train.',      note:'接触に至る'},
{v:'get', p:'off',  short:'降りる', ja:'降りる',                          en:'Get off at the next stop.',       note:'分離に至る'},
{v:'get', p:'up',   short:'起きる', ja:'起きる・立ち上がる',              en:'I get up at six.',                note:'上に至る'},
{v:'get', p:'down', short:'滅入る', ja:'落ち込ませる・降りる',            en:"Don't let it get you down.",      note:'下に至らせる'},
{v:'get', p:'out',  short:'出る',   ja:'外に出る・抜け出す',              en:'Get out of here.',                note:'外に至る'},
{v:'get', p:'in',   short:'乗る',   ja:'（車に）乗り込む・中に入る',      en:'She got in the taxi.',            note:'内側に至る'},
{v:'get', p:'over', short:'克服',   ja:'克服する・立ち直る',              en:"I can't get over it.",            note:'越えたところまで至る'},
{v:'get', p:'to',   short:'着く',   ja:'到着する・本題に入る',            en:'How do I get to the station?',    note:'到達点まで至る'},
{v:'get', p:'at',   short:'言わん', ja:'言わんとする',                    en:'What are you getting at?',        note:'狙いの一点に至る'},

/* --- take ── 自分の方へ取る --- */
{v:'take', p:'on',   short:'引受け', ja:'引き受ける',                     en:'She took on the project.',        note:'自分に接触させて取る'},
{v:'take', p:'off',  short:'脱ぐ',   ja:'脱ぐ・離陸する',                 en:'The plane took off.',             note:'取って離す'},
{v:'take', p:'up',   short:'始める', ja:'（趣味などを）始める',           en:'He took up tennis.',              note:'取って持ち上げる'},
{v:'take', p:'down', short:'解体',   ja:'取り壊す・書き留める',           en:'They took down the old building.', note:'取って下ろす'},
{v:'take', p:'out',  short:'持出し', ja:'持ち出す・連れ出す',             en:'Take out the trash.',             note:'取って外へ'},
{v:'take', p:'in',   short:'理解',   ja:'理解する・取り込む',             en:"It's a lot to take in.",          note:'取って内側へ'},
{v:'take', p:'over', short:'引継ぎ', ja:'引き継ぐ・乗っ取る',             en:'She took over the company.',      note:'覆いかぶさるように取る'},
{v:'take', p:'to',   short:'好む',   ja:'好きになる・なつく',             en:'The cat took to him at once.',    note:'相手のところまで気持ちを取り運ぶ'},
{v:'take', p:'for',  short:'誤認',   ja:'〜と思い込む・間違える',         en:'I took him for a doctor.',        note:'彼と医者を交換して取った'},

/* --- put ── 移動させて置く --- */
{v:'put', p:'on',   short:'着る',   ja:'着る・（電源を）つける',          en:'Put on your coat.',               note:'接触させて置く'},
{v:'put', p:'off',  short:'延期',   ja:'延期する',                        en:"Let's put off the meeting.",      note:'自分から離して置く'},
{v:'put', p:'up',   short:'建てる', ja:'建てる・掲げる・泊める',          en:'They put up a new sign.',         note:'上に置く'},
{v:'put', p:'down', short:'書く',   ja:'下ろす・書き留める',              en:'Put down your name here.',        note:'紙の上に置く'},
{v:'put', p:'out',  short:'消す',   ja:'（火を）消す・外に出す',          en:'He put out the fire.',            note:'火を外に出して置く'},
{v:'put', p:'in',   short:'費やす', ja:'入れる・（時間を）費やす',        en:'She put in ten hours.',           note:'内側に置く'},

/* --- come ── 基準点へ近づく --- */
{v:'come', p:'on',   short:'さあ',   ja:'さあ来い・急いで',               en:'Come on, we’re late!',            note:'接触するところまで来い'},
{v:'come', p:'off',  short:'取れる', ja:'取れる・うまくいく',             en:'The button came off.',            note:'離れてくる'},
{v:'come', p:'up',   short:'生じる', ja:'持ち上がる・生じる',             en:'A problem came up.',              note:'浮かび上がってくる'},
{v:'come', p:'down', short:'下がる', ja:'下がる・降りてくる',             en:'Prices are coming down.',         note:'下がってくる'},
{v:'come', p:'out',  short:'露見',   ja:'明るみに出る・発売される',       en:'The truth came out.',             note:'表に出てくる'},
{v:'come', p:'in',   short:'入る',   ja:'入ってくる',                      en:'Come in, please.',                note:'内側へ来る'},
{v:'come', p:'over', short:'寄る',   ja:'（家に）立ち寄る',               en:'Come over for dinner.',           note:'こちら側へ越えてくる'},
{v:'come', p:'to',   short:'意識',   ja:'意識を取り戻す・〜に至る',       en:'He came to after a minute.',      note:'意識のところまで戻ってくる'},
{v:'come', p:'for',  short:'取りに', ja:'取りに来る・迎えに来る',         en:"I've come for my bag.",           note:'それを目指して来る'},
{v:'come', p:'at',   short:'襲う',   ja:'襲いかかる',                      en:'The dog came at me.',             note:'私を的にして来る'},

/* --- go ── 基準点から離れる --- */
{v:'go', p:'on',   short:'続ける', ja:'続ける・続く',                     en:'The show must go on.',            note:'接触したまま進む'},
{v:'go', p:'off',  short:'鳴る',   ja:'鳴り出す・爆発する・立ち去る',     en:'My alarm went off at six.',       note:'静けさから分離して出る'},
{v:'go', p:'up',   short:'上がる', ja:'上がる・値上がりする',             en:'Prices went up again.',           note:'上へ進む'},
{v:'go', p:'down', short:'下がる', ja:'下がる・沈む・停止する',           en:'The server went down.',           note:'下へ進む'},
{v:'go', p:'out',  short:'外出',   ja:'外出する・（火が）消える',         en:'The candle went out.',            note:'外へ離れる'},
{v:'go', p:'in',   short:'入る',   ja:'中に入る',                          en:'He went in without knocking.',    note:'内側へ進む'},
{v:'go', p:'over', short:'見直し', ja:'見直す・復習する',                 en:"Let's go over it once more.",     note:'上をなぞって越えていく'},
{v:'go', p:'to',   short:'行く',   ja:'〜へ行く',                          en:'I go to school by bike.',         note:'到達点まで進む'},
{v:'go', p:'for',  short:'選ぶ',   ja:'選ぶ・狙う',                        en:"I'll go for the fish.",           note:'それを目指して進む'},
{v:'go', p:'at',   short:'取組む', ja:'取り掛かる・襲いかかる',           en:'She went at it all night.',       note:'一点を狙って進む'},

/* --- make ── 力を加えて形にする --- */
{v:'make', p:'off',  short:'逃走',   ja:'急いで逃げる',                   en:'The thief made off with it.',     note:'その場から分離して離れる'},
{v:'make', p:'up',   short:'捏造',   ja:'でっち上げる・化粧する・仲直り', en:'He made up the whole story.',     note:'無から上限まで作り上げる'},
{v:'make', p:'out',  short:'判読',   ja:'見分ける・理解する',             en:"I can't make out his writing.",    note:'形を表に出して作る'},
{v:'make', p:'over', short:'改造',   ja:'作り変える',                      en:'They made over the old café.',    note:'ひっくり返して作り直す'},
{v:'make', p:'for',  short:'向かう', ja:'〜の方へ向かう',                 en:'He made for the exit.',           note:'そちらへ進路を作る'},

/* --- have ── 自分の圏内にある --- */
{v:'have', p:'on',   short:'着てる', ja:'身につけている',                 en:'She had a red coat on.',          note:'体に接触した状態で持つ'},
{v:'have', p:'out',  short:'抜く',   ja:'（歯などを）抜いてもらう',       en:'I had a tooth out.',              note:'外に出た状態で持つ'},
{v:'have', p:'over', short:'招く',   ja:'（家に）招く',                    en:'We had them over for dinner.',    note:'こちら側へ越えさせて圏内に持つ'},

/* --- turn ── 向きを変える --- */
{v:'turn', p:'on',   short:'つける', ja:'（電源を）つける',               en:'Turn on the light.',              note:'回して接触させる'},
{v:'turn', p:'off',  short:'消す',   ja:'（電源を）消す',                 en:'Turn off the TV.',                note:'回して分離させる'},
{v:'turn', p:'up',   short:'現れる', ja:'現れる・音量を上げる',           en:'He turned up an hour late.',      note:'向きが変わって浮上する'},
{v:'turn', p:'down', short:'断る',   ja:'断る・音量を下げる',             en:'She turned down the offer.',      note:'向きを下に変える＝却下'},
{v:'turn', p:'out',  short:'判明',   ja:'結果として〜だと分かる',         en:'It turned out to be true.',       note:'裏返して表が出る'},
{v:'turn', p:'in',   short:'提出',   ja:'提出する・寝る',                  en:'Turn in your report by Friday.',  note:'内側へ向きを変えて収める'},
{v:'turn', p:'over', short:'裏返す', ja:'裏返す・引き渡す',                en:'Turn over the card.',             note:'ひっくり返す'},
{v:'turn', p:'to',   short:'頼る',   ja:'（人に）頼る・〜に変わる',       en:'He turned to me for help.',       note:'その相手の方へ向きを変える'}
];
