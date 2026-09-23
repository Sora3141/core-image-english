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
,

/* ------------------------------------------------------ 語順 */
{
  id:'g-order', type:'grammar', headword:'S V O', glyph:'SVO', title:'語順',
  core:'並び順が意味そのもの', diagram:'gOrder',
  coreNote:'日本語は「が・を・に」で役割を示すので語順を変えられる。'+
           '英語にはその印がないので、置いた場所が役割になる。'+
           '並び順を変えると意味が変わってしまう——これが英語のいちばん根本の仕組み。',
  senses:[
    { id:'gord-fix', chip:'動かせない', label:'並び順 → 動かすと意味が変わる',
      gloss:'前が「する人」、後ろが「される側」',
      examples:[
        {en:'The dog bit the man.', ja:'犬が男を噛んだ', note:''},
        {en:'The man bit the dog.', ja:'男が犬を噛んだ', note:'語を入れ替えると意味が逆になる'}]},
    { id:'gord-ja', chip:'日本語との差', label:'並び順 → 日本語は助詞が役割を示す',
      gloss:'助詞があるから順番を動かせる',
      examples:[
        {en:'犬が 男を 噛んだ ／ 男を 犬が 噛んだ', ja:'どちらも意味は同じ', note:'助詞が役割を持っている'},
        {en:'I gave him a book.', ja:'私は彼に本をあげた', note:'英語は置いた位置が役割'}]},
    { id:'gord-frame', chip:'基本の骨', label:'並び順 → 誰が → どうする → 何を',
      gloss:'この3つが英文の背骨',
      examples:[
        {en:'She opened the door.', ja:'彼女がドアを開けた', note:'S V O'},
        {en:'I like coffee.', ja:'私はコーヒーが好きだ', note:''}]},
    { id:'gord-add', chip:'付け足す位置', label:'並び順 → 場所と時は後ろに足す',
      gloss:'骨ができてから、周りに肉をつける',
      examples:[
        {en:'I met him at the station yesterday.', ja:'昨日駅で彼に会った', note:'場所 → 時の順'},
        {en:'She works hard every day.', ja:'彼女は毎日一生懸命働く', note:''}]}],
  trivia:[
    {title:'英語に助詞がないから、語順が固いという話',
     body:'日本語の「が」「を」は役割の名札。名札があれば並べ替えても分かる。\n'+
          '英語にはその名札がないので、「前に置いたら主語」と決めるしかなかった。\n'+
          '語順の固さは不便ではなく、名札を捨てた代償として選ばれた仕組み。'},
    {title:'場所と時は「場所 → 時」の順',
     body:'I met him at the station yesterday.（○）\n'+
          'I met him yesterday at the station.（言えるが、やや不自然）\n'+
          '狭いもの（場所）から広いもの（時）へ、と並べるのが基本。'}]
},

/* ------------------------------------------------------ SVOO */
{
  id:'g-svoo', type:'grammar', headword:'S V O O', glyph:'SVOO', title:'SVOO',
  core:'人が先、物が後', diagram:'gSvoo',
  coreNote:'give / show / tell / send のように「相手に渡す」動詞は、'+
           '目的語を2つ取れる。並べる順は必ず「人 → 物」。'+
           '物を先に言いたければ、後ろに to や for を置いて人を添える。',
  senses:[
    { id:'gsvoo-order', chip:'人→物', label:'人が先、物が後',
      gloss:'渡す相手を先に置く',
      examples:[
        {en:'He gave me a book.', ja:'彼は私に本をくれた', note:'me（人）→ a book（物）'},
        {en:'Can you show me the way?', ja:'道を教えてくれますか', note:''}]},
    { id:'gsvoo-to', chip:'to で言い直す', label:'物を先にするなら to か for',
      gloss:'届ける動詞は to、作ってあげる動詞は for',
      examples:[
        {en:'He gave a book to me.', ja:'彼は本を私にくれた', note:'to ＝ 相手まで届く'},
        {en:'She made a cake for me.', ja:'彼女は私にケーキを作ってくれた', note:'for ＝ 私のために'}]},
    { id:'gsvoo-which', chip:'to か for か', label:'動詞で to と for が分かれる',
      gloss:'相手がいないと成立しないなら to',
      examples:[
        {en:'give / show / tell / send / lend → to', ja:'相手がいないと成り立たない', note:''},
        {en:'make / buy / cook / find → for', ja:'相手がいなくても行為は成り立つ', note:''}]},
    { id:'gsvoo-why', chip:'なぜ入れ替える', label:'長いものは後ろへ',
      gloss:'重い情報を後ろに置くと読みやすい',
      examples:[
        {en:'I gave the book to the man standing over there.', ja:'向こうに立っている男性に本を渡した',
         note:'人の説明が長いので後ろへ'}]}],
  trivia:[
    {title:'to と for の分かれ目',
     body:'give は相手がいなければ成立しない（×I gave a book. だけでは足りない）→ to\n'+
          'make は相手がいなくても成立する（○I made a cake.）→ for\n'+
          '「相手がいないと行為が完結しないか」で決まっている。'},
    {title:'He gave me it. と言いにくい理由',
     body:'代名詞（it）は「もう出てきた情報」で軽いので、\n'+
          '文の最後という目立つ位置に置くと落ち着かない。\n'+
          'He gave it to me. の方が自然。英語は重い情報ほど後ろに置く。'}]
},

/* ------------------------------------------------------ SVOC */
{
  id:'g-svoc', type:'grammar', headword:'S V O C', glyph:'SVOC', title:'SVOC',
  core:'O ＝ C の関係を作る', diagram:'gSvoc',
  coreNote:'SVOC は「O を C の状態にする／と見なす」形。'+
           'O と C の間に、見えない be動詞が隠れている——そう読むと一気に分かりやすくなる。',
  senses:[
    { id:'gsvoc-make', chip:'その状態にする', label:'O ＝ C にする',
      gloss:'O を C の状態へ変える',
      examples:[
        {en:'That makes me happy.', ja:'それは私を幸せにする', note:'me ＝ happy'},
        {en:'Keep the door open.', ja:'ドアを開けたままにして', note:'the door ＝ open'}]},
    { id:'gsvoc-call', chip:'そう呼ぶ', label:'O ＝ C と名づける',
      gloss:'O に C という名前を貼る',
      examples:[
        {en:'Call me Ken.', ja:'ケンって呼んで', note:'me ＝ Ken'},
        {en:'They named the dog Momo.', ja:'犬をモモと名づけた', note:''}]},
    { id:'gsvoc-think', chip:'そう思う', label:'O ＝ C と見なす',
      gloss:'頭の中でそう結びつける',
      examples:[
        {en:'I found the book interesting.', ja:'その本は面白いと思った', note:'the book ＝ interesting'},
        {en:'We consider him a genius.', ja:'彼を天才だと思っている', note:''}]},
    { id:'gsvoc-check', chip:'見分け方', label:'O と C の間に be を入れてみる',
      gloss:'入れて意味が通ればSVOC',
      examples:[
        {en:'That makes me happy. → me IS happy', ja:'通る＝SVOC', note:''},
        {en:'He gave me a book. → me IS a book?', ja:'通らない＝SVOO', note:'私は本ではない'}]}],
  trivia:[
    {title:'SVOO と SVOC の見分け方',
     body:'2つの目的語の間に be動詞を入れてみる。\n'+
          'That makes me happy. → me is happy（通る）→ SVOC\n'+
          'He gave me a book. → me is a book（通らない）→ SVOO\n'+
          '文型を暗記しなくても、これだけで判別できる。'},
    {title:'Keep the door open. の open は動詞ではない',
     body:'ここでの open は形容詞で「開いた状態」。\n'+
          'the door ＝ open という関係を keep（保つ）している。\n'+
          '「ドアを開けて」なら Open the door. で、まったく別の文になる。'}]
},

/* -------------------------------------------------- there is */
{
  id:'g-there', type:'grammar', headword:'There is / are', glyph:'there', title:'there is / are',
  core:'新しいものを舞台に出す', diagram:'gThere',
  coreNote:'there is は「そこにある」ではない。'+
           '聞き手がまだ知らないものを、話の舞台に初めて登場させる形。'+
           'だから the がついたものには使えない。',
  senses:[
    { id:'gthr-new', chip:'初登場', label:'新しいものを舞台に出す',
      gloss:'聞き手がまだ知らないもの',
      examples:[
        {en:'There is a cat in the garden.', ja:'庭に猫がいる', note:'猫の存在を初めて伝える'},
        {en:'There are three eggs left.', ja:'卵が3つ残っている', note:''}]},
    { id:'gthr-the', chip:'the は使えない', label:'すでに特定できるものには使わない',
      gloss:'初登場ではないから',
      examples:[
        {en:'×There is the cat in the garden.', ja:'', note:'その猫の話はもう出ている'},
        {en:'○The cat is in the garden.', ja:'その猫は庭にいる', note:'普通の文でよい'}]},
    { id:'gthr-agree', chip:'be は後ろに合わせる', label:'there は主語ではない',
      gloss:'本当の主語は be動詞の後ろ',
      examples:[
        {en:'There is a book on the desk.', ja:'机に本が1冊ある', note:'a book が主語なので is'},
        {en:'There are books on the desk.', ja:'机に本がある', note:'books が主語なので are'}]},
    { id:'gthr-exist', chip:'存在以外も', label:'出来事の登場にも使える',
      gloss:'物だけでなく出来事も舞台に出せる',
      examples:[
        {en:'There was an accident.', ja:'事故があった', note:''},
        {en:'Is there a problem?', ja:'何か問題でも?', note:''}]}],
  trivia:[
    {title:'there is の there に「そこ」の意味はない',
     body:'There is a cat there.（そこに猫がいる）と2つ並べられる。\n'+
          '前の there は「新しいものを出しますよ」という合図にすぎず、\n'+
          '場所を言っているのは後ろの there の方。'},
    {title:'×There is the cat. が言えない理由',
     body:'the がついている＝聞き手もどれか分かっている＝もう舞台に出ている。\n'+
          '初登場させる形なのに、すでに登場済みのものを出すのは矛盾する。\n'+
          '冠詞のコア（特定できるか）がここでも効いている。'}]
},

