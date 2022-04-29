describe('Menu reimburse', () => {
    beforeEach ( () => {
        cy.login('ESSDEV005','HFw3O3o98J')
        cy.title('Linovhr')
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
        // cy.xpath('//span[contains(text(),\'Pilih Jenis\')]').click()
        cy.get('[id="rmbType"]').click()
        cy.get('li[aria-label=Bisnis]').eq(0).click();
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
