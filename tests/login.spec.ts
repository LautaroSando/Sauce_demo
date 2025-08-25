import { test, expect} from '../fixtures/fixtures';
import User from '../data/users.json';
import Link from '../data/urlData.json';
import Messages from '../data/messages.json';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
});

test('TC-01:Login with valid credentials', async ({ loginPage, page }) => {
  await loginPage.completeFormLogin(User.userValido);
  await expect(page).toHaveURL(Link.url.homepage);
});

test('TC-02:Login with invalid credentials', async ({ loginPage,page }) => {
  await loginPage.completeFormLogin(User.userInvalid);
  await expect(page).toHaveURL(Link.url.login);
  await expect (loginPage.errorButton).toBeVisible();
  await expect (loginPage.errorButton).toHaveText(Messages.errorMessages.invalidUser);
});

test('TC-03:Login with empty credentials', async ({ loginPage ,page }) => {
  await loginPage.completeFormLogin(User.userEmpty);
  await expect(page).toHaveURL(Link.url.login);
  await expect (loginPage.errorButton).toBeVisible();
  await expect (loginPage.errorButton).toHaveText(Messages.errorMessages.nullUserAndPassword);
});

test('TC-04:Login with empty password', async ({ loginPage ,page }) => {
  await loginPage.completeFormLogin({ user: User.userValido.user, password: '' });
  await expect(page).toHaveURL(Link.url.login);
  await expect (loginPage.errorButton).toBeVisible();
  await expect (loginPage.errorButton).toHaveText(Messages.errorMessages.nullPassword);
});