/* ------------------------------------------- 命令文と感嘆文 */
{
  id:'g-imp', type:'grammar', headword:'Be quiet! / What a …!', glyph:'!', title:'命令文と感嘆文',
  core:'主語を省いて動詞から始める', diagram:'gImp',
  coreNote:'命令文は主語 you が省かれている形。目の前の相手に言うので、言わなくても分かる。'+
           '感嘆文は「なんて〜」を文の頭に出して、驚きを先に届ける形。',
  senses:[
    { id:'gimp-base', chip:'命令文', label:'動詞の原形から始める',
      gloss:'主語 you が省かれている',
      examples:[
        {en:'Open the window.', ja:'窓を開けて', note:'(You) open …'},
        {en:'Be quiet.', ja:'静かにして', note:'be動詞も原形'}]},
    { id:'gimp-neg', chip:'否定の命令', label:'Don’t をつける',
      gloss:'be動詞でも Don’t',
      examples:[
        {en:'Don’t touch it.', ja:'触らないで', note:''},
        {en:'Don’t be late.', ja:'遅れないで', note:'×Be not late.'}]},
    { id:'gimp-soft', chip:'やわらげる', label:'please や付加疑問で角を取る',
      gloss:'命令文はそのままだと強い',
      examples:[
        {en:'Please sit down.', ja:'どうぞお座りください', note:''},
        {en:'Open the window, will you?', ja:'窓を開けてくれる?', note:''},
        {en:'Could you open the window?', ja:'窓を開けていただけますか', note:'疑問文にすると最も丁寧'}]},
    { id:'gimp-excl', chip:'感嘆文', label:'What / How を頭に出す',
      gloss:'名詞があれば What、なければ How',
      examples:[
        {en:'What a beautiful day!', ja:'なんていい天気なんだ', note:'a day という名詞がある'},
        {en:'How beautiful!', ja:'なんて美しい', note:'名詞がない'}]}],
  trivia:[
    {title:'×Be not late. と言えない理由',
     body:'否定の命令文は、be動詞でも必ず Don’t を使う。\n'+
          'Don’t be late.（遅れないで）\n'+
          '命令文は動詞の原形から始まる形なので、do の力を借りる点は\n'+
          '一般動詞の否定文と同じ仕組みになっている。'},
    {title:'What と How の使い分けは名詞があるかどうか',
     body:'What a beautiful day!（day という名詞がある）\n'+
          'How beautiful!（名詞がない）\n'+
          'What の後ろには必ず名詞が来る、と覚えるより\n'+
          '「名詞ごと驚くなら What」と考えた方が早い。'}]
},

/* -------------------------------------------------------- 使役 */
{
  id:'g-causative', type:'grammar', headword:'make / have / let / get', glyph:'make', title:'使役',
  core:'どれくらいの力でさせるか', diagram:'gCausative',
  coreNote:'4語とも「させる」だが、加える力の強さが違う。'+
           'make は押しつけ、have は手配、let は許可、get は説得。'+
           '力が弱くなるほど、相手の意思が尊重されていく。',
  senses:[
    { id:'gcau-make', chip:'make', label:'make → 力ずくでさせる',
      gloss:'相手の意思に関係なく',
      examples:[
        {en:'She made me wait an hour.', ja:'1時間待たされた', note:'原形が続く'},
        {en:'Don’t make me laugh.', ja:'笑わせないで', note:''}]},
    { id:'gcau-have', chip:'have', label:'have → そういう手はずにする',
      gloss:'当然やってもらえる立場で頼む',
      examples:[
        {en:'I’ll have him call you.', ja:'彼から電話させます', note:'原形が続く'},
        {en:'I had my car fixed.', ja:'車を直してもらった', note:'物なら過去分詞'}]},
    { id:'gcau-let', chip:'let', label:'let → 邪魔しない',
      gloss:'止めようと思えば止められるが、止めない',
      examples:[
        {en:'Let me try.', ja:'やらせてください', note:'原形が続く'},
        {en:'My parents let me go.', ja:'親が行かせてくれた', note:''}]},
    { id:'gcau-get', chip:'get', label:'get → 説得してその気にさせる',
      gloss:'ひと手間かけて動かす',
      examples:[
        {en:'I got him to help me.', ja:'彼に手伝ってもらった', note:'get だけ to が要る'},
        {en:'I got my hair cut.', ja:'髪を切ってもらった', note:'物なら過去分詞'}]}],
  trivia:[
    {title:'get だけ to がつく理由',
     body:'make / have / let は原形が続くが、get だけ to do。\n'+
          'get のコアは【至る】。相手を「やる」というところまで動かす、\n'+
          'という到達のニュアンスがあるので、到達の矢印 to が要る。\n'+
          'ひと手間かけて説得する感じが、この to に出ている。'},
    {title:'人なら原形、物なら過去分詞',
     body:'I had him fix my car.（彼に直させた＝人が直す側）\n'+
          'I had my car fixed.（車を直してもらった＝車は直される側）\n'+
          '目的語が「する側」なら原形、「される側」なら過去分詞。'}]
},

/* ---------------------------------------------------- 知覚動詞 */
{
  id:'g-percept', type:'grammar', headword:'see + O + do / -ing', glyph:'see+', title:'知覚動詞',
  core:'全部見たか、途中を見たか', diagram:'gPercept',
  coreNote:'see / hear / feel の後ろは、原形なら「始めから終わりまで見た」、'+
           '-ing なら「途中の一場面を見た」。進行形のコアがそのまま効いている。',
  senses:[
    { id:'gper-base', chip:'原形＝全部', label:'原形 → 始めから終わりまで',
      gloss:'一部始終を見届けた',
      examples:[
        {en:'I saw him cross the street.', ja:'彼が通りを渡るのを見た', note:'渡りきるまで見た'},
        {en:'I heard her sing a song.', ja:'彼女が歌を歌うのを聞いた', note:'1曲まるごと'}]},
    { id:'gper-ing', chip:'-ing＝途中', label:'-ing → 途中の一場面',
      gloss:'その瞬間を切り取った',
      examples:[
        {en:'I saw him crossing the street.', ja:'彼が通りを渡っているのを見た', note:'渡っている途中'},
        {en:'I heard someone knocking.', ja:'誰かがノックしているのが聞こえた', note:''}]},
    { id:'gper-pp', chip:'過去分詞', label:'過去分詞 → される側',
      gloss:'O が「される」関係のとき',
      examples:[
        {en:'I heard my name called.', ja:'名前が呼ばれるのが聞こえた', note:'名前は呼ばれる側'}]},
    { id:'gper-verbs', chip:'この形を取る動詞', label:'見る・聞く・感じる',
      gloss:'五感で捉える動詞',
      examples:[
        {en:'see / watch / hear / listen to / feel / notice', ja:'', note:''},
        {en:'I felt something touch my arm.', ja:'何かが腕に触れるのを感じた', note:''}]}],
  trivia:[
    {title:'原形と -ing で「見た量」が変わる',
     body:'I saw him cross the street.（渡り終わるまで見た）\n'+
          'I saw him crossing the street.（渡っている途中を見た）\n'+
          '進行形のコア【途中の一コマ】が、そのまま効いている。\n'+
          '事故の目撃証言などでは、この差が意味を持つ。'},
    {title:'受動態にすると to が復活する',
     body:'I saw him cross the street.（能動・原形）\n'+
          'He was seen to cross the street.（受動・to つき）\n'+
          '能動では省かれていた to が、受動態にすると顔を出す。'}]
},

