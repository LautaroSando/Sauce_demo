import { test, expect } from '../fixtures/fixtures';
import User from '../data/users.json';
import UrlData from '../data/urlData.json';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.completeFormLogin(User.userValido);
});

test('TC-05: Add to cart item', async ({ page, homePage }) => {
    await expect(page).toHaveURL(UrlData.url.homepage);
    await homePage.clickOnAddToCartButton();

});