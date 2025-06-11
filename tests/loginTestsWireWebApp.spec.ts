import { test, expect } from '@playwright/test';
import { envConfig } from "../environment.config";
import { WireWebLoginPage } from '../pages/WireWebLoginPage';
import { WireWebUserConversationsPage } from '../pages/WireWebUserConversationsPage';

test('Verify Login and Logout on Wire Web App', async ({ page }) => {
  let wireLoginPage = new WireWebLoginPage(page);
  await wireLoginPage.goToWireWebAppUrl();

  // Login with userEmail and password.
  const wireConversationsPage = await wireLoginPage.loginWithEmailAndPassword(envConfig.testEmail,envConfig.testPassword);
  await wireConversationsPage.verifyUserIsAbleToLoginOnWireWeb(envConfig.userTitle);
  
  // Click Settings -> Accounts
  const settingsPage = await wireConversationsPage.conversationsSidebar.clickSettings();
  const accountSection = await settingsPage.clickAccount();

  // Click LogOut and Verify Logout Successfully and Login Page is displayed again.
  await accountSection.clickLogOut();
  wireLoginPage = await accountSection.clickLogOutInClearDataDialog();
  await wireLoginPage.verifyWireWebAppLoginPageIsDisplayed();
});
