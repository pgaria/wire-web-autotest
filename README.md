# Wire Web AutoTest

This is a demo project for automated testing of the **Wire Web Application** using **Playwright** and **TypeScript**.  
It focuses on login and logout functionality and demonstrates a structured approach using the **Page Object Model (POM)** with method chaining to simulate behavior-driven flows.
Modular way to represent parts of a page. This follows the composition pattern in the Page Object Model, where a page is composed of reusable components like ConversationSideBar, Settings, Actions, Devices.

## Page Object Model Strategy Concept  

Each Wire web page or major UI section is represented by a dedicated class. These classes encapsulate:

The selectors used to interact with the page
The actions that can be performed on that page
The assertions to verify expected behavior

🔹 Example: **WireWebUserConversationsPage.ts**  
This class represents the main Conversations page a user sees after logging in. It includes:

All method/actions user can see/perform on the conversations page.
A reference to a subsection: ConversationsSidebar, which hold all method user can perform on Side Bar.

```TypeScript
export class WireWebUserConversationsPage {
    readonly conversationsSidebar: ConversationsSidebar; //Variable for SideBar.

    constructor(private page: Page) {
        this.conversationsSidebar = new ConversationsSidebar(page);
    }

    async verifyUserIsAbleToLoginOnWireWeb(expectedFirstName: string) {
        await expect(this.page.getByText(expectedFirstName)).toBeVisible();
    }
}
```
🔹 Subsection: **ConversationsSidebar.ts**  
This class represents a component within the main page (like a sidebar). It is only accessible through the main page class, ensuring encapsulation and logical structure.
```TypeScript
export class ConversationsSidebar {
    constructor(private page: Page) {}

    async clickSettings(): Promise<SettingsPage> {
        await this.page.getByRole('tab', { name: 'Settings' }).click();
        return new SettingsPage(this.page);
    }
}
```
🔹 Usage Example
```TypeScript
const wireWebUserConversationsPage = new WireWebUserConversationsPage(page);
//conversationsSidebar is avilable inside the main Page.
const settingsPage = await wireWebUserConversationsPage.conversationsSidebar.clickSettings();
```
✅ Why This Structure?  
Encapsulation: Keeps related functionality grouped together  
Reusability: Common actions can be reused across tests  
Readability: Tests read like user actions  
Maintainability: Changes in UI only require updates in one place  

---

## ✨ Features

- ✅ Login and Logout test flows  
- ✅ Page Object Model with method chaining  
- ✅ Behavior-driven-like structure using descriptive methods  
- ✅ Easy configuration for local and CI environments

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pgaria/wire-web-autotest.git
   ```
---

## ⚙️ Configuration
Update the following TestData in environment.config.ts:
   
```Typescript
export const environment = {
  wireWebAppBaseUrl: 'https://app.wire.com/auth/#/sso'  
  testEmail: 'your-email@example.com',
  testPassword: 'your-password',
  userFirstName: 'First Name'
};
```

---

## 🧪 Running Tests

1. Run tests in headed mode:
   ```bash
   npx playwright test --headed
   ```
2. Run tests in debug mode:
   ```bash
   npx playwright test --headed --debug
   ```
## 🧪 Running On Github Actions

Project is already configured to run on Github Actions and everytime build and run tests.    
https://github.com/pgaria/wire-web-autotest/actions
