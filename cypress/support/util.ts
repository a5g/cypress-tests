import { config, customConfig } from '../config/env'

export const getEnvironment = () => {
  return Cypress.env('env') || 'dev'
}

export const getTenant = () => {
  return Cypress.env('tenant') || 'kauveryhealthcare.com'
}
export const getConfig = () => {
  return config()
}

export const getCustomConfig = (config: string) => {
  return customConfig(config)
}

export const getTenantObject = () => {
  const config: any = getConfig()
  const tenantName: string = getTenant()
  let tenantObj = null

  for (let i: number = 0; i < config.tenants.length; i += 1) {
    console.log(i)

    console.log(config.tenants[i].tenantName)

    if (config.tenants[i].tenantName === tenantName) {
      tenantObj = config.tenants[i]
      break
    }
  }
  console.log('tenant obj: ', JSON.stringify(tenantObj))

  return tenantObj
}

export const genId = () => Math.round(Math.random() * 10000000)

export const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)
