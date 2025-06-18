import {test, Page } from '@playwright/test';
import { LoginUserPage } from './pages/RegisterPageSaucedemo';

test('uslog-01 User login on site', {tag: "@uslogin"}, async ({ page }) => {
    test.slow();
    const userLoginData = {
        username: 'standard_user',
        password: 'secret_sauce'
    };
    const LoginUser = new LoginUserPage(page, userLoginData.username, userLoginData.password);

    await page.goto('https://www.saucedemo.com/');

    await LoginUser.LoginUser(
        userLoginData.username,
        userLoginData.password
    )
});