/* ---------------------------------------------------- 不定詞 */
{
  id:'g-inf', type:'grammar', headword:'to + 動詞の原形', glyph:'to do', title:'不定詞の3用法',
  core:'1つの形で3つの働き', diagram:'gInf',
  coreNote:'to不定詞は1つの形で3つの働きをする。'+
           '3用法を暗記するのではなく、文の中で「どこに置かれているか」を見れば自然に決まる。',
  senses:[
    { id:'ginf-noun', chip:'名詞的', label:'名詞の位置 → 「〜すること」',
      gloss:'主語・目的語・補語になる',
      examples:[
        {en:'I want to go.', ja:'行きたい', note:'want の目的語'},
        {en:'To see is to believe.', ja:'見ることは信じること', note:'主語と補語'}]},
    { id:'ginf-adj', chip:'形容詞的', label:'名詞の後ろ → 「〜するための」',
      gloss:'直前の名詞を説明する',
      examples:[
        {en:'something to eat', ja:'何か食べるもの', note:'something を説明'},
        {en:'I have a lot of work to do.', ja:'やるべき仕事がたくさんある', note:''}]},
    { id:'ginf-adv', chip:'副詞的', label:'文全体に足す → 「〜するために」',
      gloss:'目的・結果・理由を添える',
      examples:[
        {en:'I came here to see you.', ja:'君に会いに来た', note:'目的'},
        {en:'I’m glad to hear that.', ja:'それを聞いてうれしい', note:'理由'},
        {en:'He grew up to be a doctor.', ja:'彼は成長して医者になった', note:'結果'}]},
    { id:'ginf-check', chip:'見分け方', label:'置かれた位置で決まる',
      gloss:'訳し方を覚えるより位置を見る',
      examples:[
        {en:'名詞が要る場所 → 名詞的', ja:'', note:''},
        {en:'名詞のすぐ後ろ → 形容詞的', ja:'', note:''},
        {en:'文が完成した後 → 副詞的', ja:'', note:''}]}],
  trivia:[
    {title:'3用法は暗記するものではない',
     body:'to不定詞の意味は「これから向かう」1つだけ。\n'+
          '3用法というのは、その1つが文のどこに置かれたかの分類にすぎない。\n'+
          '名詞が入る場所なら名詞的、名詞の後ろなら形容詞的、\n'+
          '文が完成した後に足されていれば副詞的。'},
    {title:'something to eat の語順',
     body:'日本語は「食べる何か」と前から説明するが、英語は後ろから貼る。\n'+
          '関係代名詞と同じで、まず名詞を出してから説明する。\n'+
          'something cold to drink（何か冷たい飲み物）も、\n'+
          '形容詞も不定詞も、両方とも後ろに並ぶ。'}]
},

/* -------------------------------------------- 疑問詞+to・間接疑問 */
{
  id:'g-wh', type:'grammar', headword:'what to do / I know what …', glyph:'wh-', title:'疑問詞+to と間接疑問',
  core:'疑問詞のかたまりを名詞として置く', diagram:'gWh',
  coreNote:'疑問詞のかたまりは、そのまま名詞として文の中に置ける。'+
           'ただし文の中に埋め込まれた瞬間、もう質問ではなくなるので、'+
           '疑問文の語順（do や倒置）は消える。',
  senses:[
    { id:'gwh-toinf', chip:'疑問詞+to', label:'疑問詞 + to不定詞',
      gloss:'「何を〜すべきか」を短く言う',
      examples:[
        {en:'I don’t know what to say.', ja:'何と言えばいいか分からない', note:''},
        {en:'Tell me how to get there.', ja:'そこへの行き方を教えて', note:''},
        {en:'I’m not sure where to go.', ja:'どこへ行けばいいか分からない', note:''}]},
    { id:'gwh-indirect', chip:'間接疑問', label:'疑問詞 + 主語 + 動詞',
      gloss:'文を丸ごと名詞として埋め込む',
      examples:[
        {en:'Do you know where he is?', ja:'彼がどこにいるか知ってる?', note:'×where is he'},
        {en:'I wonder what she wants.', ja:'彼女が何をほしいのかな', note:''}]},
    { id:'gwh-order', chip:'語順が戻る', label:'埋め込むと普通の語順に戻る',
      gloss:'もう質問ではないから',
      examples:[
        {en:'Where is he? → I know where he is.', ja:'', note:'is が後ろへ戻る'},
        {en:'What does she want? → I know what she wants.', ja:'', note:'does が消える'}]},
    { id:'gwh-tothat', chip:'言い換え', label:'2つの形は言い換えられる',
      gloss:'主語が同じなら to不定詞で短くできる',
      examples:[
        {en:'I don’t know what I should say.', ja:'何と言うべきか分からない', note:'間接疑問'},
        {en:'I don’t know what to say.', ja:'同じ意味', note:'主語が同じなので短くできる'}]}],
  trivia:[
    {title:'×Do you know where is he? が間違いな理由',
     body:'where he is は、文の中に埋め込まれた「かたまり」であって質問ではない。\n'+
          '質問しているのは Do you know …? の部分だけ。\n'+
          'かたまりの中は普通の文なので、主語 → 動詞の順に戻る。'},
    {title:'疑問詞 + to は「べき」を含む',
     body:'what to say ＝ what I should say（何と言うべきか）\n'+
          'to のコアは【これから向かう】なので、\n'+
          '自然と「これからどうすべきか」という意味になる。'}]
},

/* ------------------------------------------------------ that節 */
{
  id:'g-that', type:'grammar', headword:'that 節', glyph:'that', title:'that節',
  core:'文をまるごと名詞にする', diagram:'gThat',
  coreNote:'that は「ここから文が1つ始まりますよ」という合図。'+
           'that がつくことで、文がまるごと名詞1個ぶんの部品になり、'+
           '大きな文の中にはめ込める。',
  senses:[
    { id:'gtht-obj', chip:'目的語に', label:'思う・言う・知る の後ろに',
      gloss:'頭の中身や発言の中身を入れる',
      examples:[
        {en:'I think (that) he is right.', ja:'彼は正しいと思う', note:'that は省略できる'},
        {en:'She said that she was tired.', ja:'彼女は疲れていると言った', note:''}]},
    { id:'gtht-subj', chip:'主語に', label:'主語にもなれる（が重い）',
      gloss:'頭でっかちなので it を立てることが多い',
      examples:[
        {en:'That he lied is clear.', ja:'彼が嘘をついたのは明らかだ', note:'かたい'},
        {en:'It is clear that he lied.', ja:'同じ意味', note:'it を先に立てる方が普通'}]},
    { id:'gtht-adj', chip:'形容詞の後ろ', label:'感情や確信の理由を示す',
      gloss:'なぜそう感じるか',
      examples:[
        {en:'I’m glad that you came.', ja:'来てくれてうれしい', note:''},
        {en:'I’m sure that he’ll come.', ja:'彼はきっと来ると思う', note:''}]},
    { id:'gtht-omit', chip:'省略', label:'that はよく省かれる',
      gloss:'なくても切れ目が分かるから',
      examples:[
        {en:'I think he is right.', ja:'彼は正しいと思う', note:'that を省いた形'},
        {en:'I know you’re busy.', ja:'忙しいのは分かってる', note:''}]}],
  trivia:[
    {title:'that が省略できる理由',
     body:'目的語の位置にある that節は、that を取っても\n'+
          '「ここから新しい文が始まる」と読み手が判断できる。\n'+
          '関係代名詞の目的格が省略できるのとまったく同じ理屈。\n'+
          '主語の位置にある that は省略できない——切れ目が分からなくなるから。'},
    {title:'It is clear that … の it は何を指すか',
     body:'何も指していない。that節が長くて頭でっかちになるので、\n'+
          '仮の主語として it を先に置き、本体を後ろに回している。\n'+
          '英語は「重い情報ほど後ろ」という原則で動いている。'}]
}
,

/* ------------------------------------------------- 未来表現 */
{
  id:'g-future', type:'grammar', headword:'will / be going to', glyph:'will', title:'未来表現',
  core:'いつ心が決まったか', diagram:'gFuture',
  coreNote:'英語に未来形という時制はない。あるのは「今どう思っているか」の言い方だけ。'+
           '今この場で決まったなら will、前から決まっていたなら be going to、'+
           'もう動き出しているなら進行形。',
  senses:[
    { id:'gfut-will', chip:'will', label:'今この場で決まった',
      gloss:'話している瞬間に固まった意志・判断',
      examples:[
        {en:'The phone’s ringing. — I’ll get it!', ja:'電話だ ── 出るよ!', note:'今決めた'},
        {en:'I think it’ll rain.', ja:'雨が降ると思う', note:'今そう判断した'}]},
    { id:'gfut-going', chip:'be going to', label:'前から決まっていた',
      gloss:'すでに心が向かっている',
      examples:[
        {en:'I’m going to study abroad.', ja:'留学するつもりです', note:'前から決めていた'},
        {en:'Look at those clouds — it’s going to rain.', ja:'あの雲、降りそうだ', note:'兆候がすでにある'}]},
    { id:'gfut-prog', chip:'進行形', label:'もう動き出している',
      gloss:'予定が組まれ、準備が始まっている',
      examples:[
        {en:'I’m meeting him at three.', ja:'3時に彼と会う', note:'約束済み'},
        {en:'We’re moving next month.', ja:'来月引っ越す', note:''}]},
    { id:'gfut-present', chip:'現在形', label:'時刻表のように動かない',
      gloss:'個人の意志とは無関係に決まっている',
      examples:[
        {en:'The train leaves at ten.', ja:'電車は10時に出る', note:''},
        {en:'The shop opens at nine.', ja:'店は9時に開く', note:''}]}],
  trivia:[
    {title:'will は未来形ではなく助動詞',
     body:'英語に未来という時制はない。will は「今この場で心が固まった」\n'+
          'ことを表す助動詞にすぎない。\n'+
          'だから電話が鳴って I’ll get it. と言える（今決めた）。\n'+
          '前から出る係だったなら I’m going to get it. になる。'},
    {title:'雲を見て It’s going to rain. と言う理由',
     body:'be going to は「すでにそちらへ向かっている」。\n'+
          '黒い雲という兆候がもう出ているので、事態は動き出している。\n'+
          '何の根拠もなく予想するなら I think it will rain. になる。'}]
},

