/* ============================================================
   基本動詞のコア ── 不変化詞と掛け算される側
   ============================================================ */
const VERBS = [

/* --------------------------------------------------------- get */
{
  id:'get', type:'verb', headword:'get', core:'その状態・場所に至る', diagram:'vGet',
  coreNote:'get は「手に入れる」だけの動詞ではない。もっと広く「至る」。'+
           'be動詞が状態そのものを表すなら、get はその状態へ動いていく変化を表す。',
  senses:[
    { id:'get-obtain', chip:'手に入れる', label:'至る → 自分のところへ来る',
      gloss:'動いて手元に届く',
      examples:[
        {en:'I got two tickets.', ja:'チケットを2枚手に入れた', note:''},
        {en:'She got a new job.', ja:'新しい仕事に就いた', note:''}]},
    { id:'get-receive', chip:'受け取る', label:'至る → 向こうから届く',
      gloss:'自分は動かず、向こうが到達する',
      examples:[
        {en:'I got your email.', ja:'メール受け取ったよ', note:''},
        {en:'He got a present from her.', ja:'彼女からプレゼントをもらった', note:''}]},
    { id:'get-arrive', chip:'たどり着く', label:'至る → 場所に到着する',
      gloss:'自分がその場所まで動く',
      examples:[
        {en:'What time did you get home?', ja:'何時に帰ったの?', note:''},
        {en:'How do I get to the station?', ja:'駅へはどう行けば?', note:'到達点なので to'}]},
    { id:'get-become', chip:'状態になる', label:'至る → その状態へ変化する',
      gloss:'get のいちばん大事な顔。be が状態なら get は変化',
      examples:[
        {en:'It’s getting cold.', ja:'寒くなってきた', note:'寒い状態へ移っていく'},
        {en:'I got tired.', ja:'疲れた', note:'疲れた状態に至った'},
        {en:'They got married last year.', ja:'去年結婚した', note:'既婚という状態へ'}]},
    { id:'get-cause', chip:'させる', label:'至る → 相手をその状態へ持っていく',
      gloss:'自分ではなく相手を至らせる',
      examples:[
        {en:'I got him to help me.', ja:'彼に手伝ってもらった', note:'彼を「手伝う」へ動かした'},
        {en:'I got my hair cut.', ja:'髪を切ってもらった', note:'髪を「切られた状態」へ'}]}],
  trivia:[
    {title:'be と get の違いは「状態」と「変化」',
     body:'He is tired. ＝ 疲れている（いまの状態）\n'+
          'He got tired. ＝ 疲れた（疲れていない→疲れたへ移った）\n'+
          'get married / get lost / get used to / get angry ——\n'+
          '全部「その状態に至る」で説明がつく。'},
    {title:'get の句動詞が丸暗記不要になる理由',
     body:'get ＝ 至る に、不変化詞のコアを掛けるだけ。\n'+
          'get on（接触に至る＝乗る）／get off（分離に至る＝降りる）\n'+
          'get over（越えるに至る＝克服する）／get through（貫通に至る＝やり遂げる）\n'+
          'get up（上に至る＝起きる）／get out（外に至る＝出る）'}]
},

/* -------------------------------------------------------- take */
{
  id:'take', type:'verb', headword:'take', core:'自分の方へ取る', diagram:'vTake',
  coreNote:'take は手を伸ばして自分の側へ引き寄せる動き。'+
           'だから「選ぶ」「引き受ける」「（時間を）要する」まで全部つながる。',
  senses:[
    { id:'take-grab', chip:'取る', label:'取る → 手にして持っていく',
      gloss:'つかんで、その場から自分と一緒に動かす',
      examples:[
        {en:'Take an umbrella with you.', ja:'傘を持っていきなよ', note:''},
        {en:'He took my hand.', ja:'彼は私の手を取った', note:''}]},
    { id:'take-choose', chip:'選び取る', label:'取る → 複数の中から選ぶ',
      gloss:'並んでいるものから1つ引き寄せる',
      examples:[
        {en:"I'll take this one.", ja:'これにします', note:'買い物の定番'},
        {en:'Take a seat.', ja:'お掛けください', note:'席を1つ選び取る'},
        {en:'Take the Ginza line.', ja:'銀座線に乗って', note:'路線を選び取る'}]},
    { id:'take-accept', chip:'引き受ける', label:'取る → 自分の側に引き受ける',
      gloss:'責任や役割を自分に引き寄せる',
      examples:[
        {en:'I’ll take responsibility.', ja:'私が責任を取る', note:''},
        {en:'Don’t take it personally.', ja:'個人的に受け取らないで', note:''}]},
    { id:'take-cost', chip:'要する', label:'取る → 時間や労力を取り上げる',
      gloss:'こちらの資源が持っていかれる',
      examples:[
        {en:'It takes two hours by train.', ja:'電車で2時間かかる', note:'2時間を取られる'},
        {en:'It takes courage.', ja:'勇気がいる', note:''}]}],
  trivia:[
    {title:'take と bring は「話し手がどこにいるか」で決まる',
     body:'take ＝ ここから離れて持っていく\n'+
          'bring ＝ こちらへ持ってくる\n'+
          'Take this to him.（彼のところへ持っていって）\n'+
          'Bring it to me.（私のところへ持ってきて）\n'+
          '物の向きではなく、話し手の位置が基準になっている。'},
    {title:'It takes two hours. は誰が何を取っているのか',
     body:'「それ（移動）が、あなたから2時間を取り上げる」という構図。\n'+
          '時間を資源として奪われるイメージなので、\n'+
          'It took me three days.（3日かかった）のように人を入れられる。'}]
},

/* --------------------------------------------------------- put */
{
  id:'put', type:'verb', headword:'put', core:'移動させて位置に置く', diagram:'vPut',
  coreNote:'put は「置く」。ただし置き先は物理的な場所とは限らない。'+
           '言葉の上にも、状態の中にも置ける。',
  senses:[
    { id:'put-place', chip:'置く', label:'置く → 物理的な位置に',
      gloss:'手に持ったものを、ある場所へ移して離す',
      examples:[
        {en:'Put it on the table.', ja:'テーブルに置いて', note:''},
        {en:'Put your bag here.', ja:'かばんはここに', note:''}]},
    { id:'put-wear', chip:'身につける', label:'置く → 体に接触させて置く',
      gloss:'体という置き場所に載せる',
      examples:[
        {en:'Put on your coat.', ja:'コートを着て', note:'put × on ＝ 接触させて置く'},
        {en:'She put on some lipstick.', ja:'口紅をつけた', note:''}]},
    { id:'put-express', chip:'言葉を置く', label:'置く → 言葉として並べる',
      gloss:'言い方という場所に置く',
      examples:[
        {en:'How shall I put it?', ja:'なんて言えばいいかな', note:'どう言葉を置くか'},
        {en:'To put it simply,', ja:'簡単に言うと', note:''}]},
    { id:'put-state', chip:'状態に置く', label:'置く → ある状態の中へ',
      gloss:'状態という場所に移す',
      examples:[
        {en:'Don’t put yourself in danger.', ja:'危険に身を置かないで', note:''},
        {en:'put it to good use', ja:'それをうまく活用する', note:''}]}],
  trivia:[
    {title:'put on ↔ take off がきれいに対になっている理由',
     body:'put ＝ 置く、take ＝ 取る。on ＝ 接触、off ＝ 分離。\n'+
          'put on ＝ 体に接触させて置く（着る）\n'+
          'take off ＝ 体から取って離す（脱ぐ）\n'+
          '動詞も不変化詞も、両方がちょうど反対になっている。'},
    {title:'How can I put it? は「どう置くか」',
     body:'言いたいことを、どんな言葉の上に置けばいいか迷っている。\n'+
          '言葉を「置き場所」として扱う感覚は、\n'+
          'Let me put it this way.（こう言い換えよう）にも出ている。'}]
},

/* -------------------------------------------------------- come */
{
  id:'come', type:'verb', headword:'come', core:'基準点へ近づく', diagram:'vCome',
  coreNote:'come は「来る」だが、基準点は話し手とは限らない。'+
           '相手の場所を基準にもできる。だから「今行くよ」が I’m coming. になる。',
  senses:[
    { id:'come-near', chip:'近づく', label:'基準点へ近づく',
      gloss:'話し手か、話題の中心へ寄っていく',
      examples:[
        {en:'Come here.', ja:'こっちに来て', note:'話し手が基準'},
        {en:"I'm coming!", ja:'今行くよ!', note:'相手の場所が基準'}]},
    { id:'come-appear', chip:'現れる', label:'近づく → 目の前に現れる',
      gloss:'なかったものがこちらへ出てくる',
      examples:[
        {en:'Spring has come.', ja:'春が来た', note:''},
        {en:'An idea came to mind.', ja:'考えが浮かんだ', note:'心のところまで来た'}]},
    { id:'come-become', chip:'その状態へ', label:'近づく → ある状態に至る',
      gloss:'その状態のところまでやって来る',
      examples:[
        {en:'My dream came true.', ja:'夢が叶った', note:'「本当」のところまで来た'},
        {en:'The button came loose.', ja:'ボタンが緩んだ', note:''}]}],
  trivia:[
    {title:'「今行くよ」が I’m going. ではない理由',
     body:'呼ばれて答えるとき、英語は「相手のいる場所」を基準に取る。\n'+
          '相手のところへ近づくのだから come。\n'+
          'I’m going. と言うと「（ここを離れて別のどこかへ）行く」になり、\n'+
          '呼んだ相手から遠ざかる意味になってしまう。'},
    {title:'come true は「本当のところまで来る」',
     body:'come は近づいて到達する動き。\n'+
          '夢が「本当」という地点まで歩いてきた、という絵になっている。\n'+
          'come to an end（終わりまで来る）も同じ形。'}]
},

/* ---------------------------------------------------------- go */
{
  id:'go', type:'verb', headword:'go', core:'基準点から離れる', diagram:'vGo',
  coreNote:'go は come の逆で、いまいる場所から離れていく。'+
           'そこから「進行する」、そして「悪い方へ転ぶ」が出てくる。',
  senses:[
    { id:'go-leave', chip:'離れる', label:'基準点から離れていく',
      gloss:'いまの場所を出て、別の場所へ',
      examples:[
        {en:'I go to school by bike.', ja:'自転車で学校へ行く', note:''},
        {en:'He’s gone.', ja:'彼は行ってしまった', note:'ここにはもういない'}]},
    { id:'go-proceed', chip:'進む', label:'離れる → 物事が進行する',
      gloss:'時間の中を前へ動いていく',
      examples:[
        {en:"How's it going?", ja:'調子どう?', note:'物事がどう進んでいるか'},
        {en:'Everything went well.', ja:'すべてうまくいった', note:''}]},
    { id:'go-worse', chip:'悪くなる', label:'離れる → 正常から外れる',
      gloss:'あるべき状態から離れてしまう',
      examples:[
        {en:'The milk went bad.', ja:'牛乳が悪くなった', note:''},
        {en:'Something went wrong.', ja:'何かがおかしくなった', note:''}]}],
  trivia:[
    {title:'go の変化は悪い方、get の変化は両方',
     body:'go bad / go wrong / go crazy / go blind ——go はマイナスに偏る。\n'+
          '「正常な状態から離れていく」がコアだから。\n'+
          '対して get は中立で、get better（良くなる）も get worse（悪くなる）も言える。'},
    {title:'go は「離れる」なので out や off と相性がいい',
     body:'go out（外へ離れる＝外出する／火が消える）\n'+
          'go off（分離する＝鳴り出す／爆発する／立ち去る）\n'+
          'go on（接触が続く＝続ける）\n'+
          '離れる動きに、不変化詞のコアを重ねているだけ。'}]
},

/* -------------------------------------------------------- make */
{
  id:'make', type:'verb', headword:'make', core:'力を加えて形にする', diagram:'vMake',
  coreNote:'make は素材に力を加えて、なかった形を生み出すこと。'+
           'その力が人に向かえば「させる」、状態に向かえば「〜にする」になる。',
  senses:[
    { id:'make-create', chip:'作る', label:'力を加えて → 物を作り出す',
      gloss:'素材が形のあるものに変わる',
      examples:[
        {en:'I made a cake.', ja:'ケーキを作った', note:''},
        {en:'This is made of wood.', ja:'これは木でできている', note:''}]},
    { id:'make-force', chip:'させる', label:'力を加えて → 人を動かす',
      gloss:'相手の意思に関わらず、そうさせる',
      examples:[
        {en:'He made me laugh.', ja:'彼は私を笑わせた', note:'笑うという形を作り出した'},
        {en:'Don’t make me wait.', ja:'待たせないで', note:''}]},
    { id:'make-state', chip:'〜にする', label:'力を加えて → 状態を変える',
      gloss:'対象をその状態に作り変える',
      examples:[
        {en:'That makes me happy.', ja:'それは私を幸せにする', note:''},
        {en:'Make yourself at home.', ja:'くつろいでください', note:'くつろいだ状態を自分で作る'}]},
    { id:'make-achieve', chip:'成し遂げる', label:'力を加えて → 状況を作り上げる',
      gloss:'その場を成立させる',
      examples:[
        {en:'I made it!', ja:'間に合った! / やった!', note:'その状況を作り上げた'},
        {en:'That makes sense.', ja:'なるほど、筋が通る', note:'意味が成立する'}]}],
  trivia:[
    {title:'I made it. の it は何を指しているのか',
     body:'特定の物ではなく「その場・その状況」。\n'+
          '間に合う状況を自分で作り上げた＝間に合った、成功した。\n'+
          'だから電車にも、締切にも、人生の成功にも同じ言い方が使える。'},
    {title:'make と do の使い分け',
     body:'make ＝ 作った結果が形として残る（make a cake / make a plan）\n'+
          'do ＝ 行為そのもの。何も新しく生まれない（do the dishes / do homework）\n'+
          'make a decision は「決定という結論を生み出す」から make。'},
    {title:'make / have / let は「させ方」の三段階',
     body:'make him do ＝ 力ずくでさせる（強制）\n'+
          'have him do ＝ そういう手はずにする（依頼・手配）\n'+
          'let him do ＝ 邪魔しない（許可）\n'+
          '同じ「させる」でも、加える力の強さが違う。'}]
},

/* -------------------------------------------------------- have */
{
  id:'have', type:'verb', headword:'have', core:'自分の圏内にある', diagram:'vHave',
  coreNote:'have は「所有」より広い。自分の手の届く範囲に抱えている、という感覚。'+
           '物でも、出来事でも、体調でも、済んだ経験でも、圏内にあれば have。',
  senses:[
    { id:'have-own', chip:'持っている', label:'圏内にある → 所有する',
      gloss:'手元にある',
      examples:[
        {en:'I have two brothers.', ja:'兄弟が2人いる', note:''},
        {en:'Do you have a pen?', ja:'ペンある?', note:''}]},
    { id:'have-event', chip:'出来事を持つ', label:'圏内にある → その出来事を自分のものにする',
      gloss:'出来事が自分の圏内で起きる',
      examples:[
        {en:'Let’s have lunch.', ja:'お昼にしよう', note:'昼食という出来事を持つ'},
        {en:'Have a good time!', ja:'楽しんでね', note:''},
        {en:'We had a problem.', ja:'問題が起きた', note:''}]},
    { id:'have-body', chip:'体に持つ', label:'圏内にある → 体に抱えている',
      gloss:'症状が自分の内側にある',
      examples:[
        {en:'I have a cold.', ja:'風邪をひいている', note:''},
        {en:'She has a headache.', ja:'頭が痛い', note:''}]},
    { id:'have-cause', chip:'してもらう', label:'圏内にある → 人や物をその状態に置く',
      gloss:'手はずを整えて、そうなるようにする',
      examples:[
        {en:'I’ll have him call you.', ja:'彼から電話させます', note:'そういう手はずにする'},
        {en:'I had my car fixed.', ja:'車を直してもらった', note:'直された状態を圏内に持つ'}]},
    { id:'have-perfect', chip:'完了形', label:'圏内にある → 済んだ状態を今持っている',
      gloss:'現在完了の have も、意味は「持っている」のまま',
      examples:[
        {en:'I have finished it.', ja:'終わらせた（いま終わった状態だ）', note:'済んだ状態を今持っている'},
        {en:'Have you ever been there?', ja:'行ったことある?', note:'その経験を今持っているか'}]}],
  trivia:[
    {title:'現在完了が「現在」の話である理由',
     body:'have は今まさに持っているということ。\n'+
          'I have finished ＝「終えた状態」を今持っている。\n'+
          'だから現在完了は過去の話ではなく、現在の状態の話になる。\n'+
          '過去形（I finished）が「あのとき終えた」と切り離すのとは根本的に違う。'},
    {title:'have a baby は「赤ちゃんを所有する」ではない',
     body:'have の圏内には、物だけでなく出来事も入る。\n'+
          'have a baby（出産する）／have a party（パーティーを開く）\n'+
          'have an accident（事故に遭う）——望まない出来事も圏内に入る。'}]
},

/* -------------------------------------------------------- turn */
{
  id:'turn', type:'verb', headword:'turn', core:'向きを変える', diagram:'vTurn',
  coreNote:'turn はくるりと向きを変える動き。'+
           '体の向きでも、ページでも、状態でも、変わるなら turn。',
  senses:[
    { id:'turn-rotate', chip:'回す', label:'向きを変える → 回転させる',
      gloss:'軸のまわりに回す',
      examples:[
        {en:'Turn right at the corner.', ja:'角を右に曲がって', note:''},
        {en:'Turn the key.', ja:'鍵を回して', note:''}]},
    { id:'turn-flip', chip:'裏返す', label:'向きを変える → 反対の面を出す',
      gloss:'表と裏を入れ替える',
      examples:[
        {en:'Turn the page.', ja:'ページをめくって', note:''},
        {en:'Turn it over.', ja:'裏返して', note:'turn × over'}]},
    { id:'turn-become', chip:'変わる', label:'向きを変える → 別の状態になる',
      gloss:'今の状態から別の状態へ切り替わる',
      examples:[
        {en:'The leaves turned red.', ja:'葉が赤くなった', note:''},
        {en:'He turns twenty next month.', ja:'来月20歳になる', note:''}]},
    { id:'turn-switch', chip:'つける・消す', label:'向きを変える → スイッチを切り替える',
      gloss:'つまみを回して接触させる/切る',
      examples:[
        {en:'Turn on the light.', ja:'電気をつけて', note:'回して接触＝通電'},
        {en:'Turn off the TV.', ja:'テレビを消して', note:'回して分離＝断線'}]}],
  trivia:[
    {title:'turn on / off はもともとダイヤルを回す動作だった',
     body:'昔のスイッチはつまみを回すもの。\n'+
          '回して接触させれば on、回して離せば off。\n'+
          'ボタン式やタッチになった今も、言い方だけが残っている。'},
    {title:'It’s your turn. の turn は「回ってきたもの」',
     body:'順番がぐるりと回って自分のところに来た、という絵。\n'+
          'turn out（裏返して出てきた面＝結果）も同じ回転のイメージで、\n'+
          'turn はどれも「向きが変わる」に還る。'}]
}
,

/* -------------------------------------------------------- give */
{
  id:'give', type:'verb', headword:'give', core:'自分から手放して渡す', diagram:'vGive',
  coreNote:'give は自分の手にあるものを相手へ渡すこと。take（自分の方へ取る）のちょうど反対。'+
           '手放すのが「物」でなく「抵抗」なら、屈する・あきらめるになる。',
  senses:[
    { id:'giv-hand', chip:'渡す', label:'手放す → 相手の手へ',
      gloss:'自分の側から相手の側へ移る',
      examples:[
        {en:'Give it to me.', ja:'それをちょうだい', note:''},
        {en:'She gave me a present.', ja:'彼女はプレゼントをくれた', note:''}]},
    { id:'giv-offer', chip:'差し出す', label:'手放す → 相手に提供する',
      gloss:'形のないものも渡せる',
      examples:[
        {en:'Give me a minute.', ja:'ちょっと待って', note:'時間を渡す'},
        {en:'He gave a speech.', ja:'彼はスピーチをした', note:'言葉を差し出す'}]},
    { id:'giv-yield', chip:'屈する', label:'手放す → 抵抗をやめる',
      gloss:'押し返す力を放してしまう',
      examples:[
        {en:"Don't give up.", ja:'あきらめないで', note:'上へ差し出して手放す＝降参'},
        {en:'The door gave way.', ja:'ドアが壊れて開いた', note:'支える力を手放した'}]},
    { id:'giv-emit', chip:'出す', label:'手放す → 外へ放つ',
      gloss:'内にあるものを外へ渡す',
      examples:[
        {en:'The fire gave off smoke.', ja:'火が煙を出した', note:'分離して放つ'},
        {en:'give out free samples', ja:'試供品を配る', note:'外へ配り出す'}]}],
  trivia:[
    {title:'give up の up はどこへ差し出しているのか',
     body:'降参するとき、人は両手を上に挙げる。\n'+
          '持っていたものを上へ差し出して手放す——その絵が give up。\n'+
          '「あきらめる」も「(タバコなどを)やめる」も、どちらも手放している。'},
    {title:'give と take はきれいな対',
     body:'give ＝ 自分から手放して渡す\n'+
          'take ＝ 自分の方へ引き寄せる\n'+
          'give and take（持ちつ持たれつ）は、この2つの往復そのもの。'}]
},

/* -------------------------------------------------------- keep */
{
  id:'keep', type:'verb', headword:'keep', core:'そのまま保ち続ける', diagram:'vKeep',
  coreNote:'keep は状態を変えずに持ちこたえること。'+
           '持ち物なら「取っておく」、動作なら「し続ける」、距離なら「保つ」。',
  senses:[
    { id:'kep-hold', chip:'取っておく', label:'保つ → 手元に置いたまま',
      gloss:'返さず、捨てず、そのまま',
      examples:[
        {en:'You can keep it.', ja:'あげるよ（持っていていい）', note:''},
        {en:'Keep the receipt.', ja:'レシートは取っておいて', note:''}]},
    { id:'kep-state', chip:'状態を保つ', label:'保つ → その状態のままにする',
      gloss:'変わらないように支える',
      examples:[
        {en:'Keep it warm.', ja:'温かいままにしておいて', note:''},
        {en:'Keep quiet.', ja:'静かにしていて', note:''}]},
    { id:'kep-continue', chip:'し続ける', label:'保つ → 動作を途切れさせない',
      gloss:'やめずにそのまま',
      examples:[
        {en:'Keep trying.', ja:'挑戦し続けて', note:''},
        {en:'He kept talking.', ja:'彼は話し続けた', note:''}]},
    { id:'kep-prevent', chip:'寄せつけない', label:'保つ → 距離を保って入れない',
      gloss:'境界を守り続ける',
      examples:[
        {en:'Keep away from the fire.', ja:'火に近づかないで', note:''},
        {en:'It kept me from sleeping.', ja:'それで眠れなかった', note:'眠りから遠ざけ続けた'}]}],
  trivia:[
    {title:'keep + -ing が「し続ける」になる理由',
     body:'keep は状態を保つ動詞。-ing は「すでに進行している行為」。\n'+
          'その行為を保ち続ける＝やめない、となる。\n'+
          'keep to go とは言えないのは、to が「これから」を向いてしまうから。'},
    {title:'keep と hold の違い',
     body:'hold ＝ つかんで動かさない（物理的な保持）\n'+
          'keep ＝ 状態をそのまま保つ（時間的な継続）\n'+
          'Hold the door.（ドアを押さえて）／ Keep the door open.（開けたままに）'}]
},

/* -------------------------------------------------------- hold */
{
  id:'hold', type:'verb', headword:'hold', core:'つかんで動かさない', diagram:'vHold',
  coreNote:'hold は手でしっかりつかみ、その場に留めること。'+
           '留める対象が人なら「収容する」、行事なら「開催する」、進行なら「止める」。',
  senses:[
    { id:'hol-grip', chip:'つかむ', label:'動かさない → 手で保持する',
      gloss:'離さずに支えている',
      examples:[
        {en:'Hold my hand.', ja:'手をつないで', note:''},
        {en:'She was holding a cup.', ja:'彼女はカップを持っていた', note:''}]},
    { id:'hol-contain', chip:'収める', label:'動かさない → 中に抱えていられる',
      gloss:'その量を保持できる',
      examples:[
        {en:'This room holds 50 people.', ja:'この部屋は50人入る', note:''},
        {en:'The bottle holds one liter.', ja:'ボトルは1リットル入る', note:''}]},
    { id:'hol-event', chip:'開催する', label:'動かさない → その場に催しを据える',
      gloss:'場を設けて行う',
      examples:[
        {en:'They held a meeting.', ja:'会議を開いた', note:''},
        {en:'hold an election', ja:'選挙を行う', note:''}]},
    { id:'hol-pause', chip:'止める', label:'動かさない → 進ませない',
      gloss:'動き出そうとするものを押さえる',
      examples:[
        {en:'Hold on a second.', ja:'ちょっと待って', note:'掴んだまま離さない'},
        {en:'Hold the elevator!', ja:'エレベーター止めて!', note:''}]}],
  trivia:[
    {title:'電話の Hold on. は「掴んだまま待って」',
     body:'受話器を握ったまま離さないで、という絵。\n'+
          'hold on の on は【接触】なので、接触を保ったまま、ということ。\n'+
          'Hang on.（ぶら下がったまま待って）も同じ発想。'},
    {title:'This room holds 50 people. の hold',
     body:'部屋が50人を「抱えて動かさずにいられる」という言い方。\n'+
          '容器が中身を保持できる、という感覚が場所にも使われている。'}]
},

/* ------------------------------------------------------- break */
{
  id:'break', type:'verb', headword:'break', core:'続いていたものを断ち切る', diagram:'vBreak',
  coreNote:'break は「壊す」より広く、続いていたつながりを断つこと。'+
           '物の形でも、約束でも、記録でも、静けさでも、続いていたものが切れれば break。',
  senses:[
    { id:'brk-smash', chip:'壊す', label:'断ち切る → 形が保てなくなる',
      gloss:'つながっていた部分が分かれる',
      examples:[
        {en:'I broke the glass.', ja:'グラスを割ってしまった', note:''},
        {en:'My phone is broken.', ja:'スマホが壊れている', note:''}]},
    { id:'brk-rule', chip:'破る', label:'断ち切る → 守られていたものを断つ',
      gloss:'続いていた約束・決まりを切る',
      examples:[
        {en:'He broke his promise.', ja:'彼は約束を破った', note:''},
        {en:'break the law', ja:'法律を破る', note:''}]},
    { id:'brk-record', chip:'記録を破る', label:'断ち切る → これまでの上限を突き抜ける',
      gloss:'続いていた記録が終わる',
      examples:[
        {en:'She broke the world record.', ja:'彼女は世界記録を破った', note:''}]},
    { id:'brk-pause', chip:'中断する', label:'断ち切る → 続きを一度切る',
      gloss:'流れに切れ目を入れる',
      examples:[
        {en:"Let's take a break.", ja:'休憩しよう', note:'作業の連続を切る'},
        {en:'A shout broke the silence.', ja:'叫び声が静寂を破った', note:''}]}],
  trivia:[
    {title:'break が「休憩」にもなる理由',
     body:'コーヒーブレイクの break は「続いていた作業に切れ目を入れる」こと。\n'+
          '壊すのではなく、連続を断つ方の break。\n'+
          '夜が明けるのも daybreak——闇の連続が切れる瞬間。'},
    {title:'break down が機械にも心にも使える理由',
     body:'break（断ち切る）× down（倒れて止まる）。\n'+
          '機械なら故障、人なら感情が崩れて泣き出す。\n'+
          'どちらも「保っていたものが切れて崩れ落ちる」同じ絵。'}]
},

/* --------------------------------------------------------- run */
{
  id:'run', type:'verb', headword:'run', core:'なめらかに動き続ける', diagram:'vRun',
  coreNote:'run のコアは「走る」ではなく【連続してなめらかに動く】。'+
           '人なら走る、水なら流れる、機械なら作動する、組織なら回す——全部同じ動きの絵。',
  senses:[
    { id:'run-move', chip:'走る', label:'動き続ける → 速く移動する',
      gloss:'足が止まらずに続く',
      examples:[
        {en:'I run every morning.', ja:'毎朝走っている', note:''},
        {en:'He ran to the station.', ja:'駅まで走った', note:''}]},
    { id:'run-flow', chip:'流れる', label:'動き続ける → 液体が流れる',
      gloss:'途切れずに流れ続ける',
      examples:[
        {en:'Don’t leave the water running.', ja:'水を出しっぱなしにしないで', note:''},
        {en:'My nose is running.', ja:'鼻水が出る', note:''}]},
    { id:'run-work', chip:'作動する', label:'動き続ける → 機械が動く',
      gloss:'止まらずに回り続ける',
      examples:[
        {en:'The engine is running.', ja:'エンジンがかかっている', note:''},
        {en:'run a program', ja:'プログラムを走らせる', note:''}]},
    { id:'run-manage', chip:'経営する', label:'動き続ける → 組織を回し続ける',
      gloss:'止めずに動かし続ける',
      examples:[
        {en:'She runs a small café.', ja:'彼女は小さなカフェを営んでいる', note:''},
        {en:'run a business', ja:'事業を経営する', note:''}]},
    { id:'run-candidate', chip:'立候補する', label:'動き続ける → レースに出る',
      gloss:'選挙というレースを走る',
      examples:[
        {en:'He’s running for mayor.', ja:'彼は市長選に出馬する', note:'for ＝ それを目指して'}]}],
  trivia:[
    {title:'run が「経営する」になる理由',
     body:'店も会社も、止まれば終わり。動かし続けている人が経営者。\n'+
          'エンジンを running に保つのと、店を running に保つのは同じ絵。\n'+
          'だから「経営がうまくいっている」は The business is running well.'},
    {title:'run out of は「中身が走って出ていく」',
     body:'run（動き続ける）× out（内から外へ）。\n'+
          '砂時計の砂が落ちきる絵。We ran out of time.（時間切れ）\n'+
          '主語を入れ替えて The milk ran out. とも言える。'}]
},

/* -------------------------------------------------------- look */
{
  id:'look', type:'verb', headword:'look', core:'意識して視線を向ける', diagram:'vLook',
  coreNote:'look は「見える」ではなく「見ようとして目を向ける」。'+
           '向ける先が決まっていないと成立しないので、後ろに前置詞が要ることが多い。',
  senses:[
    { id:'lok-direct', chip:'目を向ける', label:'視線を向ける → そちらを見る',
      gloss:'意識してその方向へ',
      examples:[
        {en:'Look at this.', ja:'これ見て', note:'at ＝ 一点に向ける'},
        {en:'Don’t look down.', ja:'下を見ないで', note:''}]},
    { id:'lok-seem', chip:'〜に見える', label:'視線を向ける → そう映る',
      gloss:'見た人にそう見える',
      examples:[
        {en:'You look tired.', ja:'疲れてるみたいだね', note:''},
        {en:'It looks good.', ja:'よさそうだね', note:''}]},
    { id:'lok-search', chip:'探す', label:'視線を向ける → 目当てを目指して見る',
      gloss:'目的があって目を走らせる',
      examples:[
        {en:"I'm looking for my keys.", ja:'鍵を探している', note:'for ＝ それを目指して'},
        {en:'look up a word', ja:'単語を調べる', note:'一覧から引き上げる'}]},
    { id:'lok-care', chip:'世話をする', label:'視線を向ける → 目を離さず見守る',
      gloss:'ずっと目を向け続ける',
      examples:[
        {en:'Could you look after my dog?', ja:'犬の面倒を見てくれる?', note:'after ＝ 後を追って目を向ける'},
        {en:'Look out!', ja:'危ない!', note:'外へ注意を向けろ'}]}],
  trivia:[
    {title:'look / see / watch はコアで割れる',
     body:'look ＝ 意識して目を向ける（だから look at と方向が要る）\n'+
          'see ＝ 見ようとしなくても視界に入る\n'+
          'watch ＝ 動いているものを追い続ける\n'+
          'だから watch TV とは言うが watch a picture とは言わない。'},
    {title:'look forward to の to が前置詞である理由',
     body:'前へ視線を向けて、その先の「こと」に気持ちが到達している。\n'+
          'to のあとは名詞なので、動詞は -ing になる。\n'+
          'I’m looking forward to seeing you.（see ではなく seeing）'}]
},

/* ------------------------------------------------------- bring */
{
  id:'bring', type:'verb', headword:'bring', core:'こちらへ持ってくる', diagram:'vBring',
  coreNote:'bring は「話し手のいる側」へ物や人を移すこと。'+
           'take（ここから離れて持っていく）の反対で、向きは話し手の位置が決める。',
  senses:[
    { id:'brg-carry', chip:'持ってくる', label:'こちらへ → 物を運んでくる',
      gloss:'話し手の側へ移動させる',
      examples:[
        {en:'Bring me a glass of water.', ja:'水を持ってきて', note:''},
        {en:'Don’t forget to bring your ID.', ja:'身分証を忘れずに', note:''}]},
    { id:'brg-accompany', chip:'連れてくる', label:'こちらへ → 人を伴ってくる',
      gloss:'一緒に来させる',
      examples:[
        {en:'Can I bring a friend?', ja:'友達を連れて行っていい?', note:'相手の場所が基準'},
        {en:'Bring the kids along.', ja:'子どもも連れてきて', note:''}]},
    { id:'brg-cause', chip:'もたらす', label:'こちらへ → 結果を運んでくる',
      gloss:'状況をこちら側に生じさせる',
      examples:[
        {en:'Spring brings warm weather.', ja:'春は暖かさをもたらす', note:''},
        {en:'It brought tears to my eyes.', ja:'それで涙が出た', note:''}]}],
  trivia:[
    {title:'bring と take は話し手の位置で決まる',
     body:'bring ＝ こちらへ持ってくる／take ＝ ここから離れて持っていく\n'+
          'Bring it to me.（私のところへ）／Take it to him.（彼のところへ）\n'+
          '物の向きではなく、話し手がどこにいるかで決まる。'},
    {title:'「持って行っていい?」が Can I bring...? になる理由',
     body:'相手のパーティーに行くなら、基準は相手の場所。\n'+
          'そこへ「持ってくる」ので bring。\n'+
          'come（相手の場所を基準にできる）とまったく同じ仕組み。'}]
},

/* --------------------------------------------------------- set */
{
  id:'set', type:'verb', headword:'set', core:'定位置に据える', diagram:'vSet',
  coreNote:'set は put より意図的で、「決まった位置にきちんと置く」。'+
           'だから時刻も、目標も、机も、動き出しも set できる。',
  senses:[
    { id:'set-place', chip:'据える', label:'定位置に → きちんと置く',
      gloss:'適切な場所に収める',
      examples:[
        {en:'She set the plate on the table.', ja:'皿をテーブルに置いた', note:''},
        {en:'set the table', ja:'食卓を整える', note:''}]},
    { id:'set-adjust', chip:'合わせる', label:'定位置に → 数値や時刻を決める',
      gloss:'目盛りをその位置に据える',
      examples:[
        {en:'I set my alarm for six.', ja:'6時に目覚ましをセットした', note:''},
        {en:'set the price', ja:'価格を決める', note:''}]},
    { id:'set-establish', chip:'定める', label:'定位置に → 基準として据える',
      gloss:'動かないものとして決める',
      examples:[
        {en:'set a goal', ja:'目標を立てる', note:''},
        {en:'set a record', ja:'記録を打ち立てる', note:''}]},
    { id:'set-start', chip:'動き出す', label:'定位置に → 据えたものが動き始める',
      gloss:'準備が整って発進する',
      examples:[
        {en:'They set off at dawn.', ja:'夜明けに出発した', note:'定位置から離れて動き出す'},
        {en:'The sun sets at six.', ja:'日は6時に沈む', note:'太陽が下の位置に収まる'}]}],
  trivia:[
    {title:'sunset の set は「太陽が定位置に収まる」',
     body:'昇った太陽が、地平線という定位置へ下りて収まる。\n'+
          'だから日没は sunset、日の出は sunrise（昇る）。\n'+
          '「据える」という同じ語が、太陽にも目覚まし時計にも使われている。'},
    {title:'set と put の違い',
     body:'put ＝ とにかく置く（Put it anywhere.）\n'+
          'set ＝ あるべき場所にきちんと据える（set the table）\n'+
          'set の方が「位置が決まっている」感じが強い。'}]
},

/* ------------------------------------------------------- stand */
{
  id:'stand', type:'verb', headword:'stand', core:'倒れずに立っている', diagram:'vStand',
  coreNote:'stand は自分の力で垂直を保つこと。'+
           '倒れないから「耐える」、その場に立ち続けるから「〜のままである」になる。',
  senses:[
    { id:'std-upright', chip:'立つ', label:'立っている → 垂直の姿勢を保つ',
      gloss:'支えなしで立っている',
      examples:[
        {en:'Please stand up.', ja:'立ってください', note:''},
        {en:'He was standing by the door.', ja:'彼はドアのそばに立っていた', note:''}]},
    { id:'std-remain', chip:'そのままである', label:'立っている → 状態が変わらない',
      gloss:'倒れずにその形で残る',
      examples:[
        {en:'The offer still stands.', ja:'その申し出はまだ有効です', note:'まだ立っている'},
        {en:'The building has stood for 200 years.', ja:'その建物は200年建っている', note:''}]},
    { id:'std-bear', chip:'耐える', label:'立っている → 押されても倒れない',
      gloss:'圧力を受けても立ち続ける',
      examples:[
        {en:"I can't stand the noise.", ja:'この騒音には耐えられない', note:''},
        {en:'stand the heat', ja:'暑さに耐える', note:''}]},
    { id:'std-mean', chip:'表す', label:'立っている → 何かの代わりに立つ',
      gloss:'その位置に代理で立っている',
      examples:[
        {en:'What does UK stand for?', ja:'UK は何の略?', note:'for ＝ その代わりに立つ'},
        {en:'stand for freedom', ja:'自由を象徴する', note:''}]}],
  trivia:[
    {title:'stand for が「略である」になる理由',
     body:'for のコアは「〜の代わりに」。\n'+
          'UK が United Kingdom の代わりにそこへ立っている、という絵。\n'+
          '同じ形で「〜を支持する（その立場に立つ）」にもなる。'},
    {title:'I can’t stand it. は「立っていられない」',
     body:'押しつぶされて倒れてしまう、という絵。\n'+
          '重さに耐えかねる感じが、そのまま「我慢できない」になっている。\n'+
          'put up with（上に積んだまま一緒にいる）も似た発想。'}]
},

/* --------------------------------------------------------- let */
{
  id:'let', type:'verb', headword:'let', core:'妨げない', diagram:'vLet',
  coreNote:'let は力を加える動詞ではなく、「止めない」動詞。'+
           '相手がやろうとしていることに、手を出さないでおく。make とはそこが正反対。',
  senses:[
    { id:'let-allow', chip:'させてやる', label:'妨げない → 許す',
      gloss:'止めようと思えば止められるが、止めない',
      examples:[
        {en:'Let me try.', ja:'やらせてください', note:''},
        {en:'My parents let me go.', ja:'親が行かせてくれた', note:''}]},
    { id:'let-suggest', chip:'〜しよう', label:'妨げない → 一緒に動き出す',
      gloss:'流れを止めずに始める',
      examples:[
        {en:"Let's go.", ja:'行こう', note:'let us の短縮'},
        {en:'Let me know.', ja:'教えてね', note:'知らせが私に届くのを妨げないで'}]},
    { id:'let-release', chip:'放す', label:'妨げない → 掴んでいたものを離す',
      gloss:'留めるのをやめる',
      examples:[
        {en:'Let go of my arm.', ja:'腕を放して', note:'行くのを妨げない'},
        {en:'Let the water out.', ja:'水を出して', note:''}]}],
  trivia:[
    {title:'make / have / let は「させ方」の三段階',
     body:'make him do ＝ 力ずくでさせる（強制）\n'+
          'have him do ＝ そういう手はずにする（依頼・手配）\n'+
          'let him do ＝ 邪魔しない（許可）\n'+
          'let だけが「何もしない」ことでさせている。'},
    {title:'Let me know. が「教えて」になる仕組み',
     body:'直訳は「私が知るのを妨げないで」。\n'+
          '情報がこちらへ流れてくるのを止めないで、という言い方。\n'+
          '命令形なのに押しつけがましくないのは、let が「止めない」だから。'}]
},

/* -------------------------------------------------------- call */
{
  id:'call', type:'verb', headword:'call', core:'声を届かせる', diagram:'vCall',
  coreNote:'call は声を上げて相手に届かせること。'+
           '届ける先が人なら呼ぶ、電話なら通話、名前なら「そう呼ぶ」。',
  senses:[
    { id:'cal-shout', chip:'呼ぶ', label:'声を届かせる → 相手を呼ぶ',
      gloss:'届くように声を出す',
      examples:[
        {en:'Someone is calling you.', ja:'誰かが呼んでるよ', note:''},
        {en:'Call for help.', ja:'助けを呼んで', note:'for ＝ それを求めて'}]},
    { id:'cal-phone', chip:'電話する', label:'声を届かせる → 回線で届ける',
      gloss:'離れた相手に声を送る',
      examples:[
        {en:"I'll call you tonight.", ja:'今夜電話するね', note:''},
        {en:'Call me back.', ja:'折り返して', note:''}]},
    { id:'cal-name', chip:'〜と呼ぶ', label:'声を届かせる → その名で呼ぶ',
      gloss:'名前をつけて呼びかける',
      examples:[
        {en:'Call me Ken.', ja:'ケンって呼んで', note:''},
        {en:'What do you call this in English?', ja:'これ英語で何て言うの?', note:''}]},
    { id:'cal-visit', chip:'立ち寄る', label:'声を届かせる → 訪ねて声をかける',
      gloss:'ドアの外から声をかける',
      examples:[
        {en:'I called on my aunt.', ja:'おばを訪ねた', note:'on ＝ 相手にはりつく'},
        {en:'call at the office', ja:'事務所に立ち寄る', note:''}]}],
  trivia:[
    {title:'call off が「中止」になる理由',
     body:'call（声で呼ぶ）× off（分離）。\n'+
          '予定を呼び戻して切り離す、という絵。\n'+
          'call back（元の相手へ返す＝かけ直す）とは行き先が正反対。'},
    {title:'call on と call at の違い',
     body:'call on ＝ 人を訪ねる（on ＝ 相手にはりつく）\n'+
          'call at ＝ 場所に立ち寄る（at ＝ 地図上の一点）\n'+
          '不変化詞のコアがそのまま「人か場所か」を決めている。'}]
}
,

/* --------------------------------------------------------- cut */
{
  id:'cut', type:'verb', headword:'cut', core:'刃で一気に断つ', diagram:'vCut',
  coreNote:'cut は鋭い刃ですぱっと分けること。break が「壊れて断たれる」なら、'+
           'cut は「意図して切り分ける」。だから量を減らすことにも、省くことにも使える。',
  senses:[
    { id:'cut-blade', chip:'切る', label:'断つ → 刃で分ける',
      gloss:'ひと息に二つに分かれる',
      examples:[
        {en:'Cut the paper in half.', ja:'紙を半分に切って', note:''},
        {en:'I cut my finger.', ja:'指を切った', note:''}]},
    { id:'cut-reduce', chip:'減らす', label:'断つ → 一部を切り落として減らす',
      gloss:'全体から削る',
      examples:[
        {en:'They cut prices by 20%.', ja:'価格を20%下げた', note:''},
        {en:'cut down on sugar', ja:'砂糖を減らす', note:'下へ切り落とす'}]},
    { id:'cut-remove', chip:'省く', label:'断つ → 切り離して外す',
      gloss:'もう含めない',
      examples:[
        {en:'Cut that part out.', ja:'その部分は削って', note:'外へ切り出す'},
        {en:'They cut off the power.', ja:'電源を切った', note:'つながりを断つ'}]},
    { id:'cut-shortcut', chip:'近道する', label:'断つ → 途中を省いて突っ切る',
      gloss:'回り道を切り捨てる',
      examples:[
        {en:'Let’s cut through the park.', ja:'公園を突っ切ろう', note:''},
        {en:'Cut to the chase.', ja:'本題に入ろう', note:'前置きを切る'}]}],
  trivia:[
    {title:'cut down と cut out の違い',
     body:'cut down ＝ 下へ切り落として減らす（cut down on coffee ＝ 控える）\n'+
          'cut out ＝ 外へ切り出して完全になくす（cut out coffee ＝ やめる）\n'+
          'down は「減らす」、out は「ゼロにする」。'},
    {title:'break と cut の違い',
     body:'break ＝ 続いていたものが断たれる（壊れる・破る）\n'+
          'cut ＝ 刃で意図して切り分ける\n'+
          'break the glass（割る）と cut the cake（切り分ける）の差。'}]
},

/* -------------------------------------------------------- pull */
{
  id:'pull', type:'verb', headword:'pull', core:'自分の方へ引く', diagram:'vPull',
  coreNote:'pull は力をかけて手前へ引き寄せること。push の正反対。'+
           '引く先が体なら「引っ張る」、車なら「寄せる」、力を出すなら「やってのける」。',
  senses:[
    { id:'pul-draw', chip:'引っ張る', label:'手前へ → 引き寄せる',
      gloss:'力をかけて自分の方向へ',
      examples:[
        {en:'Pull the door, don’t push.', ja:'ドアは引いて、押さないで', note:''},
        {en:'He pulled my sleeve.', ja:'彼は私の袖を引っ張った', note:''}]},
    { id:'pul-move', chip:'寄せる', label:'手前へ → 車などを寄せて止める',
      gloss:'流れから引き寄せる',
      examples:[
        {en:'Pull over here.', ja:'ここで路肩に寄せて', note:'越えて寄せる'},
        {en:'The train pulled in.', ja:'電車が入ってきた', note:''}]},
    { id:'pul-achieve', chip:'やってのける', label:'手前へ → 力を出して引き寄せる',
      gloss:'難しいことを引き寄せて成功させる',
      examples:[
        {en:'He pulled it off.', ja:'彼はやってのけた', note:'離すところまで引ききった'}]}],
  trivia:[
    {title:'ドアの PUSH / PULL は視点の違い',
     body:'どちらも同じドアなのに、内側と外側で表示が入れ替わる。\n'+
          'push ＝ 自分から離す方向、pull ＝ 自分の方へ。\n'+
          '基準はいつも「その札を読んでいる人」。'},
    {title:'pull it off が「やってのける」になる理由',
     body:'固くはまったものを、引いて引いてついに外す絵。\n'+
          '難しかったことを力ずくで成功させた、という感じが出る。'}]
},

/* -------------------------------------------------------- push */
{
  id:'push', type:'verb', headword:'push', core:'自分から離す方へ押す', diagram:'vPush',
  coreNote:'push は手前から向こうへ力をかけること。pull の正反対。'+
           '押す先が人なら「せかす」、物事なら「推し進める」。',
  senses:[
    { id:'psh-press', chip:'押す', label:'向こうへ → 力をかけて動かす',
      gloss:'自分から離れる方向へ',
      examples:[
        {en:'Push the button.', ja:'ボタンを押して', note:''},
        {en:'Don’t push me.', ja:'押さないで', note:''}]},
    { id:'psh-urge', chip:'せかす', label:'向こうへ → 人を押して進ませる',
      gloss:'相手の背中を押す',
      examples:[
        {en:'My parents pushed me to study.', ja:'親に勉強しろと言われ続けた', note:''},
        {en:'Don’t push yourself too hard.', ja:'無理しすぎないで', note:''}]},
    { id:'psh-advance', chip:'押し進める', label:'向こうへ → 前へ進める',
      gloss:'抵抗を押しのけて進む',
      examples:[
        {en:'They pushed through the crowd.', ja:'人混みを押し分けて進んだ', note:'貫いて進む'},
        {en:'push the plan forward', ja:'計画を推し進める', note:''}]}],
  trivia:[
    {title:'push と pull は「基準が自分」',
     body:'どちらの語も、動かす向きを「自分を基準に」決めている。\n'+
          'push ＝ 自分から遠ざける／pull ＝ 自分に近づける\n'+
          'come と go が話し手を基準にするのと同じ仕組み。'},
    {title:'push oneself は「自分を押す」',
     body:'自分で自分の背中を押して先へ進ませる、という絵。\n'+
          'Don’t push yourself. ＝ 無理しないで。\n'+
          '頑張りすぎを止める、やさしい言い方になる。'}]
},

/* ------------------------------------------------------- carry */
{
  id:'carry', type:'verb', headword:'carry', core:'支えながら運ぶ', diagram:'vCarry',
  coreNote:'carry は重さを支えたまま移動すること。'+
           '支える対象が物なら運ぶ、店なら「置いている」、仕事なら「やり続ける」。',
  senses:[
    { id:'car-bear', chip:'運ぶ', label:'支えながら → 持って移動する',
      gloss:'重さを引き受けたまま動く',
      examples:[
        {en:'Can you carry this bag?', ja:'このかばん運べる?', note:''},
        {en:'She always carries an umbrella.', ja:'彼女はいつも傘を持ち歩く', note:''}]},
    { id:'car-stock', chip:'置いている', label:'支えながら → 店に抱えている',
      gloss:'商品として持っている',
      examples:[
        {en:'Do you carry this in blue?', ja:'これの青はありますか?', note:''}]},
    { id:'car-continue', chip:'やり続ける', label:'支えながら → 途切れさせずに進める',
      gloss:'重さを支えたまま先へ',
      examples:[
        {en:'Carry on with your work.', ja:'仕事を続けて', note:'接触したまま運び続ける'},
        {en:'carry out a plan', ja:'計画を実行する', note:'外へ運び出して形にする'}]}],
  trivia:[
    {title:'carry out が「実行する」になる理由',
     body:'頭の中にあった計画を、外の世界へ運び出して形にする。\n'+
          'out は【内から外へ】。だから「実行・遂行」になる。\n'+
          'carry on なら「接触したまま運び続ける」＝続行。'},
    {title:'Do you carry…? が「取り扱っていますか」になる仕組み',
     body:'店がその商品を「抱えて持っている」という絵。\n'+
          'have より商売っ気のある言い方で、店員との会話でよく使われる。'}]
},

/* -------------------------------------------------------- fall */
{
  id:'fall', type:'verb', headword:'fall', core:'支えを失って落ちる', diagram:'vFall',
  coreNote:'fall は自分の意思ではなく、支えがなくなって下へ行くこと。'+
           '落ちる対象が体なら転ぶ、数値なら下落、状態なら「〜になってしまう」。',
  senses:[
    { id:'fal-drop', chip:'落ちる', label:'支えを失う → 下へ落ちる',
      gloss:'重力に任せて',
      examples:[
        {en:'He fell off the ladder.', ja:'彼ははしごから落ちた', note:''},
        {en:'Leaves fall in autumn.', ja:'秋には葉が落ちる', note:''}]},
    { id:'fal-decline', chip:'下がる', label:'支えを失う → 数値が下落する',
      gloss:'支えきれずに下へ',
      examples:[
        {en:'Prices fell sharply.', ja:'価格が急落した', note:''},
        {en:'The temperature is falling.', ja:'気温が下がっている', note:''}]},
    { id:'fal-become', chip:'〜になる', label:'支えを失う → その状態に落ち込む',
      gloss:'自分では止められずそうなる',
      examples:[
        {en:'I fell asleep on the train.', ja:'電車で寝落ちした', note:'眠りへ落ちる'},
        {en:'They fell in love.', ja:'二人は恋に落ちた', note:'in ＝ その状態の中へ'}]}],
  trivia:[
    {title:'fall in love が「恋に落ちる」なのは日本語と同じ',
     body:'自分の意思では止められず、気づいたらその状態の中にいる。\n'+
          'fall asleep（眠りに落ちる）も同じで、\n'+
          'どちらも「自分で選んでいない」ところが fall らしい。'},
    {title:'アメリカで秋を fall と呼ぶ理由',
     body:'葉が落ちる季節だから。the fall of the leaf を短くしたもの。\n'+
          'イギリスでは autumn を使う。\n'+
          '動詞の fall と季節の fall は、やはり同じ1語。'}]
},

/* ------------------------------------------------------- catch */
{
  id:'catch', type:'verb', headword:'catch', core:'動いているものを捕らえる', diagram:'vCatch',
  coreNote:'catch は動いている対象を、間に合って掴むこと。'+
           '対象がボールなら捕球、電車なら間に合う、病気なら「もらう」、話なら「聞き取れる」。',
  senses:[
    { id:'cat-grab', chip:'捕まえる', label:'捕らえる → 動くものを掴む',
      gloss:'飛んでくるものを受け止める',
      examples:[
        {en:'Catch the ball!', ja:'ボール取って!', note:''},
        {en:'The police caught him.', ja:'警察が彼を捕まえた', note:''}]},
    { id:'cat-intime', chip:'間に合う', label:'捕らえる → 出る前に掴む',
      gloss:'動き出す前に間に合う',
      examples:[
        {en:'I caught the last train.', ja:'終電に間に合った', note:'行ってしまう前に捕まえた'},
        {en:'catch a flight', ja:'飛行機に乗る', note:''}]},
    { id:'cat-illness', chip:'もらう', label:'捕らえる → 病気をつかまえる',
      gloss:'飛んできたものを受けてしまう',
      examples:[
        {en:'I caught a cold.', ja:'風邪をひいた', note:''}]},
    { id:'cat-perceive', chip:'聞き取る', label:'捕らえる → 流れる情報をつかむ',
      gloss:'過ぎ去る前につかまえる',
      examples:[
        {en:"Sorry, I didn't catch that.", ja:'すみません、聞き取れませんでした', note:''},
        {en:'catch the meaning', ja:'意味をつかむ', note:''}]}],
  trivia:[
    {title:'catch a cold は「風邪を捕まえる」',
     body:'空中を飛んでいる風邪を、つかまえてしまった、という絵。\n'+
          '日本語の「ひく」とは発想が逆で、英語では自分が捕らえる側。\n'+
          'have a cold なら「今かかっている状態」で、こちらは圏内にある have。'},
    {title:'catch up が「追いつく」になる理由',
     body:'前を行く人を捕まえて、同じ位置まで上がる。\n'+
          'up は「基準の高さまで至る」。\n'+
          'Let’s catch up! なら「近況を埋め合わせよう」＝久しぶりに話そう。'}]
},

/* ------------------------------------------------------- leave */
{
  id:'leave', type:'verb', headword:'leave', core:'そのままにして離れる', diagram:'vLeave',
  coreNote:'leave は「去る」と「残す」の両方になるが、コアは1つ。'+
           '自分が離れれば「出発する」、物をそのままにして離れれば「置き去りにする」。',
  senses:[
    { id:'lev-depart', chip:'去る', label:'離れる → その場を出る',
      gloss:'自分が動いて離れる',
      examples:[
        {en:'The train leaves at ten.', ja:'電車は10時に出る', note:''},
        {en:'I left the office early.', ja:'早めに会社を出た', note:''}]},
    { id:'lev-remain', chip:'置いていく', label:'離れる → 物をそのままにする',
      gloss:'持たずに、動かさずに去る',
      examples:[
        {en:'I left my umbrella on the train.', ja:'電車に傘を忘れた', note:'置いたまま離れた'},
        {en:'Leave it here.', ja:'ここに置いといて', note:''}]},
    { id:'lev-keep', chip:'〜のままにする', label:'離れる → 手を加えずその状態で',
      gloss:'触らないでおく',
      examples:[
        {en:'Leave the door open.', ja:'ドアは開けたままにして', note:''},
        {en:'Leave me alone.', ja:'放っておいて', note:''}]},
    { id:'lev-remain2', chip:'残る', label:'離れる → 後に残ったもの',
      gloss:'去った後に残されている',
      examples:[
        {en:'There’s no time left.', ja:'もう時間がない', note:'残された時間がない'},
        {en:'Only two are left.', ja:'残りは2つだけ', note:''}]}],
  trivia:[
    {title:'「去る」と「残す」が同じ語である理由',
     body:'自分が離れるとき、動かさなかったものはその場に残る。\n'+
          'I left the office.（自分が離れた）\n'+
          'I left my bag.（バッグを残して離れた）\n'+
          '視点が自分か物かで訳が変わるだけで、起きていることは1つ。'},
    {title:'Leave me alone. のやわらかい版',
     body:'直訳は「私を一人のままにして」。\n'+
          'きつく響くので、やわらかく言うなら Give me a minute. など。\n'+
          'leave out（外に残す＝除外する）も同じ leave。'}]
},

/* -------------------------------------------------------- pass */
{
  id:'pass', type:'verb', headword:'pass', core:'通り過ぎる', diagram:'vPass',
  coreNote:'pass は基準点を横切って向こうへ行くこと。'+
           '人が過ぎれば「通り過ぎる」、時間が過ぎれば「経つ」、'+
           '基準を越えれば「合格」、手から手へ渡れば「回す」。',
  senses:[
    { id:'pas-by', chip:'通り過ぎる', label:'通り過ぎる → 横を過ぎて先へ',
      gloss:'止まらずに通る',
      examples:[
        {en:'We passed your house.', ja:'君の家の前を通った', note:''},
        {en:'Three years have passed.', ja:'3年が経った', note:'時間が過ぎていく'}]},
    { id:'pas-hand', chip:'手渡す', label:'通り過ぎる → 手から手へ渡す',
      gloss:'自分を経由して次へ',
      examples:[
        {en:'Pass me the salt, please.', ja:'塩を取って', note:''},
        {en:'Pass it on.', ja:'次の人に回して', note:'接触を保って渡し続ける'}]},
    { id:'pas-exam', chip:'合格する', label:'通り過ぎる → 基準線を越える',
      gloss:'ラインを通過する',
      examples:[
        {en:'I passed the exam.', ja:'試験に受かった', note:''},
        {en:'pass the test', ja:'テストに合格する', note:''}]},
    { id:'pas-skip', chip:'見送る', label:'通り過ぎる → 手を出さずに通す',
      gloss:'自分の番を過ぎさせる',
      examples:[
        {en:"I'll pass.", ja:'私はパスで', note:''}]}],
  trivia:[
    {title:'pass away が「亡くなる」になる理由',
     body:'pass（通り過ぎる）× away（離れていく）。\n'+
          'そばを過ぎて、そのまま遠くへ行ってしまう、という絵。\n'+
          'die を直接言わずに済ませるやわらかい言い方になる。'},
    {title:'pass out は「意識が外へ出ていく」',
     body:'気を失うこと。意識が体の外へ抜け出てしまう絵。\n'+
          '同じ pass out が「配る」にもなるのは、\n'+
          '物が手元から外へ次々渡っていくから。文脈で割れる。'}]
},

/* -------------------------------------------------------- work */
{
  id:'work', type:'verb', headword:'work', core:'機能して結果を出す', diagram:'vWork',
  coreNote:'work のコアは「働く」より広く【ちゃんと機能する】。'+
           '人が機能すれば仕事、機械が機能すれば動く、方法が機能すればうまくいく。',
  senses:[
    { id:'wrk-job', chip:'働く', label:'機能する → 人が仕事をする',
      gloss:'役割を果たしている',
      examples:[
        {en:'She works at a hospital.', ja:'彼女は病院で働いている', note:''},
        {en:"I'm working on it.", ja:'それに取り組んでいる', note:'on ＝ 対象にはりつく'}]},
    { id:'wrk-function', chip:'動く', label:'機能する → 機械が正しく動く',
      gloss:'壊れずに役目を果たす',
      examples:[
        {en:'The printer isn’t working.', ja:'プリンタが動かない', note:''},
        {en:'Does this remote work?', ja:'このリモコン使える?', note:''}]},
    { id:'wrk-succeed', chip:'うまくいく', label:'機能する → 方法が効く',
      gloss:'狙いどおりの結果が出る',
      examples:[
        {en:'It worked!', ja:'うまくいった!', note:''},
        {en:'That approach won’t work.', ja:'そのやり方ではうまくいかない', note:''}]},
    { id:'wrk-shape', chip:'作り上げる', label:'機能する → 手を加えて形にする',
      gloss:'働きかけて仕上げる',
      examples:[
        {en:'work out the details', ja:'細部を詰める', note:'出し切るまでやる'},
        {en:'work out at the gym', ja:'ジムで運動する', note:'体に働きかける'}]}],
  trivia:[
    {title:'It worked! が「うまくいった」になる理由',
     body:'主語は「それ（方法・薬・作戦）」。\n'+
          'それがちゃんと機能した、という言い方。\n'+
          '人が主語でなくても work が使えるのは、コアが「働く」ではなく「機能する」だから。'},
    {title:'work out が「運動する」と「解決する」の両方になる仕組み',
     body:'work（働きかける）× out（中身を出し切る）。\n'+
          '問題に働きかけて出し切れば「解決する」、\n'+
          '体に働きかけて出し切れば「トレーニングする」。同じ絵の別の場面。'}]
},

/* -------------------------------------------------------- play */
{
  id:'play', type:'verb', headword:'play', core:'決まった枠の中で自由に動く', diagram:'vPlay',
  coreNote:'play は「遊ぶ」だけでなく、ルールや台本という枠の中で動くこと。'+
           'だから競技も、楽器も、演技も、再生も全部 play。',
  senses:[
    { id:'ply-game', chip:'競技する', label:'枠の中で → ルールに従って動く',
      gloss:'決められた枠の中で',
      examples:[
        {en:'Let’s play tennis.', ja:'テニスしよう', note:''},
        {en:'He plays for a local team.', ja:'彼は地元チームでプレーしている', note:''}]},
    { id:'ply-music', chip:'演奏する', label:'枠の中で → 楽譜に沿って音を出す',
      gloss:'決まった音の並びを動かす',
      examples:[
        {en:'She plays the piano.', ja:'彼女はピアノを弾く', note:''},
        {en:'play a song', ja:'曲をかける', note:''}]},
    { id:'ply-act', chip:'演じる', label:'枠の中で → 役として動く',
      gloss:'台本という枠の中で',
      examples:[
        {en:'He played Hamlet.', ja:'彼はハムレットを演じた', note:''},
        {en:'play an important role', ja:'重要な役割を果たす', note:''}]},
    { id:'ply-media', chip:'再生する', label:'枠の中で → 録音どおりに動かす',
      gloss:'収められた内容を流す',
      examples:[
        {en:'Play it again.', ja:'もう一度再生して', note:''}]}],
  trivia:[
    {title:'楽器に the がついて、スポーツにはつかない',
     body:'play the piano（楽器には the）／play tennis（競技には無冠詞）\n'+
          '楽器は「あの楽器という特定のもの」を弾く感覚、\n'+
          '競技は「テニスという活動そのもの」で輪郭がないから。'},
    {title:'play a role が「役割を果たす」になる理由',
     body:'もとは舞台で役を演じること。\n'+
          '社会や組織の中でも、人はそれぞれの役を演じている——\n'+
          'という比喩がそのまま定着した。'}]
},

/* -------------------------------------------------------- pick */
{
  id:'pick', type:'verb', headword:'pick', core:'選んでつまみ上げる', diagram:'vPick',
  coreNote:'pick は指先で一つだけを選び取ること。take よりも「選ぶ」色が濃い。'+
           'つまむ対象が花なら摘む、人なら選ぶ、床の物なら拾い上げる。',
  senses:[
    { id:'pik-choose', chip:'選ぶ', label:'つまみ上げる → 一つを選び出す',
      gloss:'指で一つだけ指名する',
      examples:[
        {en:'Pick a card.', ja:'カードを1枚選んで', note:''},
        {en:'She was picked for the team.', ja:'彼女はチームに選ばれた', note:''}]},
    { id:'pik-gather', chip:'摘む', label:'つまみ上げる → もぎ取る',
      gloss:'ついているものを指で外す',
      examples:[
        {en:'pick flowers', ja:'花を摘む', note:''},
        {en:'pick apples', ja:'りんごをもぐ', note:''}]},
    { id:'pik-lift', chip:'拾い上げる', label:'つまみ上げる → 下から持ち上げる',
      gloss:'落ちているものをつまむ',
      examples:[
        {en:'Pick up that pen.', ja:'そのペンを拾って', note:'上へつまみ上げる'},
        {en:"I'll pick you up at seven.", ja:'7時に迎えに行くよ', note:'人を拾い上げる'}]}],
  trivia:[
    {title:'pick up が「車で迎えに行く」になる理由',
     body:'道に立っている人を、すくい上げて車に乗せる絵。\n'+
          '同じ pick up が「（言葉や習慣を）自然に身につける」にもなるのは、\n'+
          '落ちているものを拾うように、意識せず拾い上げるから。'},
    {title:'pick と choose の違い',
     body:'pick ＝ ぱっと指でつまむ（軽い、直感的）\n'+
          'choose ＝ 比べて選ぶ（重い、熟慮）\n'+
          'Pick a card.（さっと1枚）と choose a career（人生の選択）の差。'}]
}


];
