import {Page, expect} from '@playwright/test';

// This function creates a page object for the Articles page
export function ArticlesPage(page: Page, Title: string, description: string, tags: string) {
    // Go to the article editor
      this.articleButtonLocator = page.locator('a[href="/editor"]');
      // fields of an article
      this.createArticleLocator = page.locator('input[placeholder="Article Title"]');
      this.createDescriptLocator =  page.locator('input[placeholder="What\'s this article about?"]');
      this.contentLocator = page.locator('textarea[placeholder="Write your article (in markdown)"]');
      this.createTagsLocator =  page.locator('input[placeholder="Enter tags"]');
      // Publish Article
      this.publishArticleLocator =  page.locator('button:has-text("Publish Article")');
      // Checking result
        this.page = page;

      this.createArticlesDesc = async function (
        title: string,
        description: string,
        tags: string
      ) {
        await this.articleButtonLocator.click();
        await this.createArticleLocator.fill(title);
        await this.createDescriptLocator.fill(description);
        await this.contentLocator.fill('This is a test article content.');
        await this.createTagsLocator.fill(tags);
        await this.publishArticleLocator.click();
        await expect(this.page.locator('h1')).toHaveText(title);
      }
};