cy.session(name, () => {
    cy.visit ( 'https://dev-ess-umkm.linovhr.com/login' )
    cy.get('[id="_username"]').type ('ESSDEV005').should ('have.value', 'ESSDEV005')
    cy.get('[id="password"]').type ('HFw3O3o98J')
    cy.get('[id="buttonMasuk"]').click()
    cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
})
