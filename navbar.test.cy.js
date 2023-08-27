
describe('navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')


    });

    it('should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html') 
    });

    it('should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });

});