describe('Cek field sarch, filter dan total data perpagge', () => {
    beforeEach( () =>{
        cy.visit ( 'https://dev-ess-umkm.linovhr.com/login' )
        cy.get('[id="_username"]').type ('ESSDEV005').should ('have.value', 'ESSDEV005')
        cy.get('[id="password"]').type ('HFw3O3o98J')
        cy.get('[id="buttonMasuk"]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
    })
    it ( 'Menampilkan halaman reimburse', function () {
        cy.get('[id="Menu-Penggantian"]').click()
        cy.get('[id="Menu-Penggantian-Pengajuan"]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/reimburse/request/reimburse-request')
        cy.wait(500)
    } );
    it ( 'Mengecek field searh ', function () {
        cy.get('[id="Menu-Penggantian"]').click()
        cy.get('[id="Menu-Penggantian-Pengajuan"]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/reimburse/request/reimburse-request')
        cy.get('[formcontrolname="inquiry"]').type('Test {enter}')
        cy.wait(500)
    } );
    it ( 'Mengecek data per page', function () {
        cy.get('[id="Menu-Penggantian"]').click()
        cy.get('[id="Menu-Penggantian-Pengajuan"]').click()
        cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/reimburse/request/reimburse-request')

        cy.get('[class="p-element p-datatable-tbody"]').find('tr').should('have.length', 10)
        cy.wait(100)
        cy.get('[class="p-paginator-icon pi pi-angle-right"]').click()
        cy.get('[class="p-element p-datatable-tbody"]').find('tr').should('have.length', 10)
    } );
})
