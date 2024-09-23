import {test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/productPage";
import environment from "../environment";

test.describe('SauceDemo Assignment', async () => {
    let page: Page;
    let loginPage: LoginPage;
    let productPage: ProductPage;

    test.beforeAll(async ({ browser })=> {
        const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
        page = await context.newPage();
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        await page.goto(environment.ApplicationUrl, { waitUntil: 'networkidle'} );
        await loginPage.loginToApplication(environment.Email, environment.Password);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Verify sorting order is from Z to A', async ()=> {
        await productPage.verifySortingOrder('za', 'Name (Z to A)');
        await expect(page).toHaveScreenshot();
    });

    test('Verify sorting order is from high to low', async ()=> {
        await productPage.verifySortingOrder('hilo', 'Price (high to low)');
        await expect(page).toHaveScreenshot();
    });

    test('Verify checkout functionality', async ()=> {
        const items = ['sauce-labs-fleece-jacket', 'sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-onesie', 'sauce-labs-bolt-t-shirt'];
        await productPage.addToCart(items);
        expect(Number(await productPage.shoppingCartBadge.textContent())).toEqual(items.length);
        await productPage.shoppingCartLink.click();
        const cart_count = await productPage.shoppingCartCount.count();
        expect(cart_count).toEqual(items.length);
        await productPage.fillPersonalInformation('Neha', 'Garg', '132103')
        expect(await productPage.checkoutComplete.isVisible()).toBeTruthy();
        await expect(page).toHaveScreenshot();
    });
});



