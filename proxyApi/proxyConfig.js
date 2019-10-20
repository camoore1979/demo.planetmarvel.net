'use strict';

const config = require('12factor-config');

module.exports = config({
  port: {
    env: 'PORT',
    type: 'integer',
    required: true
  },
  apiPublicKey: {
    env: 'API_PUBLIC_KEY',
    type: 'string',
    required: true
  },
  apiPrivateKey: {
    env: 'API_PRIVATE_KEY',
    type: 'string',
    required: true
  },
  apiRoot: {
    env: 'API_ROOT',
    type: 'string',
    required: true
  }
});
