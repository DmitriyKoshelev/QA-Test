import {Page} from"@playwright/test";

export function LoginUserPage(page: Page,username: string, password: string) {
    this.usernameInputLocator = page.locator('');
    this.passwordInputLocator = page.locator('');
    this.singUpButtonLocator = page.locator('');

    this.LoginUser = async function (
        username: string,
        password: string
    ) {
        await this.usernameInputLocator.fill(username);
        await this.passwordInputLocator.fill(password);
        await this.singUpButtonLocator.click();
    }
};