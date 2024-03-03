// Test case: Empty Fields
// Essential because: Validates that the system prevents login attempts without any credentials, ensuring user identity is confirmed before granting access.
describe('Empty Fields Login Test', () => {
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

    it('displays error when login fields are empty', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
        cy.get('input[type="submit"]').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username is required');
    });
});
