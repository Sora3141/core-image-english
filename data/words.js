/* ============================================================
   紛らわしい語 ── 日本語では同じ訳になるのに、英語では別物の語群
   丸暗記でも語源でもなく、「何で割れているか」を1本の軸で示す
   ============================================================ */
const WORDSETS = [

/* ------------------------------------------------------- 言う */
{
  id:'w-say', type:'word', headword:'say / tell / speak / talk', glyph:'say',
  title:'「言う」の4語', core:'何に焦点を当てているか', diagram:'wSay',
  coreNote:'4つとも「言う」と訳せるが、見ているものが違う。'+
           '言葉そのものか、届ける相手か、口から音を出す行為か、やりとりか。',
  senses:[
    { id:'wsay-say', chip:'say', label:'say → 言葉の中身',
      gloss:'何と言ったか。目的語は言葉そのもの',
      examples:[
        {en:'He said hello.', ja:'彼はこんにちはと言った', note:'言った中身が目的語'},
        {en:'What did you say?', ja:'何て言ったの?', note:''},
        {en:'She said to me that…', ja:'彼女は私に〜と言った', note:'相手を言うには to が要る'}]},
    { id:'wsay-tell', chip:'tell', label:'tell → 相手に届ける',
      gloss:'必ず受け手がいる。前置詞なしで人を置く',
      examples:[
        {en:'Tell me the truth.', ja:'本当のことを言って', note:'tell + 人 + 内容'},
        {en:'He told her a story.', ja:'彼は彼女に話を聞かせた', note:''},
        {en:'Tell me about it.', ja:'そのことを話して', note:''}]},
    { id:'wsay-speak', chip:'speak', label:'speak → 口から音を出す',
      gloss:'一方向。ややかたく、言語や演説に使う',
      examples:[
        {en:'Do you speak English?', ja:'英語を話しますか', note:'言語は speak'},
        {en:'He spoke for an hour.', ja:'彼は1時間話した', note:'一方的に話す'},
        {en:'May I speak to Ken?', ja:'ケンをお願いします', note:'電話の定型'}]},
    { id:'wsay-talk', chip:'talk', label:'talk → やりとりする',
      gloss:'双方向。くだけた会話',
      examples:[
        {en:'Let’s talk about it.', ja:'そのことを話そう', note:''},
        {en:'I talked with my boss.', ja:'上司と話した', note:'with ＝ 向かい合って一緒に'}]}],
  trivia:[
    {title:'say と tell で後ろの形が違う理由',
     body:'say は「言葉の中身」を見ているので、目的語は言葉。\n'+
          '相手を入れたければ前置詞が要る（say to me）。\n'+
          'tell は「届ける」なので、受け手が目的語になれる（tell me）。\n'+
          '×say me ／ ○tell me ／ ○say to me'},
    {title:'speak English とは言うが talk English とは言わない',
     body:'speak は「口から音を出す」行為そのもので、言語を直接目的語にできる。\n'+
          'talk は双方向のやりとりなので、言語を目的語に取れない。\n'+
          '「英語で話す」なら talk in English。'}]
},

/* --------------------------------------------- 見る・聞く */
{
  id:'w-see', type:'word', headword:'see / look / watch ・ hear / listen', glyph:'see',
  title:'見る・聞く', core:'意図があるかどうか', diagram:'wSee',
  coreNote:'日本語では全部「見る」「聞く」だが、英語は'+
           '向こうから入ってくるのか、こちらから向けるのかで語が分かれる。'+
           'こちらから向ける語は、向ける先を示す前置詞が要る。',
  senses:[
    { id:'wsee-in', chip:'入ってくる', label:'see / hear → 意図せず入ってくる',
      gloss:'見よう・聞こうとしなくても感覚に届く',
      examples:[
        {en:'I saw him at the station.', ja:'駅で彼を見かけた', note:'たまたま目に入った'},
        {en:'Can you hear me?', ja:'聞こえますか', note:'耳に届いているか'}]},
    { id:'wsee-out', chip:'向ける', label:'look / listen → こちらから向ける',
      gloss:'意図して向けるので、向ける先が要る',
      examples:[
        {en:'Look at this photo.', ja:'この写真を見て', note:'at ＝ 一点に向ける'},
        {en:'Listen to me.', ja:'聞いて', note:'to ＝ 相手まで届かせる'}]},
    { id:'wsee-follow', chip:'追い続ける', label:'watch → 動くものを追い続ける',
      gloss:'時間をかけて目で追う',
      examples:[
        {en:'I watched the game.', ja:'試合を見た', note:'動いているものを追う'},
        {en:'Watch your step.', ja:'足元に気をつけて', note:'目を離さない'}]},
    { id:'wsee-mean', chip:'わかる', label:'see → 目に入る から「わかる」へ',
      gloss:'頭の中に像が入ってくる',
      examples:[
        {en:'I see what you mean.', ja:'言いたいことは分かるよ', note:'理解が入ってきた'},
        {en:'Let’s see.', ja:'ええと', note:''}]}],
  trivia:[
    {title:'look と listen にだけ前置詞が要る理由',
     body:'どちらも「こちらから向ける」動作なので、向ける先が決まらないと成立しない。\n'+
          'look at / listen to。一方 see と hear は向こうから入ってくるので、\n'+
          '前置詞なしでそのまま目的語を取れる。'},
    {title:'watch TV とは言うが watch a picture とは言わない',
     body:'watch は「動いているものを追い続ける」。\n'+
          '写真は動かないので追えない。だから look at a picture。\n'+
          'テレビや試合や赤ちゃんは動くので watch。'}]
},

/* ----------------------------------------------------- 大きい */
{
  id:'w-big', type:'word', headword:'big / large / great / huge', glyph:'big',
  title:'「大きい」の4語', core:'主観か客観か、程度か', diagram:'wBig',
  coreNote:'big は話し手の感覚、large は測れるサイズ、great は程度、huge は圧倒的。'+
           '同じ「大きい」でも、どこを見ているかが違う。',
  senses:[
    { id:'wbig-big', chip:'big', label:'big → 主観的に大きい',
      gloss:'口語的。重要さや深刻さにも使える',
      examples:[
        {en:'That’s a big problem.', ja:'それは大きな問題だ', note:'サイズではなく深刻さ'},
        {en:'a big brother', ja:'兄', note:'年上の意味にもなる'}]},
    { id:'wbig-large', chip:'large', label:'large → 客観的なサイズ',
      gloss:'測れる大きさ。ややかたい',
      examples:[
        {en:'a large size', ja:'Lサイズ', note:''},
        {en:'a large amount of data', ja:'大量のデータ', note:'量を測っている'}]},
    { id:'wbig-great', chip:'great', label:'great → 程度が大きい',
      gloss:'量や質のレベルが高い。ほめ言葉にもなる',
      examples:[
        {en:'a great success', ja:'大成功', note:''},
        {en:'That’s great!', ja:'いいね!', note:''}]},
    { id:'wbig-huge', chip:'huge', label:'huge → 圧倒的に大きい',
      gloss:'驚くほどの大きさ',
      examples:[
        {en:'a huge difference', ja:'とてつもない差', note:''}]}],
  trivia:[
    {title:'a big problem とは言うが a large problem とは言いにくい',
     body:'large は測れるサイズを言う語なので、問題の深刻さには合わない。\n'+
          'big は主観的な「大きさ」なので、重さや深刻さにも伸びる。\n'+
          'Tシャツのサイズが L（large）なのは、測れるものだから。'},
    {title:'big brother は「大きい兄」ではない',
     body:'big には「年上の」という使い方がある。\n'+
          'a big brother ＝ 兄／a little sister ＝ 妹。\n'+
          '体の大小ではなく、年の上下を言っている。'}]
},

/* --------------------------------------------- 借りる・貸す */
{
  id:'w-borrow', type:'word', headword:'borrow / lend / rent / use', glyph:'lend',
  title:'借りる・貸す', core:'動かすか、その場か、お金が要るか', diagram:'wBorrow',
  coreNote:'日本語の「借りる」は広いが、英語は'+
           '持ち出すのか、その場で使うのか、お金を払うのかで分かれる。',
  senses:[
    { id:'wbor-borrow', chip:'borrow', label:'borrow → 持ち出して借りる',
      gloss:'無料で、動かして使う',
      examples:[
        {en:'Can I borrow your pen?', ja:'ペン借りてもいい?', note:'持ち出せるもの'},
        {en:'I borrowed a book from the library.', ja:'図書館で本を借りた', note:'from ＝ 起点'}]},
    { id:'wbor-lend', chip:'lend', label:'lend → 貸す',
      gloss:'borrow の逆向き',
      examples:[
        {en:'Could you lend me 500 yen?', ja:'500円貸してくれる?', note:'lend + 人 + 物'}]},
    { id:'wbor-rent', chip:'rent', label:'rent → お金を払って借りる',
      gloss:'有料。貸す側にも使える',
      examples:[
        {en:'We rented a car.', ja:'レンタカーを借りた', note:''},
        {en:'They rent out rooms.', ja:'彼らは部屋を貸している', note:'貸す側は rent out'}]},
    { id:'wbor-use', chip:'use', label:'use → その場で使わせてもらう',
      gloss:'動かせないものは「使う」',
      examples:[
        {en:'Can I use your bathroom?', ja:'トイレ借りてもいい?', note:'持ち出せないので use'},
        {en:'Can I use your phone?', ja:'電話借りてもいい?', note:'その場で使うなら use'}]}],
  trivia:[
    {title:'トイレを「借りる」は borrow ではない',
     body:'borrow は「持ち出して使う」。トイレは持ち出せない。\n'+
          '×Can I borrow your bathroom?（トイレを持ち帰る、という絵になる）\n'+
          '○Can I use your bathroom?\n'+
          '動かせるかどうかで、borrow と use が割れる。'},
    {title:'rent は借りる側にも貸す側にも使える',
     body:'I rented a car.（借りた）／They rent out rooms.（貸している）\n'+
          '貸す側だとはっきりさせたいときは out をつける。\n'+
          'out は【内から外へ】——手元から外へ出す、という感覚。'}]
},

/* ----------------------------------------------------- 望む */
{
  id:'w-hope', type:'word', headword:'hope / wish / want / expect', glyph:'hope',
  title:'「望む」の4語', core:'ありうるか、ありえないか', diagram:'wHope',
  coreNote:'hope はありうることを望み、wish はありえないことを望む。'+
           'だから wish の後ろは過去形になる——「現実からの距離」を表す、あの過去形。',
  senses:[
    { id:'whop-hope', chip:'hope', label:'hope → ありうることを望む',
      gloss:'実現の可能性がある',
      examples:[
        {en:'I hope you feel better soon.', ja:'早くよくなりますように', note:'ありうる'},
        {en:'I hope to see you again.', ja:'また会えるといいな', note:''}]},
    { id:'whop-wish', chip:'wish', label:'wish → ありえないことを望む',
      gloss:'現実はそうでない、という含み',
      examples:[
        {en:'I wish I could come.', ja:'行けたらいいのに', note:'実際は行けない'},
        {en:'I wish I were taller.', ja:'背が高かったらなあ', note:'仮定法の過去形'}]},
    { id:'whop-want', chip:'want', label:'want → 直接ほしい',
      gloss:'素直で強い。ややぶっきらぼう',
      examples:[
        {en:'I want a coffee.', ja:'コーヒーがほしい', note:''},
        {en:'I’d like a coffee.', ja:'コーヒーをいただけますか', note:'丁寧にするなら would like'}]},
    { id:'whop-expect', chip:'expect', label:'expect → 起こると思っている',
      gloss:'望みではなく予想',
      examples:[
        {en:'I expect he’ll be late.', ja:'彼は遅れると思う', note:'望んではいない'},
        {en:'We’re expecting a baby.', ja:'子どもが生まれます', note:''}]}],
  trivia:[
    {title:'wish の後ろが過去形になる理由',
     body:'過去形のコアは【距離】。wish は「現実から離れたこと」を望む語なので、\n'+
          '現実からの距離を示す過去形とセットになる。\n'+
          'I wish I had more time.（実際は時間がない）\n'+
          '一方 hope はありうることなので、過去形にしない。'},
    {title:'I want a coffee. は少しぶっきらぼう',
     body:'want は欲求をそのまま口に出す語。\n'+
          '店やよその家では I’d like…（would like）にすると角が立たない。\n'+
          'would は過去形＝距離なので、一歩引いた言い方になる。'}]
},

/* ------------------------------------------------- ほかの */
{
  id:'w-other', type:'word', headword:'another / the other / others', glyph:'other',
  title:'「ほかの」の使い分け', core:'残りがいくつか、特定できるか', diagram:'wOther',
  coreNote:'another は an + other。an が付いている＝不特定の1つ。'+
           'the が付けば「あれ」と特定できる残り。冠詞のコアがそのまま効いている。',
  senses:[
    { id:'woth-another', chip:'another', label:'another → 不特定の、別のもう1つ',
      gloss:'an + other。残りがたくさんある中の1つ',
      examples:[
        {en:'Can I have another cup?', ja:'もう1杯もらえますか', note:'どれでもいい1つ'},
        {en:'Let’s try another way.', ja:'別のやり方を試そう', note:''}]},
    { id:'woth-theother', chip:'the other', label:'the other → 2つのうちの残り1つ',
      gloss:'残りが1つしかないので特定できる',
      examples:[
        {en:'One is red, the other is blue.', ja:'一方は赤、もう一方は青', note:'2つしかない'},
        {en:'on the other hand', ja:'他方では', note:'手は2本しかない'}]},
    { id:'woth-others', chip:'others', label:'others → 不特定の、ほかの人・もの（複数）',
      gloss:'残りの一部',
      examples:[
        {en:'Some like it, others don’t.', ja:'好きな人もいれば、そうでない人もいる', note:''}]},
    { id:'woth-theothers', chip:'the others', label:'the others → 残り全部',
      gloss:'範囲が決まっているので特定できる',
      examples:[
        {en:'Two left early; the others stayed.', ja:'2人は早く帰り、残りは残った', note:'残り全員'}]}],
  trivia:[
    {title:'on the other hand に the がつく理由',
     body:'手は2本しかないので、「もう一方」は自動的に特定できる。\n'+
          'だから a other hand ではなく the other hand。\n'+
          '冠詞のコア（相手も特定できるか）がそのまま効いている。'},
    {title:'another は実は2語がくっついたもの',
     body:'an + other ＝ another。\n'+
          'an が入っているので、必ず「不特定の1つ」になる。\n'+
          'だから another を複数形にはできない（×anothers）。'}]
},

/* --------------------------------------------- 少しある/ない */
{
  id:'w-few', type:'word', headword:'few / a few / little / a little', glyph:'few',
  title:'a のあるなしで逆になる語', core:'a があれば「ある」', diagram:'wFew',
  coreNote:'a は【輪郭のある1つ】。それが付くだけで「存在が見えている」ことになり、'+
           '肯定的な意味に変わる。few と a few は、ほぼ反対の意味になる。',
  senses:[
    { id:'wfew-few', chip:'few', label:'few → ほとんどない（数）',
      gloss:'否定的。「少ししかない」',
      examples:[
        {en:'Few people came.', ja:'ほとんど人が来なかった', note:'来なかった側に焦点'},
        {en:'He has few friends.', ja:'彼には友達がほとんどいない', note:''}]},
    { id:'wfew-afew', chip:'a few', label:'a few → 少しある（数）',
      gloss:'肯定的。「いくつかある」',
      examples:[
        {en:'A few people came.', ja:'何人か来た', note:'来た側に焦点'},
        {en:'I have a few questions.', ja:'いくつか質問があります', note:''}]},
    { id:'wfew-little', chip:'little', label:'little → ほとんどない（量）',
      gloss:'数えられないものに使う',
      examples:[
        {en:'There’s little time left.', ja:'もうほとんど時間がない', note:''}]},
    { id:'wfew-alittle', chip:'a little', label:'a little → 少しある（量）',
      gloss:'',
      examples:[
        {en:'There’s a little time left.', ja:'少し時間が残っている', note:''},
        {en:'I speak a little Japanese.', ja:'日本語が少し話せます', note:''}]}],
  trivia:[
    {title:'a が1つ付くだけで意味が逆になる',
     body:'Few people came.（ほとんど来なかった）\n'+
          'A few people came.（何人か来た）\n'+
          'a は【輪郭のある1つ】。輪郭が見えている＝存在が見えている、\n'+
          'という感覚が「ある」側に寄せている。'},
    {title:'few は数、little は量',
     body:'few / a few ＝ 数えられるもの（people, questions）\n'+
          'little / a little ＝ 数えられないもの（time, water, money）\n'+
          '冠詞のページの「輪郭があるか」が、ここでも境目になっている。'}]
},

/* ------------------------------------------------- 思い出す */
{
  id:'w-remember', type:'word', headword:'remember / remind / forget', glyph:'rem',
  title:'覚える・思い出す', core:'自分か、人にさせるか', diagram:'wRemember',
  coreNote:'remember は自分の頭の中の話。remind は人に思い出させる話。'+
           'だから remind は必ず相手が目的語に来る。',
  senses:[
    { id:'wrem-remember', chip:'remember', label:'remember → 自分が覚えている・思い出す',
      gloss:'頭の中に残っている',
      examples:[
        {en:'I remember his face.', ja:'彼の顔を覚えている', note:''},
        {en:'Do you remember me?', ja:'私のこと覚えてる?', note:''}]},
    { id:'wrem-remind', chip:'remind', label:'remind → 人に思い出させる',
      gloss:'必ず相手が目的語に来る',
      examples:[
        {en:'Remind me to call him.', ja:'彼に電話するよう言ってね', note:'remind + 人 + to do'},
        {en:'You remind me of my brother.', ja:'君を見ると兄を思い出す', note:'of ＝ そこから出てくる'}]},
    { id:'wrem-forget', chip:'forget', label:'forget → 忘れる',
      gloss:'remember の反対',
      examples:[
        {en:'Don’t forget your umbrella.', ja:'傘を忘れないで', note:''}]},
    { id:'wrem-toing', chip:'to と -ing', label:'後ろの形で意味が変わる',
      gloss:'to ＝ これから／-ing ＝ すでに',
      examples:[
        {en:'Remember to lock the door.', ja:'忘れずに鍵をかけて', note:'これからかける'},
        {en:'I remember locking the door.', ja:'鍵をかけたのを覚えている', note:'すでにかけた'},
        {en:'Don’t forget to call.', ja:'電話するのを忘れないで', note:'これから電話する'}]}],
  trivia:[
    {title:'You remind me of my brother. の of',
     body:'of のコアは【分離】——そこから出てくる、という関係。\n'+
          '君という存在から、兄の記憶が引き出されてくる。\n'+
          'remind A of B で「AにBを思い出させる」。'},
    {title:'×I remembered to lock but I forgot.',
     body:'remember to は「これからやる」ことを覚えている、という意味。\n'+
          'すでにやったなら remember -ing。\n'+
          'to不定詞と動名詞のコア（これから／すでにある）が、ここでも効いている。'}]
},

/* ----------------------------------------------- かかる・払う */
{
  id:'w-cost', type:'word', headword:'cost / take / spend / pay', glyph:'cost',
  title:'「かかる」の4語', core:'主語が物か人か、金か時間か', diagram:'wCost',
  coreNote:'主語が物なら cost（金）と take（時間）、主語が人なら spend（両方）と pay（金）。'+
           'この2軸で4語がきれいに割れる。',
  senses:[
    { id:'wcos-cost', chip:'cost', label:'cost → 物が主語・お金がかかる',
      gloss:'それがいくらするか',
      examples:[
        {en:'It costs 500 yen.', ja:'それは500円です', note:'主語は物'},
        {en:'How much does it cost?', ja:'いくらですか', note:''}]},
    { id:'wcos-take', chip:'take', label:'take → 物や事が主語・時間がかかる',
      gloss:'こちらの時間を取り上げる',
      examples:[
        {en:'It takes two hours.', ja:'2時間かかる', note:'主語は移動や作業'},
        {en:'It took me three days.', ja:'3日かかった', note:''}]},
    { id:'wcos-spend', chip:'spend', label:'spend → 人が主語・時間も金も使う',
      gloss:'自分が費やす',
      examples:[
        {en:'I spent two hours on it.', ja:'2時間それに費やした', note:'主語は人'},
        {en:'She spent 3,000 yen.', ja:'彼女は3000円使った', note:''}]},
    { id:'wcos-pay', chip:'pay', label:'pay → 人が主語・お金を払う',
      gloss:'相手に渡す',
      examples:[
        {en:'I paid 3,000 yen for it.', ja:'それに3000円払った', note:'for ＝ 引き換えに'}]}],
  trivia:[
    {title:'2つの軸で4語が割れる',
     body:'　　　　　　お金　　　　時間\n'+
          '物が主語　　cost　　　　take\n'+
          '人が主語　　pay/spend　 spend\n'+
          '「何が主語か」を決めれば、使う語は自動的に決まる。'},
    {title:'It takes two hours. の take は「取り上げる」',
     body:'take のコアは【自分の方へ取る】。\n'+
          'その移動が、あなたから2時間を取り上げる、という構図。\n'+
          'だから It took me three days. のように人を入れられる。'}]
},

/* --------------------------------------------------- 着く */
{
  id:'w-arrive', type:'word', headword:'arrive / reach / get to', glyph:'arr',
  title:'「着く」の3語', core:'前置詞が要るか要らないか', diagram:'wArrive',
  coreNote:'意味はほぼ同じだが、後ろの形が違う。'+
           'reach だけが他動詞で、前置詞なしに目的地を置ける。',
  senses:[
    { id:'warr-arrive', chip:'arrive', label:'arrive → 前置詞が要る',
      gloss:'自動詞。at（点）か in（広い場所）',
      examples:[
        {en:'We arrived at the station.', ja:'駅に着いた', note:'at ＝ 地図上の一点'},
        {en:'She arrived in Tokyo.', ja:'東京に着いた', note:'in ＝ 広がりのある場所'}]},
    { id:'warr-reach', chip:'reach', label:'reach → 前置詞なしで置ける',
      gloss:'他動詞。手が届く、というイメージ',
      examples:[
        {en:'We reached the station.', ja:'駅に着いた', note:'×reach to the station'},
        {en:'I can’t reach the shelf.', ja:'棚に手が届かない', note:'本来は「届く」'}]},
    { id:'warr-getto', chip:'get to', label:'get to → 口語でいちばん普通',
      gloss:'「至る」の get に到達点の to',
      examples:[
        {en:'What time did you get to the office?', ja:'何時に会社に着いた?', note:''},
        {en:'How do I get there?', ja:'そこへはどう行けば?', note:'there は副詞なので to 不要'}]}],
  trivia:[
    {title:'reach に to をつけない理由',
     body:'reach はもともと「手を伸ばして届く」という他動詞。\n'+
          '手が対象を直接つかむので、間に前置詞が入らない。\n'+
          '×reach to the station ／ ○reach the station'},
    {title:'get there / go home に to がつかない理由',
     body:'there / home / here はもともと副詞で、\n'+
          '「そこへ」という到達の意味を自分で持っている。\n'+
          'だから to を重ねる必要がない。×go to home'}]
},

/* ------------------------------------------- -ly で変わる語 */
{
  id:'w-ly', type:'word', headword:'hard / hardly ・ late / lately', glyph:'-ly',
  title:'-ly をつけると別語になる', core:'-ly は「副詞化」とは限らない', diagram:'wLy',
  coreNote:'多くの語は -ly をつけると副詞になるだけだが、'+
           'いくつかの語は意味そのものが変わる。むしろ反対になることもある。',
  senses:[
    { id:'wly-hard', chip:'hard', label:'hard → 一生懸命 ／ hardly → ほとんど〜ない',
      gloss:'意味がほぼ反対になる',
      examples:[
        {en:'He works hard.', ja:'彼は一生懸命働く', note:''},
        {en:'He hardly works.', ja:'彼はほとんど働かない', note:'反対の意味'}]},
    { id:'wly-late', chip:'late', label:'late → 遅く ／ lately → 最近',
      gloss:'時間の遅さと、近ごろ',
      examples:[
        {en:'I stayed up late.', ja:'夜更かしした', note:''},
        {en:'I haven’t seen him lately.', ja:'最近彼に会っていない', note:''}]},
    { id:'wly-near', chip:'near', label:'near → 近くに ／ nearly → ほとんど',
      gloss:'距離と、程度',
      examples:[
        {en:'He lives near here.', ja:'彼はこの近くに住んでいる', note:''},
        {en:'It’s nearly done.', ja:'ほとんど終わっている', note:''}]},
    { id:'wly-most', chip:'most', label:'most → ほとんどの ／ almost → ほとんど',
      gloss:'most は名詞につき、almost は形容詞や副詞につく',
      examples:[
        {en:'Most people agree.', ja:'ほとんどの人が賛成する', note:'most + 名詞'},
        {en:'Almost everyone agrees.', ja:'ほぼ全員が賛成する', note:'×almost people'}]}],
  trivia:[
    {title:'hardly は hard の副詞形ではない',
     body:'He works hard.（一生懸命働く）\n'+
          'He hardly works.（ほとんど働かない）\n'+
          '-ly がついて意味が反対になる、数少ない例。\n'+
          '「一生懸命に働く」の副詞は hard のまま。'},
    {title:'×almost people と言えない理由',
     body:'almost は「ほとんど〜」と程度を修飾する副詞で、名詞に直接つけない。\n'+
          '名詞につけたいなら most（most people）。\n'+
          'almost all people なら言える——all（形容詞）を修飾しているから。'}]
},

/* ------------------------------------------------ some / any */
{
  id:'w-some', type:'word', headword:'some / any', glyph:'some',
  title:'some と any', core:'あると思っているか、未定か', diagram:'wSome',
  coreNote:'「疑問文と否定文では any」と習うが、それは結果にすぎない。'+
           'some は「あると思っている」、any は「あるかどうか未定」。'+
           'だから勧誘の疑問文には some が使える。',
  senses:[
    { id:'wsom-some', chip:'some', label:'some → あると思っている',
      gloss:'存在を前提にしている',
      examples:[
        {en:'I have some questions.', ja:'いくつか質問があります', note:''},
        {en:'Would you like some coffee?', ja:'コーヒーいかがですか', note:'あることを前提に勧めている'}]},
    { id:'wsom-any', chip:'any', label:'any → あるかどうか未定',
      gloss:'ゼロかもしれない',
      examples:[
        {en:'Do you have any questions?', ja:'質問はありますか', note:'あるか無いか分からない'},
        {en:'I don’t have any money.', ja:'お金がまったくない', note:'ゼロ'}]},
    { id:'wsom-anypos', chip:'肯定の any', label:'any → 肯定文では「どれでも」',
      gloss:'どれを取っても構わない',
      examples:[
        {en:'Any question is welcome.', ja:'どんな質問でも歓迎です', note:''},
        {en:'Come any time.', ja:'いつでも来て', note:''}]}],
  trivia:[
    {title:'Would you like some coffee? が some な理由',
     body:'疑問文だから any、ではない。\n'+
          'コーヒーがあることは分かっていて、飲むかどうかを尋ねている。\n'+
          '「存在を前提にしている」ので some。\n'+
          '規則ではなく、話し手が何を前提にしているかで決まる。'},
    {title:'肯定文の any は「どれでも」になる',
     body:'any のコアは「どれか未定」。\n'+
          '否定文なら「どれも無い」、肯定文なら「どれでもいい」。\n'+
          '同じコアが、文の形によって別の顔を見せている。'}]
}

];
