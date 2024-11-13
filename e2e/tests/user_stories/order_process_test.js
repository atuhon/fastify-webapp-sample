SuiteOf("弁当注文");
Scenario("お弁当の注文まで行う",async ({ I,utils }) => {
  //ログイン
  I.amOnPage("/");
  I.click("ログイン");
  I.fillField("パスワード", "super-strong-passphrase");
  I.fillField("ユーザー名", "user1");
  I.click("ログイン");

  //商品購入
  I.fillField("カートに入れる数量","1")
I.click("カートに入れる")
I.fillField("お名前（受取時に必要です）","ユーザー1")
I.fillField("電話番号（連絡時に必要です）","09000000000")
I.fillField("受け取り日",utils.now.format("YYYY/MM/DD"))
I.fillField("受け取り目安時間",utils.now.add(1,"hour").format("hh:mmA"));
I.click("注文を確定する");
const orderNo= await I.grabTextFrom("h3");
console.log(orderNo);

//弁当屋サイドの処理
session("お弁当屋さん処理",()=>{
  I.amOnPage("/");
  I.click("ログインする");
  I.fillField("パスワード", "admin");
  I.fillField("ユーザー名", "admin");
  I.click("ログイン");
  I.click("注文を管理する");
  const itemConttainer=locate("aside").withText(orderNo)//特定のオーダーNoの注文を取得する
  I.click("注文を引き渡しました",itemConttainer);
  I.see("引き渡し済みの注文です",itemConttainer);


})

});
