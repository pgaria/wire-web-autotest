
import { Locator, Page, expect } from '@playwright/test';
import { SettingsPage } from './settings/SettingsPage';

export class ConversationsSidebar {

    constructor(private page: Page) {
    }

    async clickSettings() : Promise<SettingsPage> {
        await this.page.getByRole('tab', { name: 'Settings' }).click();
        return new SettingsPage(this.page);
    }

}
