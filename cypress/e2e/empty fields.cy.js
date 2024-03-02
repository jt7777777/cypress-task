describe('Login Test', () => {
    it('should visit the login page', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 }); // Adjust timeout as needed
        cy.get('input[type="submit"]').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username is required');
    });
});
