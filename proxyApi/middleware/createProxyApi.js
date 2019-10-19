'use strict';

const rp = require('request-promise');

const debug = require('../debug');

function createProxy(config) {
  const { baseUrl } = config;
  debug(`created api proxy for ${baseUrl}`);
  return async function fetchFromProxy(ctx) {
    const {
      method,
      request: { path: apiRoute },
      query: searchParams
    } = ctx;

    const { securityParams = {} } = ctx.auth || {};

    const options = {
      method,
      uri: `${baseUrl}${apiRoute}`,
      qs: {
        ...(searchParams || {}),
        ...securityParams
      },
      json: true
    };

    debug(`${method} ${options.uri}`);
    ctx.body = await rp(options)
      .then(results => {
        debug('fetch successful');
        return results;
      })
      .catch(error => {
        throw new Error(error);
      });
  };
}

module.exports = createProxy;
