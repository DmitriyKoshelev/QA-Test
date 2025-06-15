import { test, expect, Page } from '@playwright/test';
import { RegistrationPage } from '../pages/registerPage';       
import { ArticlesPage } from '../pages/articlesPage';


test('ob-01 User Registration Page',  {tag: "@reg"}, async ({ page, request }) => {
    test.slow();
    const registerPage = new RegistrationPage(page);
    const createArticles = new ArticlesPage(page);

    const userRegistrationData = {
        username: "tester1",
        email: "test@gm.com",
        password: "test123",
    };
    const articleData = {
        title: "Test Article",
        description: "This is a test article.",
        body: "This is the body of the test article.",
        tagList: ["test", "playwright"],
    };

    await page.goto("https://demo.learnwebdriverio.com/register");

    await registerPage.registerUser(
        userRegistrationData.username,
        userRegistrationData.email,
        userRegistrationData.password
    );
    await createArticles.createArticlesDesc(
        articleData.title,
        articleData.description,
        articleData.body,
        articleData.tagList
    );

});