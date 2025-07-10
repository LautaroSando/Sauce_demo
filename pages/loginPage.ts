import { Locator, Page } from '@playwright/test';
import Link from '../data/urlData.json'

export class LoginPage {
    
    readonly page: Page;
    readonly user: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;   
    readonly errorButton: Locator; 
    
    constructor(page: Page) { 
        this.page = page;
        this.user = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.getByRole('button', { name: 'LOGIN' });
        this.errorButton = page.locator('[data-test="error"]')

    }
    

    async navigateToLoginPage() {
        await this.page.goto(Link.url.login);
    }

    async completeFormLogin (username: {user: string, password: string}) {
        await this.user.fill(username.user);
        await this.password.fill(username.password);
        await this.loginButton.click();
    }
}