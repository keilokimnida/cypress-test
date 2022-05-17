describe('Login: ', () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport("macbook-13")
    })
    
    it('Successful', () => {
        // 1. Visit home page
        cy.visit("/");

        // 2. Click on login button
        cy.get(".c-Header__Right button").click();

        // 3. Redirected to login page
        cy.url().should('eq', Cypress.config().baseUrl + '/login');

        // 4. Key in Login Credentials
        cy.get("input[name='email']").type(Cypress.env().auth.email);
        cy.get("input[name='password']").type(Cypress.env().auth.password);
        
        // 5. Click on login button
        cy.get("button").contains("Login").click()

        // 6. Successfully logged in
        cy.url().should('eq', Cypress.config().baseUrl + '/');

    });
});