import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart() {
    await this.page.click('.inventory_item button');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}
