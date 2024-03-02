describe('Login Test', () => {
    it('should visit the login page', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 }); // Adjust timeout as needed
        cy.get('input[data-test="username"]').type('standard_user');
        cy.get('input[data-test="password"]').type('wrong_password');
        cy.get('input[type="submit"]').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });
});
