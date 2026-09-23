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

];
