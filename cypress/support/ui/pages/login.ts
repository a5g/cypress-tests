// Login Page object
class LoginPage {
  emailText: string = 'input[placeholder="Email"]'
  passwordText: string = 'input[placeholder="Password"]'
  loginBtn: string = 'button[type="submit"]'

  getEmailText() {
    return cy.get(this.emailText)
  }

  enterEmail(email: string) {
    cy.get(this.emailText).type(email)
  }

  enterPassword(password: string) {
    cy.get(this.passwordText).type(password)
  }

  clickLoginBtn() {
    cy.get(this.loginBtn).click()
  }
}

const loginPage = new LoginPage()

export default loginPage
