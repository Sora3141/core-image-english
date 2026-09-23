/* ============================================================
   意味ごとの例文と、単語の豆知識
   1つの訳に複数の意味が入っている語は、意味の数だけ例文を出す。
   [意味, 例文, 訳] の並び。

   対象にしたのは「本当に別の意味」を持つ語だけ。
   「すでに・もう」のような言い換えにすぎないものは、
   例文を足しても水増しになるので入れていない。
   ============================================================ */
const VOCAB_SENSES = {
/* ---- イメージ図を2枚にした語（図の左右と例文をそろえる） ---- */
arm: [['腕', 'He broke his arm playing soccer.', 'サッカーで腕を折った。'],
  ['武器', 'The country agreed to reduce its arms.', 'その国は武器を減らすことに合意した。']],
floor: [['床', 'The kids were sitting on the floor.', '子どもたちは床に座っていた。'],
  ['階', 'Her office is on the fifth floor.', '彼女の事務所は5階にある。']],
field: [['野原', 'Cows were grazing in the field.', '牛が野原で草を食べていた。'],
  ['分野', 'She is a leader in her field.', '彼女はその分野の第一人者だ。']],
space: [['空いた場所', 'Is there space for one more chair?', 'もう1脚椅子を置く場所ある?'],
  ['宇宙', 'He dreamed of traveling in space.', '彼は宇宙を旅することを夢見ていた。']],
ground: [['地面', 'The ball rolled along the ground.', 'ボールが地面を転がっていった。'],
  ['根拠', 'You have no grounds for complaint.', '文句を言う根拠がない。']],
park: [['公園', 'We walked through the park at sunset.', '夕暮れに公園を歩いた。'],
  ['駐車する', 'You can park behind the building.', '建物の裏に駐車できます。']],
store: [['店', 'The store closes at nine on Sundays.', 'その店は日曜は9時に閉まる。'],
  ['蓄える', 'Squirrels store nuts for the winter.', 'リスは冬に備えて木の実を蓄える。']],
lose: [['失う', 'I lost my keys somewhere on the train.', '電車のどこかで鍵をなくした。'],
  ['負ける', 'We lost the final by one point.', '決勝を1点差で落とした。']],
full: [['いっぱいの', 'The bus was full, so we waited.', 'バスが満員だったので待った。'],
  ['完全な', 'He gave me his full support.', '彼は全面的に支えてくれた。']],
open: [['開ける', 'Could you open the window a little?', '窓を少し開けてくれる?'],
  ['開いている', 'The shop is open until midnight.', 'その店は夜中まで開いている。']],
clean: [['きれいな', 'Put on a clean shirt before you go.', '行く前にきれいなシャツを着なさい。'],
  ['掃除する', 'I clean the kitchen every Sunday.', '毎週日曜に台所を掃除する。']],
poor: [['貧しい', 'He grew up in a poor village.', '彼は貧しい村で育った。'],
  ['下手な', 'I have a poor sense of direction.', '方向感覚がまるでない。']],
dark: [['暗い', 'It gets dark early in December.', '12月は暗くなるのが早い。'],
  ['暗闇', 'The cat can see in the dark.', '猫は暗闇でも見える。']],
strong: [['強い', 'A strong wind blew the door shut.', '強い風でドアが閉まった。'],
  ['丈夫な', 'This rope is strong enough to hold us.', 'このロープは我々を支えるだけ丈夫だ。']],


/* ---------- 意味が3つ以上ある語 ---------- */
course: [['講座', 'I took a cooking course last year.', '去年、料理の講座を受けた。'],
  ['進路', 'The ship changed course to avoid the storm.', '船は嵐を避けて進路を変えた。'],
  ['もちろん', 'Of course you can stay the night.', 'もちろん泊まっていっていいよ。']],
set: [['置く', 'She set the plate on the table.', '彼女は皿をテーブルに置いた。'],
  ['一式', 'I bought a new set of tools.', '工具を一式買った。'],
  ['設定する', 'Did you set your alarm for six?', '目覚ましを6時にセットした?']],
turn: [['回る', 'Turn the key to the right.', '鍵を右に回して。'],
  ['曲がる', 'Turn left at the next corner.', '次の角を左に曲がって。'],
  ['順番', "It's your turn to choose.", '選ぶのは君の番だよ。']],
state: [['州', 'She grew up in a small state.', '彼女は小さな州で育った。'],
  ['状態', 'The car is in good state.', 'その車は良い状態だ。'],
  ['述べる', 'Please state your name clearly.', '名前をはっきり述べてください。']],
order: [['注文する', "I'd like to order the fish.", '魚を注文したいのですが。'],
  ['順序', 'Put the cards in the right order.', 'カードを正しい順序に並べて。'],
  ['命令', 'The captain gave the order to leave.', '船長が出発の命令を出した。']],
cost: [['費用', 'The cost of living keeps rising.', '生活費が上がり続けている。'],
  ['かかる', 'How much does this cost?', 'これはいくらかかりますか。'],
  ['犠牲', 'He won, but at a heavy cost.', '彼は勝ったが、大きな犠牲を払った。']],
form: [['形', 'The clouds took the form of a horse.', '雲が馬の形になった。'],
  ['用紙', 'Please fill out this form.', 'この用紙に記入してください。'],
  ['形成する', 'Water formed a pool on the floor.', '床に水たまりができた。']],
spend: [['お金を使う', 'I spent 3,000 yen on lunch.', '昼食に3000円使った。'],
  ['時間を使う', 'She spent two hours on the report.', '彼女は報告書に2時間かけた。'],
  ['過ごす', 'We spent the summer by the sea.', '海辺で夏を過ごした。']],
head: [['頭', 'I hit my head on the door.', 'ドアに頭をぶつけた。'],
  ['長', "She's the head of the department.", '彼女はその部署の長だ。'],
  ['向かう', "We're heading for the station.", '駅へ向かっているところだ。']],
learn: [['学ぶ', "I'm learning Spanish at school.", '学校でスペイン語を学んでいる。'],
  ['習得する', 'It takes years to learn the guitar.', 'ギターの習得には何年もかかる。'],
  ['知る', 'I learned that he had moved away.', '彼が引っ越したと知った。']],
level: [['水準', 'The water level is rising fast.', '水位が急に上がっている。'],
  ['レベル', 'She reached an advanced level.', '彼女は上級レベルに達した。'],
  ['平らな', 'Make sure the shelf is level.', '棚が水平か確かめて。']],
member: [['会員', "I'm a member of the gym.", 'そのジムの会員です。'],
  ['一員', 'Every member of the team helped.', 'チームの全員が手伝った。'],
  ['議員', 'She became a member of parliament.', '彼女は国会議員になった。']],
support: [['支援', 'Thank you for your support.', '支援をありがとう。'],
  ['支える', 'These pillars support the roof.', 'この柱が屋根を支えている。'],
  ['支持する', 'I support your decision.', '君の決断を支持するよ。']],
line: [['線', 'Draw a straight line here.', 'ここに直線を引いて。'],
  ['列', 'There was a long line at the door.', 'ドアの前に長い列ができていた。'],
  ['路線', 'Take the Ginza line to Ueno.', '銀座線で上野まで行って。']],
present: [['現在の', 'The present system works well.', '現在の仕組みはうまく機能している。'],
  ['贈り物', 'This is a present for you.', 'これは君への贈り物だよ。'],
  ['出席している', 'All the students were present.', '生徒は全員出席していた。']],
term: [['期間', 'The contract runs for a five-year term.', '契約期間は5年です。'],
  ['用語', "That's a technical term.", 'それは専門用語です。'],
  ['条件', 'We agreed on the terms of the deal.', '取引の条件で合意した。']],
process: [['過程', 'Learning is a slow process.', '学習はゆっくりした過程だ。'],
  ['処理する', 'It takes a day to process the order.', '注文の処理に1日かかります。'],
  ['手続き', "What's the process for applying?", '申し込みの手続きはどうなっていますか。']],
view: [['眺め', 'The room has a great view.', 'その部屋は眺めがいい。'],
  ['見解', 'In my view, we should wait.', '私の見解では、待つべきだ。'],
  ['見る', 'You can view the results online.', '結果はネットで見られます。']],
hard: [['難しい', 'This question is too hard.', 'この問題は難しすぎる。'],
  ['硬い', 'The bread has gone hard.', 'パンが硬くなってしまった。'],
  ['熱心に', 'She works hard every day.', '彼女は毎日一生懸命働く。']],
party: [['パーティー', "We're having a party on Friday.", '金曜にパーティーをやるよ。'],
  ['政党', 'Which party did you vote for?', 'どの政党に投票した?'],
  ['一行', 'A party of ten arrived at the hotel.', '10人の一行がホテルに着いた。']],
control: [['支配', 'The situation is under control.', '状況は制御下にある。'],
  ['操作する', 'You can control the lights from here.', 'ここから照明を操作できます。'],
  ['抑える', 'He couldn’t control his anger.', '彼は怒りを抑えられなかった。']],
concern: [['関心', 'Her main concern is safety.', '彼女の一番の関心は安全だ。'],
  ['懸念', 'There is growing concern about the plan.', 'その計画への懸念が強まっている。'],
  ['関係する', 'This matter concerns us all.', 'この件は私たち全員に関係する。']],
story: [['物語', 'She told the children a story.', '彼女は子どもたちに物語を聞かせた。'],
  ['記事', 'The story was on the front page.', 'その記事は一面に載っていた。'],
  ['階', 'They live on the third story.', '彼らは3階に住んでいる。']],
stand: [['立つ', 'Please stand up.', '立ってください。'],
  ['我慢する', "I can't stand this noise.", 'この騒音には耐えられない。'],
  ['立場', "What's your stand on the issue?", 'その問題についての立場は?']],
rate: [['割合', 'The success rate is about 70%.', '成功率はおよそ70%だ。'],
  ['速度', 'He was walking at a fast rate.', '彼は速い速度で歩いていた。'],
  ['評価する', 'How would you rate the service?', 'サービスをどう評価しますか。']],
care: [['世話', 'She takes care of her grandmother.', '彼女は祖母の世話をしている。'],
  ['注意', 'Handle it with care.', '注意して扱って。'],
  ['気にする', "I don't care what they say.", '何を言われても気にしない。']],
effect: [['効果', 'The medicine had no effect.', 'その薬は効果がなかった。'],
  ['影響', 'The rain had a big effect on sales.', '雨は売上に大きく影響した。'],
  ['発効する', 'The new rule takes effect on Monday.', '新しい規則は月曜に発効する。']],
fall: [['落ちる', 'Leaves fall in autumn.', '秋には葉が落ちる。'],
  ['秋', 'We met in the fall of 2020.', '2020年の秋に出会った。'],
  ['下がる', 'Prices fell sharply last month.', '先月、価格が急落した。']],
deal: [['取引', 'We closed the deal yesterday.', '昨日、取引をまとめた。'],
  ['扱う', 'This chapter deals with grammar.', 'この章は文法を扱っている。'],
  ['たくさん', 'It took a great deal of time.', 'とても時間がかかった。']],
watch: [['見る', 'We watched the game on TV.', 'テレビで試合を見た。'],
  ['見守る', 'Could you watch my bag?', 'かばんを見ていてくれる?'],
  ['腕時計', 'My watch stopped this morning.', '今朝、腕時計が止まった。']],
base: [['基礎', 'The theory has no solid base.', 'その理論には確かな基礎がない。'],
  ['基地', 'They returned to the base at dawn.', '彼らは夜明けに基地へ戻った。'],
  ['基づかせる', 'The film is based on a true story.', 'その映画は実話に基づいている。']],
past: [['過去', "Let's not talk about the past.", '過去の話はやめよう。'],
  ['過ぎた', 'He has been busy for the past week.', '彼はこの1週間ずっと忙しい。'],
  ['〜を過ぎて', 'Walk past the bank and turn right.', '銀行を過ぎて右に曲がって。']],
power: [['力', 'She has the power to change things.', '彼女には物事を変える力がある。'],
  ['権力', 'The party came to power in 2019.', 'その党は2019年に政権を取った。'],
  ['電力', 'The power went out last night.', '昨夜、停電した。']],
test: [['試験', 'I have a math test tomorrow.', '明日、数学の試験がある。'],
  ['検査', 'The doctor ordered a blood test.', '医者が血液検査を指示した。'],
  ['試す', 'Let me test this before we buy it.', '買う前に試させて。']],
grow: [['成長する', 'Children grow so fast.', '子どもはあっという間に成長する。'],
  ['育てる', 'We grow tomatoes in the garden.', '庭でトマトを育てている。'],
  ['〜になる', 'It grew dark before we got home.', '家に着く前に暗くなった。']],
return: [['戻る', 'She returned home late.', '彼女は遅く帰宅した。'],
  ['返す', 'Please return the book by Friday.', '金曜までに本を返してください。'],
  ['返品', 'We accept returns within 30 days.', '30日以内なら返品を受け付けます。']],
matter: [['問題', "What's the matter?", 'どうしたの?'],
  ['事柄', "It's a private matter.", 'それは個人的な事柄だ。'],
  ['重要である', 'Your opinion matters to me.', '君の意見は私には大事だ。']],
mind: [['心', 'She has a sharp mind.', '彼女は頭が切れる。'],
  ['気にする', 'Do you mind if I sit here?', 'ここに座ってもいいですか。'],
  ['気をつける', 'Mind your step.', '足元に気をつけて。']],
value: [['価値', 'This ring has great value.', 'この指輪には大きな価値がある。'],
  ['価値観', 'We share the same values.', '私たちは同じ価値観を持っている。'],
  ['大切にする', 'I value your friendship.', '君との友情を大切に思っている。']],
office: [['事務所', 'Her office is on the fifth floor.', '彼女の事務所は5階にある。'],
  ['職', 'He held office for ten years.', '彼は10年間その職にあった。'],
  ['局', 'I need to go to the post office.', '郵便局へ行かないと。']],
record: [['記録', 'She broke the world record.', '彼女は世界記録を破った。'],
  ['録音する', 'I recorded the meeting.', '会議を録音した。'],
  ['レコード', 'He collects old records.', '彼は古いレコードを集めている。']],
force: [['力', 'The force of the wind broke the window.', '風の力で窓が割れた。'],
  ['強制する', 'Nobody forced me to come.', '誰にも来いと強制されていない。'],
  ['軍', 'The air force arrived first.', '空軍が最初に到着した。']],
stop: [['止まる', 'The train stopped suddenly.', '電車が急に止まった。'],
  ['やめる', 'He stopped smoking last year.', '彼は去年タバコをやめた。'],
  ['停留所', 'Get off at the next stop.', '次の停留所で降りて。']],
light: [['光', 'The light came through the window.', '光が窓から差し込んだ。'],
  ['明かり', 'Please turn off the light.', '明かりを消してください。'],
  ['軽い', 'This bag is surprisingly light.', 'このかばんは驚くほど軽い。']],
share: [['分け合う', "Let's share this pizza.", 'このピザを分けよう。'],
  ['共有する', 'She shared the file with me.', '彼女はファイルを共有してくれた。'],
  ['株', 'He bought shares in the company.', '彼はその会社の株を買った。']],
figure: [['数字', 'The sales figures look good.', '売上の数字は良さそうだ。'],
  ['図', 'See figure 3 on the next page.', '次ページの図3を見て。'],
  ['人物', 'She is a well-known figure.', '彼女は有名な人物だ。'],
  ['考える', "I can't figure out the answer.", '答えが分からない。']],
subject: [['主題', 'Let’s change the subject.', '話題を変えよう。'],
  ['科目', 'Math is my favorite subject.', '数学が一番好きな科目だ。'],
  ['対象', 'Prices are subject to change.', '価格は変更の対象となります。']],
class: [['授業', 'I have a class at ten.', '10時に授業がある。'],
  ['クラス', 'Our class has thirty students.', '私たちのクラスは30人だ。'],
  ['等級', 'She flew business class.', '彼女はビジネスクラスで飛んだ。']],
development: [['発達', 'The development of language takes years.', '言語の発達には何年もかかる。'],
  ['開発', 'The app is still in development.', 'そのアプリはまだ開発中だ。'],
  ['進展', 'Are there any new developments?', '何か新しい進展はありましたか。']],
break: [['壊す', 'Be careful not to break the glass.', 'グラスを割らないよう気をつけて。'],
  ['休憩', "Let's take a short break.", '少し休憩しよう。'],
  ['破る', 'He broke his promise again.', '彼はまた約束を破った。']],
clear: [['明らかな', 'It is clear that he lied.', '彼が嘘をついたのは明らかだ。'],
  ['澄んだ', 'The water here is very clear.', 'ここの水はとても澄んでいる。'],
  ['片づける', 'Please clear the table.', 'テーブルを片づけてください。']],
future: [['未来', 'No one knows the future.', '未来は誰にも分からない。'],
  ['将来', 'She wants to be a doctor in the future.', '彼女は将来医者になりたい。'],
  ['今後の', 'We will discuss it at a future meeting.', '今後の会議で話し合います。']],
top: [['頂上', 'We reached the top at noon.', '正午に頂上に着いた。'],
  ['一番上', 'The book is on the top shelf.', '本は一番上の棚にある。'],
  ['最高の', 'She is a top student.', '彼女は最優秀の生徒だ。']],
period: [['期間', 'It rained for a long period.', '長い期間、雨が降った。'],
  ['時代', 'This building is from the Edo period.', 'この建物は江戸時代のものだ。'],
  ['ピリオド', 'Put a period at the end.', '最後にピリオドを打って。']],
note: [['メモ', 'I left a note on your desk.', '机にメモを置いておいた。'],
  ['注意する', 'Please note the change of time.', '時間の変更にご注意ください。'],
  ['音符', 'She played the wrong note.', '彼女は違う音を弾いた。']],
drive: [['運転する', 'I drive to work every day.', '毎日、車で通勤している。'],
  ['駆り立てる', 'Curiosity drove him to try.', '好奇心が彼を試させた。'],
  ['ドライブ', "Let's go for a drive.", 'ドライブに行こう。']],
type: [['種類', 'What type of music do you like?', 'どんな種類の音楽が好き?'],
  ['入力する', 'Type your name here.', 'ここに名前を入力して。'],
  ['典型', "He's not the type to give up.", '彼はあきらめるタイプじゃない。']],
sound: [['音', 'I heard a strange sound.', '変な音が聞こえた。'],
  ['聞こえる', 'That sounds like a good idea.', 'それはいい考えに聞こえる。'],
  ['健全な', 'The building is structurally sound.', 'その建物は構造的に健全だ。']],
body: [['体', 'Exercise is good for the body.', '運動は体にいい。'],
  ['団体', 'A governing body made the rules.', '統括団体が規則を作った。'],
  ['本文', 'The body of the email was short.', 'メールの本文は短かった。']],
general: [['一般の', 'The show is open to the general public.', 'その公演は一般に公開されている。'],
  ['全体的な', 'My general impression was good.', '全体的な印象は良かった。'],
  ['将軍', 'The general gave the order.', '将軍が命令を出した。']],
sense: [['感覚', 'She has a good sense of direction.', '彼女は方向感覚がいい。'],
  ['意味', 'That doesn’t make sense to me.', 'それは私には意味が通らない。'],
  ['感じる', 'I sensed that something was wrong.', '何かおかしいと感じた。']],
pass: [['通る', 'We passed your house on the way.', '途中で君の家の前を通った。'],
  ['渡す', 'Please pass me the salt.', '塩を取ってください。'],
  ['合格する', 'She passed the exam easily.', '彼女は楽々と試験に合格した。']],
research: [['研究', 'He does research on sleep.', '彼は睡眠の研究をしている。'],
  ['調査', 'We need more research before deciding.', '決める前にもっと調査が必要だ。'],
  ['調べる', 'I researched the topic online.', 'そのテーマをネットで調べた。']],
cover: [['覆う', 'Snow covered the whole town.', '雪が町全体を覆った。'],
  ['扱う', 'This book covers basic grammar.', 'この本は基礎文法を扱っている。'],
  ['カバー', 'The book has a red cover.', 'その本は赤い表紙だ。']],
paper: [['紙', 'I need a sheet of paper.', '紙が1枚必要だ。'],
  ['論文', 'She published a paper on memory.', '彼女は記憶についての論文を発表した。'],
  ['新聞', 'I read it in this morning’s paper.', '今朝の新聞で読んだ。']],
position: [['位置', 'Move the chair to a better position.', '椅子をもっといい位置に移して。'],
  ['立場', 'I understand your position.', '君の立場は分かる。'],
  ['職', 'She applied for a teaching position.', '彼女は教職に応募した。']],
account: [['口座', 'I opened a bank account.', '銀行口座を開いた。'],
  ['説明', 'He gave a full account of the accident.', '彼は事故の経緯を詳しく説明した。'],
  ['考慮に入れる', 'We must take the cost into account.', '費用を考慮に入れないといけない。']],
major: [['主要な', 'This is a major problem.', 'これは重大な問題だ。'],
  ['専攻', 'Her major is history.', '彼女の専攻は歴史だ。'],
  ['大部分の', 'The major part of the work is done.', '仕事の大部分は終わった。']],
design: [['設計', 'The design of the bridge is clever.', 'その橋の設計は巧みだ。'],
  ['デザイン', 'I like the design of this cup.', 'このカップのデザインが好きだ。'],
  ['設計する', 'She designed the whole system.', '彼女がシステム全体を設計した。']],
event: [['出来事', 'It was the biggest event of the year.', '今年最大の出来事だった。'],
  ['行事', 'The school event starts at nine.', '学校行事は9時に始まる。'],
  ['種目', 'He won three events at the meet.', '彼は大会で3種目優勝した。']],
forward: [['前へ', 'Please step forward.', '前に出てください。'],
  ['転送する', 'Could you forward me that email?', 'そのメールを転送してくれる?'],
  ['楽しみにする', "I'm looking forward to it.", '楽しみにしています。']],
bear: [['耐える', "I can't bear the heat.", 'この暑さには耐えられない。'],
  ['産む', 'She bore three children.', '彼女は3人の子を産んだ。'],
  ['熊', 'We saw a bear in the woods.', '森で熊を見た。']],
cut: [['切る', 'Cut the paper in half.', '紙を半分に切って。'],
  ['削減する', 'The company cut costs last year.', 'その会社は去年、経費を削減した。'],
  ['切り傷', 'I have a small cut on my finger.', '指に小さな切り傷がある。']],
rise: [['上がる', 'Prices rose again this month.', '今月また価格が上がった。'],
  ['昇る', 'The sun rises at six.', '日は6時に昇る。'],
  ['上昇', 'There was a sharp rise in sales.', '売上に急な上昇があった。']],
action: [['行動', 'Now is the time for action.', '今こそ行動のときだ。'],
  ['作用', 'The action of the drug is slow.', 'その薬の作用はゆるやかだ。'],
  ['措置', 'We must take action immediately.', 'すぐに措置を取らねばならない。']],
step: [['歩み', 'He took a step forward.', '彼は一歩前に出た。'],
  ['段階', "What's the next step?", '次の段階は何ですか。'],
  ['踏む', 'Careful — don’t step on the cat.', '気をつけて、猫を踏まないで。']],
draw: [['描く', 'She drew a picture of her dog.', '彼女は犬の絵を描いた。'],
  ['引く', 'He drew the curtains.', '彼はカーテンを引いた。'],
  ['引き寄せる', 'The show drew a large crowd.', 'その公演は大勢の客を集めた。']],
practice: [['練習', 'Piano practice takes an hour a day.', 'ピアノの練習は1日1時間だ。'],
  ['練習する', 'I practice every morning.', '毎朝練習している。'],
  ['慣習', "It's common practice here.", 'ここではよくある慣習だ。']],
model: [['模型', 'He built a model of the ship.', '彼は船の模型を作った。'],
  ['型', 'This is last year’s model.', 'これは去年の型です。'],
  ['手本', 'She is a model student.', '彼女は模範的な生徒だ。']],
raise: [['上げる', 'Raise your hand if you agree.', '賛成なら手を上げて。'],
  ['育てる', 'They raised three children.', '彼らは3人の子を育てた。'],
  ['集める', 'We raised money for the school.', '学校のために資金を集めた。']],
outside: [['外側', 'The outside of the box is blue.', '箱の外側は青い。'],
  ['外で', "It's cold outside.", '外は寒い。'],
  ['〜の外に', 'She waited outside the door.', '彼女はドアの外で待っていた。']],
site: [['場所', 'This is the site of the old castle.', 'ここが古い城の跡地だ。'],
  ['現場', 'No entry to the building site.', '工事現場は立入禁止。'],
  ['サイト', 'I found it on their website.', '彼らのサイトで見つけた。']],
land: [['土地', 'They bought land near the river.', '彼らは川の近くの土地を買った。'],
  ['陸', 'After a week at sea, we saw land.', '1週間の航海のあと、陸が見えた。'],
  ['着陸する', 'The plane landed on time.', '飛行機は定刻に着陸した。']],
charge: [['料金', 'There is no charge for delivery.', '配送料はかかりません。'],
  ['請求する', 'They charged me 5,000 yen.', '5000円請求された。'],
  ['充電する', 'I need to charge my phone.', 'スマホを充電しないと。']],
sign: [['標識', 'The sign says “No Parking.”', '標識に「駐車禁止」とある。'],
  ['兆候', 'There are signs of improvement.', '改善の兆候が見える。'],
  ['署名する', 'Please sign here.', 'ここに署名してください。']],
claim: [['主張する', 'He claims he saw the whole thing.', '彼は一部始終を見たと主張している。'],
  ['請求する', 'You can claim the cost back.', '費用は請求して戻せます。'],
  ['主張', 'Her claim turned out to be true.', '彼女の主張は本当だった。']],
address: [['住所', "What's your address?", '住所はどちらですか。'],
  ['演説', 'The president gave an address.', '大統領が演説を行った。'],
  ['取り組む', 'We must address this issue now.', 'この問題に今取り組まねばならない。']],
performance: [['演技', 'Her performance was moving.', '彼女の演技は感動的だった。'],
  ['成績', 'His performance at school improved.', '彼の学校の成績が上がった。'],
  ['性能', 'The new model has better performance.', '新型は性能が上がっている。']],
save: [['救う', 'The doctor saved his life.', '医者が彼の命を救った。'],
  ['貯める', "I'm saving for a new bike.", '新しい自転車のために貯金している。'],
  ['保存する', 'Don’t forget to save the file.', 'ファイルの保存を忘れずに。']],
drop: [['落とす', 'I dropped my keys somewhere.', 'どこかで鍵を落とした。'],
  ['下がる', 'The temperature dropped overnight.', '一晩で気温が下がった。'],
  ['しずく', 'A drop of rain hit my face.', '雨のしずくが顔に当たった。']],
plant: [['植物', 'She waters the plants every day.', '彼女は毎日植物に水をやる。'],
  ['工場', 'He works at a car plant.', '彼は自動車工場で働いている。'],
  ['植える', 'We planted a tree in the yard.', '庭に木を植えた。']],
character: [['性格', 'She has a gentle character.', '彼女は穏やかな性格だ。'],
  ['登場人物', 'My favorite character dies early.', '一番好きな登場人物は早々に死ぬ。'],
  ['文字', 'Chinese characters are used in Japanese.', '日本語では漢字が使われる。']],
department: [['部門', 'She works in the sales department.', '彼女は営業部門で働いている。'],
  ['学部', 'He teaches in the history department.', '彼は歴史学部で教えている。'],
  ['売り場', 'The shoe department is on the third floor.', '靴売り場は3階です。']],
board: [['板', 'Write it on the board.', '板書してください。'],
  ['委員会', 'The board approved the plan.', '委員会は計画を承認した。'],
  ['搭乗する', 'We board the plane at gate 12.', '12番ゲートから搭乗します。']],
mark: [['印', 'Put a mark next to your answer.', '答えの横に印をつけて。'],
  ['跡', 'The cup left a mark on the table.', 'カップがテーブルに跡を残した。'],
  ['採点する', 'She marked all the tests last night.', '彼女は昨夜、全部の答案を採点した。']],
degree: [['程度', 'I agree to some degree.', 'ある程度は賛成だ。'],
  ['学位', 'She has a degree in biology.', '彼女は生物学の学位を持っている。'],
  ['度', "It's thirty degrees today.", '今日は30度だ。']],
treat: [['扱う', 'He treats everyone with respect.', '彼は誰にでも敬意をもって接する。'],
  ['治療する', 'The doctor treated my wound.', '医者が傷を治療してくれた。'],
  ['おごる', "Let me treat you to lunch.", '昼ごはんをおごらせて。']],
operation: [['操作', 'The operation of the machine is simple.', 'その機械の操作は簡単だ。'],
  ['手術', 'She had an operation last week.', '彼女は先週手術を受けた。'],
  ['稼働', 'The factory is back in operation.', '工場は稼働を再開した。']],
cold: [['寒い', "It's cold outside today.", '今日は外が寒い。'],
  ['冷たい', 'I want something cold to drink.', '何か冷たい飲み物がほしい。'],
  ['風邪', 'I caught a cold last week.', '先週、風邪をひいた。']],
argument: [['議論', 'We had a long argument about it.', 'それについて長く議論した。'],
  ['論拠', 'His argument was hard to refute.', '彼の論拠は反駁しにくかった。'],
  ['口論', 'They had an argument and left.', '彼らは口論して出ていった。']],
application: [['応用', 'This has many practical applications.', 'これには実用的な応用が多い。'],
  ['申し込み', 'Send your application by Friday.', '金曜までに申込書を送って。'],
  ['アプリ', 'I downloaded a new application.', '新しいアプリを入れた。']],
bill: [['請求書', 'Could we have the bill, please?', 'お会計をお願いします。'],
  ['法案', 'The bill passed last month.', 'その法案は先月可決された。'],
  ['紙幣', 'Do you have a thousand-yen bill?', '千円札ある?']],
officer: [['役人', 'A customs officer checked my bag.', '税関の役人がかばんを調べた。'],
  ['警官', 'The officer asked for my license.', '警官が免許証を求めた。'],
  ['役員', 'She became a chief officer at 35.', '彼女は35歳で役員になった。']],
operate: [['操作する', 'Do you know how to operate this?', 'これの操作の仕方が分かる?'],
  ['営業する', 'The shop operates seven days a week.', 'その店は週7日営業している。'],
  ['手術する', 'They operated on him yesterday.', '昨日、彼は手術を受けた。']],
reflect: [['反映する', 'The price reflects the quality.', '価格は品質を反映している。'],
  ['映す', 'The lake reflected the mountains.', '湖が山を映していた。'],
  ['よく考える', 'Take time to reflect on it.', 'じっくり考えてみて。']],
property: [['財産', 'All his property went to his son.', '彼の財産はすべて息子のものになった。'],
  ['不動産', 'They own property in the city.', '彼らは市内に不動産を持っている。'],
  ['性質', 'Water has unusual properties.', '水は変わった性質を持っている。']],
post: [['郵便', 'The post arrives before noon.', '郵便は昼前に届く。'],
  ['投稿する', 'She posted the photo online.', '彼女は写真をネットに投稿した。'],
  ['職', 'He applied for a teaching post.', '彼は教職に応募した。']],
object: [['物体', 'A small object fell from the shelf.', '小さな物体が棚から落ちた。'],
  ['目的', 'The object of the game is simple.', 'そのゲームの目的は単純だ。'],
  ['反対する', 'Nobody objected to the plan.', '誰も計画に反対しなかった。']],
credit: [['信用', 'He bought the car on credit.', '彼は車をローンで買った。'],
  ['功績', 'She deserves credit for the idea.', 'その案は彼女の功績だ。'],
  ['単位', 'I need two more credits to graduate.', '卒業にあと2単位必要だ。']],
track: [['追跡する', 'You can track your package online.', '荷物はネットで追跡できます。'],
  ['線路', 'Don’t walk near the tracks.', '線路の近くを歩かないで。'],
  ['曲', 'The third track is my favorite.', '3曲目が一番好きだ。']],
/* ---------- 意味が2つで、しかも別物の語 ---------- */
see: [['見る', 'I saw him at the station.', '駅で彼を見かけた。'],
  ['わかる', 'I see what you mean.', '言いたいことは分かるよ。']],
way: [['方法', 'There must be a better way.', 'もっといい方法があるはずだ。'],
  ['道', 'Could you show me the way?', '道を教えてもらえますか。']],
right: [['正しい', 'You were right all along.', '君はずっと正しかった。'],
  ['右', 'Turn right at the corner.', '角を右に曲がって。']],
back: [['後ろへ', 'Please step back a little.', '少し後ろに下がってください。'],
  ['背中', 'My back hurts today.', '今日は背中が痛い。']],
last: [['最後の', 'This is the last one.', 'これが最後の1つです。'],
  ['続く', 'The meeting lasted two hours.', '会議は2時間続いた。']],
life: [['人生', 'She has had an interesting life.', '彼女は面白い人生を送ってきた。'],
  ['生命', 'Is there life on other planets?', '他の惑星に生命はあるのか。']],
change: [['変える', 'I changed my mind.', '気が変わった。'],
  ['おつり', 'Here is your change.', 'おつりです。']],
leave: [['去る', 'The train leaves at ten.', '電車は10時に出る。'],
  ['置いていく', 'I left my umbrella on the train.', '電車に傘を置き忘れた。']],
point: [['点', 'There is a small point of light.', '小さな光の点がある。'],
  ['要点', 'You missed the point.', '要点を外しているよ。']],
interest: [['興味', 'She has no interest in sports.', '彼女はスポーツに興味がない。'],
  ['利子', 'The loan has low interest.', 'そのローンは利子が低い。']],
country: [['国', 'Japan is a small country.', '日本は小さな国だ。'],
  ['田舎', 'They moved to the country.', '彼らは田舎へ引っ越した。']],
kind: [['種類', 'What kind of music do you like?', 'どんな種類の音楽が好き?'],
  ['親切な', 'That was very kind of you.', 'ご親切にありがとう。']],
study: [['勉強する', 'I study English every night.', '毎晩、英語を勉強している。'],
  ['研究', 'The study found no clear link.', 'その研究では明確な関連が見つからなかった。']],
run: [['走る', 'I run every morning.', '毎朝走っている。'],
  ['経営する', 'She runs a small café.', '彼女は小さなカフェを営んでいる。']],
hand: [['手', 'Wash your hands before eating.', '食べる前に手を洗って。'],
  ['手渡す', 'Could you hand me the salt?', '塩を取ってもらえる?']],
area: [['地域', 'This area is very quiet.', 'この地域はとても静かだ。'],
  ['分野', 'That is outside my area.', 'それは私の分野の外だ。']],
issue: [['問題', "That's a serious issue.", 'それは深刻な問題だ。'],
  ['発行する', 'The bank issued a new card.', '銀行が新しいカードを発行した。']],
hold: [['持つ', 'Hold this for a second.', 'ちょっとこれ持ってて。'],
  ['開催する', 'They held a meeting yesterday.', '昨日、会議を開いた。']],
second: [['2番目の', 'She came in second place.', '彼女は2位に入った。'],
  ['秒', 'Wait just a second.', 'ちょっとだけ待って。']],
lead: [['導く', 'She led the team to victory.', '彼女はチームを勝利に導いた。'],
  ['先頭', 'Our team is in the lead.', '私たちのチームが先頭だ。']],
face: [['顔', 'Her face lit up.', '彼女の顔が輝いた。'],
  ['直面する', 'We face a difficult choice.', '難しい選択に直面している。']],
room: [['部屋', 'My room is on the second floor.', '私の部屋は2階だ。'],
  ['余地', 'There is room for improvement.', '改善の余地がある。']],
side: [['側', 'Sit on the other side.', '反対側に座って。'],
  ['味方', 'Whose side are you on?', '君はどっちの味方なの?']],
age: [['年齢', "What's your age?", '年齢はおいくつですか。'],
  ['時代', 'We live in the digital age.', '私たちはデジタル時代に生きている。']],
train: [['列車', 'The train was ten minutes late.', '列車が10分遅れた。'],
  ['訓練する', 'She trains dogs for a living.', '彼女は犬の訓練を仕事にしている。']],
public: [['公共の', 'I take public transport.', '公共交通機関を使っている。'],
  ['大衆', 'The public wants an explanation.', '世間は説明を求めている。']],
sort: [['種類', 'What sort of person is he?', '彼はどんな人?'],
  ['分類する', 'Please sort these by date.', 'これを日付順に並べ替えて。']],
cause: [['原因', 'Nobody knows the cause.', '原因は誰にも分からない。'],
  ['引き起こす', 'The storm caused a lot of damage.', '嵐が大きな被害を引き起こした。']],
water: [['水', 'Can I have some water?', '水をもらえますか。'],
  ['水をやる', 'Don’t forget to water the plants.', '植物への水やりを忘れずに。']],
center: [['中心', 'The park is in the center of town.', '公園は町の中心にある。'],
  ['施設', 'We met at the community center.', '地域センターで会った。']],
bit: [['少し', 'I’m a bit tired today.', '今日は少し疲れている。'],
  ['かけら', 'There were bits of glass on the floor.', '床にガラスのかけらが落ちていた。']],
letter: [['手紙', 'I got a letter from my aunt.', 'おばから手紙が来た。'],
  ['文字', 'Write your name in capital letters.', '名前を大文字で書いて。']],
minute: [['分', 'The bus leaves in five minutes.', 'バスは5分後に出る。'],
  ['ちょっと', 'Wait a minute, please.', 'ちょっと待ってください。']],
either: [['どちらか', 'Either day works for me.', 'どちらの日でも大丈夫です。'],
  ['〜もない', "I don't like it either.", '私もそれは好きじゃない。']],
color: [['色', 'What color is your car?', '車は何色?'],
  ['色をつける', 'The children colored the picture.', '子どもたちが絵に色をつけた。']],
history: [['歴史', 'I studied Japanese history.', '日本史を学んだ。'],
  ['経歴', 'He has a history of heart trouble.', '彼には心臓病の既往がある。']],
eye: [['目', 'She has beautiful eyes.', '彼女はきれいな目をしている。'],
  ['見る目', 'He has an eye for detail.', '彼は細部を見る目がある。']],
game: [['ゲーム', 'Let’s play a card game.', 'カードゲームをしよう。'],
  ['試合', 'The game starts at seven.', '試合は7時に始まる。']],
free: [['自由な', 'Are you free this evening?', '今夜は空いてる?'],
  ['無料の', 'Delivery is free today.', '今日は配送が無料です。']],
sale: [['販売', 'The book goes on sale in May.', 'その本は5月に発売される。'],
  ['セール', 'I bought it on sale.', 'セールで買った。']],
further: [['さらに', 'We need further information.', 'さらに情報が必要だ。'],
  ['もっと遠く', 'The station is further than I thought.', '駅は思ったより遠い。']],
rule: [['規則', 'You have to follow the rules.', '規則には従わないといけない。'],
  ['支配する', 'The king ruled for forty years.', '王は40年間統治した。']],
short: [['短い', 'It was a short meeting.', '短い会議だった。'],
  ['不足した', 'We are short of time.', '時間が足りない。']],
law: [['法律', 'It’s against the law.', 'それは法律違反だ。'],
  ['法則', 'This follows the law of gravity.', 'これは重力の法則に従う。']],
film: [['映画', 'We watched a French film.', 'フランス映画を見た。'],
  ['薄い膜', 'A film of dust covered the shelf.', '棚に薄くほこりが積もっていた。']],
shop: [['店', 'The shop opens at nine.', '店は9時に開く。'],
  ['買い物する', 'I shop online most of the time.', 'たいていネットで買い物する。']],
table: [['テーブル', 'Put it on the table.', 'テーブルに置いて。'],
  ['表', 'See the table on page 12.', '12ページの表を見て。']],
certain: [['確かな', 'I’m certain he will come.', '彼はきっと来ると思う。'],
  ['ある種の', 'Certain people don’t like change.', '変化を好まない人もいる。']],
close: [['閉じる', 'Please close the window.', '窓を閉めてください。'],
  ['近い', 'The store is close to my house.', 'その店は家から近い。']],
live: [['住む', 'I live in Tokyo.', '東京に住んでいる。'],
  ['生の', 'We watched the live broadcast.', '生放送を見た。']],
play: [['遊ぶ', 'The children played in the park.', '子どもたちが公園で遊んだ。'],
  ['演奏する', 'She plays the piano well.', '彼女はピアノが上手だ。']],
while: [['〜する間', 'Read this while you wait.', '待っている間にこれを読んで。'],
  ['一方', 'He likes tea, while I prefer coffee.', '彼は紅茶、一方で私はコーヒー派だ。']],
since: [['〜以来', 'I have lived here since 2020.', '2020年からここに住んでいる。'],
  ['〜なので', 'Since it’s raining, let’s stay in.', '雨なので家にいよう。']],
own: [['自分自身の', 'I want my own room.', '自分の部屋がほしい。'],
  ['所有する', 'They own two cars.', '彼らは車を2台持っている。']],
off: [['離れて', 'Take off your shoes here.', 'ここで靴を脱いで。'],
  ['休みの', 'I’m off today.', '今日は休みです。']],
number: [['数', 'The number of students is rising.', '生徒の数が増えている。'],
  ['番号', "What's your phone number?", '電話番号は?']],
program: [['番組', 'I watched a cooking program.', '料理番組を見た。'],
  ['予定表', 'The program starts with a speech.', '予定は演説から始まる。']],
experience: [['経験', 'She has ten years of experience.', '彼女は10年の経験がある。'],
  ['経験する', 'I experienced an earthquake there.', 'そこで地震を経験した。']],
like: [['好む', 'I like this song.', 'この曲が好きだ。'],
  ['〜のような', 'He looks like his father.', '彼は父親に似ている。']],
so: [['だから', 'It was late, so we went home.', '遅かったので帰った。'],
  ['とても', 'That’s so kind of you.', 'とても親切にありがとう。']],
about: [['〜について', 'We talked about the plan.', '計画について話した。'],
  ['およそ', 'It costs about 2,000 yen.', 'およそ2000円かかる。']],
will: [['〜だろう', 'It will rain tomorrow.', '明日は雨だろう。'],
  ['意志', 'She has a strong will.', '彼女は意志が強い。']],
there: [['そこに', 'Put it over there.', 'それをそこに置いて。'],
  ['〜がある', 'There is a cat in the garden.', '庭に猫がいる。']],
well: [['上手に', 'She sings very well.', '彼女は歌がとても上手だ。'],
  ['さて', 'Well, let’s begin.', 'さて、始めましょう。']],
just: [['ちょうど', 'I just got home.', 'ちょうど今帰ったところだ。'],
  ['ただ〜だけ', 'It’s just a small mistake.', 'ほんの小さな間違いだよ。']],
could: [['〜できた', 'He could swim at five.', '彼は5歳で泳げた。'],
  ['〜していただけますか', 'Could you help me?', '手伝っていただけますか。']],
may: [['〜かもしれない', 'It may rain later.', '後で降るかもしれない。'],
  ['〜してよい', 'You may go now.', 'もう行っていいですよ。']],
still: [['まだ', 'Are you still here?', 'まだいたの?'],
  ['それでも', 'It’s expensive, but still worth it.', '高いが、それでも価値はある。']],
too: [['〜もまた', 'I want to go too.', '私も行きたい。'],
  ['あまりに', 'This coffee is too hot.', 'このコーヒーは熱すぎる。']],
most: [['ほとんどの', 'Most people agree.', 'ほとんどの人が賛成だ。'],
  ['最も', 'This is the most useful book.', 'これが一番役に立つ本だ。']],
any: [['どんな〜も', 'Come any time you like.', 'いつでも好きなときに来て。'],
  ['いくらか', 'Do you have any questions?', '何か質問はありますか。']],
once: [['一度', 'I met her once.', '彼女には一度会った。'],
  ['かつて', 'This was once a school.', 'ここはかつて学校だった。']],
ever: [['今までに', 'Have you ever been to Kyoto?', '京都に行ったことある?'],
  ['いつも', 'She is as kind as ever.', '彼女は相変わらず親切だ。']],
yet: [['まだ', 'I haven’t finished yet.', 'まだ終わっていない。'],
  ['けれども', 'It’s simple, yet powerful.', '単純だが、それでいて力強い。']],
rather: [['むしろ', "I'd rather stay home.", 'むしろ家にいたい。'],
  ['かなり', 'It was rather cold outside.', '外はかなり寒かった。']],
man: [['男', 'A man asked me for directions.', '男の人に道を聞かれた。'],
  ['人類', 'Man has always looked at the stars.', '人類は常に星を見上げてきた。']],
/* ---------- 豆知識が意味の同居を説明している語 ---------- */
patient: [['患者', 'The doctor saw twelve patients today.', '医者は今日12人の患者を診た。'],
  ['辛抱強い', 'Be patient — the food will be ready soon.', '我慢して、料理はもうすぐできるから。']],
bank: [['銀行', 'I need to go to the bank.', '銀行へ行かないと。'],
  ['土手', 'We sat on the bank of the river.', '川の土手に座った。']],
court: [['裁判所', 'The case goes to court next month.', 'その件は来月、裁判になる。'],
  ['コート', 'The tennis court is behind the school.', 'テニスコートは学校の裏にある。']],
stock: [['在庫', 'Sorry, that size is out of stock.', 'すみません、そのサイズは在庫切れです。'],
  ['株', 'He bought stock in the company.', '彼はその会社の株を買った。']],
focus: [['焦点', 'The photo is out of focus.', 'その写真はピントが合っていない。'],
  ['集中する', 'I need to focus on my work.', '仕事に集中しないと。']],
judge: [['裁判官', 'The judge listened carefully.', '裁判官は注意深く聞いていた。'],
  ['判断する', "Don't judge a book by its cover.", '見かけで判断してはいけない。']],
picture: [['絵', 'She drew a picture of her cat.', '彼女は猫の絵を描いた。'],
  ['写真', 'Let me take a picture of you.', '写真を撮らせて。']],
star: [['星', 'The stars were bright last night.', '昨夜は星が明るかった。'],
  ['スター', 'She became a movie star at twenty.', '彼女は20歳で映画スターになった。']],
manage: [['管理する', 'She manages a team of ten.', '彼女は10人のチームを管理している。'],
  ['なんとかやる', 'I managed to finish it in time.', 'なんとか間に合わせた。']],
develop: [['発達する', 'Children develop at different rates.', '子どもの発達には個人差がある。'],
  ['開発する', 'They developed a new app.', '彼らは新しいアプリを開発した。']],
travel: [['旅行する', 'I want to travel around Europe.', 'ヨーロッパを旅したい。'],
  ['伝わる', 'Sound travels faster in water.', '音は水中の方が速く伝わる。']],
smile: [['ほほえむ', 'She smiled at me from across the room.', '彼女は部屋の向こうからほほえんだ。'],
  ['笑顔', 'He has a warm smile.', '彼は温かい笑顔をしている。']],
fun: [['楽しみ', 'We had a lot of fun yesterday.', '昨日はとても楽しかった。'],
  ['楽しい', "It's a fun game to play.", 'それはやっていて楽しいゲームだ。']]
};

