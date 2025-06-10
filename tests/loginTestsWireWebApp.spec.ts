import { test, expect } from '@playwright/test';

test('Verify Login and Logout on Wire Web App', async ({ page }) => {
  // Navigate to the Wire Web SSO login page
  await page.goto('https://app.wire.com/auth/#/sso/');
  await expect(page.getByText('Welcome to Wire!')).toBeVisible();
  
  // Fill in the email and submit the login form
  await page.locator('#sso-code-email').fill('pawangaria@gmail.com');
  await page.getByRole('button',{name: 'Log in'}).click();
  
  // Verify password prompt is shown
  await expect(page.getByText('Enter your password to log in')).toBeVisible();

  // Verify email input is disabled and has the correct value
  const emailInput = page.locator('#email');
  await expect(emailInput).toBeDisabled(), await expect(emailInput).toHaveValue('pawangaria@gmail.com"');

  // Verify password type then fill password and click Login button
  const passwordInput = page.locator('#password-login');
  await expect(passwordInput).toHaveAttribute('type', 'password');
  await passwordInput.fill('yourSecurePassword123');
  await page.getByRole('button',{name: 'Log in'}).click();
});
