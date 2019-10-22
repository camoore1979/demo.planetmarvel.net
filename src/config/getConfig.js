import config from '12factor-config';

export default function getConfig() {
  return config({
    appTitle: {
      env: 'REACT_APP_TITLE',
      type: 'string',
      default: 'Planet Marvel',
      required: false
    },
    apiPublicKey: {
      env: 'REACT_APP_MARVEL_API_KEY',
      type: 'string',
      required: process.env.NODE_ENV === 'production' && process.env.REACT_APP_ENV === 'production'
    },
    logLevel: {
      env: 'REACT_APP_LOG_LEVEL',
      type: 'string',
      required: false
    },
    marvelApiUrl: {
      env: 'REACT_APP_MARVEL_API_URL',
      type: 'string',
      required: true
    }
  });
}
