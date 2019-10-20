import config from '12factor-config';

export default function getConfig() {
  return config({
    logLevel: {
      env: 'REACT_APP_LOG_LEVEL',
      type: 'string',
      required: false
    },
    apiPublicKey: {
      env: 'API_PUBLIC_KEY',
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

