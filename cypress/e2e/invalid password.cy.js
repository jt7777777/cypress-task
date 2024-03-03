// Test case: Invalid Password
// Essential because: Ensures the system's ability to reject incorrect passwords, a critical aspect of user authentication and security.
describe('Invalid Password Login Test', () => {
    beforeEach(() => {
        // Clear all browser data before each test
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.window().then((win) => {
            win.sessionStorage.clear();
        });

        // Unregister service workers
        if (window.navigator && navigator.serviceWorker) {
            const cypressPromise = new Cypress.Promise((resolve, reject) => {
                navigator.serviceWorker.getRegistrations().then((registrations) => {
                    if (!registrations.length) resolve();
                    Promise.all(registrations.map(reg => reg.unregister())).then(() => {
                        resolve();
                    });
                });
            });
            cy.wrap('Unregister service workers').then(() => cypressPromise);
        }
    });

    it('displays error for invalid password', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 }); // Adjust timeout as needed
        cy.get('input[data-test="username"]').type('standard_user');
        cy.get('input[data-test="password"]').type('wrong_password');
        cy.get('input[type="submit"]').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});
