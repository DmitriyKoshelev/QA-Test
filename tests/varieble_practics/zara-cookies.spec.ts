import test from '@playwright/test';


test('get cookies', async ({page, context}) => {
await page.goto('https://www.zara.com/ua/', {waitUntil: 'commit'});

const cookies = await context.cookies();

console.log(cookies[0].name);
console.log(cookies);

});