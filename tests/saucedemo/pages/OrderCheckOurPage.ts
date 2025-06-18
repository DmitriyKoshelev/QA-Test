import {Page, expect} from"@playwright/test";

// export function DataVerification(page: Page,username: string, password: string) {
//     this.firstNameVerifiLocator = page.locator('//*[@id="first-name"]');
//     this.lastNameVerifiLocator = page.locator('//*[@id="last-name"]');
//     this.postalVerifiLocator = page.locator('//*[@id="postal-code"]');
//     this.continueLocator = page.locator('//*[@id="continue"]');
//     this.finishLocator = page.locator('//*[@id="finish"]');

//     this.LoginUser = async function (
//         firstname: string,
//         lastname: string,
//         postal: string
//     ) {
//         await this.firstNameVerifiLocator.fill(firstname);
//         await this.lastNameVerifiLocator.fill(lastname);
//         await this.postalVerifiLocator.fill('12345');
//         await this.continueLocator.click();
//         await this.finishLocator.click();
//     }
// };

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