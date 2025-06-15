import { test, expect, Page } from '@playwright/test';
import { RegistrationPage } from "./RegistrationPage1";
import { CheckTags } from './check-tags';


test('ob-02 User Registration Page, us classes', {tag: "@reguser"}, async ({ page }) => {
    test.slow();
    const registerPage = new RegistrationPage(page);
    const checkTags = new CheckTags(page);

    await page.goto("https://demo.learnwebdriverio.com/login");

    // await registerPage.usernameInputLocator.fill("testuser");
    await registerPage.emailInputLocator.fill("test@gm.com");
    await registerPage.passwordInputLocator.fill("password123");
    await registerPage.singUpButtonLocator.click();

    //check clicking on the link takes to the correct page
    await checkTags.clickYourFeedLocator.click();
    await checkTags.clickGlobalFeedLocator.click();
    await checkTags.clickPopularTagLocator.click();
    await checkTags.clickSomeTitleLocator.click();
    await expect(page.getByRole('link', { name: 'test', exact: true })).toBeVisible();



});


