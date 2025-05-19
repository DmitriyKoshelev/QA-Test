 import { test, expect } from '@playwright/test';
 
 test('css-01 login must be performed', { tag: "@log"}, async ({page}) => {
     test.slow();
await page.goto('https://demo.learnwebdriverio.com/');
await expect(page.locator('a[href="/register"]')).toBeVisible();
await page.locator('a[href="/login"]').click();
await page.locator('input[placeholder="Email"]').fill('tester01@gmail.com');
await page.locator('input[placeholder="Password"]').fill('12345');
await expect(page.locator(".btn-lg")).toBeVisible();
});

test('css-02 register on the website', { tag: "@reg"}, async ({page}) => {
     test.slow();
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect(page.locator('a[href="/register"]')).toBeVisible();
    await page.locator('a[href="/register"]').click();
    await page.locator('input[placeholder="Username"]').fill('Mark');
    await page.locator('input[placeholder="Email"]').fill('tester02@gmail.com');
    await page.locator('input[placeholder="Password"]').fill('12345');
    await expect(page.locator(".btn-lg")).toBeVisible();
});

test('css-03 change profile on the website', { tag: "@profile"}, async ({page}) => {
     test.slow();
    await page.goto('https://demo.learnwebdriverio.com/');
    await expect(page.locator('a[href="/register"]')).toBeVisible();
    await page.locator('a[href="/login"]').click();
    await page.locator('input[placeholder="Email"]').fill('tester01@gmail.com');
    await page.locator('input[placeholder="Password"]').fill('12345');
    await page.locator(".btn-lg").click();
    await page.locator('a[href="/settings"]').click();
//     await page.locator('input[placeholder="URL of profile picture"]').fill('some test is here');
    await page.locator('input[placeholder="Your username"]').fill('David');
    await page.locator('input[placeholder="Short bio about you"]').fill('there any text');
    await page.locator('input[placeholder="Email"]').fill('tester01@gmail.com');
    await page.locator('input[placeholder="Password"]').fill('12345');
    await expect(page.locator(".btn-primary")).toBeVisible();
});

test('css-04  register on the website', { tag: "@arctical"}, async ({page}) => {
     test.slow();
     await page.goto('https://demo.learnwebdriverio.com/');
     await expect(page.getByRole('link', { name: ' Sign in' })).toBeVisible();
     await page.locator('a[href="/login"]').click();
     await page.locator('input[placeholder="Email"]').fill('tester01@gmail.com');
     await page.locator('input[placeholder="Password"]').fill('12345');
     await page.locator(".btn-lg").click();
     await page.locator('a[href="/editor"]').click();
     await page.locator('input[placeholder="Article Title"]').fill('Behappy');
     // await page.locator('input[placeholder="What's this article about?"').fill('Behappy');
     // await page.locator('input[placeholder="Write your article (in markdown)"]').fill('Writeabout');
     await page.locator('input[placeholder="Enter tags"]').fill('myteg');
     await expect(page.locator(".btn-primary")).toBeVisible();
});