import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


interface Fixtures {
    loginPage: LoginPage;
}

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    // Acá se crea la instancia SOLO una vez por test
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});


export { expect } from  '@playwright/test';