import log from 'loglevel';
import getApiUrl from '../helpers/getApiUrl';

export default function createMarvelApiFetch(config) {
  const { apiPublicKey: apikey, marvelApiUrl: apiRoot } = config;
  const authParams =
    process.env.NODE_ENV === 'production' && apikey
      ? {
          apikey
        }
      : {};

  return async function fetchFromMarvelApi(path, options) {
    const url = getApiUrl({ path, apiRoot, authParams, ...options });
    log.debug(`fetchFromMarvelApi() GET ${url}`);
    const response = await fetch(url);
    return response.json();
  };
}
