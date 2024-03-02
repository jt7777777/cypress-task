describe('Login Test', () => {
    beforeEach(() => {
      cy.clearAllBrowserData();
    });
  
    it('should visit the login page', () => {
      cy.visit('https://www.saucedemo.com/', { timeout: 10000 });
      cy.get('input[data-test="username"]').type('standard_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
      cy.get('input[type="submit"]').click();
      // Additional test steps...
    });
  });
  