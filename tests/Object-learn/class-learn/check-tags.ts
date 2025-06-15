import { Locator, Page } from "@playwright/test";

export class CheckTags {
    page: Page;
    clickYourFeedLocator: Locator;
    clickGlobalFeedLocator: Locator;
    clickPopularTagLocator: Locator;
    clickSomeTitleLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickYourFeedLocator = page.locator('//*[@data-qa-type="feed-tab"]/a[@class="nav-link"]');
        this.clickGlobalFeedLocator = page.locator('//*[@data-qa-type="feed-tab"]/a[@class="nav-link router-link-exact-active active"]');
        this.clickPopularTagLocator = page.locator('//*[@class="tag-list"]/a[4]');
        this.clickSomeTitleLocator = page.locator('a[href="/articles/test-article-j5y2a"]');
    }
};