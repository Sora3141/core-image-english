/* ============================================================
   不変化詞（前置詞・副詞）のコア ── 全体の土台
   type    : particle
   senses  : コアからの派生。id は演習からのリンク先
             chip は先頭のジャンプ用チップに出す短縮ラベル
   trivia  : ⚡豆知識。派生1つにつき0.4本くらいの比率
   ============================================================ */
const PARTICLES = [

/* ---------------------------------------------------------- on */
{
  id:'on', type:'particle', headword:'on', core:'接触', diagram:'contact',
  coreNote:'on は「上」ではない。面にくっついている、ただそれだけ。だから天井にとまったハエも on the ceiling。',
  senses:[
    { id:'on-touch', chip:'くっつく', label:'接触 → くっつく',
      gloss:'面にふれている。上でも下でも横でもいい',
      examples:[
        {en:'a picture on the wall', ja:'壁にかかった絵', note:'壁にくっつく'},
        {en:'a fly on the ceiling', ja:'天井にとまったハエ', note:'下にあるが on'},
        {en:'a ring on her finger', ja:'指にはめた指輪', note:'指に接触'}]},
    { id:'on-support', chip:'支えられる', label:'接触 → 支えられる',
      gloss:'接触面が体重を受け止める',
      examples:[
        {en:'stand on one leg', ja:'片足で立つ', note:'片足に体重が乗る'},
        {en:'go there on foot', ja:'徒歩で行く', note:'足で地面に接触して進む'}]},
    { id:'on-time', chip:'時間軸', label:'接触 → 時間軸の一点に触れる',
      gloss:'「日」という点に指で触れるイメージ',
      examples:[
        {en:'on Monday', ja:'月曜日に', note:''},
        {en:'on my birthday', ja:'私の誕生日に', note:''},
        {en:'on the morning of the 5th', ja:'5日の朝に', note:'特定の日の朝は in ではなく on'}]},
    { id:'on-connect', chip:'つながる', label:'接触 → つながっている',
      gloss:'接点ができる＝回路が通じる',
      examples:[
        {en:'turn on the light', ja:'電気をつける', note:'回路が接触 → 通電'},
        {en:"He's on the phone.", ja:'彼は電話中だ', note:'回線につながっている'},
        {en:'I saw it on TV.', ja:'テレビで見た', note:'電波に乗って届く'}]},
    { id:'on-continue', chip:'途切れない', label:'接触 → 途切れない',
      gloss:'くっついたまま離れない＝続く',
      examples:[
        {en:'The show must go on.', ja:'ショーは続けなければ', note:'接触が続く'},
        {en:'keep on trying', ja:'挑戦し続ける', note:''},
        {en:'Hold on a second.', ja:'ちょっと待って', note:'掴んだまま離さない'}]},
    { id:'on-lean', chip:'寄りかかる', label:'接触 → 寄りかかる',
      gloss:'相手に体重を預ける＝頼る・負担がかかる',
      examples:[
        {en:'depend on you', ja:'君に頼る', note:'君に体重を預ける'},
        {en:'You can count on me.', ja:'私に任せて', note:''},
        {en:"Dinner's on me.", ja:'夕飯はおごるよ', note:'費用が私に乗っている'}]},
    { id:'on-about', chip:'はりつく', label:'接触 → 対象にはりつく',
      gloss:'テーマにぴったり貼りついている',
      examples:[
        {en:'work on a project', ja:'案件に取り組む', note:'案件にはりついて作業する'},
        {en:'a book on history', ja:'歴史についての本', note:'歴史に貼りついた本'},
        {en:'focus on the problem', ja:'問題に集中する', note:''}]}],
  trivia:[
    {title:'なぜ電車は on で、車は in なのか',
     body:'get on the train / bus / plane に対して、get in the car / taxi。\n'+
          '電車やバスは「床の上に立って歩ける」から、面に乗る＝on。\n'+
          '車は「体を折りたたんで囲まれる」から、内側＝in。\n'+
          '馬は ride on a horse ——背中に乗るから on。\n'+
          '大きくて歩ける乗り物は on、狭くて包まれる乗り物は in。'},
    {title:'The house is on fire. の on は「火の上」ではない',
     body:'火が家に接触している状態のこと。\n'+
          'on fire / on sale / on duty / on a diet ——\n'+
          'どれも「その状態にぴったりくっついている」を表している。'},
    {title:'on の反対が off である理由',
     body:'off のコアは【分離】。on が接触なら、off はそれが剥がれること。\n'+
          'turn on ↔ turn off（回路が接触 ↔ 切れる）\n'+
          'put on ↔ take off（体に接触 ↔ 体から離す）\n'+
          '「スイッチのオンオフ」は、実は接触と分離の話だった。'}]
},

/* ---------------------------------------------------------- in */
{
  id:'in', type:'particle', headword:'in', core:'囲まれた内側', diagram:'container',
  coreNote:'in は「中に入る」というより「まわりを囲まれている」。箱でも、期間でも、感情でも、'+
           '境界のあるものの内側にいれば in。',
  senses:[
    { id:'in-space', chip:'空間の中', label:'内側 → 空間に囲まれる',
      gloss:'境界のある空間にすっぽり入っている',
      examples:[
        {en:'in the box', ja:'箱の中に', note:''},
        {en:'in Tokyo', ja:'東京に', note:'市域という枠の内側'},
        {en:'walk in the rain', ja:'雨の中を歩く', note:'雨に囲まれている'}]},
    { id:'in-period', chip:'期間の中', label:'内側 → 期間に囲まれる',
      gloss:'ひとまとまりの時間の枠の内側',
      examples:[
        {en:'in 2026', ja:'2026年に', note:'1年という枠の中'},
        {en:'in the morning', ja:'朝に', note:'朝という時間帯の中'},
        {en:'in April', ja:'4月に', note:''}]},
    { id:'in-after', chip:'〜後に', label:'内側 → 枠を抜けたとき＝〜後に',
      gloss:'その長さの枠を通り抜け終わった時点',
      examples:[
        {en:"I'll be back in ten minutes.", ja:'10分後に戻る', note:'「10分以内」ではない'},
        {en:'in a week', ja:'1週間後に', note:''}]},
    { id:'in-state', chip:'状態の中', label:'内側 → 状態に包まれる',
      gloss:'その状態にすっぽり浸かっている',
      examples:[
        {en:'in trouble', ja:'困っている', note:'トラブルに囲まれている'},
        {en:'in love', ja:'恋をしている', note:''},
        {en:'in a hurry', ja:'急いでいる', note:''}]},
    { id:'in-form', chip:'形式の中', label:'内側 → 手段・形式の枠に収める',
      gloss:'その形式という器に入れて表す',
      examples:[
        {en:'Write it in English.', ja:'英語で書いて', note:'英語という器に入れる'},
        {en:'in pencil', ja:'鉛筆で', note:''},
        {en:'pay in cash', ja:'現金で払う', note:''}]}],
  trivia:[
    {title:'in ten minutes は「10分以内」ではない',
     body:'「10分後」。10分という枠を通り抜け終わった時点を指している。\n'+
          '「10分以内」と言いたいなら within ten minutes。\n'+
          '待ち合わせで取り違えると10分ずれるので、地味に実害がある。'},
    {title:'in time と on time は意味が違う',
     body:'in time ＝ 間に合う。締切という枠の内側にすべり込んだ。\n'+
          'on time ＝ 時間ぴったり。時刻という点に接触した。\n'+
          '電車が on time なら定刻どおり、in time なら発車に間に合った。'},
    {title:'in the morning なのに on Monday morning',
     body:'朝そのものは「時間帯という枠」だから in。\n'+
          'でも「月曜の朝」になると、月曜という特定の一点に触れるので on。\n'+
          '枠として見るか、点として見るかで前置詞が入れ替わる。'}]
},

/* ---------------------------------------------------------- at */
{
  id:'at', type:'particle', headword:'at', core:'点', diagram:'point',
  coreNote:'at は広がりを持たない一点。地図にピンを刺すイメージ。'+
           '中がどうなっているかには興味がなく、ただ「そこ」とだけ言っている。',
  senses:[
    { id:'at-place', chip:'場所の点', label:'点 → 場所の一点',
      gloss:'地図上のピン。建物の中身は問題にしない',
      examples:[
        {en:'at the station', ja:'駅で', note:'駅という地点'},
        {en:'at the door', ja:'ドアのところで', note:''},
        {en:'at home', ja:'家で', note:''}]},
    { id:'at-time', chip:'時刻の点', label:'点 → 時刻の一点',
      gloss:'時間軸に打たれた一点',
      examples:[
        {en:'at seven', ja:'7時に', note:''},
        {en:'at noon', ja:'正午に', note:''},
        {en:'at night', ja:'夜に', note:'夜を一点として見ている'}]},
    { id:'at-aim', chip:'狙いの点', label:'点 → 狙いを定める',
      gloss:'その一点に向けて力・視線を放つ',
      examples:[
        {en:'look at me', ja:'私を見て', note:'視線を一点に向ける'},
        {en:'throw a stone at the window', ja:'窓に石を投げつける', note:'窓を的にしている'},
        {en:'shout at him', ja:'彼にどなる', note:'彼を的にして声を放つ'}]},
    { id:'at-level', chip:'数値の点', label:'点 → 数値・水準の一点',
      gloss:'目盛りの上の一点',
      examples:[
        {en:'at 100 km/h', ja:'時速100キロで', note:''},
        {en:'at the age of twenty', ja:'20歳のときに', note:''},
        {en:'buy it at a low price', ja:'安値で買う', note:''}]},
    { id:'at-skill', chip:'技能の的', label:'点 → 技能の的',
      gloss:'狙いを定めた一点＝その人の得意分野',
      examples:[
        {en:"I'm good at cooking.", ja:'料理が得意だ', note:'料理という的に当てられる'},
        {en:'bad at math', ja:'数学が苦手', note:''}]}],
  trivia:[
    {title:'throw it to me と throw it at me は大違い',
     body:'to は【到達する方向】、at は【狙いの一点】。\n'+
          'Throw the ball to me. ＝ 受け取れるように投げて（パス）\n'+
          'Throw the ball at me. ＝ 私めがけてぶつけて（攻撃）\n'+
          'shout to（呼びかける）と shout at（どなりつける）も同じ構図。'},
    {title:'at the station と in the station',
     body:'at ＝ 地図上の点として駅。「駅で待ち合わせ」ならこちら。\n'+
          'in ＝ 駅舎という空間の内側。「駅の建物の中にいる」感じ。\n'+
          '同じ場所でも、点として見るか容器として見るかで変わる。'},
    {title:'look at / see / watch の違いもコアで割れる',
     body:'look at ＝ at で一点に視線を向ける（意識して目をやる）\n'+
          'see ＝ 見ようとしなくても視界に入る\n'+
          'watch ＝ 動いているものを追い続ける\n'+
          'だから watch TV とは言うが、watch a picture とは言わない。'}]
},

/* ---------------------------------------------------------- to */
{
  id:'to', type:'particle', headword:'to', core:'到達する方向', diagram:'arrowTo',
  coreNote:'to は矢印。しかも「ちゃんと届く」矢印。向きだけを示す for との差はここにある。',
  senses:[
    { id:'to-goal', chip:'目的地', label:'方向 → 到達点',
      gloss:'向かって、そこに着く',
      examples:[
        {en:'go to school', ja:'学校へ行く', note:'学校まで着く'},
        {en:'Come to me.', ja:'こっちに来て', note:''},
        {en:'from Tokyo to Osaka', ja:'東京から大阪まで', note:'終点まで届く'}]},
    { id:'to-reach', chip:'相手に届く', label:'到達 → 相手のところまで届く',
      gloss:'受け手がいて、そこに渡る',
      examples:[
        {en:'Give it to me.', ja:'それを私にちょうだい', note:'私の手まで届く'},
        {en:'talk to him', ja:'彼に話しかける', note:'声が彼に届く'},
        {en:'listen to music', ja:'音楽を聴く', note:'耳を向けて届かせる'}]},
    { id:'to-result', chip:'結果に至る', label:'到達 → その結果になる',
      gloss:'進んだ先に待っている状態',
      examples:[
        {en:'to my surprise', ja:'驚いたことに', note:'驚きという結果に至る'},
        {en:'beaten to death', ja:'殴り殺される', note:'死に至るまで'}]},
    { id:'to-infinitive', chip:'to不定詞', label:'到達 → これから向かう（to不定詞）',
      gloss:'まだ着いていないが、そこへ向かっている',
      examples:[
        {en:'I want to go.', ja:'行きたい', note:'行くことへ向かっている'},
        {en:'I came here to see you.', ja:'君に会いに来た', note:'会うという目的地へ'},
        {en:'something to eat', ja:'何か食べるもの', note:'これから食べる'}]}],
  trivia:[
    {title:'to不定詞の to は、前置詞の to と同じものだった',
     body:'どちらも【到達する方向】。だから to不定詞は必ず「これから」を向く。\n'+
          'want to go（これから行きたい）／decide to go（これから行くと決める）\n'+
          'hope / plan / promise / expect ——to をとる動詞が未来寄りなのは偶然ではない。'},
    {title:'go to bed と go to sleep の違い',
     body:'go to bed ＝ ベッドという場所まで行く（寝床に入る）\n'+
          'go to sleep ＝ 睡眠という状態まで至る（眠りに落ちる）\n'+
          'ベッドに入っても眠れないことがあるのは、この2つが別物だから。'}]
},

/* ---------------------------------------------------------- for */
{
  id:'for', type:'particle', headword:'for', core:'向かう', diagram:'arrowFor',
  coreNote:'for は向きだけを示す矢印。to と違って「着いた」とは言っていない。'+
           'そこから「〜のために」「〜と引き換えに」が出てくる。',
  senses:[
    { id:'for-toward', chip:'そちらへ', label:'向かう → 進む先',
      gloss:'その方角を向いている。到達は保証しない',
      examples:[
        {en:'leave for Tokyo', ja:'東京へ出発する', note:'東京に向けて出る'},
        {en:'head for the exit', ja:'出口へ向かう', note:''}]},
    { id:'for-purpose', chip:'〜のために', label:'向かう → 目的・用途',
      gloss:'それを目指している',
      examples:[
        {en:'a gift for you', ja:'君へのプレゼント', note:'君に向けたもの'},
        {en:'What is this for?', ja:'これ何のため?', note:''},
        {en:'go out for lunch', ja:'昼を食べに出る', note:''}]},
    { id:'for-exchange', chip:'引き換え', label:'向かう → 交換・代わり',
      gloss:'差し出したものと向かい合わせになる',
      examples:[
        {en:'I paid 500 yen for it.', ja:'500円払った', note:'それと引き換えに'},
        {en:'Thank you for your help.', ja:'助けてくれてありがとう', note:'助けと引き換えの感謝'},
        {en:'Do it for me.', ja:'私の代わりにやって', note:''}]},
    { id:'for-duration', chip:'期間の長さ', label:'向かう → その長さだけ続く',
      gloss:'ゴールまでの距離＝続いた長さ',
      examples:[
        {en:'for three hours', ja:'3時間のあいだ', note:''},
        {en:"I've lived here for ten years.", ja:'10年住んでいる', note:''}]},
    { id:'for-support', chip:'賛成', label:'向かう → 味方する',
      gloss:'その側を向いている',
      examples:[
        {en:'Are you for or against it?', ja:'賛成? 反対?', note:'向いているか背を向けるか'},
        {en:'vote for him', ja:'彼に投票する', note:''}]}],
  trivia:[
    {title:'leave for Tokyo は「東京に着いた」とは言っていない',
     body:'for は向きだけ。着いたかどうかには触れない。\n'+
          'to なら到達を含むので、go to Tokyo は「東京まで行く」。\n'+
          'だから「東京へ向けて出発した」は leave for Tokyo になる。'},
    {title:'for と during はどちらも「〜の間」だが役割が違う',
     body:'for ＝ どれだけの長さか（for three days）\n'+
          'during ＝ いつのことか（during the trip）\n'+
          '「長さ」を聞かれたら for、「いつ」を聞かれたら during。'}]
},

/* ---------------------------------------------------------- up */
{
  id:'up', type:'particle', headword:'up', core:'上へ', diagram:'up',
  coreNote:'up は上向き。そこから「増える」「現れる」、そして「上限まで＝すっかり」が出てくる。'+
           'eat up の up は「上」ではなく「限界まで」。',
  senses:[
    { id:'up-rise', chip:'上へ', label:'上へ → 位置が上がる',
      gloss:'文字どおり上方向へ',
      examples:[
        {en:'stand up', ja:'立ち上がる', note:''},
        {en:'pick up the pen', ja:'ペンを拾い上げる', note:''},
        {en:'look up at the sky', ja:'空を見上げる', note:''}]},
    { id:'up-increase', chip:'増える', label:'上へ → 増える・強まる',
      gloss:'メーターの針が上がる',
      examples:[
        {en:'speed up', ja:'速度を上げる', note:''},
        {en:'Turn up the volume.', ja:'音量を上げて', note:''},
        {en:'Prices went up.', ja:'値上がりした', note:''}]},
    { id:'up-appear', chip:'現れる', label:'上へ → 浮かび上がる・現れる',
      gloss:'見えなかったものが表に出てくる',
      examples:[
        {en:'He showed up late.', ja:'彼は遅れて現れた', note:'ひょいと浮かび上がる'},
        {en:'A problem came up.', ja:'問題が持ち上がった', note:''},
        {en:'bring up the topic', ja:'その話題を持ち出す', note:'話題を浮上させる'}]},
    { id:'up-complete', chip:'すっかり', label:'上へ → 上限まで＝完全に',
      gloss:'目盛りの一番上まで行った＝やり尽くした',
      examples:[
        {en:'Eat it up.', ja:'全部食べて', note:'食べ尽くす'},
        {en:'We used up the paper.', ja:'紙を使い切った', note:''},
        {en:'clean up the room', ja:'部屋をすっかり片づける', note:''}]}],
  trivia:[
    {title:'eat up の up は「上」ではない',
     body:'コップに水を注ぐと水面が上がり、満杯で止まる。\n'+
          'その「上限まで行った」感覚が「すっかり・全部」になった。\n'+
          'drink up / use up / burn up / finish up ——どれも「し尽くす」。'},
    {title:'What’s up? は何が「上」なのか',
     body:'「何か浮かび上がってきた?」が元の感覚。\n'+
          'come up（問題が持ち上がる）や show up（ひょいと現れる）と同じ up。\n'+
          '目に見えるところへ浮上してきたもの＝近況、という挨拶になった。'}]
},

/* ---------------------------------------------------------- down */
{
  id:'down', type:'particle', headword:'down', core:'下へ', diagram:'down',
  coreNote:'down は下向き。そこから「減る」「止まる」、そして「紙の上に落とす＝書き留める」が出る。',
  senses:[
    { id:'down-lower', chip:'下へ', label:'下へ → 位置が下がる',
      gloss:'文字どおり下方向へ',
      examples:[
        {en:'sit down', ja:'座る', note:'腰を下ろす'},
        {en:'put down the bag', ja:'かばんを下ろす', note:''}]},
    { id:'down-decrease', chip:'減る', label:'下へ → 減る・弱まる',
      gloss:'メーターの針が下がる',
      examples:[
        {en:'slow down', ja:'速度を落とす', note:''},
        {en:'Calm down.', ja:'落ち着いて', note:'高ぶりが下がる'},
        {en:'cut down on sugar', ja:'砂糖を減らす', note:''}]},
    { id:'down-record', chip:'書き留める', label:'下へ → 紙の上に落とす',
      gloss:'頭にあるものを紙へ下ろす',
      examples:[
        {en:'write down the number', ja:'番号を書き留める', note:'紙に落とす'},
        {en:'take down notes', ja:'メモを取る', note:''}]},
    { id:'down-stop', chip:'止まる', label:'下へ → 倒れる・止まる',
      gloss:'立っていたものが下がって動かなくなる',
      examples:[
        {en:'My car broke down.', ja:'車が故障した', note:'動かなくなった'},
        {en:'shut down the system', ja:'システムを停止する', note:''}]}],
  trivia:[
    {title:'write down の down はどこへ下ろしているのか',
     body:'頭の中にあるものを、紙の上へ落としている。\n'+
          'take down / note down / jot down ——記録系が全部 down なのはこのため。\n'+
          '逆に「読み上げる」は read out（外へ出す）。'},
    {title:'The computer is down. は「下にある」ではない',
     body:'立っていたものが倒れて動かなくなった状態。\n'+
          'break down（機械が壊れる／人が泣き崩れる）も同じイメージで、\n'+
          '機械にも心にも同じ「崩れ落ちる」が使える。'}]
},

/* ---------------------------------------------------------- out */
{
  id:'out', type:'particle', headword:'out', core:'内から外へ', diagram:'out',
  coreNote:'out は内側から外へ出ること。そこから「中身が尽きる」「表に現れる」'+
           '「すっかり出し切る＝徹底的に」が生まれる。',
  senses:[
    { id:'out-exit', chip:'外へ', label:'外へ → 出ていく',
      gloss:'容器の内側から外側へ',
      examples:[
        {en:'go out', ja:'外出する', note:''},
        {en:'take out the trash', ja:'ゴミを出す', note:''},
        {en:'Get out!', ja:'出ていけ', note:''}]},
    { id:'out-exhaust', chip:'尽きる', label:'外へ → 中身が出きる',
      gloss:'容器が空になるまで出ていく',
      examples:[
        {en:'We ran out of milk.', ja:'牛乳を切らした', note:'中身が走って出ていった'},
        {en:'sold out', ja:'売り切れ', note:'売って外に出しきった'},
        {en:'My phone died out.', ja:'電池が切れた', note:''}]},
    { id:'out-appear', chip:'表に出る', label:'外へ → 表に現れる',
      gloss:'隠れていたものが外へ出て見えるようになる',
      examples:[
        {en:'The truth came out.', ja:'真実が明るみに出た', note:''},
        {en:'I found out the answer.', ja:'答えを突き止めた', note:'外に出して見つけた'},
        {en:'It turned out to be true.', ja:'結局それは本当だった', note:'ひっくり返して表が出た'}]},
    { id:'out-thorough', chip:'徹底的に', label:'外へ → すっかり出し切る',
      gloss:'中身を全部出す＝徹底的にやる',
      examples:[
        {en:'work out the problem', ja:'問題を解ききる', note:''},
        {en:'clean out the closet', ja:'押入れを空にして掃除する', note:''},
        {en:'check out the store', ja:'店をすっかり調べる', note:''}]}],
  trivia:[
    {title:'run out of は「中身が走って出ていく」',
     body:'砂時計の砂が下に落ちきるイメージ。\n'+
          'We ran out of time.（時間切れ）／run out of gas（ガス欠）。\n'+
          '主語は「切らした人」でも「無くなったもの」でもよく、\n'+
          'The milk ran out. とも言える。'},
    {title:'out と up はどちらも「すっかり」になる',
     body:'up は「上限まで満たして」尽くす（eat up ＝ 食べて満杯）\n'+
          'out は「中身を出し切って」尽くす（sell out ＝ 出して空っぽ）\n'+
          '同じ「し尽くす」でも、満ちて終わるか空いて終わるかが逆。'}]
},

/* ---------------------------------------------------------- off */
{
  id:'off', type:'particle', headword:'off', core:'分離', diagram:'off',
  coreNote:'off は、くっついていたものが離れること。on の正反対。'+
           '接触が切れるから「止まる」「休む」「値引き」まで届く。',
  senses:[
    { id:'off-detach', chip:'離れる', label:'分離 → 離れる',
      gloss:'接していた面から剥がれる',
      examples:[
        {en:'take off your coat', ja:'コートを脱ぐ', note:'体から離す'},
        {en:'get off the bus', ja:'バスを降りる', note:'床から離れる'},
        {en:'fall off the chair', ja:'椅子から落ちる', note:''}]},
    { id:'off-cut', chip:'切れる', label:'分離 → 切れる・中止する',
      gloss:'つながりが断たれる',
      examples:[
        {en:'turn off the light', ja:'電気を消す', note:'回路が切れる'},
        {en:'They called off the game.', ja:'試合が中止になった', note:'予定から切り離す'}]},
    { id:'off-rest', chip:'休み', label:'分離 → 仕事から離れる',
      gloss:'務めから切り離された状態',
      examples:[
        {en:'a day off', ja:'休日', note:'仕事から離れた日'},
        {en:"I'm off today.", ja:'今日は休みだ', note:''},
        {en:'off duty', ja:'非番で', note:''}]},
    { id:'off-discount', chip:'値引き', label:'分離 → 値段が削り取られる',
      gloss:'定価から一部が離れて落ちる',
      examples:[
        {en:'20% off', ja:'20%引き', note:'定価から20%離れる'},
        {en:'Take 500 yen off.', ja:'500円引いて', note:''}]}],
  trivia:[
    {title:'take off が「脱ぐ」と「離陸」の両方になる理由',
     body:'どちらも【離す】。服を体から離せば脱ぐ、機体を地面から離せば離陸。\n'+
          '同じ理屈で、景気や売上が take off すると「急に伸びる」。\n'+
          '地面を離れて飛び立つイメージが、そのまま比喩になっている。'},
    {title:'off と of は、もとは同じ単語だった',
     body:'of には今も「分離」の意味が残っている。\n'+
          'a piece of cake ＝ ケーキから切り離された一片\n'+
          'rob him of his money ＝ 彼から金を分離する\n'+
          '強く発音された of が off になって別れた、というのが成り立ち。'},
    {title:'on ↔ off はスイッチの話ではなく接触の話',
     body:'turn on / turn off ＝ 回路が接触する／切れる\n'+
          'put on / take off ＝ 体に接触させる／体から離す\n'+
          'on のページと合わせて読むと、対になっているのが見える。'}]
},

/* ---------------------------------------------------------- over */
{
  id:'over', type:'particle', headword:'over', core:'覆う・弧を描いて越える', diagram:'over',
  coreNote:'over は上を弧を描いて通る動き。そこから「覆う」「越える」「超過」「終了」'+
           'そして「ひっくり返してもう一度」が出てくる。',
  senses:[
    { id:'over-cover', chip:'覆う', label:'覆う → 上から包む',
      gloss:'上に広がってかぶさる',
      examples:[
        {en:'put a blanket over him', ja:'彼に毛布をかける', note:''},
        {en:'all over the world', ja:'世界中で', note:'世界を覆いつくして'}]},
    { id:'over-across', chip:'越える', label:'弧 → 乗り越える',
      gloss:'障害の上を通って向こう側へ',
      examples:[
        {en:'jump over the fence', ja:'柵を飛び越える', note:''},
        {en:'get over the flu', ja:'風邪から立ち直る', note:'山を越える'}]},
    { id:'over-excess', chip:'超過', label:'越える → 基準を超える',
      gloss:'ラインを越えてしまう',
      examples:[
        {en:'over 100 people', ja:'100人を超える', note:''},
        {en:'Don’t overwork.', ja:'働きすぎないで', note:'限度を越えて働く'}]},
    { id:'over-end', chip:'終わり', label:'越え切る → 終わる',
      gloss:'弧を通り抜けてしまった',
      examples:[
        {en:'The game is over.', ja:'試合終了', note:'越え切った'},
        {en:'Winter is over.', ja:'冬が終わった', note:''}]},
    { id:'over-again', chip:'もう一度', label:'ひっくり返す → やり直す',
      gloss:'裏返して最初からもう一周',
      examples:[
        {en:'Do it over.', ja:'やり直して', note:''},
        {en:'turn over the card', ja:'カードを裏返す', note:''},
        {en:'think it over', ja:'よく考え直す', note:'ひっくり返して眺める'}]}],
  trivia:[
    {title:'get over が「克服する」になる理由',
     body:'目の前の山を弧を描いて越える動き。\n'+
          '病気でも失恋でも、越えてしまえば向こう側に出られる。\n'+
          'I can’t get over it.（まだ立ち直れない）＝ まだ山の手前にいる。'},
    {title:'over と above の違い',
     body:'over ＝ 覆う、または弧を描いて越える（動きがある）\n'+
          'above ＝ ただ上のほうにある（位置だけ）\n'+
          'a bridge over the river（川をまたぐ橋）に above は使えない。\n'+
          '「またぐ」動きがあるかどうかで決まる。'}]
}
,

/* ---------------------------------------------------------- of */
{
  id:'of', type:'particle', headword:'of', core:'分離', diagram:'pOf',
  coreNote:'of は off と同じ語源で、コアは【分離】。全体から切り離された一部、という関係を表す。'+
           '「〜の」と訳すと見えなくなるが、根っこは切り離しにある。',
  senses:[
    { id:'of-part', chip:'全体の一部', label:'分離 → 全体から切り取った一部',
      gloss:'大きなものから切り離されたひとかけら',
      examples:[
        {en:'a piece of cake', ja:'ケーキ一切れ', note:'ケーキから切り離された一片'},
        {en:'one of them', ja:'そのうちの1つ', note:''},
        {en:'a member of the team', ja:'チームの一員', note:'チームから取り出した1人'}]},
    { id:'of-source', chip:'出どころ', label:'分離 → そこから出てきた',
      gloss:'元をたどるとそこに行き着く',
      examples:[
        {en:'made of wood', ja:'木でできている', note:'木から切り出した。木のままだと分かる'},
        {en:'die of cancer', ja:'がんで死ぬ', note:'そこから結果が出てくる'}]},
    { id:'of-deprive', chip:'奪う', label:'分離 → 引き剥がす',
      gloss:'持っていたものを切り離す',
      examples:[
        {en:'They robbed him of his wallet.', ja:'彼から財布を奪った', note:'彼から財布を分離'},
        {en:'cure her of the disease', ja:'彼女の病気を治す', note:'彼女から病気を切り離す'}]},
    { id:'of-belong', chip:'所属', label:'分離の裏返し → どこから来たか＝所属',
      gloss:'切り離す前はそこの一部だった、という関係',
      examples:[
        {en:'the leg of the table', ja:'テーブルの脚', note:''},
        {en:'the capital of Japan', ja:'日本の首都', note:''}]}],
  trivia:[
    {title:'of と off は、もとは同じ単語だった',
     body:'強く発音された of が off になって分かれた。\n'+
          'だから of には今も「分離」の意味が残っている。\n'+
          'a piece of cake も rob him of his money も、根は同じ切り離し。'},
    {title:'made of と made from の違い',
     body:'made of wood ＝ 見れば木だと分かる（形が残っている）\n'+
          'made from grapes ＝ ワイン。もうぶどうには見えない\n'+
          'of は切り出しただけ、from は起点から離れて変化しきった、という差。'}]
},

/* -------------------------------------------------------- with */
{
  id:'with', type:'particle', headword:'with', core:'一緒にある', diagram:'pWith',
  coreNote:'with は「そばに一緒にある」。人でも、持ち物でも、道具でも、'+
           'そこに添えられていれば with。向かい合って一緒にいれば「対立」にもなる。',
  senses:[
    { id:'with-accompany', chip:'一緒に', label:'一緒にある → 同伴する',
      gloss:'並んでその場にいる',
      examples:[
        {en:'Come with me.', ja:'一緒に来て', note:''},
        {en:'I live with my family.', ja:'家族と住んでいる', note:''}]},
    { id:'with-have', chip:'付いている', label:'一緒にある → 身につけている・添えられている',
      gloss:'その人・物にくっついて存在する',
      examples:[
        {en:'a man with glasses', ja:'メガネをかけた男性', note:''},
        {en:'coffee with milk', ja:'ミルク入りコーヒー', note:''}]},
    { id:'with-tool', chip:'道具', label:'一緒にある → 手元にある道具を使って',
      gloss:'その道具を持った状態で行う',
      examples:[
        {en:'Cut it with a knife.', ja:'ナイフで切って', note:'ナイフを持って切る'},
        {en:'write with a pen', ja:'ペンで書く', note:''}]},
    { id:'with-against', chip:'相手', label:'一緒にある → 向かい合う相手',
      gloss:'同じ場にいれば、味方にも相手にもなる',
      examples:[
        {en:'I argued with him.', ja:'彼と言い争った', note:'向かい合って一緒にいる'},
        {en:'play tennis with her', ja:'彼女とテニスをする', note:''}]},
    { id:'with-cause', chip:'〜で', label:'一緒にある → その状態を伴って',
      gloss:'感情や状態がそこに添えられている',
      examples:[
        {en:'shaking with fear', ja:'恐怖で震えている', note:'恐怖を伴って'},
        {en:'With pleasure.', ja:'喜んで', note:''}]}],
  trivia:[
    {title:'fight with が「共に戦う」と「戦う相手」の両方になる理由',
     body:'with は「一緒にその場にいる」としか言っていない。\n'+
          '肩を並べていれば味方、向かい合っていれば敵。\n'+
          'どちらかは文脈が決める。fight against なら必ず「逆らう」側になる。'},
    {title:'with と by の使い分け',
     body:'with ＝ 手に持っている道具（cut it with a knife）\n'+
          'by ＝ 方法・手段そのもの（go by train / by email）\n'+
          '手で握れるものは with、やり方は by、と考えるとほぼ外さない。'}]
},

/* ---------------------------------------------------------- by */
{
  id:'by', type:'particle', headword:'by', core:'すぐそば', diagram:'pBy',
  coreNote:'by は「ぴったり横」。触れてはいないが、すぐそばにある。'+
           'そばを通れば「経由」、そばにいた人は「やった人」、その時までのそばなら「期限」。',
  senses:[
    { id:'by-near', chip:'そば', label:'すぐそば → 近くにある',
      gloss:'手を伸ばせば届く距離',
      examples:[
        {en:'sit by the window', ja:'窓ぎわに座る', note:''},
        {en:'a house by the sea', ja:'海辺の家', note:''}]},
    { id:'by-pass', chip:'通り過ぎる', label:'すぐそば → 横を通っていく',
      gloss:'そばを掠めて進む',
      examples:[
        {en:'He walked by without a word.', ja:'彼は黙って通り過ぎた', note:''},
        {en:'Time goes by so fast.', ja:'時間が経つのは早い', note:'そばを過ぎていく'}]},
    { id:'by-means', chip:'手段', label:'すぐそば → それを経由して',
      gloss:'そこを通ってたどり着く',
      examples:[
        {en:'go by train', ja:'電車で行く', note:'電車を経由する'},
        {en:'contact me by email', ja:'メールで連絡して', note:''}]},
    { id:'by-agent', chip:'やった人', label:'すぐそば → その場にいた＝動作主',
      gloss:'受動態で「誰が」を言うときの by',
      examples:[
        {en:'written by Soseki', ja:'漱石によって書かれた', note:'そばにいた＝書いた人'},
        {en:'The window was broken by a ball.', ja:'窓はボールで割られた', note:''}]},
    { id:'by-deadline', chip:'期限', label:'すぐそば → その時までのどこか',
      gloss:'その時点のそばまでに',
      examples:[
        {en:'Finish it by Friday.', ja:'金曜までに終わらせて', note:'金曜のそばまでに'},
        {en:'by tomorrow morning', ja:'明日の朝までに', note:''}]},
    { id:'by-degree', chip:'差', label:'すぐそば → どれだけ離れているか',
      gloss:'二つの間の隙間の大きさ',
      examples:[
        {en:"He's taller by five centimeters.", ja:'彼の方が5センチ高い', note:''},
        {en:'prices rose by 10%', ja:'価格が10%上がった', note:''}]}],
  trivia:[
    {title:'by Friday と until Friday はまったく違う',
     body:'by Friday ＝ 金曜までのどこかで（一度やれば終わり）\n'+
          'until Friday ＝ 金曜までずっと（継続する）\n'+
          'Finish it by Friday.（金曜までに終わらせて）\n'+
          'Wait until Friday.（金曜まで待って）\n'+
          '締切なら by、継続なら until。'},
    {title:'by train に a や the がつかない理由',
     body:'ここでの train は具体的な一台ではなく「電車という手段」。\n'+
          '手段には輪郭がないので冠詞がつかない。\n'+
          'by car / by bus / by email も同じ。\n'+
          '具体的な一台を指すなら on the 9:15 train のように変わる。'}]
},

/* -------------------------------------------------------- from */
{
  id:'from', type:'particle', headword:'from', core:'起点', diagram:'pFrom',
  coreNote:'from は出発点。そこから離れていく矢印の「尻尾」を指している。'+
           '離れるからこそ「区別」「防ぐ」まで届く。',
  senses:[
    { id:'from-start', chip:'出発点', label:'起点 → そこから始まる',
      gloss:'動きが始まる場所・時間',
      examples:[
        {en:'from Tokyo to Osaka', ja:'東京から大阪まで', note:'to とセットで端から端まで'},
        {en:'open from nine', ja:'9時から開いている', note:''}]},
    { id:'from-origin', chip:'出身', label:'起点 → そこから来た',
      gloss:'元をたどればそこ',
      examples:[
        {en:"I'm from Japan.", ja:'日本出身です', note:''},
        {en:'a letter from her', ja:'彼女からの手紙', note:''}]},
    { id:'from-material', chip:'原料', label:'起点 → そこから変化してできた',
      gloss:'元の形はもう残っていない',
      examples:[
        {en:'Wine is made from grapes.', ja:'ワインはぶどうから作る', note:'もうぶどうには見えない'},
        {en:'made from recycled paper', ja:'再生紙から作られた', note:''}]},
    { id:'from-separate', chip:'引き離す', label:'起点 → そこから離す・防ぐ',
      gloss:'近づけないように距離を作る',
      examples:[
        {en:'Keep away from the edge.', ja:'端から離れて', note:''},
        {en:'It prevented him from going.', ja:'それが彼の外出を妨げた', note:'行くことから引き離す'}]},
    { id:'from-differ', chip:'区別', label:'起点 → 離れている＝違う',
      gloss:'重なっていない＝別物',
      examples:[
        {en:"It's different from mine.", ja:'私のとは違う', note:'私のものから離れている'},
        {en:'tell right from wrong', ja:'善悪を見分ける', note:'切り分ける'}]}],
  trivia:[
    {title:'different from の from は「離れている」',
     body:'2つが重なっておらず、距離があるから「違う」。\n'+
          'tell A from B（AとBを見分ける）も、切り離して区別すること。\n'+
          '「〜と違う」の「と」につられて different with と言わないよう注意。'},
    {title:'made of と made from をもう一度',
     body:'of ＝ 切り出しただけで元が分かる（a table made of wood）\n'+
          'from ＝ 起点から離れて変化しきった（wine made from grapes）\n'+
          '見て元が分かるかどうかで選べる。'}]
},

/* ------------------------------------------------------- about */
{
  id:'about', type:'particle', headword:'about', core:'まわりに', diagram:'pAbout',
  coreNote:'about は的の中心ではなく、そのまわり。ぴったりではないから「およそ」、'+
           'そのテーマの周辺だから「〜について」になる。',
  senses:[
    { id:'about-around', chip:'あたりを', label:'まわりに → その周辺を動く',
      gloss:'中心を決めずにうろうろする',
      examples:[
        {en:'look about', ja:'あたりを見回す', note:''},
        {en:'walk about the town', ja:'町をぶらつく', note:''}]},
    { id:'about-approx', chip:'およそ', label:'まわりに → ぴったりではない',
      gloss:'その数のあたり',
      examples:[
        {en:'about ten o’clock', ja:'10時ごろ', note:'10時ぴったりではない'},
        {en:'about 50 people', ja:'50人くらい', note:''}]},
    { id:'about-topic', chip:'〜について', label:'まわりに → そのテーマの周辺',
      gloss:'その話題をぐるりと囲んで話す',
      examples:[
        {en:'talk about the plan', ja:'計画について話す', note:''},
        {en:'a book about dogs', ja:'犬についての本', note:'犬まわりの話'}]},
    { id:'about-to', chip:'もうすぐ', label:'まわりに → その直前まで来ている',
      gloss:'すぐそこまで迫っている',
      examples:[
        {en:"I'm about to leave.", ja:'今まさに出るところ', note:'出発のすぐそば'},
        {en:'It’s about to rain.', ja:'降り出しそうだ', note:''}]}],
  trivia:[
    {title:'about が「およそ」と「について」の両方になる理由',
     body:'どちらも「中心ぴったりではなく、そのまわり」。\n'+
          '数のまわりなら「およそ」、話題のまわりなら「について」。\n'+
          '1つのイメージが2つの訳語に分かれているだけ。'},
    {title:'a book about history と a book on history',
     body:'about ＝ 歴史のまわりを扱う。一般向けの読み物\n'+
          'on ＝ 歴史に貼りついている。専門的な論考\n'+
          'about の方がゆるく、on の方が密着している。'}]
},

/* ----------------------------------------------------- through */
{
  id:'through', type:'particle', headword:'through', core:'貫通', diagram:'pThrough',
  coreNote:'through は中を突き抜けること。入口から入って出口から出る。'+
           'だから「最初から最後まで」「やり遂げる」まで届く。',
  senses:[
    { id:'thr-pierce', chip:'突き抜ける', label:'貫通 → 中を通って向こうへ',
      gloss:'入って、出る',
      examples:[
        {en:'go through the tunnel', ja:'トンネルを抜ける', note:''},
        {en:'The sun came through the window.', ja:'日が窓から差し込んだ', note:''}]},
    { id:'thr-whole', chip:'端から端まで', label:'貫通 → 最初から最後まで',
      gloss:'途中で止まらず全部',
      examples:[
        {en:'I slept through the night.', ja:'一晩中眠った', note:'夜を貫いて'},
        {en:'read through the report', ja:'報告書を通読する', note:''}]},
    { id:'thr-via', chip:'経由して', label:'貫通 → それを通して',
      gloss:'間に何かを挟んで到達する',
      examples:[
        {en:'I got the job through a friend.', ja:'友人の紹介で仕事を得た', note:''},
        {en:'learn through experience', ja:'経験を通して学ぶ', note:''}]},
    { id:'thr-finish', chip:'やり遂げる', label:'貫通 → 通り抜けきる',
      gloss:'苦しい区間を抜けて出口に出る',
      examples:[
        {en:'We got through it.', ja:'乗り切った', note:''},
        {en:'go through a hard time', ja:'つらい時期を過ごす', note:'その中を通っている最中'}]}],
  trivia:[
    {title:'through と across の違い',
     body:'through ＝ 中を貫く（go through the forest ＝ 森の中を抜ける）\n'+
          'across ＝ 表面を横切る（swim across the river ＝ 川面を渡る）\n'+
          '立体の中を通るか、平面の上を横切るか。\n'+
          'だから walk across the bridge（橋の上）と言う。'},
    {title:'電話の「つながる」も貫通',
     body:'I couldn’t get through. ＝ 電話が通じなかった\n'+
          '回線を貫いて向こう側まで届かなかった、ということ。\n'+
          'Put me through to him.（彼につないで）も同じ。'}]
},

/* ------------------------------------------------------ across */
{
  id:'across', type:'particle', headword:'across', core:'表面を横切る', diagram:'pAcross',
  coreNote:'across は面の上を端から端へ渡ること。'+
           'through が中を貫くのに対し、across は表面をまたぐ。',
  senses:[
    { id:'acr-cross', chip:'横断', label:'横切る → 向こう岸へ渡る',
      gloss:'こちら側から向こう側へ',
      examples:[
        {en:'walk across the street', ja:'通りを渡る', note:''},
        {en:'swim across the river', ja:'川を泳いで渡る', note:'水面を横切る'}]},
    { id:'acr-opposite', chip:'向かい', label:'横切った先 → 真向かい',
      gloss:'渡りきったところにある',
      examples:[
        {en:'the café across from the station', ja:'駅の向かいのカフェ', note:''},
        {en:'He sat across from me.', ja:'彼は私の向かいに座った', note:''}]},
    { id:'acr-all', chip:'全体に', label:'横切る → 端から端まで行きわたる',
      gloss:'その範囲をまたいで全部',
      examples:[
        {en:'across the country', ja:'国中で', note:''},
        {en:'across all age groups', ja:'全年齢層にわたって', note:''}]},
    { id:'acr-meet', chip:'出くわす', label:'横切る → たまたま交差する',
      gloss:'進路が偶然ぶつかる',
      examples:[
        {en:'I came across an old photo.', ja:'古い写真を偶然見つけた', note:'横切って出会った'},
        {en:'run across an old friend', ja:'旧友にばったり会う', note:''}]}],
  trivia:[
    {title:'come across が「偶然出会う」になる理由',
     body:'自分の進路と、相手の存在が交差する。\n'+
          '探していたわけではないのに横切ってしまった、という絵。\n'+
          'だから「ばったり」「たまたま」のニュアンスが出る。'},
    {title:'橋は across、トンネルは through',
     body:'walk across the bridge ＝ 橋の上（面）を渡る\n'+
          'walk through the tunnel ＝ トンネルの中（立体）を抜ける\n'+
          '同じ「渡る」でも、上を行くか中を行くかで変わる。'}]
},

/* ------------------------------------------------------- along */
{
  id:'along', type:'particle', headword:'along', core:'線に沿って', diagram:'pAlong',
  coreNote:'along は道や川など「細長いもの」に沿って進むこと。'+
           '同じ線の上を一緒に進めば「同行」、うまく進めば「仲良くやる」になる。',
  senses:[
    { id:'alo-line', chip:'沿って', label:'沿って → 線の上を進む',
      gloss:'道・川・壁などに寄り添って',
      examples:[
        {en:'walk along the river', ja:'川沿いを歩く', note:''},
        {en:'trees along the road', ja:'道沿いの木々', note:''}]},
    { id:'alo-together', chip:'一緒に', label:'沿って → 同じ線を一緒に進む',
      gloss:'連れ立って',
      examples:[
        {en:'Come along!', ja:'一緒においでよ', note:''},
        {en:'Bring your friend along.', ja:'友達も連れてきて', note:''}]},
    { id:'alo-progress', chip:'うまく進む', label:'沿って → 引っかからずに進む',
      gloss:'線から外れずに進めている',
      examples:[
        {en:'We get along well.', ja:'私たちは仲がいい', note:'一緒にうまく進めている'},
        {en:'How’s it coming along?', ja:'進み具合はどう?', note:''}]}],
  trivia:[
    {title:'get along with が「仲良くやる」になる仕組み',
     body:'同じ道を、ぶつからずに並んで進めている状態。\n'+
          '仲が悪ければ線から外れたり衝突したりする。\n'+
          'I don’t get along with him. ＝ うまく並んで歩けない。'},
    {title:'along と through は進む向きが違う',
     body:'along ＝ 長いものに「沿って」（川沿いを歩く）\n'+
          'through ＝ 中を「貫いて」（森の中を抜ける）\n'+
          'walk along the river は川岸、swim across the river は川を渡る。'}]
},

/* ------------------------------------------------------ around */
{
  id:'around', type:'particle', headword:'around', core:'周囲を', diagram:'pAround',
  coreNote:'around はぐるりと囲む動き。一周すれば「まわりを」、'+
           'あちこち回れば「うろうろ」、中心から外れれば「およそ」になる。',
  senses:[
    { id:'aro-circle', chip:'ぐるりと', label:'周囲を → 回りを取り巻く',
      gloss:'中心のまわりを一周する',
      examples:[
        {en:'travel around the world', ja:'世界を一周する', note:''},
        {en:'sit around the table', ja:'テーブルを囲んで座る', note:''}]},
    { id:'aro-here', chip:'あちこち', label:'周囲を → そのへんを動き回る',
      gloss:'決まった向きなく動く',
      examples:[
        {en:'look around', ja:'あたりを見回す', note:''},
        {en:'I walked around for an hour.', ja:'1時間ぶらぶら歩いた', note:''}]},
    { id:'aro-turn', chip:'向きを変える', label:'周囲を → 回って反対を向く',
      gloss:'半周して向きが変わる',
      examples:[
        {en:'Turn around.', ja:'振り向いて', note:''},
        {en:'The company turned around.', ja:'会社が持ち直した', note:'向きが逆になった'}]},
    { id:'aro-approx', chip:'およそ', label:'周囲を → 中心ぴったりではない',
      gloss:'その数のまわり',
      examples:[
        {en:'around ten o’clock', ja:'10時ごろ', note:''},
        {en:'around 30 people', ja:'30人くらい', note:''}]},
    { id:'aro-present', chip:'そのへんに', label:'周囲を → 近くに存在している',
      gloss:'どこか近くにいる',
      examples:[
        {en:"I'll be around.", ja:'そのへんにいるよ', note:''},
        {en:'Is John around?', ja:'ジョンいる?', note:''}]}],
  trivia:[
    {title:'turn around が「好転する」になる理由',
     body:'向きがぐるりと反対になること。\n'+
          '下向きだった業績が上向きに変わる、という絵がそのまま比喩になっている。\n'+
          '人生でも会社でも a turnaround（転機）と言える。'},
    {title:'around と about はどちらも「およそ」',
     body:'around ten ／ about ten、どちらも「10時ごろ」。\n'+
          'どちらも「中心ぴったりではなく、そのまわり」だから。\n'+
          'アメリカ英語では around の方がよく使われる。'}]
},

/* -------------------------------------------------------- back */
{
  id:'back', type:'particle', headword:'back', core:'元の位置へ', diagram:'pBack',
  coreNote:'back はもともと「背中」。背中の方向＝後ろ、そして'+
           '「いま来た方へ戻る」。だから「返す」「元に戻す」が全部ここから出る。',
  senses:[
    { id:'bak-return', chip:'戻る', label:'元の位置へ → 帰る',
      gloss:'出てきた場所へ引き返す',
      examples:[
        {en:"I'll be right back.", ja:'すぐ戻るよ', note:''},
        {en:'Put it back where it was.', ja:'元の場所に戻して', note:''}]},
    { id:'bak-state', chip:'元の状態へ', label:'元の位置へ → 前の状態に復する',
      gloss:'崩れる前の姿に戻す',
      examples:[
        {en:'get back to normal', ja:'平常に戻る', note:''},
        {en:'Things are back to how they were.', ja:'元どおりになった', note:''}]},
    { id:'bak-reply', chip:'返す', label:'元の位置へ → 相手に返却する',
      gloss:'来たものを送り返す',
      examples:[
        {en:'Give it back.', ja:'返して', note:''},
        {en:"I'll call you back.", ja:'折り返し電話する', note:''}]},
    { id:'bak-behind', chip:'後ろへ', label:'元の位置へ → 背中の方向',
      gloss:'前ではなく後ろ側',
      examples:[
        {en:'Step back, please.', ja:'下がってください', note:''},
        {en:'sit back and relax', ja:'深く座ってくつろぐ', note:''}]},
    { id:'bak-hold', chip:'抑える', label:'後ろへ → 前に出さない',
      gloss:'出ようとするものを引き留める',
      examples:[
        {en:'He held back his tears.', ja:'彼は涙をこらえた', note:'前に出させない'},
        {en:'Don’t hold back.', ja:'遠慮しないで', note:''}]}],
  trivia:[
    {title:'back はもともと体の「背中」',
     body:'背中が向いている方向＝後ろ。そこから「後ろへ」「元へ」に広がった。\n'+
          'back の名詞（背中・背面）と副詞（戻って）は、実は同じ1語。\n'+
          'the back of the room（部屋の奥）も同じ感覚。'},
    {title:'call back と call off はまったく別物',
     body:'call back ＝ 元の相手へ返す → かけ直す\n'+
          'call off ＝ 予定から切り離す → 中止する\n'+
          '同じ call でも、back（元へ）と off（分離）で行き先が正反対になる。'}]
},

/* -------------------------------------------------------- away */
{
  id:'away', type:'particle', headword:'away', core:'離れていく', diagram:'pAway',
  coreNote:'away は今いる場所からどんどん離れること。'+
           '離れ続ければやがて見えなくなるので、「消える」「亡くなる」まで届く。',
  senses:[
    { id:'awa-leave', chip:'離れる', label:'離れていく → その場を去る',
      gloss:'ここから遠ざかる',
      examples:[
        {en:'Go away!', ja:'あっち行って', note:''},
        {en:'He ran away.', ja:'彼は逃げた', note:''}]},
    { id:'awa-absent', chip:'不在', label:'離れていく → 離れた場所にいる',
      gloss:'ここにはいない',
      examples:[
        {en:"She's away this week.", ja:'彼女は今週不在です', note:''},
        {en:'far away', ja:'遠く離れて', note:''}]},
    { id:'awa-store', chip:'しまう', label:'離れていく → 見えない場所へ移す',
      gloss:'手元から離して片づける',
      examples:[
        {en:'Put your toys away.', ja:'おもちゃを片づけて', note:''},
        {en:'throw it away', ja:'捨てる', note:'手元から離して投げる'}]},
    { id:'awa-vanish', chip:'消える', label:'離れていく → やがて無くなる',
      gloss:'遠ざかりきって見えなくなる',
      examples:[
        {en:'The sound faded away.', ja:'音が消えていった', note:''},
        {en:'He passed away last year.', ja:'彼は去年亡くなった', note:'行ってしまった'}]}],
  trivia:[
    {title:'pass away が「亡くなる」になる理由',
     body:'そばを通り過ぎて、そのまま離れて行ってしまう。\n'+
          'die を直接言わずに済ませる、やわらかい言い方。\n'+
          '日本語の「逝く」「旅立つ」と発想がよく似ている。'},
    {title:'right away はなぜ「すぐに」なのか',
     body:'right は「ちょうど」を強める語。\n'+
          '「間を置かずにこの場から離れて動き出す」＝ すぐに。\n'+
          'I’ll do it right away.（今すぐやります）'}]
},

/* ----------------------------------------------------- against */
{
  id:'against', type:'particle', headword:'against', core:'逆らって接触', diagram:'pAgainst',
  coreNote:'against は向かい合ってぶつかること。押し当てれば「もたれる」、'+
           '流れに逆らえば「反対する」。for の正反対にあたる。',
  senses:[
    { id:'aga-lean', chip:'押し当てる', label:'逆らって接触 → 押しつける',
      gloss:'力をかけながら触れている',
      examples:[
        {en:'lean against the wall', ja:'壁にもたれる', note:'壁を押しながら接触'},
        {en:'The rain beat against the window.', ja:'雨が窓に打ちつけた', note:''}]},
    { id:'aga-oppose', chip:'逆らう', label:'逆らって接触 → 流れに逆らう',
      gloss:'進む向きと正面からぶつかる',
      examples:[
        {en:'walk against the wind', ja:'風に逆らって歩く', note:''},
        {en:'fight against injustice', ja:'不正と戦う', note:''}]},
    { id:'aga-no', chip:'反対', label:'逆らって接触 → 賛成しない',
      gloss:'その側を向いていない',
      examples:[
        {en:'Are you for or against it?', ja:'賛成? 反対?', note:'for の正反対'},
        {en:'I voted against the plan.', ja:'計画に反対票を投じた', note:''}]},
    { id:'aga-guard', chip:'備える', label:'逆らって接触 → 来るものを受け止める',
      gloss:'ぶつかってくるものに備える',
      examples:[
        {en:'protect yourself against the cold', ja:'寒さから身を守る', note:''},
        {en:'insurance against fire', ja:'火災保険', note:''}]}],
  trivia:[
    {title:'for と against はきれいな対になっている',
     body:'for ＝ そちらを向いている（賛成）\n'+
          'against ＝ 正面からぶつかっている（反対）\n'+
          'Are you for or against it? の一文に、両方のコアが並んでいる。'},
    {title:'lean against は「もたれる」なのに逆らっている?',
     body:'体重を壁にかけると、壁は押し返してくる。\n'+
          'その押し合いが against。力がぶつかっていれば、\n'+
          '仲が悪くなくても against になる。'}]
},

/* ----------------------------------------------------- between */
{
  id:'between', type:'particle', headword:'between', core:'2つの間', diagram:'pBetween',
  coreNote:'between の -tween は two と同語源。'+
           '2つのものに挟まれた空間を指す。3つ以上でも、一つひとつを意識していれば between が使える。',
  senses:[
    { id:'btw-space', chip:'間に', label:'2つの間 → 挟まれた場所',
      gloss:'両側にそれぞれ1つずつある',
      examples:[
        {en:'between the bank and the post office', ja:'銀行と郵便局の間に', note:''},
        {en:'Sit between us.', ja:'私たちの間に座って', note:''}]},
    { id:'btw-time', chip:'時間の間', label:'2つの間 → 2つの時点にはさまれて',
      gloss:'その区間のどこか',
      examples:[
        {en:'between two and three', ja:'2時から3時の間に', note:''},
        {en:'between meals', ja:'食事と食事の間に', note:''}]},
    { id:'btw-relation', chip:'関係', label:'2つの間 → 二者の関わり',
      gloss:'両者をつなぐもの',
      examples:[
        {en:'the difference between them', ja:'それらの違い', note:''},
        {en:'Between you and me, …', ja:'ここだけの話だけど', note:'2人の間にとどめる'}]}],
  trivia:[
    {title:'between の -tween は two と同じ語源',
     body:'be + tween（twoの古い形）＝「2つのところに」。\n'+
          '語源を知ると、なぜ2つ限定の匂いがするのかが腑に落ちる。\n'+
          'twin（双子）や twice（2回）も同じ仲間。'},
    {title:'between と among の本当の使い分け',
     body:'among ＝ 3つ以上の「集まり」の中に、ぼんやり紛れている\n'+
          'between ＝ 一つひとつを個別に意識している\n'+
          'だから3か国でも、個々の国を意識するなら\n'+
          'a treaty between the three countries と言える。'}]
},

/* ------------------------------------------------------- under */
{
  id:'under', type:'particle', headword:'under', core:'真下', diagram:'pUnder',
  coreNote:'under は真下。何かに覆いかぶさられている位置。'+
           'だから「支配下」「作用の途中」「未満」まで広がる。over の正反対。',
  senses:[
    { id:'und-below', chip:'真下', label:'真下 → 何かの下にある',
      gloss:'上に覆うものがある',
      examples:[
        {en:'under the table', ja:'テーブルの下に', note:''},
        {en:'under the blanket', ja:'毛布の下に', note:''}]},
    { id:'und-control', chip:'支配下', label:'真下 → 力の下に置かれている',
      gloss:'上から押さえられている',
      examples:[
        {en:'under pressure', ja:'プレッシャーを受けて', note:''},
        {en:'The situation is under control.', ja:'状況は制御下にある', note:''},
        {en:'under the law', ja:'法のもとで', note:''}]},
    { id:'und-process', chip:'進行中', label:'真下 → その作用を受けている最中',
      gloss:'まだ手が加えられている途中',
      examples:[
        {en:'under construction', ja:'工事中', note:'建設という作用の下にある'},
        {en:'under discussion', ja:'議論中', note:''}]},
    { id:'und-less', chip:'未満', label:'真下 → その数より下',
      gloss:'基準線の下側',
      examples:[
        {en:'under 18', ja:'18歳未満', note:''},
        {en:'under 1,000 yen', ja:'1000円以下', note:''}]}],
  trivia:[
    {title:'over と under はきれいな対',
     body:'over ＝ 覆う・越える（over 100 people ＝ 100人超）\n'+
          'under ＝ 覆われる・下回る（under 18 ＝ 18歳未満）\n'+
          'overwork（働きすぎ）に対して underpaid（給料が安すぎる）。'},
    {title:'under と below の違い',
     body:'under ＝ 真下。覆われている感じ（under the table）\n'+
          'below ＝ ただ低い位置にある（below sea level）\n'+
          '上から何かがかぶさっているかどうかで選ぶ。'}]
},

/* -------------------------------------------------------- into */
{
  id:'into', type:'particle', headword:'into', core:'中へ入り込む', diagram:'pInto',
  coreNote:'into は in（内側）と to（到達）の合成。'+
           'in が「すでに中にある状態」なら、into は「外から中へ入っていく動き」。',
  senses:[
    { id:'int-enter', chip:'中へ', label:'入り込む → 外から内側へ',
      gloss:'境界を越えて入る動き',
      examples:[
        {en:'He went into the room.', ja:'彼は部屋に入った', note:'in なら「部屋にいる」'},
        {en:'get into the car', ja:'車に乗り込む', note:''}]},
    { id:'int-change', chip:'変わる', label:'入り込む → 別のものの中へ姿を変える',
      gloss:'その形の中に入ってしまう',
      examples:[
        {en:'Water turns into ice.', ja:'水は氷になる', note:''},
        {en:'translate it into English', ja:'英語に訳す', note:'英語という形の中へ'}]},
    { id:'int-crash', chip:'ぶつかる', label:'入り込む → 突っ込む',
      gloss:'勢いよく中へ入ってしまう',
      examples:[
        {en:'The car ran into a wall.', ja:'車が壁に突っ込んだ', note:''},
        {en:'I ran into an old friend.', ja:'旧友にばったり会った', note:'偶然ぶつかった'}]},
    { id:'int-keen', chip:'ハマる', label:'入り込む → 深く入り込んでいる',
      gloss:'その世界の中にどっぷり',
      examples:[
        {en:"I'm really into jazz.", ja:'ジャズにハマっている', note:''},
        {en:'She’s into running.', ja:'彼女はランニングに夢中だ', note:''}]}],
  trivia:[
    {title:'in と into の違いは「状態」と「動き」',
     body:'He is in the room. ＝ 部屋にいる（状態）\n'+
          'He went into the room. ＝ 部屋に入った（動き）\n'+
          'into は in ＋ to。to の「到達する矢印」が動きを足している。'},
    {title:'run into が「ばったり会う」になる理由',
     body:'もとは「突っ込む」。走っていて相手にぶつかる絵。\n'+
          '予定になかったのにぶつかってしまった＝偶然出会った。\n'+
          'bump into（ぶつかる → 出くわす）もまったく同じ発想。'}]
}


];
