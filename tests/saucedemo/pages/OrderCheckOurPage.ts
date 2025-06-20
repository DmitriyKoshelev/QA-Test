import {Page, expect} from"@playwright/test";

export class CheckBasketPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

async addFirstItemCart() {
    await this.page.locator('.inventory_item:first-child button').click();
    await this.page.locator('.shopping_cart_link').click();
    await this.page.locator('#checkout').click();   
}

async fillCheckoutForm (firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('#first-name').fill('Im');
    await this.page.locator('#last-name').fill('cool');
    await this.page.locator('#postal-code').fill('postCode');
    await this.page.locator('#continue').click();

}
async finishOrder () {
    await this.page.locator('#finish').click();
}
};