// import {test, Page, expect } from '@playwright/test';
import {LoginPageFix, test} from '../fixtures/saucedemoFixture';

test.beforeEach(async ({ page }) => {
    test.slow();
    await page.goto("https://www.saucedemo.com/");
});

test('uslog-03 User login on site', {tag: "@uslogin"}, async ({ page, loginPageFix}) => {

    loginPageFix.Login

    const userLoginData = {
        username: 'standard_user',
        password: 'secret_sauce'
    };

    await loginPageFix.Login(userLoginData.username, userLoginData.password);
  });