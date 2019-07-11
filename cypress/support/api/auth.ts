import * as util from '../../support/util'

const config: any = util.getConfig()
const tenantObj: any = util.getTenantObject()

export const login = () => {
  console.log('config: ', JSON.stringify(config))

  const payload = {
    username: `${tenantObj.email}`,
    password: `${tenantObj.password}`,
  }

  return cy
    .log('auth/login (API)')
    .request({
      method: 'POST',
      url: `${config.host}/auth/login`,
      headers: {
        'content-type': 'application/json',
      },
      body: payload,
    })
    .its('body')
    .then((body) => {
      console.log('response:\n', JSON.stringify(body))

      return body
    })
}

export const logout = () => {
  return cy
    .log('auth/logout (API)')
    .request({
      method: 'POST',
      url: `${config.host}/auth/logout`,
      headers: {
        'content-type': 'application/json',
      },
    })
    .its('body')
    .then((body) => {
      return body
    })
}
