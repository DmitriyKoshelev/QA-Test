import {test, Page, expect } from '@playwright/test';
import { LoginUserPage } from './pages/LoginUserPage';
import {CheckBasketPage} from './pages/OrderCheckOurPage'

test('uslog-02 User login on site', {tag: "@uslogin"}, async ({ page }) => {
    test.slow();
    const loginPage = new LoginUserPage(page);
    const basketPage = new CheckBasketPage(page);

    const userLoginData = {
        username: 'standard_user',
        password: 'secret_sauce'
    };

    await page.goto('https://www.saucedemo.com');
 
    await loginPage.login(userLoginData.username, userLoginData.password);
    await expect(page.locator('.inventory_list')).toBeVisible();

<<<<<<< HEAD
    //Add product to cart and start checkout
  await basketPage.addFirstItemCart();
  await expect(page).toHaveURL(/checkout-step-one/);

  //Entering buyer data
=======
    // add product to basket
  await basketPage.addFirstItemCart();
  await expect(page).toHaveURL(/checkout-step-one/);

  // entering buyer data
>>>>>>> 8bb9c691d6c7225f8b347e26a95e0ec9dcb6c3d7
  await basketPage.fillCheckoutForm('Im', 'Cool', '12345');
  await expect(page).toHaveURL(/checkout-step-two/);
  await expect(page.locator('.summary_info')).toBeVisible();

<<<<<<< HEAD
  //Complete order
=======
  // end order
>>>>>>> 8bb9c691d6c7225f8b347e26a95e0ec9dcb6c3d7
  await basketPage.finishOrder();
  await expect(page.locator('#checkout_complete_container')).toBeVisible();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
