import { test, expect, Page } from '@playwright/test';

test('ar-01 register on the website', {tag: "@reg"}, async ({ page }) => {
    test.slow();

    const registerLink = (page: Page) => page.locator('a[href="/register"]');
    const usernameInput = (page: Page) => page.locator('input[placeholder="Username"]');
    const emailInput = (page: Page) => page.locator('input[placeholder="Email"]');
    const passwordInput = (page: Page) => page.locator('input[placeholder="Password"]');
    const singupButton = (page: Page) => page.locator('.btn-lg');
    const newArc = (page: Page) => page.locator('a[href="/editor"]');
    const arcTitleInput = (page: Page) => page.locator('//input[@placeholder="Article Title"][@class="form-control form-control-lg"]');
    const arcBodyInput = (page: Page) => page.locator('//input[@data-qa-id="editor-description"]');
    const arcTagsInput = (page: Page) => page.locator('//input[@data-qa-id="editor-tags"]');
    const publishButton = (page: Page) => page.locator('.btn-primary');
 
    await page.goto('https://demo.learnwebdriverio.com/');

    await registerLink(page).click();
    await usernameInput(page).fill('david');
    await emailInput(page).fill('tester04@gmail.com');
    await passwordInput(page).fill('12345');
    await singupButton(page).click();

    await newArc(page).click();
    await arcTitleInput(page).fill('My First Article');
    await arcBodyInput(page).fill('about me');
    await arcTagsInput(page).fill('my tag');
    await publishButton(page).click();
    await expect(page.locator('h1')).toHaveText('My First Article');
});

test('css-03 change profile on the website', { tag: "@profile"}, async ({page}) => {
     test.slow();

const userLogin = (page: Page) => page.locator('a[href="/login"]');
const userEmail = (page: Page) => page.locator('input[placeholder="Email"]');
const userPassword = (page: Page) => page.locator('input[placeholder="Password"]');
const userLogButton = (page: Page) => page.locator('.btn-lg');
const userSetting = (page: Page) => page.locator('a[href="/settings"]');
const userProfile = (page: Page) => page.locator('input[placeholder="URL of profile picture"]');
const changeUser = (page: Page) => page.locator('input[placeholder="Your username"]');
const changeText = (page: Page) => page.locator('//*[@class="form-control"]');
const changeEmail = (page: Page) => page.locator('input[placeholder="Email"]');
const changePassword = (page: Page) => page.locator('input[placeholder="Password"]');
const singButton = (page: Page) => page.locator('.btn-primary');

await page.goto('https://demo.learnwebdriverio.com/');

await userLogin(page).click();
await userEmail(page).fill('tester01@gmail.com');
await userPassword(page).fill('12345');
await userLogButton(page).click();
await userSetting(page).click();
await userProfile(page).fill('some test is here');
await changeUser(page).fill('Vasya');
await changeText(page).fill('there any text');
await changeEmail(page).fill('tester01@gmail.com');
await changePassword(page).fill('12345');
await singButton(page).click();

});

test('ar-02 register and create article, use arrow function', { tag: '@arctical' }, async ({ page }) => {
  test.slow();

const username = 'tester08';
const email = 'tester08@gmail.com';
const password = '12345';

const registerLink = (page: Page) => page.locator('a[href="/register"]');
const usernameInput = (page: Page) => page.locator('input[placeholder="Username"]');
const emailInput = (page: Page) => page.locator('input[placeholder="Email"]');
const passwordInput = (page: Page) => page.locator('input[placeholder="Password"]');
const signupButton = (page: Page) => page.locator('//*[@id="app"]/div/div/div/div/form/button');
const editorLink = (page: Page) => page.locator('//*[@id="app"]/nav/div/ul/li[2]/a');
const articleTitleInput = (page: Page) => page.locator('//input[@placeholder="Article Title"][@class="form-control form-control-lg"]');
const articleBodyInput = (page: Page) => page.locator('//input[@data-qa-id="editor-description"]');
const articleTagsInput = (page: Page) => page.locator('//input[@data-qa-id="editor-tags"]');
const publishButton = (page: Page) => page.locator('.btn-primary');
const articleHeader = (page: Page) => page.locator('h1');

await page.goto('https://demo.learnwebdriverio.com/');

async function registerUser(page: Page, username: string, email: string, password: string) {
  await registerLink(page).click();
  await usernameInput(page).fill(username);
  await emailInput(page).fill(email);
  await passwordInput(page).fill(password);
  await signupButton(page).click();
};
await registerUser(page, username, email, password);

async function createArticles() {
  await editorLink(page).click();
  await articleTitleInput(page).fill('My first arctical');
  await articleBodyInput(page).fill('my seconsd word');
  await articleTagsInput(page).fill('mu tag');
  await publishButton(page).click();
  await expect(articleHeader(page)).toHaveText('My First Article');
  await expect(page.locator('h1')).toHaveText('My First Article');
};
await createArticles();
});






