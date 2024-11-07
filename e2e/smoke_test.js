SuiteOf('smoke');
Scenario('test something',  ({ I }) => {

I.amOnPage("/");
I.click("ログイン");
I.fillField("パスワード","super-strong-passphrase");
I.fillField("ユーザー名","user1");
I.click("ログイン");
});