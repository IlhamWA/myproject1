describe('validate header', () => {
    it('succesfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
             .should('include', 'application/json; charset=utf-8')
    });
    
   // cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', ability).then((Response) => {
      //  expect(Response.status).equal(200)
        //expect(Response.body.ability).to.equal(200)
   // })
});