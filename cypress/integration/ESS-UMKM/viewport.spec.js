const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

describe('Cek viewport', () => {
    context('iphone-6 resolution', () => {
        beforeEach( () =>{
            cy.login('ESSDEV005','HFw3O3o98J')
            cy.title('Linovhr')
            cy.viewport('iphone-6')
        })
        it('Tampilan di iphone 6', () => {
            cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
            cy.wait(5000)
          });
    })
    context('ipad-2 resolution', () => {
        beforeEach( () =>{
            cy.login('ESSDEV005','HFw3O3o98J')
            cy.title('Linovhr')
            cy.viewport('ipad-2')
        })
        it('Tampilan di ipad-2', () => {
            cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
            cy.wait(5000)
          });
    })
    context('ipad-mini resolution', () => {
        beforeEach( () =>{
            cy.login('ESSDEV005','HFw3O3o98J')
            cy.title('Linovhr')
            cy.viewport('ipad-mini')
        })
        it('Tampilan di ipad-mini', () => {
            cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
            cy.wait(5000)
          });
    })
    context('iphone-3 resolution', () => {
        beforeEach( () =>{
            cy.login('ESSDEV005','HFw3O3o98J')
            cy.title('Linovhr')
            cy.viewport('iphone-3')
        })
        it('Tampilan di iphone-3', () => {
            cy.url().should('contain', 'https://dev-ess-umkm.linovhr.com/dashboard')
            cy.wait(5000)
          });
    })
})
