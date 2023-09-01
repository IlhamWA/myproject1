const { given, when, then } = require('@badeball/cypress-cucumber-preprocessor');

given('i open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
})

when('i submit login', () => {
    cy.get('#user_login').type('username');
    cy.get('#user_password').type('password');
    cy.contains('Sign in').click()
})

then('i should see homepage', () => {
    cy.get('#homeMenu').should('be.visible');
    cy.get('#homeMenu').should('equal', 'Home');
})