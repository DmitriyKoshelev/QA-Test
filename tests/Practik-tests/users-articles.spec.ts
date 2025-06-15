import {test, expect, Page} from '@playwright/test';
import {registerUser} from './register-new-user';

  const username = 'user_' + Date.now();
  const email = `${username}@example.com`;
  const password = 'secret123';
  const title = 'My first title';
  const body = 'Hello World Body!';
  const tags = 'my first tag';

async function createArticles(page: Page, title: string, description: string, tags: string) {
  // Go to the article editor
  await page.locator('a[href="/editor"]').click();
  // fields of an article
  await page.locator('input[placeholder="Article Title"]').fill('title');
  await page.locator('input[placeholder="What\'s this article about?"]').fill('description');
  await page.locator('textarea[placeholder="Write your article (in markdown)"]').fill('This is some article content.');
  await page.locator('input[placeholder="Enter tags"]').fill(tags);
  // Publish Article
  await page.locator('button:has-text("Publish Article")').click();
  // Checking result
  await expect(page.locator('h1')).toHaveText(title);
};
// test
test('us-02 add new user and create articles', {tag: "@new"}, async ({page}) => {
    test.slow();
  await page.goto('https://demo.learnwebdriverio.com/');
  await registerUser(page, username, email, password);
  await createArticles(page, title, body, tags);
});
