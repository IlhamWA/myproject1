it('update user', () => {
    var ability = {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
    }

    cy.request('GET', 'https://pokeapi.co/api/v2/ability/7/', ability).then((Response) => {
        expect(Response.status).equal(200)
        expect(Response.body.name).to.eq(ability.name)
    })
});