Here are test cases: 
1. **Successful Login:**
    - **Objective:** To verify that a user can successfully log in with valid credentials.
    - **Test Steps:**
        1. Open the website.
        2. Enter a valid username (e.g., 'standard_user').
        3. Enter the corresponding valid password (e.g., 'secret_sauce').
        4. Click the login button.
    - **Expected Result:** The user should be successfully logged in and redirected to the products page.
2. **Invalid Password:**
    - **Objective:** To ensure the login fails when an incorrect password is used.
    - **Test Steps:**
        1. Open the Sauce Demo website.
        2. Enter a valid username (e.g., 'standard_user').
        3. Enter an invalid password (e.g., 'wrong_password').
        4. Click the login button.
    - **Expected Result:** An error message should be displayed indicating that the password is incorrect.
3. **Invalid Username:**
    - **Objective:** To confirm the login fails when an incorrect username is used.
    - **Test Steps:**
        1. Open the Sauce Demo website.
        2. Enter an invalid username (e.g., 'wrong_user').
        3. Enter a valid password (e.g., 'secret_sauce').
        4. Click the login button.
    - **Expected Result:** An error message should be displayed indicating that the username is incorrect.
4. **Empty Fields:**
    - **Objective:** To check if the login process is handled correctly when fields are left empty.
    - **Test Steps:**
        1. Open the Sauce Demo website.
        2. Leave the username and password fields empty.
        3. Click the login button.
    - **Expected Result:** An error message or indication should be displayed that fields cannot be left empty.
  
    - Why are those test cases crucial?
    - 1. We need to be sure that login functionality is working, it is essential of the system.
      2. and 3. We need to bu sure that system is recognizing invalid data and not to be able get in the system with wrong data
      4. We can not let user in to the system without any data, similiar principle like 2. and 3. 
