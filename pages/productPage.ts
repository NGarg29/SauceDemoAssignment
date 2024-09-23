import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

export class ProductPage {
  private page: Page;
  public activeOption: Locator;
  public shoppingCartBadge: Locator;
  public shoppingCartLink: Locator;
  public shoppingCartCount: Locator;
  public checkoutComplete: Locator;

  public constructor(page: Page) {
    this.page = page;
    this.activeOption = page.locator('span.active_option');
    this.shoppingCartBadge = page.locator('span.shopping_cart_badge');
    this.shoppingCartLink = page.locator('a.shopping_cart_link');
    this.shoppingCartCount = page.locator('div.cart_list div.cart_item');
    this.checkoutComplete = page.locator('div#checkout_complete_container');
  }

  public async verifySortingOrder(option: string, optionValue: string): Promise<void> {
    const initalContent = await this.activeOption.textContent();
    await this.page.selectOption('.product_sort_container', option);
    const newContent = await this.activeOption.textContent();
    expect(initalContent).not.toBe(newContent);
    expect(newContent).toBe(optionValue);
  }

  public async addToCart(items: string[]) {
    let intialBucketCount = 0;
    for(const item of items) {
        const itemLocator = this.page.locator(`button#add-to-cart-${item}`);
        await itemLocator.click();
        const bucketContent = await this.shoppingCartBadge.textContent();
        const bucketCount = Number(bucketContent);
        expect(bucketCount).not.toEqual(intialBucketCount);
        expect(bucketCount).toEqual(intialBucketCount + 1);
        intialBucketCount = bucketCount;
    }
  }

  public async fillPersonalInformation(firstName: string, LastName: string, PinCode: string) {
    await this.page.locator('button#checkout').click();
    await this.page.locator('input#first-name').fill(firstName);
    await this.page.locator('input#last-name').fill(LastName);
    await this.page.locator('input#postal-code').fill(PinCode);
    await this.page.locator('input#continue').click();
    await this.page.locator('button#finish').click();
    await this.page.waitForSelector('div#checkout_complete_container');
  }
}