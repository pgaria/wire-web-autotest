# Wire Web AutoTest

This is a demo project for automated testing of the **Wire Web Application** using Playwright and **TypeScript**.  
It focuses on login and logout functionality and demonstrates a structured approach using the **Page Object Model (POM)** with method chaining to simulate behavior-driven flows.
Modular way to represent parts of a page. This follows the composition pattern in the Page Object Model, where a page is composed of reusable components like ConversationSideBar, Settings, Actions, Devices.

🔍 Benefits:
Fluent navigation between pages
Encapsulation of page-specific logic
Improved test readability

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
