describe('Menu reimburse', () => {
    beforeEach ( () => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit ( 'https://dev-ess-umkm.linovhr.com/login' )
        cy.xpath ( '//input[@id=\'_username\']' ).type ( 'ESSDEV005' ).should ( 'have.value', 'ESSDEV005' )
        cy.xpath ( '//p-password[@id=\'password\']' ).type ( 'HFw3O3o98J' )
        cy.xpath('//body/app-root[1]/app-login[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/span[1]/button[1]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
    } )
    it ( 'Add reimburse ', function () {
        const reason ='Test Add Reimburse'
        const date = '27-04-2022'
        const amount = '500000'
        cy.xpath('//a[@id=\'Menu-Penggantian\']').click()
        cy.xpath('//a[@id=\'Menu-Penggantian-Pengajuan\']').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/reimburse/request/reimburse-request')
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-list[1]/div[1]/div[1]/div[2]/div[1]/btn-request[1]/button[1]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/reimburse/request/reimburse-request/add')
        cy.xpath('//span[contains(text(),\'Pilih Jenis\')]').click()
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-add[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-lov[1]/p-dropdown[1]/div[1]/div[3]/div[2]/ul[1]/p-dropdownitem[2]/li[1]').click()
            .should('contain', 'Medical')
        cy.xpath('//textarea[@id=\'reason\']').type(`${reason}`)
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-add[1]/div[1]/div[2]/div[2]/div[1]/div[1]/p-calendar[1]/span[1]/input[1]')
            .type('04-04-2022')
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-add[1]/div[1]/div[2]/div[4]').click({ force: true })
        cy.xpath('//p-inputnumber[@id=\'amount\']').type(`${amount}`)
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-add[1]/div[1]/div[1]/div[2]/div[1]/btn-save[1]/button[1]').click()
        cy.xpath('//body/app-root[1]/app-main[1]/div[1]/div[2]/div[1]/app-reimburse-reimburse-request-list[1]/div[1]/p-table[1]/div[1]/div[1]/div[1]/app-search[1]/div[1]/div[1]/div[1]/input[1]')
            .type(`${reason}{enter}`)
    } )
})
