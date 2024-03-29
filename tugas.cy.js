describe('My first test', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('http://example.cypress.io') 
    cy.pause()
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  })
})