/* ------------------------------------------------- 過去進行形 */
{
  id:'g-pastprog', type:'grammar', headword:'was / were + -ing', glyph:'was+', title:'過去進行形',
  core:'過去のある時点で、途中だった', diagram:'gPastProg',
  coreNote:'過去進行形は、過去の一点にカメラを置いて「そのとき何の途中だったか」を写す形。'+
           'だから、割り込んでくる出来事とセットで使われることが多い。',
  senses:[
    { id:'gpp-mid', chip:'その時途中', label:'過去の一点で進行中だった',
      gloss:'始まっていて、まだ終わっていなかった',
      examples:[
        {en:'I was watching TV at eight.', ja:'8時にはテレビを見ていた', note:''},
        {en:'What were you doing then?', ja:'そのとき何してたの?', note:''}]},
    { id:'gpp-interrupt', chip:'割り込み', label:'途中に別の出来事が入る',
      gloss:'背景が進行形、割り込みが過去形',
      examples:[
        {en:'I was cooking when he called.', ja:'料理していたら彼が電話してきた', note:'背景＝進行形'},
        {en:'It was raining when we arrived.', ja:'着いたとき雨が降っていた', note:''}]},
    { id:'gpp-two', chip:'同時進行', label:'2つが並行していた',
      gloss:'while でつなぐことが多い',
      examples:[
        {en:'She was reading while I was cooking.', ja:'私が料理する間、彼女は読書していた', note:''}]},
    { id:'gpp-soft', chip:'やわらげる', label:'依頼をやわらかくする',
      gloss:'進行形の一時性が控えめさになる',
      examples:[
        {en:'I was wondering if you could help.', ja:'お願いできないかと思いまして', note:'過去形＋進行形で二重に距離を取る'}]}],
  trivia:[
    {title:'背景が進行形、割り込みが過去形',
     body:'I was cooking when he called.\n'+
          '料理はしばらく続いていた背景、電話は一瞬の出来事。\n'+
          '逆にすると I cooked when he called.（電話が来てから料理した）\n'+
          'となり、順番が入れ替わってしまう。'},
    {title:'I was wondering … がとても丁寧な理由',
     body:'過去形＝現在からの距離、進行形＝一時的で確定していない感じ。\n'+
          'この2つを重ねることで「ちょっと思っただけなんですが」という\n'+
          '控えめさが出る。英語の丁寧さは、距離の重ね方で作られる。'}]
},

/* --------------------------------------------------- 過去完了 */
{
  id:'g-pastperf', type:'grammar', headword:'had + p.p.', glyph:'had', title:'過去完了',
  core:'過去より、もう一つ前', diagram:'gPastPerf',
  coreNote:'現在完了の基準点が「今」なら、過去完了の基準点は「過去のある時点」。'+
           'その時点から見て、さらに前に済んでいたことを表す。',
  senses:[
    { id:'gpf-before', chip:'それより前', label:'過去の時点より前に済んでいた',
      gloss:'時間の順番をはっきりさせる',
      examples:[
        {en:'The train had already left when I got there.', ja:'着いたときには電車はもう出ていた',
         note:'出発 → 到着 の順'},
        {en:'I had never seen snow before I moved here.', ja:'ここに来るまで雪を見たことがなかった', note:''}]},
    { id:'gpf-cont', chip:'その時まで続いた', label:'過去の時点まで続いていた',
      gloss:'継続の現在完了を過去にずらした形',
      examples:[
        {en:'She had lived there for ten years.', ja:'彼女はそこに10年住んでいた', note:''}]},
    { id:'gpf-need', chip:'要らない場合', label:'順番が明らかなら過去形でよい',
      gloss:'before / after があれば順番は分かる',
      examples:[
        {en:'I finished my work and went home.', ja:'仕事を終えて帰宅した', note:'and で順番が分かる'},
        {en:'After I finished, I went home.', ja:'終えてから帰った', note:'after が順番を示す'}]},
    { id:'gpf-if', chip:'仮定法過去完了', label:'過去の事実に反する仮定',
      gloss:'過去より前の距離＝過去の現実からの距離',
      examples:[
        {en:'If I had known, I would have helped.', ja:'知っていたら助けたのに', note:'実際は知らなかった'}]}],
  trivia:[
    {title:'過去完了は「基準点をずらした現在完了」',
     body:'現在完了　have + p.p.　基準点は「今」\n'+
          '過去完了　had + p.p.　基準点は「過去のある時点」\n'+
          '同じ仕組みの、カメラの位置だけが違う形。'},
    {title:'いつも過去完了にしなくてよい',
     body:'before / after / and で順番がはっきりしていれば、過去形で足りる。\n'+
          '過去完了は「順番が紛らわしいとき」に、それを整理する道具。\n'+
          '使いすぎるとかえって重たい文になる。'}]
},

/* ----------------------------------- 助動詞 + have + 過去分詞 */
{
  id:'g-modalperf', type:'grammar', headword:'must have + p.p.', glyph:'must+', title:'助動詞＋完了形',
  core:'いまの判断を、過去の出来事に向ける', diagram:'gModalPerf',
  coreNote:'助動詞は「話し手の判断」。have + 過去分詞は「済んだこと」。'+
           'この2つを重ねると「済んだことについて、いま judgment を下す」形になる。'+
           '推量にも後悔にもなるのは、判断の向きが違うだけ。',
  senses:[
    { id:'gmp-must', chip:'must have', label:'〜したに違いない',
      gloss:'強い圧力が過去の判断に向かう',
      examples:[
        {en:'He must have forgotten.', ja:'彼は忘れたに違いない', note:''},
        {en:'You must have been tired.', ja:'疲れていたでしょうね', note:''}]},
    { id:'gmp-cant', chip:"can't have", label:'〜したはずがない',
      gloss:'可能性がそもそも無い',
      examples:[
        {en:'She can’t have said that.', ja:'彼女がそんなことを言ったはずがない', note:''}]},
    { id:'gmp-may', chip:'may have', label:'〜したかもしれない',
      gloss:'妨げるものがない＝ありうる',
      examples:[
        {en:'He may have left already.', ja:'もう出たかもしれない', note:''}]},
    { id:'gmp-should', chip:'should have', label:'〜すべきだった（しなかった）',
      gloss:'当然の道筋を外れた＝後悔',
      examples:[
        {en:'I should have studied more.', ja:'もっと勉強すべきだった', note:'実際はしなかった'},
        {en:'You shouldn’t have said that.', ja:'あれは言うべきじゃなかった', note:''}]}],
  trivia:[
    {title:'should have が「後悔」になる仕組み',
     body:'should のコアは【当然の道筋】。\n'+
          'have + p.p. で済んだことに向けると、\n'+
          '「本来通るはずの道を通らなかった」＝後悔になる。\n'+
          '未来に向ければ You should rest.（助言）のままで、後悔にはならない。'},
    {title:'must の2つの顔がここでも出る',
     body:'You must go.（行かなければ）── 圧力が行動へ\n'+
          'He must be tired.（疲れているに違いない）── 圧力が判断へ\n'+
          'He must have forgotten.（忘れたに違いない）── 圧力が過去の判断へ\n'+
          'コアは1つのまま、向ける先だけが変わっている。'}]
},

/* ----------------------------------------------------- 比較級 */
{
  id:'g-comp', type:'grammar', headword:'-er / more … than', glyph:'-er', title:'比較級',
  core:'2つを並べて差を言う', diagram:'gComp',
  coreNote:'than は「それと比べて」という基準を示す語。'+
           '比較級は必ず、何と比べているかがセットで要る。',
  senses:[
    { id:'gcmp-form', chip:'形', label:'短い語は -er、長い語は more',
      gloss:'音の長さで決まる',
      examples:[
        {en:'taller / bigger / easier', ja:'', note:'1〜2音節'},
        {en:'more beautiful / more important', ja:'', note:'3音節以上'}]},
    { id:'gcmp-than', chip:'than', label:'何と比べるかを示す',
      gloss:'比べる相手がないと成立しない',
      examples:[
        {en:'He’s taller than me.', ja:'彼は私より背が高い', note:''},
        {en:'This is easier than I thought.', ja:'思ったより簡単だ', note:''}]},
    { id:'gcmp-much', chip:'差を強める', label:'much / far / a lot で差を強調',
      gloss:'very は比較級を強められない',
      examples:[
        {en:'much better', ja:'ずっとよい', note:'×very better'},
        {en:'a little cheaper', ja:'少し安い', note:'差が小さいとき'}]},
    { id:'gcmp-irr', chip:'不規則', label:'形が変わる語',
      gloss:'よく使う語ほど不規則になりやすい',
      examples:[
        {en:'good → better / bad → worse', ja:'', note:''},
        {en:'many, much → more / little → less', ja:'', note:''}]}],
  trivia:[
    {title:'×very better と言えない理由',
     body:'very は「そのものの程度」を強める語で、差を強める語ではない。\n'+
          'very tall（とても高い）は言えるが、\n'+
          '「差がとても大きい」と言いたいなら much taller。\n'+
          'much / far / a lot はどれも「差」を強める側の語。'},
    {title:'than me と than I の違い',
     body:'本来は than I (am) で、比べているのは主語どうし。\n'+
          'ただし会話では than me が普通で、こちらが自然。\n'+
          'かたい文章では than I am と動詞まで書くこともある。'}]
},

