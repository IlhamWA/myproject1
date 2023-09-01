const URL = 'http://zero.webappsecurity.com/login.html';
const username = '#user_login';
const password = '#user_password';
const Sign_in = 'Sign in';

class loginpage {
    static visit() {
        cy.visit(URL);
    }

    static fillusername(username) {
        cy.get(username).type(username);
    }

    static fillpassword(password) {
        cy.contains(Sign_in).click();
    }
}

export default loginpage;