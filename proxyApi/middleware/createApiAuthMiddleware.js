'use strict';

const debug = require('../debug');
const getmd5Hash = require('../lib/getmd5Hash');

module.exports = function createApiAuthMiddleware(config) {
  const { apiPublicKey, apiPrivateKey } = config;
  return function apiAuthMiddleware(ctx, next) {
    const ts = Math.floor(Date.now() / 1000);
    const hashData = `${ts}${apiPrivateKey}${apiPublicKey}`;
    const hash = getmd5Hash(hashData);

    ctx.auth = {
      securityParams: {
        ts,
        apikey: apiPublicKey,
        hash
      }
    };
    debug('apiAuthMiddleware(): ctx.auth is set with security params');
    return next();
  };
};