/* ----------------------------------------------------- 最上級 */
{
  id:'g-super', type:'grammar', headword:'the -est / the most', glyph:'-est', title:'最上級',
  core:'範囲の中で1番', diagram:'gSuper',
  coreNote:'最上級に the がつくのは、「1番」は必ず1つに決まるから。'+
           '特定できるものには the——冠詞のコアがそのまま効いている。',
  senses:[
    { id:'gsup-the', chip:'the がつく', label:'1番は1つに決まる',
      gloss:'だから特定できる',
      examples:[
        {en:'He’s the tallest in the class.', ja:'彼はクラスで一番背が高い', note:''},
        {en:'This is the most expensive one.', ja:'これが一番高い', note:''}]},
    { id:'gsup-range', chip:'範囲を示す', label:'in か of で範囲を示す',
      gloss:'集団なら in、複数のものなら of',
      examples:[
        {en:'the best in Japan', ja:'日本で一番', note:'in ＝ 囲まれた範囲'},
        {en:'the tallest of the three', ja:'3人の中で一番', note:'of ＝ 全体から取り出す'}]},
    { id:'gsup-one', chip:'one of', label:'one of the -est ＝ 最も〜な一つ',
      gloss:'1番とは言い切らない言い方',
      examples:[
        {en:'one of the best movies', ja:'最高の映画の1つ', note:'複数形が続く'}]},
    { id:'gsup-noth', chip:'比較級で言う', label:'最上級は比較級でも言える',
      gloss:'言い換えられると理解が深まる',
      examples:[
        {en:'Nothing is more important than health.', ja:'健康より大切なものはない', note:'＝健康が一番'},
        {en:'He’s taller than any other student.', ja:'他のどの生徒より背が高い', note:'＝一番背が高い'}]}],
  trivia:[
    {title:'最上級に the がつく理由',
     body:'「クラスで一番背が高い人」は必ず1人に決まる。\n'+
          '決まる＝相手も特定できる＝the。\n'+
          '冠詞のコア（特定できるか）がそのまま効いている。\n'+
          '副詞の最上級では the を省くこともあるのは、\n'+
          '「どれ」と指す対象がないから。'},
    {title:'in と of の使い分けも、コアで割れる',
     body:'in the class ＝ クラスという枠の内側で（in ＝ 囲まれた内側）\n'+
          'of the three ＝ 3つという全体から取り出して（of ＝ 分離）\n'+
          '集団や場所なら in、数えられる複数なら of。'}]
},

/* -------------------------------------------------- as 〜 as */
{
  id:'g-as', type:'grammar', headword:'as … as', glyph:'as', title:'as 〜 as',
  core:'同じ高さに並べる', diagram:'gAs',
  coreNote:'as 〜 as は2つを同じ目盛りに並べる形。'+
           '否定にすると「そこまでは届かない」になるので、'+
           'not as 〜 as は「〜ほどではない」という控えめな比較になる。',
  senses:[
    { id:'gas-equal', chip:'同じくらい', label:'2つが同じ程度',
      gloss:'間には形容詞や副詞の原級が入る',
      examples:[
        {en:'He’s as tall as me.', ja:'彼は私と同じくらい背が高い', note:'-er にしない'},
        {en:'Come as soon as you can.', ja:'できるだけ早く来て', note:''}]},
    { id:'gas-not', chip:'not as', label:'そこまで届かない',
      gloss:'「〜ほどではない」',
      examples:[
        {en:'It’s not as bad as I thought.', ja:'思ったほど悪くない', note:''},
        {en:'I can’t run as fast as him.', ja:'彼ほど速く走れない', note:''}]},
    { id:'gas-possible', chip:'as … as possible', label:'できるだけ〜',
      gloss:'上限まで',
      examples:[
        {en:'as soon as possible', ja:'できるだけ早く', note:'ASAP'},
        {en:'as much as you like', ja:'好きなだけ', note:''}]},
    { id:'gas-times', chip:'倍数', label:'倍数は最初の as の前に置く',
      gloss:'〜の何倍',
      examples:[
        {en:'twice as large as that', ja:'あれの2倍の大きさ', note:''},
        {en:'three times as many', ja:'3倍の数', note:''}]}],
  trivia:[
    {title:'as 〜 as の間に比較級を入れない理由',
     body:'as 〜 as は「同じ目盛りに並べる」形なので、差を表す比較級とは相性が悪い。\n'+
          '×as taller as ／ ○as tall as\n'+
          '差を言いたいなら than の形（taller than）に切り替える。'},
    {title:'not as good as は、控えめな言い方になる',
     body:'It’s worse than that.（それより悪い）と言い切るより、\n'+
          'It’s not as good as that.（それほどよくない）の方がやわらかい。\n'+
          '否定で言うことで、直接的な批判を避けられる。'}]
},

/* ------------------------------------------------- 比較の応用 */
{
  id:'g-compadv', type:'grammar', headword:'the 比較級 …, the 比較級 …', glyph:'the-er',
  title:'比較の応用', core:'2つの目盛りを連動させる', diagram:'gCompAdv',
  coreNote:'比較級を2つ並べたり重ねたりすると、'+
           '「片方が動けばもう片方も動く」「どんどん動く」という動きを表せる。',
  senses:[
    { id:'gca-the', chip:'the 比較級', label:'一方が上がれば、他方も上がる',
      gloss:'2つの目盛りが連動する',
      examples:[
        {en:'The sooner, the better.', ja:'早ければ早いほどよい', note:''},
        {en:'The more you practice, the better you get.', ja:'練習するほどうまくなる', note:''}]},
    { id:'gca-and', chip:'比較級 and 比較級', label:'どんどん〜になる',
      gloss:'同じ方向へ進み続ける',
      examples:[
        {en:'It’s getting colder and colder.', ja:'どんどん寒くなってきた', note:''},
        {en:'more and more people', ja:'ますます多くの人', note:''}]},
    { id:'gca-less', chip:'less / least', label:'逆向きの比較',
      gloss:'程度が下がる方向',
      examples:[
        {en:'less expensive', ja:'より安い', note:'more の反対'},
        {en:'the least expensive', ja:'一番安い', note:''}]},
    { id:'gca-prefer', chip:'好みを言う', label:'prefer A to B',
      gloss:'比較級を使わない比較',
      examples:[
        {en:'I prefer tea to coffee.', ja:'コーヒーより紅茶が好き', note:'than ではなく to'}]}],
  trivia:[
    {title:'The sooner, the better. に動詞がない理由',
     body:'元は The sooner it is, the better it is. \n'+
          'よく使う形なので、分かりきった部分がどんどん削られた。\n'+
          '短くなった結果、標語のような響きになっている。'},
    {title:'prefer に than ではなく to を使う理由',
     body:'prefer は比較級ではないので than を取れない。\n'+
          '「紅茶の方へ気持ちが向かう」という到達の to が使われる。\n'+
          'superior to / inferior to も同じで、\n'+
          'ラテン語由来の比較の語は to をとる。'}]
}
,

/* --------------------------------------------- 等位接続詞 */
{
  id:'g-and', type:'grammar', headword:'and / but / or / so', glyph:'and', title:'等位接続詞',
  core:'同じ資格のものを横に並べる', diagram:'gAnd',
  coreNote:'等位接続詞は、前と後ろを対等につなぐ。'+
           'だから前後は同じ形でなければならない——名詞と名詞、動詞と動詞、文と文。',
  senses:[
    { id:'gand-same', chip:'同じ形で', label:'前後は同じ資格・同じ形',
      gloss:'ここが崩れると不自然になる',
      examples:[
        {en:'I like tea and coffee.', ja:'紅茶とコーヒーが好き', note:'名詞 and 名詞'},
        {en:'She sings and dances.', ja:'彼女は歌って踊る', note:'動詞 and 動詞'},
        {en:'I came and he left.', ja:'私が来て彼が出た', note:'文 and 文'}]},
    { id:'gand-but', chip:'but', label:'期待を裏切る方向へ',
      gloss:'前から予想される流れと逆',
      examples:[
        {en:'It’s small but strong.', ja:'小さいが力強い', note:'小さい→弱いという予想を裏切る'},
        {en:'I tried, but it didn’t work.', ja:'やってみたがだめだった', note:''}]},
    { id:'gand-or', chip:'or', label:'どちらかを選ぶ',
      gloss:'選択肢を並べる',
      examples:[
        {en:'Tea or coffee?', ja:'紅茶とコーヒーどちら?', note:''},
        {en:'Hurry, or you’ll be late.', ja:'急がないと遅れるよ', note:'命令文 + or ＝ さもないと'}]},
    { id:'gand-so', chip:'so', label:'だから ── 結果へ',
      gloss:'前が原因、後ろが結果',
      examples:[
        {en:'It was raining, so we stayed home.', ja:'雨だったので家にいた', note:''},
        {en:'I was tired, so I went to bed.', ja:'疲れていたので寝た', note:''}]}],
  trivia:[
    {title:'命令文 + and / or の意味',
     body:'Hurry up, and you’ll catch it.（急げば間に合う）\n'+
          'Hurry up, or you’ll miss it.（急がないと乗り遅れる）\n'+
          'and は「そうすれば」、or は「さもないと」。\n'+
          '同じ形なのに、接続詞1つで正反対の条件になる。'},
    {title:'so と because は向きが逆',
     body:'I was tired, so I went to bed.（原因 → 結果）\n'+
          'I went to bed because I was tired.（結果 → 原因）\n'+
          '言いたいことを先に置きたいなら because、\n'+
          '流れのまま話すなら so。'}]
},

