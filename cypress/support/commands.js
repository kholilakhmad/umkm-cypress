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

//custom login command
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://dev-ess-umkm.linovhr.com/login')
    cy.get('[id="_username"]').type(username)
    cy.get('[id="password"]').type(password)
    cy.get('[id="buttonMasuk"]').click()
})
Cypress.Commands.add('kehadiran', () => {
    cy.get('[id="Menu-Kehadiran"]').click()
    cy.get('[id="Menu-Kehadiran-Pengajuan"]').click()
    cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/time/request')
})
// Cypress.Commands.overwrite('visit', (orig, url, options) => {})
