import { Locator , Page } from '@playwright/test';
import Link from '../data/urlData.json';

export class HomePage {
    readonly page: Page;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = this.page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button');
  
    }

    async clickOnAddToCartButton() {
        await this.addToCartButton.click();
    }
    
}