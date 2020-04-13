export function login() {
    cy.request('POST', '/api/login', {
        loginName: "abcacb",
        password: "sdfasdfaf"
    });
}