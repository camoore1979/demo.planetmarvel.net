import qs from 'qs';

/**
 * @function getApiUrl
 * @description creates a full URI string to fetch from an API
 * @param {object} options
 * @param {string} options.apiRoot api root url, includes http protocal, hostname, any root path
 * e.g. https://developer.marvel.com/v1/api
 * @param {object} [options.authParams] any auth params to add to query string, e.g. { apikey: '.... }
 * @param {string} [options.id] id of resource to fetch
 * @param {string} [options.path] api endpoint to hit, e.g. '/comics
 * @param {object} [options.searchParams] any search params to add to query string
 * @returns {string} full URI string
 */
const getApiUrl = ({ apiRoot, authParams, id, path, searchParams }) => {
  if (!apiRoot) throw new Error('apiRoot is required!');
  const idSlug = id ? `/${id}` : '';
  const queryParams = {
    ...(authParams || {}),
    ...(searchParams || {})
  };
  const query = qs.stringify(queryParams);
  const queryString = query ? `?${query}` : '';
  const fullUri = `${apiRoot}${path ? path : ''}${idSlug}${queryString}`;
  return fullUri;
};

export default getApiUrl;
