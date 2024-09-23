import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';
import environment from '../environment';

export class LoginPage {
  private page: Page;

  public constructor(page: Page) {
    this.page = page;
  }

  public async goto() {
    await this.page.goto(environment.ApplicationUrl, { waitUntil: 'networkidle'} );
  }

  public async loginToApplication(email: string, pass: string): Promise<void> {
    await this.page.fill('input#user-name', email);
    await this.page.fill('input#password', pass);
    await this.page.click('input#login-button');
    await this.page.waitForSelector('div.inventory_container');
    expect(await this.page.locator('div.inventory_container').isVisible()).toBeTruthy();
  }
}