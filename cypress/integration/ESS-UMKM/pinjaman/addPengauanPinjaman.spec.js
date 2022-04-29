//const { beforeEach } = require("mocha")

describe('Modul Pinjaman', () => {
    beforeEach( () =>{
        cy.login('ESSDEV005','HFw3O3o98J')
        cy.title('Linovhr')
    })
    it('Menampilkan daftar pinjaman', () => {
        cy.get('[id="Menu-Pinjaman"]').click()
        // .should('have.value','Pinjaman')
        cy.get('[id="Menu-Pinjaman-Pengajuan"]').click()
        cy.url().should('contain','https://dev-ess-umkm.linovhr.com/loan/request/loan-request')
        cy.wait(3000)
    });
    it('Tambah pengajuan pinjaman', () => {
        cy.get('[id="Menu-Pinjaman"]').click()
        // .should('have.value','Pinjaman')
        cy.get('[id="Menu-Pinjaman-Pengajuan"]').click()
        cy.url().should('contain','https://dev-ess-umkm.linovhr.com/loan/request/loan-request')
        cy.get('[id="buttonPengajuan"]').click()
        cy.url().should('contain','https://dev-ess-umkm.linovhr.com/loan/request/loan-request/add')
        cy.get('[id="reason"]').type('Test With Cypress')
        // .should('contain','Test With Cypress')
        cy.get('[id="amount"]').type('1000000')
        // .should('have.value','1000000')
        cy.get('[id="installment"]').type('99')
        cy.get('[id="buttonSimpan"]').eq(0).click()
    });
    it('Cancel pengajuan', () => {
        cy.get('[id="Menu-Pinjaman"]').click()
        // .should('have.value','Pinjaman')
        cy.get('[id="Menu-Pinjaman-Pengajuan"]').click()
        cy.url().should('contain','https://dev-ess-umkm.linovhr.com/loan/request/loan-request')
        cy.get('[id="buttonPengajuan"]').click()
        cy.url().should('contain','https://dev-ess-umkm.linovhr.com/loan/request/loan-request/add')
        cy.get('[id="reason"]').type('Test With Cypress')
        // .should('contain','Test With Cypress')
        cy.get('[id="amount"]').type('1000000')
        // .should('have.value','1000000')
        cy.get('[id="installment"]').type('99')
        cy.get('[id="buttonKembali"]').eq(0).click()
    });
    
})
