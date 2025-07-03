import { test, expect } from '@playwright/test';

test('Login to the-internet.herokuapp.com', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
