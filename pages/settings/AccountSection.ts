import { Page, expect } from '@playwright/test';
import { WireWebLoginPage } from '../WireWebLoginPage';

export class AccountSection {
    constructor(private page: Page) { }

    async clickLogOut() {
        await this.page.getByRole('button', { name: 'Log out' }).click();
    }

    async verifyClearDataDialogIsDisplayed() {
        await expect(this.page.locator('#modal-title'), 'After clicking Logout, Clear Data Dialog is not visible.').toBeVisible();
    }

    async clickLogOutInClearDataDialog() : Promise<WireWebLoginPage> {
        await this.page.locator('#modals button', { hasText: 'Log out' }).click();
        return new WireWebLoginPage(this.page);
    }
}
