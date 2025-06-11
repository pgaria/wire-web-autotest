import { expect, Expect, Locator, Page } from "@playwright/test";
import { ConversationsSidebar } from "../ConversationsSidebar";
import { AccountSection } from './AccountSection';

export class SettingsPage {
    readonly conversationsSidebar: ConversationsSidebar;

    constructor(private page: Page) {
        this.conversationsSidebar = new ConversationsSidebar(page);
    }

    async clickAccount(): Promise<AccountSection> {
        await this.page.getByRole('tab', { name: 'Account' }).click();
        return new AccountSection(this.page);
    }

}