/* --------------------------------------------- 従属接続詞 */
{
  id:'g-when', type:'grammar', headword:'when / if / because', glyph:'when', title:'従属接続詞',
  core:'文を1つの副詞のかたまりにする', diagram:'gWhen',
  coreNote:'従属接続詞は、文の前にくっついて「いつ・もし・なぜ」という'+
           '1個の副詞のかたまりを作る。主役の文に添えられる脇役なので、前後どちらにも置ける。',
  senses:[
    { id:'gwhn-time', chip:'いつ', label:'when / while / before / after / until',
      gloss:'時を示すかたまり',
      examples:[
        {en:'Call me when you arrive.', ja:'着いたら電話して', note:''},
        {en:'I’ll wait until you come.', ja:'来るまで待つよ', note:''}]},
    { id:'gwhn-if', chip:'もし', label:'if / unless',
      gloss:'条件を示すかたまり',
      examples:[
        {en:'If it rains, we’ll cancel.', ja:'雨なら中止します', note:''},
        {en:'Unless you hurry, you’ll be late.', ja:'急がないと遅れるよ', note:'unless ＝ if … not'}]},
    { id:'gwhn-why', chip:'なぜ・でも', label:'because / since / although / though',
      gloss:'理由や譲歩を示すかたまり',
      examples:[
        {en:'I stayed home because it was raining.', ja:'雨だったので家にいた', note:''},
        {en:'Although it was raining, we went out.', ja:'雨だったが出かけた', note:''}]},
    { id:'gwhn-future', chip:'未来でも現在形', label:'時と条件の副詞節では will を使わない',
      gloss:'すでに前提として置かれているから',
      examples:[
        {en:'I’ll call you when I arrive.', ja:'着いたら電話する', note:'×when I will arrive'},
        {en:'If it rains tomorrow, we’ll cancel.', ja:'明日雨なら中止', note:'×if it will rain'}]}],
  trivia:[
    {title:'when I arrive に will を使わない理由',
     body:'このかたまりは「着いたら」という前提を置いているだけで、\n'+
          '未来を予測しているわけではない。すでに起きたものとして扱っている。\n'+
          '判断（will）が入るのは主役の文の方だけ、という住み分け。'},
    {title:'when が2つの顔を持つ',
     body:'I’ll call you when I arrive.（着いたら＝副詞のかたまり、willなし）\n'+
          'I don’t know when he will arrive.（いつ着くか＝名詞のかたまり、willあり）\n'+
          '後者は間接疑問なので、未来なら will が要る。\n'+
          '同じ when でも、かたまりの役割が違う。'}]
},

/* ---------------------------------------------- 関係副詞 */
{
  id:'g-reladv', type:'grammar', headword:'where / when / why', glyph:'where', title:'関係副詞',
  core:'前置詞ごと1語にまとめる', diagram:'gRelAdv',
  coreNote:'関係副詞は「前置詞 + 関係代名詞」を1語にしたもの。'+
           'the place in which → the place where。'+
           'だから関係副詞の後ろは、欠けのない完全な文になる。',
  senses:[
    { id:'grla-where', chip:'where', label:'場所 ＝ in / at which',
      gloss:'場所を説明する',
      examples:[
        {en:'This is the house where I was born.', ja:'ここが私の生まれた家です', note:'＝in which'},
        {en:'the town where he lives', ja:'彼が住んでいる町', note:''}]},
    { id:'grla-when', chip:'when', label:'時 ＝ on / in which',
      gloss:'時を説明する',
      examples:[
        {en:'I remember the day when we met.', ja:'出会った日を覚えている', note:'＝on which'},
        {en:'the year when I graduated', ja:'卒業した年', note:''}]},
    { id:'grla-why', chip:'why', label:'理由 ＝ for which',
      gloss:'the reason とセットで使う',
      examples:[
        {en:'That’s the reason why I left.', ja:'それが私が辞めた理由です', note:''},
        {en:'That’s why I left.', ja:'だから辞めたんです', note:'the reason を省くこともある'}]},
    { id:'grla-diff', chip:'関係代名詞との差', label:'後ろが完全な文かどうか',
      gloss:'ここだけ見れば判別できる',
      examples:[
        {en:'the house which I bought', ja:'私が買った家', note:'bought の目的語が欠けている → 関係代名詞'},
        {en:'the house where I live', ja:'私が住んでいる家', note:'欠けがない → 関係副詞'}]}],
  trivia:[
    {title:'関係代名詞と関係副詞の見分け方',
     body:'後ろの文に欠けがあるかどうかだけ見ればよい。\n'+
          'the house which I bought ── bought の目的語がない → 関係代名詞\n'+
          'the house where I live ── I live で文が完成している → 関係副詞\n'+
          'where は in which がまとまったものなので、欠けが埋まっている。'},
    {title:'That’s why … は元の形が省かれたもの',
     body:'元は That’s the reason why I left. \n'+
          'the reason が分かりきっているので、よく省略される。\n'+
          '逆に why の方を省いて That’s the reason I left. とも言える。\n'+
          'どちらか片方あれば通じる。'}]
},

/* ---------------------------------------------- 分詞の後置修飾 */
{
  id:'g-part', type:'grammar', headword:'-ing / p.p. + 名詞のうしろ', glyph:'-ing/pp',
  title:'分詞の後置修飾', core:'名詞に短い説明を後ろから貼る', diagram:'gPart',
  coreNote:'関係代名詞から「who is」「which is」を取り除いた形が分詞。'+
           'する側なら -ing、される側なら過去分詞。'+
           '英語は名詞を先に出して後ろから説明する、という点は関係代名詞と同じ。',
  senses:[
    { id:'gpar-ing', chip:'-ing＝する側', label:'その名詞が動作をしている',
      gloss:'能動の関係',
      examples:[
        {en:'the man standing over there', ja:'向こうに立っている男性', note:'男性が立っている'},
        {en:'the girl playing the piano', ja:'ピアノを弾いている女の子', note:''}]},
    { id:'gpar-pp', chip:'p.p.＝される側', label:'その名詞が動作を受けている',
      gloss:'受動の関係',
      examples:[
        {en:'the car parked outside', ja:'外に停めてある車', note:'車は停められた側'},
        {en:'a letter written in English', ja:'英語で書かれた手紙', note:''}]},
    { id:'gpar-from', chip:'関係代名詞から', label:'who is / which is を省いた形',
      gloss:'元の形を知ると腑に落ちる',
      examples:[
        {en:'the man who is standing there → the man standing there', ja:'', note:''},
        {en:'the car which was parked → the car parked', ja:'', note:''}]},
    { id:'gpar-front', chip:'前に置く場合', label:'1語なら名詞の前',
      gloss:'短いものは前、長いものは後ろ',
      examples:[
        {en:'a sleeping baby', ja:'眠っている赤ちゃん', note:'1語なので前'},
        {en:'a baby sleeping in the car', ja:'車で眠っている赤ちゃん', note:'長いので後ろ'}]}],
  trivia:[
    {title:'1語なら前、2語以上なら後ろ',
     body:'a sleeping baby（1語なので前）\n'+
          'a baby sleeping in the car（説明が長いので後ろ）\n'+
          '英語は「重い情報ほど後ろ」。\n'+
          'boiled egg（ゆで卵）と an egg boiled for ten minutes も同じ理屈。'},
    {title:'-ing と p.p. は「する側か、される側か」',
     body:'exciting news（わくわくさせるニュース）── ニュースがさせる側\n'+
          'excited people（わくわくしている人）── 人はさせられた側\n'+
          'interesting と interested を取り違えやすいのも、この関係。'}]
},

/* ------------------------------------------------- 分詞構文 */
{
  id:'g-partcon', type:'grammar', headword:'-ing, S V …', glyph:'-ing,', title:'分詞構文',
  core:'接続詞と主語を省いて軽くする', diagram:'gPartCon',
  coreNote:'分詞構文は、従属接続詞の文から「接続詞」と「主語」を省き、'+
           '動詞を -ing にした形。関係が文脈から分かるときだけ使える省略技。',
  senses:[
    { id:'gpc-how', chip:'作り方', label:'接続詞と主語を落として -ing に',
      gloss:'主語が同じときだけ省ける',
      examples:[
        {en:'When I walked home, I met him.', ja:'帰る途中で彼に会った', note:'元の形'},
        {en:'Walking home, I met him.', ja:'同じ意味', note:'接続詞と主語を省いた'}]},
    { id:'gpc-mean', chip:'関係は文脈', label:'時・理由・条件など、文脈で決まる',
      gloss:'接続詞を省いた分、関係はあいまいになる',
      examples:[
        {en:'Feeling tired, I went to bed.', ja:'疲れていたので寝た', note:'理由'},
        {en:'Turning left, you’ll see it.', ja:'左に曲がれば見える', note:'条件'}]},
    { id:'gpc-being', chip:'受動なら being', label:'される側なら being + p.p.（省略可）',
      gloss:'being はよく省かれる',
      examples:[
        {en:'(Being) written in English, it was hard to read.', ja:'英語で書かれていたので読みにくかった', note:''}]},
    { id:'gpc-fixed', chip:'決まった形', label:'主語が違っても使う慣用表現',
      gloss:'よく使うものは形が固まっている',
      examples:[
        {en:'Generally speaking, …', ja:'一般的に言えば', note:''},
        {en:'Judging from his face, …', ja:'彼の顔から判断すると', note:''}]}],
  trivia:[
    {title:'分詞構文が省略できるのは「主語が同じとき」',
     body:'Walking home, I met him.（歩いたのも会ったのも私）\n'+
          '主語が違うと、誰が歩いたのか分からなくなる。\n'+
          'その場合は主語を残す（It being rainy, we stayed home.）が、\n'+
          'かなりかたい書き言葉になる。'},
    {title:'話し言葉ではあまり使わない',
     body:'分詞構文は情報を削った形なので、読み手が補う必要がある。\n'+
          '会話では when / because をそのまま言う方が親切。\n'+
          'ニュースや論文など、簡潔さが求められる書き言葉でよく見る。'}]
},

