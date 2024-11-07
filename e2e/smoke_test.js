SuiteOf('smoke');

Scenario('test something',  ({ I }) => {
    I.fillField("パスワード","super-strong-passphrase")
    I.fillField("ユーザー名","user1")
    I.click("ログイン");
    I.I.see("user1 さん")

});
Scenario('test something',  ({ I }) => {

I.amOnPage("/");
I.fillField("パスワード","super-strong-passphrase");
I.fillField("ユーザー名","user1");
I.click("ログイン");
});