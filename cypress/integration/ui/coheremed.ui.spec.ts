// coheremed ui tests
import ui from '../../support/ui'
import * as util from '../../support/util'

const config: any = util.getConfig()
const tenant: any = util.getTenantObject()

describe('verify ui login', () => {
  it('should login to coheremed', () => {
    cy.visit(config.host)
    ui.login.enterEmail(tenant.email)
    ui.login.enterPassword(tenant.password)
    ui.login.clickLoginBtn()
    ui.home.getUserMenu().within(() => {
      cy.contains('span', 'Hospital').should('be.visible')
    })
    cy.wait(1000)
  })

  it('should logout', () => {
    ui.home.getUserMenu().within(() => {
      cy.get('ul.navbar-nav')
        .click({ force: true })
        .find('ul.dropdown-menu')
        .click({ force: true })
        // .trigger('mouseover')
        // .wait(500)
        .contains('a', 'Sign out')
        .click({ force: true })
    })
    ui.login.getEmailText().should('be.visible')
  })
})
