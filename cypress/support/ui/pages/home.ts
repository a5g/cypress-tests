// Home Page object
class HomePage {
  userMenu: string = 'nav > div.col-md-4.col-sm-3.hidden-xs > div'

  getUserMenu() {
    return cy.get(this.userMenu)
  }
}

const homePage = new HomePage()

export default homePage
