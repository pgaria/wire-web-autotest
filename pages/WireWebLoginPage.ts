import { expect, Page } from "@playwright/test";
import { envConfig } from "../environment.config";
import { WireWebUserConversationsPage } from "./WireWebUserConversationsPage";
import { WireWebHistoryInfoPage } from "./WireWebHistoryInfoPage";

export class WireWebLoginPage {
    constructor(private page: Page) {
    }

    async goToWireWebAppUrl() {
        await this.page.goto(envConfig.wireWebAppBaseUrl);
        await this.verifyWireWebAppLoginPageIsDisplayed();
    }

    async verifyWireWebAppLoginPageIsDisplayed() {
        await expect(this.page.getByText('Welcome to Wire!'), 'Failed to load Wire login page').toBeVisible();
    }

    async loginWithEmailAndPassword(email: string, password: string): Promise<WireWebUserConversationsPage> {
        await this.loginWithEmail(email);
        await this.enterPasswordIfMasked(password);
        return new WireWebUserConversationsPage(this.page);
    }

    async loginWithEmail(email: string) {
        // Fill in the email and click the login button
        await this.page.locator('#sso-code-email').fill(email);
        await this.clickLoginButton();
        await this.verifyPasswordPromptAndEmailState(email);
    }

    async enterPasswordIfMasked(password: string) {
        // Verify password type then fill password and click Login button
        const passwordInput = this.page.locator('#password-login');
        await expect(passwordInput, 'Password input should be masked').toHaveAttribute('type', 'password');
        await passwordInput.fill(password);
        await this.clickLoginButton();
        await new WireWebHistoryInfoPage(this.page).handleHistoryInfoMessageIfDisplayedAfterLogin();
    }

    private async clickLoginButton() {
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }

    private async verifyPasswordPromptAndEmailState(expectedEmail: string) {
        // Verify password prompt is shown
        await expect(this.page.getByText('Enter your password to log in'), 'Password prompt not visible').toBeVisible();

        // Verify email input is disabled and has the correct value
        const emailInput = this.page.locator('#email');
        await expect(emailInput, 'Email input should be disabled in password prompt').toBeDisabled();
        await expect(emailInput, 'Default email value mismatch in password prompt').toHaveValue(expectedEmail);
    }

}