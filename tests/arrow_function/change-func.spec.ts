import { test, expect, Page } from '@playwright/test';

test('ar-01 register on the website', {tag: "@reg"}, async ({ page }) => {
    test.slow();

    const registerLink = () => page.locator('a[href="/register"]');
    const usernameInput = () => page.locator('input[placeholder="Username"]');
    const emailInput = () => page.locator('input[placeholder="Email"]');
    const passwordInput = () => page.locator('input[placeholder="Password"]');
    const singupButton = () => page.locator('.btn-lg');
    const newArc = () => page.locator('a[href="/editor"]');
    const arcTitleInput = () => page.locator('//input[@placeholder="Article Title"][@class="form-control form-control-lg"]');
    const arcBodyInput = () => page.locator('//input[@data-qa-id="editor-description"]');
    const arcTagsInput = () => page.locator('//input[@data-qa-id="editor-tags"]');
    const publishButton = () => page.locator('.btn-primary');
 
    await page.goto('https://demo.learnwebdriverio.com/');

    await registerLink().click();
    await usernameInput().fill('david');
    await emailInput().fill('tester04@gmail.com');
    await passwordInput().fill('12345');
    await singupButton().click();

    await newArc().click();
    await arcTitleInput().fill('My First Article');
    await arcBodyInput().fill('about me');
    await arcTagsInput().fill('my tag');
    await publishButton().click();
    await expect(page.locator('h1')).toHaveText('My First Article');
});

test('css-03 change profile on the website', { tag: "@profile"}, async ({page}) => {
     test.slow();

const userLogin = () => page.locator('a[href="/login"]');
const userEmail = () => page.locator('input[placeholder="Email"]');
const userPassword = () => page.locator('input[placeholder="Password"]');
const userLogButton = () => page.locator('.btn-lg');
const userSetting = () => page.locator('a[href="/settings"]');
const userProfile = () => page.locator('input[placeholder="URL of profile picture"]');
const changeUser = () => page.locator('input[placeholder="Your username"]');
const changeText = () => page.locator('//*[@class="form-control"]');
const changeEmail = () => page.locator('input[placeholder="Email"]');
const changePassword = () => page.locator('input[placeholder="Password"]');
const singButton = () => page.locator('.btn-primary');

await page.goto('https://demo.learnwebdriverio.com/');

await userLogin().click();
await userEmail().fill('tester01@gmail.com');
await userPassword().fill('12345');
await userLogButton().click();
await userSetting().click();
await userProfile().fill('some test is here');
await changeUser().fill('Vasya');
await changeText().fill('there any text');
await changeEmail().fill('tester01@gmail.com');
await changePassword().fill('12345');
await singButton().click();

});

test('ar-02 register and create article, use arrow function', { tag: '@arctical' }, async ({ page }) => {
  test.slow();

const username = 'tester01';
const email = 'tester01@gmail.com';
const password = '12345';

const registerLink = (page: Page) => page.locator('a[href="/register"]');
const usernameInput = (page: Page) => page.locator('input[placeholder="Username"]');
const emailInput = (page: Page) => page.locator('input[placeholder="Email"]');
const passwordInput = (page: Page) => page.locator('input[placeholder="Password"]');
const signupButton = (page: Page) => page.locator('.btn-lg');
const editorLink = (page: Page) => page.locator('a[href="#/editor"]');
const articleTitleInput = (page: Page) => page.locator('input[placeholder="Article Title"][data-qa-id="editor-title"]');
const articleBodyInput = (page: Page) => page.locator('textarea[placeholder="Write your article (in markdown)"]');
const articleTagsInput = (page: Page) => page.locator('input[placeholder="Enter tags"]');
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
async function createArticle(page: Page, title: string, body: string, tags: string) {
  await editorLink(page).click();
  await articleTitleInput(page).fill(title);
  await articleBodyInput(page).fill(body);
  await articleTagsInput(page).fill(tags);
  await publishButton(page).click();
  await expect(articleHeader(page)).toHaveText(title);
}
});