/* --------------------------------------------------- 仮定法 */
{
  id:'g-if', type:'grammar', headword:'If I were … / If I had …', glyph:'if', title:'仮定法',
  core:'現実から一歩ずらす', diagram:'gIf',
  coreNote:'仮定法は特別な文法ではない。過去形＝【距離】を「時間」ではなく'+
           '「現実」に向けて使っているだけ。'+
           '現実から1歩ずらしたいなら過去形、2歩ずらしたいなら過去完了。',
  senses:[
    { id:'gif-now', chip:'現在の仮定', label:'いまの現実と違うこと → 過去形',
      gloss:'If + 過去形, 主語 + would + 原形',
      examples:[
        {en:'If I were you, I’d say no.', ja:'私が君なら断るよ', note:'私は君ではない'},
        {en:'If I had time, I would go.', ja:'時間があれば行くのに', note:'実際は時間がない'}]},
    { id:'gif-past', chip:'過去の仮定', label:'過去の現実と違うこと → 過去完了',
      gloss:'If + had + p.p., 主語 + would have + p.p.',
      examples:[
        {en:'If I had known, I would have helped.', ja:'知っていたら助けたのに', note:'実際は知らなかった'},
        {en:'If she had left earlier, she wouldn’t have missed it.', ja:'もっと早く出ていれば間に合ったのに', note:''}]},
    { id:'gif-real', chip:'ただの条件', label:'ありうることなら現在形のまま',
      gloss:'仮定法にしない',
      examples:[
        {en:'If it rains, we’ll cancel.', ja:'雨なら中止します', note:'雨は十分ありうる'},
        {en:'If you need help, call me.', ja:'助けが要るなら呼んで', note:''}]},
    { id:'gif-wish', chip:'I wish / as if', label:'if 以外にも現れる',
      gloss:'現実からずらす形はどこでも同じ',
      examples:[
        {en:'I wish I could fly.', ja:'飛べたらいいのに', note:''},
        {en:'He talks as if he knew everything.', ja:'彼は何でも知っているかのように話す', note:'実際は知らない'}]}],
  trivia:[
    {title:'仮定法は覚え直す文法ではない',
     body:'過去形のコアは【距離】。時間の距離なら過去、現実の距離なら仮定法。\n'+
          'Could you …? が丁寧なのも、心理的な距離を取っているから。\n'+
          '3つとも、同じ1つの形の使い分けにすぎない。'},
    {title:'1歩ずらすか、2歩ずらすか',
     body:'現在の現実からずらす → 過去形（1歩）\n'+
          '過去の現実からずらす → 過去完了（2歩）\n'+
          '「もう一段深く現実から離す」ために、時制をもう一段さかのぼらせている。'}]
},

/* ---------------------------------------------- it の特別用法 */
{
  id:'g-it', type:'grammar', headword:'It is … to do / It is raining', glyph:'it', title:'it の特別用法',
  core:'中身のない主語を先に立てる', diagram:'gIt',
  coreNote:'英語は主語がないと文にならない。'+
           'でも本当の主語が長すぎたり、そもそも存在しなかったりする。'+
           'そこで中身のない it を置いて、文の形だけ整える。',
  senses:[
    { id:'git-formal', chip:'仮主語', label:'長い主語を後ろへ回す',
      gloss:'頭でっかちを避ける',
      examples:[
        {en:'It is hard to learn English.', ja:'英語を学ぶのは難しい', note:'本当の主語は to learn English'},
        {en:'It is clear that he lied.', ja:'彼が嘘をついたのは明らかだ', note:''}]},
    { id:'git-obj', chip:'仮目的語', label:'目的語が長いときも同じ',
      gloss:'make it 形容詞 to do の形',
      examples:[
        {en:'I found it hard to say no.', ja:'断るのは難しいと思った', note:''},
        {en:'The rain made it difficult to walk.', ja:'雨で歩きにくかった', note:''}]},
    { id:'git-weather', chip:'天候・時間', label:'主語がそもそも無い場合',
      gloss:'形を整えるためだけの it',
      examples:[
        {en:'It’s raining.', ja:'雨が降っている', note:'何が降っているとは言っていない'},
        {en:'It’s three o’clock.', ja:'3時です', note:''},
        {en:'It’s ten minutes from here.', ja:'ここから10分です', note:'距離'}]},
    { id:'git-cleft', chip:'強調構文', label:'It is 〜 that … で1か所を強調',
      gloss:'言いたい部分を前に引き出す',
      examples:[
        {en:'It was Ken that broke the window.', ja:'窓を割ったのはケンだ', note:'ケンを強調'},
        {en:'It was yesterday that I saw him.', ja:'彼に会ったのは昨日だ', note:'昨日を強調'}]}],
  trivia:[
    {title:'It’s raining. の it は何なのか',
     body:'何も指していない。英語は主語がないと文が成立しないので、\n'+
          '形を整えるためだけに置かれている。\n'+
          '日本語なら「雨だ」で済むところを、英語は主語を要求する——\n'+
          'その差が、この空っぽの it に現れている。'},
    {title:'強調構文と仮主語の見分け方',
     body:'It is … that … から It is と that を取り除いてみる。\n'+
          '文として成立すれば強調構文、しなければ仮主語。\n'+
          'It was Ken that broke the window. → Ken broke the window.（成立）→ 強調構文'}]
},

/* ----------------------------------------------------- 代名詞 */
{
  id:'g-pron', type:'grammar', headword:'it / one / -self', glyph:'one', title:'代名詞',
  core:'まったく同じものか、同じ種類か', diagram:'gPron',
  coreNote:'it はさっき出たそのものを指し、one は同じ種類の別のものを指す。'+
           'この違いを押さえると、買い物の会話がぐっと自然になる。',
  senses:[
    { id:'gprn-it', chip:'it＝そのもの', label:'さっき出たもの、そのもの',
      gloss:'同一物',
      examples:[
        {en:'I lost my pen. I need to find it.', ja:'ペンをなくした。見つけないと', note:'なくしたそのペン'},
        {en:'Where is it?', ja:'それどこ?', note:''}]},
    { id:'gprn-one', chip:'one＝同じ種類', label:'同じ種類の、別のもの',
      gloss:'別物だが同種',
      examples:[
        {en:'I lost my pen. I need to buy one.', ja:'ペンをなくした。買わないと', note:'別の新しいペン'},
        {en:'This one is cheaper.', ja:'こっちの方が安い', note:'商品を指す定番'}]},
    { id:'gprn-self', chip:'再帰代名詞', label:'主語と目的語が同じ人',
      gloss:'自分が自分に向かう',
      examples:[
        {en:'I hurt myself.', ja:'けがをした', note:'自分で自分を傷つけた'},
        {en:'Make yourself at home.', ja:'くつろいでください', note:''},
        {en:'I did it myself.', ja:'自分でやった', note:'強調の用法'}]},
    { id:'gprn-they', chip:'総称の they', label:'不特定の人々を指す',
      gloss:'誰と特定せずに言う',
      examples:[
        {en:'They say it’s going to rain.', ja:'雨が降るらしい', note:'誰が言ったかは重要でない'}]}],
  trivia:[
    {title:'買い物で one が活躍する理由',
     body:'店で「これください」と言うとき、指しているのは\n'+
          '「その品物そのもの」ではなく「その種類の1つ」。\n'+
          'だから I’ll take this one. や Do you have a smaller one?\n'+
          'it を使うと「その現物」になってしまう。'},
    {title:'I hurt myself. に myself が要る理由',
     body:'英語は「誰が誰を」をはっきりさせる言語。\n'+
          'I hurt. だと目的語がなく、何を傷つけたのか分からない。\n'+
          '主語と同じ人だと示すために、専用の形（myself）を使う。'}]
},

/* ---------------------------------------------------- 数量表現 */
{
  id:'g-quant', type:'grammar', headword:'all / both / each / every', glyph:'all', title:'数量表現',
  core:'ひとまとめに見るか、1つずつ見るか', diagram:'gQuant',
  coreNote:'all や both は全体をひとまとめに見る語、'+
           'each や every は1つずつ順に見ていく語。'+
           'だから each / every の後ろは単数になる。',
  senses:[
    { id:'gqnt-all', chip:'まとめて', label:'all / both → 全体をひとまとめに',
      gloss:'複数として扱う',
      examples:[
        {en:'All the students are here.', ja:'生徒は全員います', note:'are（複数）'},
        {en:'Both of them are good.', ja:'両方ともよい', note:'both は2つ限定'}]},
    { id:'gqnt-each', chip:'1つずつ', label:'each / every → 1つずつ見る',
      gloss:'単数として扱う',
      examples:[
        {en:'Each student has a desk.', ja:'各生徒に机がある', note:'has（単数）'},
        {en:'Every room is clean.', ja:'どの部屋もきれいだ', note:'is（単数）'}]},
    { id:'gqnt-either', chip:'2つのうち', label:'either / neither → 2つのうちの',
      gloss:'どちらか／どちらも〜ない',
      examples:[
        {en:'Either one is fine.', ja:'どちらでもいい', note:''},
        {en:'Neither of them came.', ja:'どちらも来なかった', note:''}]},
    { id:'gqnt-most', chip:'部分', label:'most / some / none → 一部',
      gloss:'全体のうちどれくらいか',
      examples:[
        {en:'Most of them agreed.', ja:'ほとんどが賛成した', note:''},
        {en:'None of them came.', ja:'誰も来なかった', note:''}]}],
  trivia:[
    {title:'each と every の後ろが単数になる理由',
     body:'どちらも「1つずつ順に見ていく」語だから。\n'+
          'いま見ているのは常に1つなので、動詞も単数。\n'+
          'Every room is clean.（どの部屋も、1つずつ見ればきれい）\n'+
          '一方 all は全体をまとめて見るので複数扱いになる。'},
    {title:'each と every の微妙な違い',
     body:'each ── 1つひとつを意識する（Each student has a name.）\n'+
          'every ── 全部を見渡したうえで「どれも」と言う\n'+
          'each は2つからでも使えるが、every は3つ以上から。'}]
},

