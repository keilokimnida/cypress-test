/**
 * Custom command to do login via API.
 *
 * @param {string} [username] - Optional username.
 * @param {string} [password] - Optional password.
 * @return {undefined} - Nothing is returned.
 *
 * @example Login('username', 'password)
 */
Cypress.Commands.add('Login', (username, password) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env().api.aftervpn}/portal-login`,
        body: {'username': username ? username : Cypress.env().auth.username, 'password': password ? password : Cypress.env().auth.hashed_password}
    }).then((response: any) => {
        const { message, status } = response.body;
        const token = message.token;
        cy.window().then(win => {
            sessionStorage.setItem("ship.portal.token", token);
        })
    });
});