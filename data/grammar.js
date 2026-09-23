/* ============================================================
   文法のコア ── 「なぜそうなるか」を原理から
   glyph : 目次のグリフに出す短い形（無ければ headword）
   title : 日本語の名前（教科書の見出しに出す）
   ============================================================ */
const GRAMMAR = [

/* -------------------------------------------------- 過去形＝距離 */
{
  id:'g-past', type:'grammar', headword:'-ed', glyph:'ed', title:'過去形',
  core:'距離', diagram:'gPast',
  coreNote:'過去形は「過去のこと」を表す形ではない。「いまここからの距離」を表す形。'+
           '時間の距離・現実からの距離・心理的な距離——どれも同じ過去形になる。',
  senses:[
    { id:'gpast-time', chip:'時間の距離', label:'距離 → 時間的に離れている',
      gloss:'いちばん素直な使い方',
      examples:[
        {en:'I went there last year.', ja:'去年そこへ行った', note:''},
        {en:'She was busy yesterday.', ja:'彼女は昨日忙しかった', note:''}]},
    { id:'gpast-real', chip:'現実との距離', label:'距離 → 現実から離れている（仮定法）',
      gloss:'事実ではない、という印として過去形を使う',
      examples:[
        {en:"If I were you, I'd say no.", ja:'私が君なら断るよ', note:'私は君ではない＝現実から離れている'},
        {en:'I wish I could come.', ja:'行けたらいいのに', note:'実際は行けない'}]},
    { id:'gpast-polite', chip:'心理的な距離', label:'距離 → 相手に踏み込まない（丁寧）',
      gloss:'一歩引くことが敬意になる',
      examples:[
        {en:'Could you help me?', ja:'手伝っていただけますか', note:'Can you? より一歩引いている'},
        {en:'I was wondering if you could help.', ja:'お願いできないかと思いまして', note:'さらに距離を取った形'}]},
    { id:'gpast-seq', chip:'時制の一致', label:'距離 → 過去の時点から見る',
      gloss:'話の基準が過去に移ると、中身も過去形に揃う',
      examples:[
        {en:'He said he was tired.', ja:'彼は疲れていると言った', note:'言った時点から見た「今」'},
        {en:'I thought you knew.', ja:'知ってると思ってた', note:''}]}],
  trivia:[
    {title:'Could you? が Can you? より丁寧な理由',
     body:'can は目の前に踏み込んで「できる?」と聞く形。\n'+
          'could は過去形＝距離があるので、一歩下がって尋ねることになる。\n'+
          '日本語の「〜していただけますか」が遠回しなのと同じ仕組み。\n'+
          'Would you? / I was wondering if… と距離を取るほど丁寧になっていく。'},
    {title:'If I were you の were は間違いではない',
     body:'仮定法では was ではなく were を使う（I / he / she でも）。\n'+
          '普通の過去形とは違う形をわざわざ残すことで、\n'+
          '「これは現実の過去の話ではない」という印になっている。'},
    {title:'「時制の一致」は暗記すべき規則ではない',
     body:'He said he was tired. の was は「疲れていた」ではなく、\n'+
          '「言った時点から見た今」。基準が過去へ動いたので、\n'+
          '距離の取り方もそこに合わせただけ。'}]
},

/* --------------------------------------------- to不定詞と動名詞 */
{
  id:'g-ing', type:'grammar', headword:'to / -ing', glyph:'to', title:'不定詞と動名詞',
  core:'これから ／ すでにある', diagram:'gInfGer',
  coreNote:'to のコアは【到達する方向】。だから to不定詞は必ず「これから」を向く。'+
           '動名詞 -ing はすでにある行為をそのまま名詞にしたもの。'+
           'この違いだけで、暗記リストが丸ごと要らなくなる。',
  senses:[
    { id:'ging-future', chip:'to＝これから', label:'to → まだ着いていない、これから向かう',
      gloss:'未来を向く動詞が to をとる',
      examples:[
        {en:'I want to go.', ja:'行きたい', note:'これから行く'},
        {en:'She decided to quit.', ja:'辞めると決めた', note:'これから辞める'},
        {en:'We hope to see you.', ja:'お会いしたい', note:'hope / plan / promise / expect も同じ'}]},
    { id:'ging-fact', chip:'-ing＝すでに', label:'-ing → すでにある行為',
      gloss:'目の前にある、または経験済みの行為',
      examples:[
        {en:'I enjoy playing tennis.', ja:'テニスを楽しむ', note:'やっている行為そのもの'},
        {en:'He finished eating.', ja:'食べ終えた', note:'食べていた行為が終わる'},
        {en:'Avoid making noise.', ja:'音を立てるのは避けて', note:'既に想定されている行為'}]},
    { id:'ging-both', chip:'意味が変わる', label:'両方とれて、意味が変わる動詞',
      gloss:'ここがコアの威力がいちばん出るところ',
      examples:[
        {en:'stop to smoke', ja:'タバコを吸うために立ち止まる', note:'これから吸う'},
        {en:'stop smoking', ja:'タバコをやめる', note:'すでに吸っていた'},
        {en:'remember to lock', ja:'忘れずに鍵をかける', note:'これからかける'},
        {en:'remember locking', ja:'鍵をかけたのを覚えている', note:'すでにかけた'}]},
    { id:'ging-prep', chip:'前置詞の後', label:'前置詞の後ろは必ず -ing',
      gloss:'前置詞は名詞を求めるので、動詞は名詞の形になる',
      examples:[
        {en:"I'm good at cooking.", ja:'料理が得意', note:'at の後ろなので -ing'},
        {en:'look forward to seeing you', ja:'会えるのを楽しみに', note:'この to は前置詞'}]}],
  trivia:[
    {title:'暗記リストが要らなくなる',
     body:'参考書の「to不定詞をとる動詞／動名詞をとる動詞」の一覧は、\n'+
          '実は「これから向かう動詞か、すでにある行為を扱う動詞か」で割れている。\n'+
          'want / hope / decide / plan → これから（to）\n'+
          'enjoy / finish / avoid / mind → すでにある（-ing）'},
    {title:'look forward to seeing の to は不定詞ではない',
     body:'不定詞の to なら後ろは動詞の原形（to see）。\n'+
          'でもここは前置詞の to なので、後ろは名詞＝動名詞になる。\n'+
          '「会うこと」へ気持ちが到達している、という形。'}]
},

/* ------------------------------------------------ 冠詞と名詞の形 */
{
  id:'g-article', type:'grammar', headword:'a / the / —', glyph:'a', title:'冠詞と名詞の形',
  core:'輪郭があるか、特定できるか', diagram:'gArticle',
  coreNote:'冠詞は「つけ忘れ」ではなく、その名詞をどう見ているかの宣言。'+
           '輪郭のある1つなら a、相手も特定できるなら the、形の定まらない素材なら無冠詞。',
  senses:[
    { id:'gart-a', chip:'a＝輪郭1つ', label:'a → 輪郭のある1つ（どれかは未定）',
      gloss:'形が決まっていて、数えられる。ただし特定はされていない',
      examples:[
        {en:'I saw a dog.', ja:'犬を見た', note:'どの犬かは言っていない'},
        {en:'That’s a good idea.', ja:'それはいい考えだ', note:''}]},
    { id:'gart-the', chip:'the＝特定', label:'the → 相手も「あれね」と分かる',
      gloss:'話し手と聞き手の両方が同じものを指せる',
      examples:[
        {en:'The dog was barking.', ja:'その犬が吠えていた', note:'さっき出てきた犬'},
        {en:'the sun', ja:'太陽', note:'1つしかないので特定できる'},
        {en:'Close the door.', ja:'ドアを閉めて', note:'この場のあのドア'}]},
    { id:'gart-none', chip:'無冠詞＝素材', label:'無冠詞 → 輪郭のない素材・概念',
      gloss:'切っても分けても同じもの',
      examples:[
        {en:'I drink water.', ja:'水を飲む', note:'形が決まっていない'},
        {en:'I like music.', ja:'音楽が好き', note:'概念'},
        {en:'I need information.', ja:'情報が必要', note:'情報も輪郭がない'}]},
    { id:'gart-shift', chip:'輪郭で変わる', label:'同じ語でも、輪郭の有無で意味が変わる',
      gloss:'ここが冠詞のいちばん面白いところ',
      examples:[
        {en:'I bought a chicken.', ja:'鶏を1羽買った', note:'輪郭がある＝生き物'},
        {en:'I bought chicken.', ja:'鶏肉を買った', note:'輪郭がない＝肉'},
        {en:'I had a coffee.', ja:'コーヒーを1杯飲んだ', note:'カップという輪郭がつく'}]}],
  trivia:[
    {title:'a glass of water の a は水についていない',
     body:'水には輪郭がないので a はつけられない。\n'+
          'そこで glass（コップ）という輪郭を借りてきて、そこに a をつける。\n'+
          'a piece of advice / a slice of bread も全部この仕組み。'},
    {title:'information や advice が数えられない理由',
     body:'どこで切っても同じで、「1個」の形が決まらないから。\n'+
          '同じ理由で furniture / luggage / equipment も無冠詞。\n'+
          '日本語の感覚では数えたくなるが、英語は「輪郭があるか」だけを見ている。'},
    {title:'a chicken と chicken の差は生死ではなく輪郭',
     body:'a chicken ＝ 1羽という輪郭がある → 生きた鶏\n'+
          'chicken ＝ 輪郭がない素材 → 鶏肉\n'+
          '同じことが fish / lamb でも起きる。輪郭を外すと食材になる。'}]
},

/* -------------------------------------------------------- 現在形 */
{
  id:'g-present', type:'grammar', headword:'V / Vs', glyph:'-s', title:'現在形',
  core:'いつもそう', diagram:'gPresent',
  coreNote:'現在形は「今」の話ではない。「いつもそうだ」という性質や習慣を表す形。'+
           '今この瞬間のことを言いたいときは進行形を使う。',
  senses:[
    { id:'gpres-habit', chip:'習慣', label:'いつもそう → 繰り返す習慣',
      gloss:'昨日も今日も明日もそう',
      examples:[
        {en:'I get up at six.', ja:'6時に起きる', note:'毎日そうしている'},
        {en:'She works at a bank.', ja:'彼女は銀行で働いている', note:'職業としてずっと'}]},
    { id:'gpres-nature', chip:'性質・事実', label:'いつもそう → 変わらない性質',
      gloss:'いつ確かめてもそうなる',
      examples:[
        {en:'Water boils at 100°C.', ja:'水は100度で沸騰する', note:''},
        {en:'The earth goes around the sun.', ja:'地球は太陽のまわりを回る', note:''}]},
    { id:'gpres-state', chip:'今の状態', label:'いつもそう → 動作でない動詞は現在形のまま',
      gloss:'know / like / have などは進行形にしにくい',
      examples:[
        {en:'I know him well.', ja:'彼をよく知っている', note:'知っている状態が続いている'},
        {en:'It looks good.', ja:'よさそうだね', note:''}]},
    { id:'gpres-schedule', chip:'確定した予定', label:'いつもそう → 動かない予定',
      gloss:'時刻表のように決まっているもの',
      examples:[
        {en:'The train leaves at ten.', ja:'電車は10時に出る', note:'すでに決まっている'},
        {en:'The shop opens at nine.', ja:'店は9時に開く', note:''}]}],
  trivia:[
    {title:'What do you do? は「今何してるの?」ではない',
     body:'現在形は「いつもそう」なので、これは「いつも何をしていますか」＝職業は?\n'+
          '今この瞬間を聞きたいなら What are you doing? と進行形にする。\n'+
          '1文字も違わないのに、聞いていることが全く別になる。'},
    {title:'I go to school. は今向かっている意味にならない',
     body:'「いつも学校に通っている」という習慣の話。\n'+
          '今まさに向かっているなら I’m going to school. \n'+
          '現在形は「今」ではない、というのがここでも効いてくる。'}]
},

/* -------------------------------------------------------- 進行形 */
{
  id:'g-prog', type:'grammar', headword:'be + -ing', glyph:'-ing', title:'進行形',
  core:'途中の一コマ', diagram:'gProgress',
  coreNote:'進行形は、動きの途中を切り取った一コマ。'+
           '途中ということは、始まりも終わりもある＝一時的だということ。ここから全部の用法が出てくる。',
  senses:[
    { id:'gprog-now', chip:'いま途中', label:'途中 → いままさにやっている',
      gloss:'始まっていて、まだ終わっていない',
      examples:[
        {en:"I'm eating lunch.", ja:'昼を食べているところ', note:''},
        {en:'It’s raining.', ja:'雨が降っている', note:''}]},
    { id:'gprog-temp', chip:'一時的', label:'途中 → 今のところ一時的に',
      gloss:'いつもではない、という含み',
      examples:[
        {en:"I'm living in Tokyo.", ja:'今は東京に住んでいる', note:'一時的なニュアンス'},
        {en:'I live in Tokyo.', ja:'東京に住んでいる', note:'こちらは生活の拠点'}]},
    { id:'gprog-near', chip:'近い予定', label:'途中 → もう動き出している予定',
      gloss:'準備が始まっているから、すでに途中',
      examples:[
        {en:"I'm meeting him tomorrow.", ja:'明日彼と会う', note:'すでに約束済み'},
        {en:'We’re moving next month.', ja:'来月引っ越す', note:''}]},
    { id:'gprog-always', chip:'いつも〜ばかり', label:'途中 → always と組むと感情が乗る',
      gloss:'一時的なはずのものが「いつも」なので、非難や驚きになる',
      examples:[
        {en:"He's always complaining.", ja:'彼はいつも文句ばかり', note:'うんざりした気持ち'},
        {en:"You're always losing your keys.", ja:'いつも鍵をなくすね', note:''}]}],
  trivia:[
    {title:'always + 進行形が「いらだち」になる仕組み',
     body:'進行形は本来「一時的」。そこに always（いつも）が来ると矛盾する。\n'+
          'その食い違いが「いつもいつも…」という感情になって出る。\n'+
          'He always complains. なら単なる事実の描写で、感情は乗らない。'},
    {title:'know / like を進行形にしにくい理由',
     body:'進行形は「途中の一コマ」。でも「知っている」には途中がない。\n'+
          '知らない状態から知っている状態へ一瞬で切り替わるだけ。\n'+
          '途中の絵が描けない動詞は、進行形になりにくい。'}]
},

/* ---------------------------------------------------- 現在完了 */
{
  id:'g-perfect', type:'grammar', headword:'have + p.p.', glyph:'have', title:'現在完了',
  core:'済んだ状態を今持っている', diagram:'gPerfect',
  coreNote:'現在完了の have は、普通の have と同じ「持っている」。'+
           '持っているのは「済んだという状態」。だから現在完了は過去の話ではなく、現在の話になる。',
  senses:[
    { id:'gperf-exp', chip:'経験', label:'いま持っている → その経験を持っている',
      gloss:'やったことがある、という財産を今持つ',
      examples:[
        {en:'Have you ever been to Kyoto?', ja:'京都に行ったことある?', note:'その経験を今持っているか'},
        {en:"I've never seen it.", ja:'見たことがない', note:''}]},
    { id:'gperf-cont', chip:'継続', label:'いま持っている → その状態が今も続く',
      gloss:'始まって、今もそのまま',
      examples:[
        {en:"I've known him for years.", ja:'彼とは何年も前からの知り合いだ', note:'今も知っている'},
        {en:"She's lived here since 2020.", ja:'2020年からここに住んでいる', note:''}]},
    { id:'gperf-result', chip:'完了・結果', label:'いま持っている → 済んだ結果が今もある',
      gloss:'やり終えて、その影響が残っている',
      examples:[
        {en:"I've lost my key.", ja:'鍵をなくした', note:'だから今ない'},
        {en:"He's already eaten.", ja:'彼はもう食べた', note:'だから今おなかがいっぱい'}]},
    { id:'gperf-vspast', chip:'過去形との差', label:'過去形は切り離す、完了は今につなぐ',
      gloss:'同じ出来事でも、今と関係づけるかどうかが違う',
      examples:[
        {en:'I lost my key yesterday.', ja:'昨日鍵をなくした', note:'今どうかは言っていない'},
        {en:"I've lost my key.", ja:'鍵をなくしてしまった', note:'今も見つかっていない'}]}],
  trivia:[
    {title:'現在完了に yesterday を足せない理由',
     body:'yesterday は過去の一点を名指しする語。\n'+
          '名指しした瞬間、その出来事は今から切り離されてしまう。\n'+
          '現在完了は「今の状態」の話なので、両立しない。\n'+
          '×I have lost my key yesterday. ／ ○I lost my key yesterday.'},
    {title:'have gone to と have been to',
     body:'has gone to Kyoto ＝ 京都へ行ってしまった（今ここにいない）\n'+
          'has been to Kyoto ＝ 京都に行ったことがある（今ここにいる）\n'+
          'go は「離れる」、be は「いた」。動詞のコアの差がそのまま出ている。'}]
},

/* ---------------------------------------------------- 助動詞 */
{
  id:'g-modal', type:'grammar', headword:'can / must', glyph:'can', title:'助動詞のコア',
  core:'話し手の心の中の判断', diagram:'gModal',
  coreNote:'助動詞は出来事そのものではなく、それを見ている話し手の判断を足す語。'+
           'どれくらいありうるか、どれくらい圧力があるか——その強さの違いで使い分ける。',
  senses:[
    { id:'gmod-can', chip:'can', label:'can → 潜在的にありうる',
      gloss:'その能力・可能性がもともと備わっている',
      examples:[
        {en:'I can swim.', ja:'泳げる', note:'能力として備わっている'},
        {en:'It can happen to anyone.', ja:'誰にでも起こりうる', note:'可能性がある'}]},
    { id:'gmod-may', chip:'may / might', label:'may → 妨げるものがない・半々',
      gloss:'許可も推量も「障害がない」で説明できる',
      examples:[
        {en:'You may go now.', ja:'もう行っていいですよ', note:'止めるものがない'},
        {en:'It might rain later.', ja:'後で降るかも', note:'そうなる余地がある'}]},
    { id:'gmod-must', chip:'must', label:'must → 強い圧力がかかっている',
      gloss:'逃げ道がない、という感覚',
      examples:[
        {en:'You must see a doctor.', ja:'医者に行かなきゃだめだ', note:'話し手が強く迫る'},
        {en:'He must be tired.', ja:'彼は疲れているに違いない', note:'そう結論するしかない'}]},
    { id:'gmod-should', chip:'should', label:'should → 当然そうなる道筋',
      gloss:'普通に考えればそうなるはず',
      examples:[
        {en:'You should get some rest.', ja:'休んだほうがいい', note:'それが当然の道'},
        {en:'It should work now.', ja:'これで動くはず', note:''}]},
    { id:'gmod-will', chip:'will', label:'will → 今この場で固まる意志・推量',
      gloss:'未来形ではなく、話す瞬間の心の動き',
      examples:[
        {en:"I'll get it!", ja:'（電話に）出るよ!', note:'今その場で決めた'},
        {en:"That'll be him.", ja:'それ彼だろう', note:'今そう判断した'}]}],
  trivia:[
    {title:'must が「〜しなければ」と「〜に違いない」の両方になる理由',
     body:'どちらも【強い圧力】。\n'+
          '圧力が行動に向かえば「しなければならない」\n'+
          '圧力が判断に向かえば「そうに違いない」\n'+
          '同じ can が「できる」と「ありうる」になるのと同じ構図。'},
    {title:'must と have to の違い',
     body:'must ＝ 話し手自身が圧力をかけている（主観）\n'+
          'have to ＝ 外の事情がそうさせている（客観）\n'+
          'You must go.（私が行けと言っている）\n'+
          'You have to go.（決まりだから仕方ない）'},
    {title:'will は「未来形」ではない',
     body:'英語に未来形という時制はない。will は助動詞で、\n'+
          '「今この場で固まった意志・判断」を表す。\n'+
          'だから電話が鳴って I’ll get it. と言える（今決めた）。\n'+
          '前から決まっていたなら I’m going to get it. になる。'}]
},

/* ---------------------------------------------------- 受動態 */
{
  id:'g-passive', type:'grammar', headword:'be + p.p.', glyph:'be+', title:'受動態',
  core:'主役を入れ替える', diagram:'gPassive',
  coreNote:'受動態は「難しい言い方」ではなく、カメラを向ける先を変える装置。'+
           '誰がやったかより、何がどうなったかを話したいときに使う。',
  senses:[
    { id:'gpass-focus', chip:'焦点を移す', label:'入れ替える → 話題にしたい方を主語に',
      gloss:'文の先頭が、その文の主役になる',
      examples:[
        {en:'The window was broken.', ja:'窓が割れていた', note:'窓の話をしている'},
        {en:'This bridge was built in 1950.', ja:'この橋は1950年に架けられた', note:'橋が主役'}]},
    { id:'gpass-unknown', chip:'動作主が不明', label:'入れ替える → 誰がやったか分からない・言えない',
      gloss:'言う必要がないから主語から外す',
      examples:[
        {en:'My bike was stolen.', ja:'自転車を盗まれた', note:'誰がやったか分からない'},
        {en:'Mistakes were made.', ja:'間違いがあった', note:'誰の責任かを言わずに済ませる'}]},
    { id:'gpass-general', chip:'一般に', label:'入れ替える → 世間一般の話にする',
      gloss:'特定の誰かではなく、みんながそうしている',
      examples:[
        {en:'English is spoken here.', ja:'ここでは英語が話される', note:''},
        {en:'It is said that…', ja:'〜と言われている', note:''}]},
    { id:'gpass-by', chip:'by は任意', label:'入れ替える → by は必要なときだけ',
      gloss:'動作主を言いたいときだけ後ろに置く',
      examples:[
        {en:'It was written by Soseki.', ja:'それは漱石が書いた', note:'誰がが重要なので by をつける'},
        {en:'The room was cleaned.', ja:'部屋は掃除された', note:'誰がは不要'}]}],
  trivia:[
    {title:'受動態は「言わないため」に使われることが多い',
     body:'Mistakes were made.（間違いがあった）は、\n'+
          '誰が間違えたかを言わずに済ませる有名な逃げ方。\n'+
          '日本語の「〜されました」「〜となっております」と同じ働きをする。'},
    {title:'be + p.p. の p.p. は形容詞に近い',
     body:'I am tired. / I am interested. も同じ形。\n'+
          '「疲れさせられた状態にある」＝ be + 過去分詞。\n'+
          '受動態と「be + 形容詞」は地続きで、境目ははっきりしない。'}]
},

/* ------------------------------------------------ 関係代名詞 */
{
  id:'g-rel', type:'grammar', headword:'who / which', glyph:'who', title:'関係代名詞',
  core:'名詞に説明を後ろから貼る', diagram:'gRelative',
  coreNote:'日本語は名詞の前に説明を置く（「昨日会った人」）。'+
           '英語は名詞の後ろに貼る（the person I met yesterday）。'+
           '難しいのではなく、貼る向きが逆なだけ。',
  senses:[
    { id:'grel-subj', chip:'主格', label:'貼る → 説明の中で主語になる',
      gloss:'その人・物が「する」側',
      examples:[
        {en:'I know a guy who can fix it.', ja:'直せる人を知っている', note:'a guy が直す側'},
        {en:'a train that goes to Kyoto', ja:'京都へ行く電車', note:''}]},
    { id:'grel-obj', chip:'目的格', label:'貼る → 説明の中で目的語になる（省略できる）',
      gloss:'その人・物が「される」側。だから省略できる',
      examples:[
        {en:'the book (that) I told you about', ja:'話したあの本', note:'that は省略できる'},
        {en:'the person (whom) I met yesterday', ja:'昨日会った人', note:''}]},
    { id:'grel-which', chip:'人か物か', label:'貼る → 人なら who、物なら which',
      gloss:'that はどちらにも使える',
      examples:[
        {en:'the man who called', ja:'電話してきた男性', note:'人'},
        {en:'the car which broke down', ja:'故障した車', note:'物'}]},
    { id:'grel-prep', chip:'前置詞が残る', label:'貼る → 前置詞は後ろに取り残される',
      gloss:'元の文の形がそのまま残っているだけ',
      examples:[
        {en:'the book I told you about', ja:'君に話した本', note:'I told you about the book. の about が残った'},
        {en:'the house I live in', ja:'私が住んでいる家', note:'I live in the house. の in'}]}],
  trivia:[
    {title:'目的格の関係代名詞を省略できる理由',
     body:'the book I told you about のように名詞が2つ続くと、\n'+
          'そこに切れ目があると読み手がすぐ分かる。\n'+
          'だから目印（that / which）がなくても困らない。\n'+
          '逆に主格は省略できない——省くと文が壊れてしまう。'},
    {title:'日本語と英語で、説明を貼る向きが逆',
     body:'日本語：［昨日会った］人　←　前から貼る\n'+
          '英語　：the person［I met yesterday］　←　後ろから貼る\n'+
          '英語は「まず名詞を出して、それから説明する」。\n'+
          'この順番に慣れることが、長い文を読む土台になる。'}]
},

/* -------------------------------------------- 疑問文と否定文の do */
{
  id:'g-do', type:'grammar', headword:'do / does', glyph:'do', title:'疑問文と否定文の do',
  core:'動詞の代理人', diagram:'gDo',
  coreNote:'英語は疑問や否定を文の頭で示したい。'+
           'ところが一般動詞は文の頭に出られない。そこで代理人として do が出てきて、頭に立つ。',
  senses:[
    { id:'gdo-q', chip:'疑問文', label:'代理人 → 頭に立って疑問を示す',
      gloss:'do が先に出るので、聞いた瞬間に質問だと分かる',
      examples:[
        {en:'Do you like it?', ja:'それ好き?', note:'do が頭に立つ'},
        {en:'Does he know?', ja:'彼は知ってる?', note:''}]},
    { id:'gdo-neg', chip:'否定文', label:'代理人 → not を引き受ける',
      gloss:'not は助動詞の後ろに置きたいので、代理人が必要になる',
      examples:[
        {en:"I don't know.", ja:'知らない', note:''},
        {en:"She doesn't care.", ja:'彼女は気にしない', note:''}]},
    { id:'gdo-tense', chip:'時制を背負う', label:'代理人 → 人称と時制を do が引き受ける',
      gloss:'do が背負うので、本動詞は原形のまま',
      examples:[
        {en:'Did you go?', ja:'行った?', note:'went ではなく go のまま'},
        {en:'He doesn’t like it.', ja:'彼はそれが好きではない', note:'likes ではなく like'}]},
    { id:'gdo-emph', chip:'強調', label:'代理人 → 必要ないのに残ると強調になる',
      gloss:'いなくていい人がわざわざ立っている＝力が入っている',
      examples:[
        {en:'I do like it.', ja:'本当に好きなんだ', note:''},
        {en:'He did come.', ja:'彼はちゃんと来たよ', note:''}]}],
  trivia:[
    {title:'be動詞と助動詞に do が要らない理由',
     body:'be も can も、自分で文の頭に出られるから代理人が不要。\n'+
          'Are you busy? / Can you swim? はそのまま前に出るだけ。\n'+
          '出られないのは一般動詞だけなので、そこだけ do が呼ばれる。'},
    {title:'Did you went? が間違いな理由',
     body:'時制はすでに did が背負っている。\n'+
          '同じ文の中で二重に過去を示す必要はないので、本動詞は原形の go。\n'+
          '「代理人が時制を引き受ける」と考えると自然に納得できる。'}]
}

];
