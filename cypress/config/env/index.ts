import * as util from '../../support/util'
import dev from './dev'
import staging from './staging'
import prod from './prod'

const findConfig = (data: string) => {
  let config = {}

  switch (data) {
    case 'dev':
    default:
      config = dev
      break

    case 'staging':
      config = staging
      break

    case 'prod':
      config = prod
      break
  }

  return config
}

export const config = () => {
  return findConfig(util.getEnvironment())
}

export const customConfig = (en: string) => {
  return findConfig(en)
}
