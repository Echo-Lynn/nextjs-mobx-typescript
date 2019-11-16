const config = require('./config')
// Get process DEPLOY_ENV value
const DEPLOY_ENV = process.env.DEPLOY_ENV || 'dev'

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    secret: 'secret',
  },
  // Use which config file according to DEPLOY_ENV
  publicRuntimeConfig: config[DEPLOY_ENV]
}
