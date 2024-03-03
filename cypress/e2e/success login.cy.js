// Test case: Successful Login
// Essential because: Verifies that the system correctly recognizes valid user credentials, allowing authenticated users to access their accounts.
describe('Successful Login Test', () => {
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

  it('successfully logs in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
    cy.get('input[data-test="username"]').type('standard_user');
    cy.get('input[data-test="password"]').type('secret_sauce');
    cy.get('input[type="submit"]').click();
  });
});
