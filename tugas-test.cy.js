cypress.commands.add('loginViaAPI', (
    email = cypress.env('userEmail'),
    password = cypress.env('userPassword')
) => {
    cy.request('POST', `${cypress.env('apiUrl')}/users/login`, {
        username: email,
        password,
    }).then((Response) => {
        cy.setCookie('sessionID', Response.body.sessionID)
        cy.setCookie('userId', Response.body.userId)
        cy.setCookie('userName', Response.body.userName)
        cy.visit('/#!/main')
    })
})