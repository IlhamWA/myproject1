describe('working with inputs', () => {
    it('visit the web', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })

    it('shoud fill username', () => {
       cy.get('#user_login').clear()
       cy.get('#user_login').type('username')
        
    });

    it('should fill pasword', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')

    });

    it('should activate checkbox', () => {
        cy.get('#user_remember_me').click()
        
    });

    it('do it payment', () => {
        cy.get('#sp_payee').click()
        cy
    })

    it('should try login', () => {
       cy.fixture("user").then(user => {
        const username = user.username
        const username = user.password

        cy.login(username, password)

        cy.get('.alert-error').contains('Login and/or password are wrong.')

       }) 
    });
})