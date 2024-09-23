import {test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductPage } from "../pages/productPage";
import environment from "../environment";

test.describe('SauceDemo Assignment', async () => {
    test.beforeEach(async ( { page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.loginToApplication(environment.Email, environment.Password);
    });

    test.afterEach(async ( {page} ) => {
        await page.close();
    });

    test('Verify sorting order is from Z to A', async ( { page } )=> {
        const productPage = new ProductPage(page);
        await productPage.verifySortingOrder('za', 'Name (Z to A)');
        await expect(page).toHaveScreenshot();
    });

    test('Verify sorting order is from high to low', async ( { page } )=> {
        const productPage = new ProductPage(page);
        await productPage.verifySortingOrder('hilo', 'Price (high to low)');
        await expect(page).toHaveScreenshot();
    });

    test('Verify checkout functionality', async ( { page } )=> {
        const productPage = new ProductPage(page);
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



