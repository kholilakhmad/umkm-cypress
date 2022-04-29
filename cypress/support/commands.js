// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.visit ( 'https://dev-ess-umkm.linovhr.com/login' )
    cy.get('[id="_username"]').type ('ESSDEV005').should ('have.value', 'ESSDEV005')
    cy.get('[id="password"]').type ('HFw3O3o98J')
    cy.get('[id="buttonMasuk"]').click()
    cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
})
Cypress.Commands.overwrite('visit', (orig, url, options) => {})
