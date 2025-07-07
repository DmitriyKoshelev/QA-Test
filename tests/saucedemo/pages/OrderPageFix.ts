import {Page, expect} from"@playwright/test";

export class CheckFix {
    addFirstItemCart() {
        throw new Error('Method not implemented.');
    }
    fillCheckoutForm(arg0: string, arg1: string, arg2: string) {
        throw new Error('Method not implemented.');
    }
    page: Page;
constructor(page: Page) {
    this.page = page;
};

async addFirstItem() {
    await this.page.locator('.inventory_item:first-child button').click();
    await this.page.locator('.shopping_cart_link').click();
    await this.page.locator('#checkout').click();
}

async CheckoutForm() {
    await this.page.locator('#first-name').fill('lost');
    await this.page.locator('#last-name').fill('yesterday');
    await this.page.locator('#postal-code').fill('today its cool');
    await this.page.locator('#continue').click();
}
async finishOrder() {
    await this.page.locator('#finish').click();
}
};