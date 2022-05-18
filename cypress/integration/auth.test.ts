describe('auth.test.ts|Login', () => {
    beforeEach(() => {
        sessionStorage.clear();
    });
    
    it('Success|LDAP', () => {
        // 1. Visit home page
        cy.visit("/");

        // 2. Click on login button
        cy.get(".sgds-navbar-item button").click();

        // 3. Redirected to login page
        cy.url().should('eq', Cypress.config().baseUrl + '/login');

        // 4. Key in Login Credentials
        cy.get("input[name='username']").type(Cypress.env().auth.username);
        cy.get("input[name='password']").type(Cypress.env().auth.password);
        
        // 5. Click on login button
        cy.get(".sgds-card button").contains("Login").click();

        // 6. Successfully logged in
        cy.url().should('eq', Cypress.config().baseUrl + `/acc/${Cypress.env().auth.billing_acc_no}/`);
        cy.get("h3").contains("Overview");

    });

    it('Sucess|API Call', () => {
        // 1. Login via api
        cy.Login();

        // 2. Visit home page
        cy.visit(`/acc/${Cypress.env().auth.billing_acc_no}`);
        cy.get("h3").contains("Overview");
    });

    it('Sucess|Techpass', () => {
        // 1. Visit home page
        cy.visit("/");

        // 2. Click on login button
        cy.get(".sgds-navbar-item button").click();

        // 3. Redirected to login page
        cy.url().should('eq', Cypress.config().baseUrl + '/login');

        // 4. Click on Techpass button
        cy.get(".techpass-button").click();
        
        // Unable to proceed
    });
});