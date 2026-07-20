import { test, expect } from '@playwright/test';

test.describe('Test All testcase',{tag: '@alltestcase'}, () => {

  test('has title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/OrangeHRM/);
  });

  test('Login Account', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Fill the login form
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  });

});

