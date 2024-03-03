## **Introduction**

This repository contains automated test cases for the Sauce Demo website using Cypress. These tests are designed to ensure the robustness and reliability of the login functionality.

## **Test Cases**

### **1. Successful Login**

- **Objective:** To verify that a user can successfully log in with valid credentials.
- **Test Steps:**
    1. Open the website.
    2. Enter a valid username (e.g., 'standard_user').
    3. Enter the corresponding valid password (e.g., 'secret_sauce').
    4. Click the login button.
- **Expected Result:** The user should be successfully logged in and redirected to the products page.

### **2. Invalid Password**

- **Objective:** To ensure the login fails when an incorrect password is used.
- **Test Steps:**
    1. Open the Sauce Demo website.
    2. Enter a valid username (e.g., 'standard_user').
    3. Enter an invalid password (e.g., 'wrong_password').
    4. Click the login button.
- **Expected Result:** An error message should be displayed indicating that the password is incorrect.

### **3. Invalid Username**

- **Objective:** To confirm the login fails when an incorrect username is used.
- **Test Steps:**
    1. Open the Sauce Demo website.
    2. Enter an invalid username (e.g., 'wrong_user').
    3. Enter a valid password (e.g., 'secret_sauce').
    4. Click the login button.
- **Expected Result:** An error message should be displayed indicating that the username is incorrect.

### **4. Empty Fields**

- **Objective:** To check if the login process is handled correctly when fields are left empty.
- **Test Steps:**
    1. Open the Sauce Demo website.
    2. Leave the username and password fields empty.
    3. Click the login button.
- **Expected Result:** An error message or indication should be displayed that fields cannot be left empty.

## **Importance of These Test Cases**

- **Reliable Authentication:** Ensuring that login functionality works as expected is crucial for system security and user experience.
- **Invalid Data Recognition:** It is essential to confirm that the system correctly identifies and rejects invalid login attempts.
- **Prevent Unauthorized Access:** Preventing access without proper credentials maintains the integrity and security of the system.
