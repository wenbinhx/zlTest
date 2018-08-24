'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"debugger"',
  BASE_API: '"http://192.168.1.124"'
})
