import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://app.wire.com/auth/#/sso/');

  await expect(page.getByText('Welcome to Wire!')).toBeVisible();
});
