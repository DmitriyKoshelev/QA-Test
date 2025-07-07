import {Page, expect} from"@playwright/test";

export class LoginPageFix {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Login(username: string, password: string) {
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#login-button').click();
    }
};