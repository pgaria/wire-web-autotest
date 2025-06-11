import { Page } from "@playwright/test";

export class WireWebHistoryInfoPage {
    constructor(private page: Page) {
    }

    async handleHistoryInfoMessageIfDisplayedAfterLogin() {
        if (await this.isHistoryInfoPageIsDisplayed() == true)
            await this.clickOkButtonInHistoryInfo();
    }

    private async isHistoryInfoPageIsDisplayed(): Promise<boolean> {
        let isCurrentUrlContainsHistory = false;
        try {
            //Wait for the HistoryInfo Page to Load as on Github its Slow, So added explicit wait.
            await this.page.waitForURL(/.*historyinfo.*/i, { timeout: 10000 });
            isCurrentUrlContainsHistory = true;
        } catch {
            // As 'historyinfo' URL is not displayed within timeout — that's okay
        }
        const isHistorytextIsVisible = await this.page.locator('text=It’s the first time you’re using Wire on this device.').isVisible();
        return isCurrentUrlContainsHistory || isHistorytextIsVisible;
    }

    private async clickOkButtonInHistoryInfo() {
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
}   
