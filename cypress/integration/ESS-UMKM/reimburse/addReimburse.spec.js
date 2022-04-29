describe('Menu reimburse', () => {
    beforeEach ( () => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit ( 'https://dev-ess-umkm.linovhr.com/login' )
        cy.get('[id="_username"]').type ('ESSDEV005').should ('have.value', 'ESSDEV005')
        cy.get('[id="password"]').type ('HFw3O3o98J { sensitive: true }')
        cy.get('[id="buttonMasuk"]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
    } )
    it ( 'Add reimburse ', function () {
        const reason ='Test Add Reimburse'
        const date = '27-04-2022'
        const amount = 500000

        cy.get('[id="Menu-Penggantian"]').click()
        cy.get('[id="Menu-Penggantian-Pengajuan"]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/reimburse/request/reimburse-request')
        //cek total data per page
        cy.get('[class="p-element p-datatable-tbody"]').find('tr').should('have.length', 10)
        //cek field search
        cy.get('[formcontrolname="inquiry"]').type('Pengobatan {enter}')
        cy.get('[id="buttonPengajuan"]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/reimburse/request/reimburse-request/add')
        cy.xpath('//span[contains(text(),\'Pilih Jenis\')]').click()
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-add[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-lov[1]/p-dropdown[1]/div[1]/div[3]/div[2]/ul[1]/p-dropdownitem[2]/li[1]').click()
            .should('contain', 'Pengobatan')
        cy.get('[id="reason"]').type(`${reason}`).should('have.value', reason)
        cy.get('[id="date"]').type('04-04-2022')
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-add[1]/div[1]/div[2]/div[4]').click({ force: true })
        cy.get('[id="amount"]').type(`${amount}`)
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-add[1]/div[1]/div[1]/div[2]/div[1]/btn-save[1]/button[1]')
            .click()
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-list[1]/div[1]/p-table[1]/div[1]/div[1]/div[1]/app-search[1]/div[1]/div[1]/div[1]/input[1]')
            .type(`${reason}{enter}`)
    } )
})