/* ------------------------------------------- 付加疑問と否定疑問 */
{
  id:'g-tag', type:'grammar', headword:'…, isn’t it? / Don’t you …?', glyph:'tag',
  title:'付加疑問と否定疑問', core:'同意を求める・意外さを示す', diagram:'gTag',
  coreNote:'付加疑問は「そうだよね?」と念を押す形。文が肯定なら否定で、否定なら肯定で受ける。'+
           '否定疑問は「〜じゃないの?」という意外さや確認を表す。',
  senses:[
    { id:'gtag-make', chip:'作り方', label:'肯定なら否定で、否定なら肯定で受ける',
      gloss:'主語は代名詞に、動詞は前と合わせる',
      examples:[
        {en:'It’s cold, isn’t it?', ja:'寒いよね?', note:'肯定 → 否定'},
        {en:'You don’t smoke, do you?', ja:'タバコ吸わないよね?', note:'否定 → 肯定'}]},
    { id:'gtag-tone', chip:'言い方で変わる', label:'下げれば同意、上げれば質問',
      gloss:'同じ形でも意味が変わる',
      examples:[
        {en:'It’s cold, isn’t it? ↘', ja:'寒いよね（同意を求めている）', note:'答えは期待していない'},
        {en:'It’s cold, isn’t it? ↗', ja:'寒くない?（本当に聞いている）', note:''}]},
    { id:'gtag-neg', chip:'否定疑問', label:'意外さ・確認を表す',
      gloss:'「〜じゃないの?」',
      examples:[
        {en:'Don’t you like it?', ja:'好きじゃないの?', note:'好きだと思っていた'},
        {en:'Aren’t you coming?', ja:'来ないの?', note:''}]},
    { id:'gtag-ans', chip:'答え方', label:'Yes / No は事実に合わせる',
      gloss:'日本語と逆になる',
      examples:[
        {en:'— Don’t you like it? — Yes, I do.', ja:'好きじゃないの? ── いや、好きだよ', note:'Yes ＝ 好き'},
        {en:'— Don’t you like it? — No, I don’t.', ja:'好きじゃないの? ── うん、好きじゃない', note:'No ＝ 好きでない'}]}],
  trivia:[
    {title:'否定疑問の Yes / No が日本語と逆になる',
     body:'英語の Yes / No は、質問の形ではなく「事実」に合わせる。\n'+
          '好きなら必ず Yes、好きでなければ必ず No。\n'+
          '日本語は質問に対して「はい（その通り、好きじゃない）」と答えるので、\n'+
          'ちょうど反対になる。ここは慣れるしかない。'},
    {title:'Let’s の付加疑問は shall we?',
     body:'Let’s go, shall we?（行こうよ、ね?）\n'+
          '命令文なら will you?（Open the window, will you?）\n'+
          'どちらも決まった形なので、これだけは覚えておくと便利。'}]
},

/* ------------------------------------------- 形容詞と副詞の位置 */
{
  id:'g-adj', type:'grammar', headword:'形容詞・副詞の位置', glyph:'adj', title:'形容詞と副詞の位置',
  core:'置く場所で役割が決まる', diagram:'gAdj',
  coreNote:'英語は語順で役割が決まる言語なので、'+
           '修飾語も「どこに置くか」が意味を決める。'+
           '特に頻度の副詞は、置き場所がほぼ固定されている。',
  senses:[
    { id:'gadj-pre', chip:'形容詞は名詞の前', label:'1語なら前、2語以上なら後ろ',
      gloss:'重い情報ほど後ろへ',
      examples:[
        {en:'a beautiful garden', ja:'美しい庭', note:'1語なので前'},
        {en:'a garden full of flowers', ja:'花でいっぱいの庭', note:'長いので後ろ'}]},
    { id:'gadj-som', chip:'-thing は後ろ', label:'something などは必ず後ろから修飾',
      gloss:'例外的に語順が逆になる',
      examples:[
        {en:'something cold', ja:'何か冷たいもの', note:'×cold something'},
        {en:'anything interesting', ja:'何か面白いこと', note:''}]},
    { id:'gadj-freq', chip:'頻度の副詞', label:'be動詞の後ろ、一般動詞の前',
      gloss:'always / often / sometimes / never',
      examples:[
        {en:'He is always late.', ja:'彼はいつも遅れる', note:'be の後ろ'},
        {en:'He always comes late.', ja:'彼はいつも遅れて来る', note:'一般動詞の前'}]},
    { id:'gadj-order', chip:'形容詞の並び順', label:'意見 → 大きさ → 色 → 出身 → 材質',
      gloss:'ネイティブは無意識に並べている',
      examples:[
        {en:'a nice big red Japanese wooden box', ja:'すてきな大きい赤い日本製の木箱', note:''},
        {en:'×a wooden red big box', ja:'', note:'順番が違うと不自然'}]}],
  trivia:[
    {title:'something cold の語順が逆になる理由',
     body:'some + thing のように、もともと2語がくっついてできた語なので、\n'+
          '前に形容詞を置く隙間がない。だから後ろから修飾する。\n'+
          'something cold to drink（何か冷たい飲み物）では、\n'+
          '形容詞も不定詞も、両方とも後ろに並ぶ。'},
    {title:'形容詞の並び順には決まりがある',
     body:'意見 → 大きさ → 年齢 → 形 → 色 → 出身 → 材質 → 目的\n'+
          'a nice big old round red Japanese wooden box\n'+
          'ネイティブはこれを習わずに身につけている。\n'+
          '暗記する必要はないが、順番が違うと不自然に響く。'}]
},

/* ------------------------------------------- 複数形と所有格 */
{
  id:'g-plural', type:'grammar', headword:'-s / -’s', glyph:'-s/’s', title:'複数形と所有格',
  core:'同じ -s でも役割が違う', diagram:'gPlural',
  coreNote:'名詞につく -s には2種類ある。'+
           '数を増やす -s と、所有を示す -’s。'+
           'アポストロフィの有無だけが両者を分けている。',
  senses:[
    { id:'gplr-plural', chip:'複数形', label:'輪郭のあるものが2つ以上',
      gloss:'数えられるものにしかつかない',
      examples:[
        {en:'two books / three cities', ja:'', note:''},
        {en:'×two waters', ja:'', note:'水には輪郭がない'}]},
    { id:'gplr-irr', chip:'不規則', label:'よく使う語ほど形が残る',
      gloss:'古い形がそのまま残っている',
      examples:[
        {en:'man → men / child → children', ja:'', note:''},
        {en:'foot → feet / tooth → teeth', ja:'', note:''},
        {en:'sheep → sheep / fish → fish', ja:'', note:'変わらないもの'}]},
    { id:'gplr-poss', chip:'所有格', label:'’s で「〜の」',
      gloss:'アポストロフィが目印',
      examples:[
        {en:'Tom’s book', ja:'トムの本', note:''},
        {en:'the students’ desks', ja:'生徒たちの机', note:'複数形の後ろは ’ だけ'}]},
    { id:'gplr-of', chip:'of と ’s', label:'人には ’s、物には of',
      gloss:'ざっくりした目安',
      examples:[
        {en:'my father’s car', ja:'父の車', note:'人なので ’s'},
        {en:'the door of the car', ja:'車のドア', note:'物なので of'},
        {en:'today’s news', ja:'今日のニュース', note:'時間にも ’s を使う'}]}],
  trivia:[
    {title:'students’ と student’s の違い',
     body:'student’s desk ── 1人の生徒の机\n'+
          'students’ desks ── 複数の生徒の机\n'+
          '複数形の -s の後ろには、アポストロフィだけを置く。\n'+
          '書くときにだけ現れる区別で、音は同じ。'},
    {title:'人には ’s、物には of が使われる理由',
     body:'’s はもともと「持ち主」を示す形なので、意志のあるものと相性がいい。\n'+
          '物には of（全体から切り離された一部）を使う。\n'+
          'ただし today’s news / a day’s work のように、\n'+
          '時間には ’s を使うという例外がある。'}]
}


];

/* 40ページは一続きだと探しにくいので、意味のまとまりで小見出しを入れる。
   並び順もこの通りにする */
const GRAMMAR_GROUPS = [
  { label:'時制',       ids:['g-present','g-prog','g-past','g-pastprog','g-perfect','g-pastperf',
                             'g-future','g-modalperf'] },
  { label:'文型と語順', ids:['g-order','g-svoo','g-svoc','g-there','g-imp'] },
  { label:'動詞の後ろ', ids:['g-inf','g-ing','g-causative','g-percept','g-wh','g-that','g-passive'] },
  { label:'比較',       ids:['g-comp','g-super','g-as','g-compadv'] },
  { label:'つなぐ',     ids:['g-and','g-when','g-rel','g-reladv','g-part','g-partcon'] },
  { label:'その他',     ids:['g-article','g-plural','g-modal','g-do','g-if','g-it','g-pron',
                             'g-quant','g-tag','g-adj'] }
];
