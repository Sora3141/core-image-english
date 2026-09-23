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

];
