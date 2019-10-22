import log from 'loglevel';
import getApiUrl from '../helpers/getApiUrl';

export default function createMarvelApiFetch(config) {
  const { apiPublicKey: apikey, marvelApiUrl: apiRoot } = config;
  const authParams =
    process.env.NODE_ENV === 'production' &&
    process.env.REACT_APP_ENV === 'production' &&
    apikey
      ? {
          apikey
        }
      : {};

  /**
   * @function fetchFromMarvelApi
   * @description creates a wrapper around Fetch configured to hit the Marvel API
   * @param {string} [path] api endpoint to hit, e.g. '/comics
   * @param {object} [options]
   * @param {string} [options.id] id of resource to fetch
   * @param {object} [options.searchParams] any search params to add to query string
   * @returns {*} results of fetch
   */
  return async function fetchFromMarvelApi(path, options) {
    const url = getApiUrl({ path, apiRoot, authParams, ...options });
    log.debug(`fetchFromMarvelApi() GET ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    log.debug(`fetchFromMarvelApi() fetched data from ${url}: `, data);
    return data;
  };
}