/* ============================================================
   単語の豆知識
   [見出し, 本文] の2つ組。答え合わせの「次へ」の下に出す。
   先へ進む操作は画面内に残したまま、読みたい人だけが下へ送れるようにするため。

   入れたのは、知ると意味のつながりが腑に落ちるものだけ。
   由来が俗説のもの（news が東西南北の頭文字、など）は入れていない。
   ============================================================ */
const VOCAB_TRIVIA = {
/* ---- 家族・時間・書くことの語源 ---- */
month: ['month と moon が同じ語である理由',
  '月（天体）が満ちて欠けるまでを一区切りとして数えたのが month。'+
  '古英語では mōnaþ と mōna で、ほとんど同じ語だった。'+
  '日本語も「月」の一語で天体と暦の両方を指す。同じ空を見て同じ単位を作った。'],
husband: ['husband の中に「家」が入っている',
  '古ノルド語の hús（家）+ bóndi（住む人）で「家の主」。'+
  'もとは「農家の主人」を指し、bond（結びつき）とは関係がない。'+
  '農業を意味する husbandry に、元の「家と土地を切り盛りする」意味が残っている。'],
wife: ['wife と woman がつながっている理由',
  '古英語の wīf は、結婚の有無と関係なくただ「女」を意味した。'+
  'それに mann（人）がついた wīfmann が縮んで woman になった。'+
  'つまり woman の中には wife が入っている。'+
  '「妻」に意味が狭まったのは後のことで、midwife（助産師）には古い「女」の意味が残る。'],
friend: ['friend と free が同じ語根である理由',
  'どちらも「愛する」を意味する古い語根から出ている。'+
  '古英語 frēond は動詞「愛する」の現在分詞、つまり「愛している人」。'+
  '同じ語根から、愛する身内＝隷属していない者として free が生まれた。'+
  '友であることと自由であることが、もとは地続きだった。'],
letter: ['「文字」と「手紙」が同じ語である理由',
  'ラテン語 littera は「文字」。その複数形 litterae が「文字を連ねたもの」、'+
  'つまり書簡を指すようになった。英語はこの両方をまとめて letter で受け取った。'+
  'literature（文学）や literal（文字どおりの）も同じ一族。'],
read: ['read はもともと「解き明かす」だった',
  '古英語 rǣdan は「助言する・言い当てる」。'+
  '書かれた記号は誰にでも読めるものではなく、解き明かす対象だった。'+
  '同じ語根から riddle（なぞなぞ）が出ている。'+
  'ドイツ語では今も raten が「推測する」の意味のまま残っている。'],
write: ['write はもともと「引っかく」だった',
  'ルーン文字は木や石に刻むものだったので、'+
  '古英語 wrītan は「削る・引っかく」を意味した。'+
  'ドイツ語の reißen（引き裂く）が同じ語。'+
  'インクとペンが来るずっと前の、道具の感触が語に残っている。'],
draw: ['draw の意味が全部「引く」である理由',
  '線を引くのが「描く」、人を引き寄せるのが「引きつける」、'+
  '刀を引き抜くのが draw a sword、勝負が引き分けになるのも a draw。'+
  '別々の意味に見えるものが、すべて「引く」の一語でつながっている。'+
  'drawer（引き出し）はそのままの意味。'],
season: ['season の語源は「種をまく時期」',
  'ラテン語 satio「種まき」から、古フランス語 seison を経て入った。'+
  '農作業の区切りがそのまま一年の区切りになった。'+
  '料理の season（味つけする）は別系統で、こちらは「熟させる」から来ている。'],

/* ---- イメージ図から言葉のつながりが見えるもの ---- */
arm: ['「腕」と「武器」がどちらも arm である理由',
  'ラテン語 arma「道具・装備」と、腕を表す語がヨーロッパで早くに混ざった。'+
  '腕は体に備わった道具であり、武器は腕に持つ道具。'+
  '「武器」の意味では必ず複数形 arms になる、という区別だけが残っている。'],
store: ['「店」と「蓄える」がつながっている理由',
  '元の意味は「蓄える」のほう。ラテン語 instaurare「補充する」から来ていて、'+
  '蓄えた物そのものが stock、蓄えておく場所が store になった。'+
  'アメリカで「店」の意味が主になったが、storage（保管）にはもとの形が残っている。'],
park: ['「公園」から「駐車する」が出てきた理由',
  'もとは「囲われた土地」。王の狩り場を囲ったのが park だった。'+
  '軍隊が大砲や荷車を一か所に囲って並べておくことを park と呼び、'+
  'そこから車を並べて置く意味になった。芝生とは関係ない。'],
train: ['「列車」と「訓練する」が同じ語である理由',
  '中心にあるのは「引く」。ドレスの引きずる裾が train、'+
  '機関車が客車を引き連ねたものも train。'+
  '人を引っぱって望む方向へ導くのが「訓練する」。引かれて続く、が全部に通っている。'],
paper: ['paper が「新聞」や「論文」も指す理由',
  '語源はナイル川のパピルス（papyrus）。'+
  '書くための材料がそのまま、書かれたものの名前になった。'+
  'newspaper の news が落ちて paper だけで新聞、学術の場では論文を指す。'],
field: ['field が「分野」を意味する理由',
  '見渡すかぎりの平地が field。柵も建物もないので、どこまでが自分の範囲かを'+
  '線で区切って考える必要があった。その「受け持ちの範囲」の感覚が残って、'+
  '学問や仕事の「分野」になった。野球の守備範囲を思うと近い。'],
ground: ['ground が「根拠」も意味する理由',
  '建物は地面の上にしか建たない。主張も同じで、'+
  '何かの上に載っていなければ立たない。'+
  'その土台が ground。日本語の「根も葉もない」と発想がそろっている。'],
fall: ['秋が fall と呼ばれる理由',
  '「葉が落ちる季節」を意味した fall of the leaf が短くなったもの。'+
  'イギリスでは autumn に取って代わられたが、'+
  '移民が持ち込んだアメリカにはそのまま残った。同じ言語が地域で分かれた例。'],
table: ['「机」と「表」が同じ語である理由',
  '元は「平らな板」。文字を刻む板も table だった。'+
  '板の上を線で区切って数字を並べたものが「表」になり、'+
  '板に脚をつけたものが「机」になった。timetable は板の名残。'],
head: ['head が「長」も「向かう」も意味する理由',
  '体の一番上にあり、進む方向を決めるのが頭。'+
  '集団の一番上にいて方向を決める人が head（長）、'+
  '自分が先頭になってある方向へ進むのが head for。位置ではなく役割の語。'],


/* ---- 2つの意味が1語に同居する理由が分かるもの ---- */
patient: ['「患者」と「辛抱強い」が同じ語である理由',
  'ラテン語 patiens「耐えている」から来ている。痛みに耐えている人が「患者」、'+
  '物事に耐えられる性質が「辛抱強い」。同じ「耐える」が、人を指すか性質を指すかで分かれた。'],
second: ['「秒」と「2番目」が同じ語である理由',
  '昔は1時間を60分割したものを pars minuta prima（第一の小部分）＝minute、'+
  'それをさらに60分割したものを pars minuta secunda（第二の小部分）と呼んだ。'+
  'この「第二の」が残って秒になった。minute が「分」と「ごく小さい」の両方なのも同じ理由。'],
interest: ['「興味」と「利子」が同じ語である理由',
  'ラテン語 interest「間にある、差が生じる」から。'+
  '心と対象の間に何かが生じれば「興味」、元金と返済額の間に生じる差が「利子」。'+
  'どちらも「差が生まれる」ことを言っている。'],
record: ['record の中には「心」が入っている',
  're-（再び）+ cor / cordis（心）。もとは「心に呼び戻す」で、記憶することだった。'+
  'それが書き留めること、さらに音を刻むレコードへ広がった。'+
  'フランス語の cœur（心）と同じ根を持つ。'],
board: ['板が、いつのまにか「委員会」になった',
  'board はもともと「板」。板でできた食卓を指すようになり、'+
  'その食卓を囲む人たちが board of directors（取締役会）になった。'+
  'room and board（部屋と食事）の board も、この食卓の名残。'],
company: ['company は「パンを分け合う仲間」',
  'com-（共に）+ panis（パン）。一緒にパンを食べる間柄が原義で、'+
  'そこから仲間・同席・会社へ広がった。companion（仲間）も同じ成り立ち。'],
class: ['もとはローマ市民の「等級」',
  'ラテン語 classis は、ローマ市民を財産で分けた区分のこと。'+
  '「区分」という意味が残って、学校のクラス、社会の階級、'+
  '飛行機の座席クラスまで、どれも「分けられた組」を指している。'],

/* ---- 語のなりたちが面白いもの ---- */
nice: ['nice は昔「無知な」という意味だった',
  'ラテン語 nescius（知らない）が語源で、中英語では「愚かな」という悪い言葉だった。'+
  'そこから「細かいことにうるさい」→「洗練された」→「感じのよい」と、'+
  '数百年かけて意味がひっくり返った。'],
travel: ['travel の語源は「苦労」',
  '古フランス語 travail（骨折り）から。さらに遡ると trepalium という'+
  '三本杭の拷問具に行き着く。昔の旅は、それほど過酷なものだった。'+
  'フランス語の travail（仕事）は、今も元の意味のまま残っている。'],
window: ['window は「風の目」',
  '古ノルド語 vindauga、つまり vindr（風）+ auga（目）。'+
  'ガラスのない時代、壁に開けた穴は風が通る目だった。'+
  '同じ「目」の発想は、台風の eye にも残っている。'],
husband: ['husband は「家の主」',
  '古ノルド語 húsbóndi = hús（家）+ bóndi（住む人）。'+
  '家に根を下ろす人という意味だった。'+
  '動詞の husband（大事に使う）も、家を切り盛りする感覚から来ている。'],
school: ['school の語源は「ひま」',
  'ギリシャ語 skholē は「余暇」。'+
  '働かなくてよい時間があってはじめて学問ができる、という発想で、'+
  'それが議論の場、講義の場、学校へと移っていった。'],
money: ['お金の名は、女神の名前から',
  'ローマのユノ・モネータ（Juno Moneta）神殿で硬貨が造られていた。'+
  'その Moneta が money になり、mint（造幣局）にもなった。'],
magazine: ['雑誌と弾倉が同じ語なのはなぜか',
  'アラビア語 makhāzin（倉庫）が語源。'+
  '弾を溜める場所が弾倉、記事を溜めたものが雑誌。'+
  'どちらも「何かを溜めておく入れ物」。'],
bank: ['銀行はもともと「ベンチ」',
  'イタリア語 banca（長椅子）。両替商が広場にベンチを置いて商売していた。'+
  '破産を意味する bankrupt は banca rotta（壊れたベンチ）で、'+
  '商売をたたんだ者のベンチを壊した習わしから来ている。'],
focus: ['focus は「炉」だった',
  'ラテン語 focus は暖炉のこと。家の中で人が自然に集まる場所だった。'+
  'そこからレンズが光を集める点を指すようになり、'+
  '「注意を集める」という今の意味になった。'],
campaign: ['選挙運動と「野原」のつながり',
  'ラテン語 campus（野原）から。軍隊が冬営地を出て野に展開することを指し、'+
  'それが「一連の作戦」になり、選挙運動や販売キャンペーンへ広がった。'+
  '大学の campus も同じ語。'],
arrive: ['arrive は「岸に着く」',
  'ラテン語 ad ripam（岸へ）から。もとは船が岸に着くことだった。'+
  '川や海が主な移動路だった時代の名残で、'+
  'river（川）も同じ ripa の仲間にあたる。'],
decide: ['decide は「切り落とす」',
  'de-（離して）+ caedere（切る）。'+
  '迷っている選択肢を切り落として一つ残すのが「決める」こと。'+
  'scissors（はさみ）や suicide にも同じ caedere が入っている。'],
test: ['test はもともと素焼きの壺',
  'ラテン語 testum は、金属の純度を調べるために使った小さな器のこと。'+
  '「本物か調べる道具」が、そのまま「試験」になった。'],
person: ['person は俳優の「仮面」',
  'ラテン語 persona は、劇で役者がかぶる仮面のこと。'+
  '仮面＝役柄が、その人自身を指すようになった。'+
  'personality（人柄）も同じ語から来ている。'],
animal: ['animal は「息をするもの」',
  'ラテン語 anima（息・魂）から。'+
  '息をしているかどうかが、生き物とそうでないものの境目だった。'+
  'animation（動きを与えること）も同じ語。'],
plant: ['plant は「足の裏」',
  'ラテン語 planta は足の裏。苗を植えるとき、足で土に押し込んだことから'+
  '「植える」になった。「工場」の意味は、機械を「据え付ける」ところから'+
  '後に生まれた別系統の使い方。'],
happy: ['happy は「運がよい」だった',
  '古ノルド語の hap（偶然・運）から。happen（起こる）、perhaps（たぶん）も同じ根。'+
  '幸せとは、もともと自分の努力ではなく、たまたま訪れるものだった。'],
manage: ['manage は「馬を手で扱う」',
  'イタリア語 maneggiare（馬を御す）から。さらに遡ると manus（手）。'+
  '手綱をさばくことが、組織を切り盛りすることへ広がった。'+
  'manual（手の・手引き）も同じ manus。'],
picture: ['picture と paint は同じ根',
  'ラテン語 pingere（描く）から。picture は「描かれたもの」。'+
  'pigment（顔料）も同じ語で、どれも「色をのせる」に行き着く。'],
develop: ['develop は「包みをほどく」',
  'もとは des-（外す）+ voloper（包む）で「包装を外す」。'+
  '中に隠れていたものが表に出てくる感じが、'+
  '「発達する」「開発する」「写真を現像する」に共通している。'],
produce: ['produce は「前へ導き出す」',
  'pro-（前へ）+ ducere（導く）。隠れていたものを前に引き出すのが原義。'+
  'introduce（中へ導く＝紹介する）、reduce（後ろへ導く＝減らす）も同じ ducere。'],
address: ['住所と演説が同じ語である理由',
  'ad-（〜へ）+ directus（まっすぐ向ける）。何かを「まっすぐ向ける」が核。'+
  '手紙を向ける先が住所、言葉を人へ向けるのが演説、'+
  '問題に正面から向き合うのが「取り組む」。'],
season: ['season は「種をまく時」',
  'ラテン語 serere（種をまく）から。農作業の区切りが季節だった。'+
  '料理の season（味つけする）は別系統で、'+
  '「食材を熟させる」という意味から来ている。'],
check: ['check はチェスの「王手」',
  'ペルシャ語 shah（王）に由来し、チェスで相手の王の動きを止めるのが check。'+
  '「動きを止める」から「確かめる」「阻止する」に広がった。'+
  'checkmate は shah mat（王は死んだ）。'],
student: ['student は「熱心な人」',
  'ラテン語 studere（熱心に取り組む）から。'+
  'もともと学校に通う人ではなく、何かに打ち込んでいる人を指した。'+
  'study も同じ語で、勉強より先に「打ち込むこと」があった。'],
doctor: ['doctor はもともと「教える人」',
  'ラテン語 docere（教える）から。学識のある教師が doctor だった。'+
  '博士号が doctor なのはこの名残で、'+
  '医者の意味は後から加わったもの。'],
science: ['science は「知っていること」',
  'ラテン語 scire（知る）から。もとは学問全般を指し、'+
  '自然科学に限る使い方は比較的新しい。'+
  'conscience（良心）は「共に知っている」で、同じ scire。'],
art: ['art はもともと「技」',
  'ラテン語 ars（技術・腕前）から。芸術に限らず、'+
  '身につけた腕前すべてを指した。'+
  'artificial（人の技で作った）、article（組み立てられた一部）も同じ仲間。'],
music: ['music は女神ムーサたちのもの',
  'ギリシャ神話の芸術の女神ムーサ（Muses）に由来する。'+
  'museum（ムーサに捧げられた場所）も同じ語。'+
  '音楽と博物館が親戚なのは、どちらも女神の領分だったから。'],
sport: ['sport は「仕事から運び去るもの」',
  'disport（気晴らしをする）が縮まった語。dis-（離して）+ portare（運ぶ）で、'+
  '日々の務めから心を運び去ることだった。'+
  'passport（港を通る許可）の port も同じ portare。'],
university: ['university は「全体」',
  'ラテン語 universitas（全体・組合）から。'+
  'もとは教師と学生の組合そのものを指し、建物ではなかった。'+
  'universe（宇宙＝ひとつに向かう全体）も同じ語。'],
court: ['テニスコートと裁判所が同じ語なのはなぜか',
  'もとは「囲われた中庭」。'+
  '王の中庭に人が集まって裁きが行われたので裁判所になり、'+
  '囲われた競技場という意味からテニスコートにもなった。'],
judge: ['judge は「法を言う人」',
  'ラテン語 jus（法）+ dicere（言う）。法を口にする人が判事。'+
  'justice（正義）、judicial（司法の）も同じ jus。'],
police: ['police と policy は同じ語から',
  'ギリシャ語 polis（都市）に由来する。'+
  '都市を治めることが police（警察）にも policy（政策）にもなった。'+
  'politics（政治）も同じ polis。'],
holiday: ['holiday は「聖なる日」',
  'holy day が縮まった語。'+
  'もとは宗教上の祝日で、休みなのは礼拝のためだった。'+
  '働かない日という意味だけが、後に残った。'],
news: ['news は new の複数形',
  '「新しいこと（複数）」というだけの、素直な成り立ち。'+
  'North East West South の頭文字だという話が有名だが、これは後付けの俗説で、'+
  '語の歴史とは関係がない。'],
girl: ['girl は昔、性別を問わなかった',
  '中英語では男女どちらの若者にも使われた。'+
  '女の子に限る使い方は後から定着したもので、'+
  'boy も元は「召使いの少年」という限定的な語だった。'],
friend: ['friend は「愛する人」',
  '古英語 frēond は「愛する」を意味する動詞の現在分詞。'+
  'free（自由な）とも語源をたどると繋がり、'+
  '「縛られずに結びついている」という感覚が根にある。'],
quarter: ['quarter は「4分の1」',
  'ラテン語 quartus（4番目）から。'+
  '時間の15分、1年の四半期、街の一区画、どれも「4つに割った1つ」。'+
  '兵を宿営させる quarters も、区画に割り当てたことから。'],
mile: ['mile は「千歩」',
  'ラテン語 mille passus（千歩）から。'+
  'ローマ兵の左右2歩をひと組として千回分、およそ1.5km。'+
  'million の mille も同じ「千」。'],
pound: ['pound の略が lb である理由',
  'ラテン語 libra pondo（重さによる1ポンド）から。'+
  'pound は pondo（重さ）の側、記号の lb は libra（天秤）の側が残ったもの。'+
  '天秤座 Libra も同じ語。'],
dollar: ['dollar は地名から来ている',
  'ボヘミアのヨアヒムスタール（Joachimsthal）で造られた銀貨 Joachimsthaler が'+
  'ターラー（Thaler）と略され、それが英語で dollar になった。'],
star: ['star は各国語で驚くほど似ている',
  'ギリシャ語 astēr、ラテン語 stella、ドイツ語 Stern。'+
  '同じ祖語にさかのぼるため、形が近いまま残っている。'+
  'astronomy（星の法則）、disaster（星が離れる＝凶事）も同じ仲間。'],
month: ['month は moon から',
  '月の満ち欠けが暦の単位だったことがそのまま残っている。'+
  '英語だけでなく多くの言語で、月（天体）と月（暦）は同じ語を共有している。'],
hour: ['hour の h を読まない理由',
  'フランス語から入った語で、そのころ h を読まない発音だった。'+
  '綴りだけがラテン語風に h 付きへ戻され、音は戻らなかった。'+
  'honest、honor も同じ経緯で h が黙っている。'],
minute: ['「分」と「ごく小さい」が同じ綴りなのはなぜか',
  'ラテン語 minutus（小さくされた）から。'+
  '1時間を小さく割ったものが「分」、小ささそのものを指すのが「微細な」。'+
  '発音は分かれていて、時間は /ˈmɪnɪt/、小さいは /maɪˈnjuːt/。'],
bill: ['請求書と紙幣とくちばしが同じ綴り',
  '請求書・法案の bill は「書きつけ」を意味するラテン語 bulla から。'+
  '紙幣の bill もその一種。鳥のくちばしの bill は別語源で、'+
  'たまたま同じ形になっただけ。'],
stock: ['stock は「木の幹」',
  '古英語で幹や切り株のこと。そこから「蓄え」「在庫」になり、'+
  '会社の元手を表す「株」へ広がった。'+
  'in stock（在庫あり）の感覚が、いちばん原義に近い。'],
fun: ['fun はもともと「だます」',
  '17世紀には「ばかにする、かつぐ」という意味の語だった。'+
  '長く俗語あつかいで、辞書に正式に載るのも遅かった。'+
  '今の「楽しさ」に落ち着いたのは比較的最近のこと。'],
smile: ['smile と miracle は遠い親戚',
  'どちらも「驚く」を意味する古い語根にさかのぼる。'+
  '思わず顔がほころぶことと、目を見張ることが、'+
  '同じところから枝分かれしている。'],
laugh: ['laugh の gh は昔は発音していた',
  'かつては喉を鳴らす子音があり、綴りはその名残。'+
  '音だけが f に変わり、綴りは古いまま残った。'+
  'cough、tough、enough も同じ経緯をたどっている。'],
teacher: ['teach は「指し示す」',
  '古英語 tǣcan は「示す」。token（しるし）と同じ根を持つ。'+
  '教えるとは、答えを渡すことではなく、'+
  '方向を指し示すことだった。'],
college: ['college は「同じ務めの仲間」',
  'ラテン語 collegium（共に選ばれた者の集まり）から。'+
  'colleague（同僚）も同じ語で、'+
  '建物ではなく人の集まりを指すのが本来の意味。'],
subject: ['subject は「下に投げられたもの」',
  'sub-（下に）+ jacere（投げる）。'+
  '王の下に置かれた者が「臣下」、議論の下に置かれるものが「主題」、'+
  '文の下敷きになるものが「主語」。project（前へ投げる）も同じ jacere。'],
game: ['game には「獲物」の意味もある',
  '狩りの対象となる動物を game と呼ぶ。'+
  '遊びと狩りが同じ語なのは、どちらも「腕を競うこと」だったから。'+
  'big game といえば大型の獲物を指す。'],
play: ['play は「素早く動く」',
  '古英語 plegian は、体を軽やかに動かすこと。'+
  '遊ぶ・競技する・演奏する・演じるが同じ語なのは、'+
  'どれも「決まった枠の中で軽やかに動く」ことだから。'],
week: ['week は「移り変わり」',
  '「向きを変える、順に移る」を意味する古い語根から。'+
  '日が順に巡って一周する単位が week。'+
  'ドイツ語 Wechsel（交替）も同じ仲間。']
};
