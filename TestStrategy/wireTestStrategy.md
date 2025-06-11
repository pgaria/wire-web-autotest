# Test Strategy Overview for Wire Web Application

## 1. Preparation and Discovery Phase

### 🔍 Database Access
Check for the possibilities of database access on the application. Database access can be helpful in both manual and automated tests for:

- Complete cleanup of user data including groups, chats, devices, etc.
- Retrieving historical data of the user for UI validation.
- Inspecting the current state of the user in the system.
- Generating or retrieving test data (users, groups, folders, etc.) at runtime.

### 🔌 API Availability
Evaluate the available APIs and determine how they can be used in conjunction with the UI. This can potentially replace the need for direct database access and Doing the repetative expensive operations from the Web/UI directly. So Web Test can utilive the API in the prepeartion and cleanUp phase.

Use cases include:
- Generating tokens and authenticating users.
- Accessing and updating user sessions and roles.
- Retrieving data such as user lists, groups, favorites, folders, connected users, and chat history.

Benefits:
- Create test data using APIs and validate via UI.
- Achieve complete test case isolation for automated regression and manual tests.
- Collaborate with developers to enhance API testability and usability.

---

## 2. Test Types & Automation Coverage

### ✅ Functional Tests (UI)
Automated tests can simulate various use cases using runtime data. Examples include:

- User login/logout
- User search (by name, username, email, etc.)
- Sending/receiving messages (text, emoji, media)
- Group creation and group messaging
- Typing indicators and read receipts
- Message delivery status
- Users from different geo-locations

### ✅ End-to-End (E2E) Tests
Simulate two or more users by launching two browser contexts or pages in Playwright. Each context acts like a separate browser session (with its own session, storage, etc.), allowing us to test real-time interactions like messaging. So simultaiously we should be able to send the different kind of messages from one user to the other and as we have the full control over the Test Data we know what is expected and where. (We can also check in DB or API as well for confirmation after Web.)

- Two users chatting in real-time
- Group chat with multiple users
- User joins/leaves group
- Message synchronization across sessions

---

## 3. Security Tests

- Check code coverage using SonarQube or other linting tools.
- Automated checks for:
  - XSS, CSRF, and injection vulnerabilities
  - Authentication bypass
  - Proper session handling and token storage
  - Cookie security and device management
  - Fraud detection and browser behavior rules
- Ensure secure communication and message encryption.

---

## 4. Performance Tests

Use tools like **k6** or **JMeter** to simulate:

- Concurrent users sending messages
- Group chat under load
- Communication performance under stress

---

## 5. Browser Compatibility

Ensure the application works across supported browsers (Chrome, Edge, Firefox) and their versions.

- Use tools like **BrowserStack** or an in-house setup.(Based on Cost Analysis)
- Automated tests should be configurable to run across different browsers and versions.
- Identify and report UI issues specific to browsers.

