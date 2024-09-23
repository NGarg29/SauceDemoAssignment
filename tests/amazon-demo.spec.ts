import {test, expect } from "@playwright/test";

test.describe.skip('Test Assignment', async () => {
    test.skip('verify largest price of mobile phone appearing on first page for amazon brand is above 1000', async ({ page} )=> {
        await page.goto('https://www.amazon.in');
        const mobiles = '//a[contains(@href,"mobile-phones")]';
        await page.waitForSelector(mobiles);
        await page.locator(mobiles).click();
        const amazonBrand = '//a/span[text()="Made for Amazon"]';
        await page.waitForSelector(amazonBrand);
        await page.locator(amazonBrand).click();
        await page.waitForSelector('//div[contains(@class,"s-messaging-widget-results-header")]');
        const priceLocator = '//span[@class="a-price-whole"]';
        const prices = await page.locator(priceLocator).allTextContents();
        console.log(prices);
        const numberValues = prices.map(price => Number(price.replace(',', '')) );
        console.log(numberValues);
        const largestNumber = Math.max(...numberValues);
        console.log(largestNumber);
        expect(largestNumber).toBeGreaterThan(1000);
    });
});