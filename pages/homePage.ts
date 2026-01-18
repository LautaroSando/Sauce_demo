import { Locator, Page } from '@playwright/test';
import Link from '../data/urlData.json';

export class HomePage {
    readonly page: Page;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');

    }

    async clickOnAddToCartButton() {
        await this.addToCartButton.click();
    }

}