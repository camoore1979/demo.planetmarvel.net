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

log.debug(`app is running in NODE_ENV === "${process.env.NODE_ENV}" mode`);
log.debug('config loaded: ', config);

export default config;
