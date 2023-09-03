describe('create new user', () => {
    it('succesfuly create new user', () => {
        var user = {
            "name": "Eduwork",
            "job": "Education"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user).then((Response) => {
            expect(Response.status).equal(201)
        });

        it('should check correct url', () => {
            cy.url().should('include', 'https://reqres.in/api/users');
        });
    });
});