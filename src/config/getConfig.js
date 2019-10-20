import config from '12factor-config';

export default function getConfig() {
  return config({
    logLevel: {
      env: 'REACT_APP_LOG_LEVEL',
      type: 'string',
      required: false
    },
    apiPublicKey: {
      env: 'REACT_APP_MARVEL_API_KEY',
      type: 'string',
      required: process.env.NODE_ENV === 'production'
    },
    marvelApiUrl: {
      env: 'REACT_APP_MARVEL_API_URL',
      type: 'string',
      required: true
    }
  });
}
