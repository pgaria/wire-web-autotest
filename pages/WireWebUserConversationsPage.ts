import { expect, Page } from "@playwright/test";
import { ConversationsSidebar } from "./ConversationsSidebar";

export class WireWebUserConversationsPage {
    readonly conversationsSidebar: ConversationsSidebar;

    constructor(private page: Page) {
        this.conversationsSidebar = new ConversationsSidebar(page);
    }

    async verifyUserIsAbleToLoginOnWireWeb(expectedFirstName: string) {
        await expect(this.page.getByText(expectedFirstName), 'User failed to login on Wire Web').toBeVisible();
    }
}