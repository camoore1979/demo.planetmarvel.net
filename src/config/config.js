import log from 'loglevel';

import getConfig from './getConfig';

let config;
try {
  config = getConfig();
} catch (ex) {
  console.error(ex);
}

// set logging level, for more see: https://github.com/pimterry/loglevel
log.setLevel(config.logLevel || 'error');

export default config;
