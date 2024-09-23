import { test as setup } from '@playwright/test';
import environment from '../environment';
import { LoginPage } from '../pages/loginPage';

setup(`authenticate`, async ({ page }) => {
    await page.goto(environment.ApplicationUrl, { waitUntil: 'networkidle'} );
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication(environment.Email, environment.Password);
    await page.context().storageState({ path: `playwright/.auth/user.json` });
});
