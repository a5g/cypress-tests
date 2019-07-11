// coheremed api tests
import api from '../../support/api'
import * as util from '../../support/util'

describe('verify auth api', () => {
  it('should login/get access token', () => {
    api.auth.login().then((body) => {
      console.log('login response: ', JSON.stringify(body))
      const tenant = util.getTenantObject()
      expect(body.uuid).to.eq(tenant.uuid)
      expect(body.tenantName).to.eq(tenant.tenantName)
      expect(body.hospitalId).to.eq(tenant.hospitalId)
    })
  })

  it('should logout', () => {
    api.auth.logout().then((body) => {
      console.log('logout response: ', JSON.stringify(body))
      expect(body.sucess).to.eq(true)
    })
  })
})
