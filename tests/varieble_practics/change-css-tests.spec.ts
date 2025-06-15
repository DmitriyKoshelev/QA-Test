 import { test, expect } from '@playwright/test';

test('dv-02 change', { tag: "@prof"}, async ({page}) => {
     test.slow();
    await page.goto('https://demo.learnwebdriverio.com/');
    const away = page.locator('a[href="/register"]');
    const log = page.locator('a[href="/login"]');
    const logEmail = page.locator('input[placeholder="Email"]');
    const password = page.locator('input[placeholder="Password"]');
    const btn = page.locator('.btn-lg');
    await away.click();
    await log.click();
    await logEmail.fill('tester01@gmail.com');
    await password.fill('12345');
    await btn.click();
});


test('css-02 register on the website', { tag: "@reg"}, async ({page}) => {
     test.slow();
    await page.goto('https://demo.learnwebdriverio.com/');
    const register = page.locator('a[href="/register"]')
    const userName = page.locator('input[placeholder="Username"]');
    const userEmail = page.locator('input[placeholder="Email"]');
    const password = page.locator('input[placeholder="Password"]');
    const btn = page.locator('.btn-lg');
    await register.click();
    await userName.fill('Vasya');
    await userEmail.fill('test@mail.com');
    await password.fill('12345');
    await btn.click();
});

test('css-03 change profile on the website', { tag: "@profile"}, async ({page}) => {
     test.slow();
    await page.goto('https://demo.learnwebdriverio.com/');
    const register = page.locator('a[href="/login"]');
    const userEmail = page.locator('input[placeholder="Email"]');
    const password = page.locator('input[placeholder="Password"]');
    const btn = page.locator('.btn-lg');
    const setting = page.locator('a[href="/settings"]');
    const place = page.locator('input[placeholder="URL of profile picture"]');
    const yourName = page.locator('input[placeholder="Your username"]');
    const user = page.locator('input[placeholder="Email"]');
    const pass = page.locator('input[placeholder="Password"]');
    const prime = page.locator('.btn-primary');
    await register.click();
    await userEmail.fill('tester01@gmail.com');
    await password.fill('12345');
    await btn.click();
    await setting.click();
    await place.fill('some test is here');
    await user.fill('David');
    await pass.fill('12345');
    await prime.click();
});

test('css-04  register on the website', { tag: "@arctical"}, async ({page}) => {
     test.slow();
     await page.goto('https://demo.learnwebdriverio.com/');
     const away = page.locator('a[href="/register"]');
     const userName = page.locator('input[placeholder="Username"]');
     const userEmail = page.locator('input[placeholder="Email"]');
     const password = page.locator('input[placeholder="Password"]');
     const btn = page.locator('.btn-lg');
     const arc = page.locator('input[placeholder="Article Title"][data-qa-id="editor-title"]');
     const mark = page.locator('input[placeholder="Write your article (in markdown)"]');
     const tags = page.locator('input[placeholder="Enter tags"]');
     const prim = page.locator('.btn-primary');
     await away.click();
     await userName.click();
     await userEmail.fill('tester01@gmail.com');
     await password.fill('12345');
     await btn.click();
     await arc.click();
     await mark.fill('about me');
     await tags.fill('my tags');
     await prim.click();
});