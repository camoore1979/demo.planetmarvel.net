import getApiUrl from './getApiUrl';

describe('getApiUrl()', () => {
  test('asdf', () => {
    const url = getApiUrl({ apiRoot: 'http://www.someapi.com' });
    expect(url).toEqual('http://www.someapi.com');
  });

  test('returns full URI with root, id, searchParams, authParams', () => {
    const url = getApiUrl({
      id: '1234',
      searchParams: { title: 'Captain America' },
      authParams: { apikey: 'a1b2c3' },
      apiRoot: 'http://www.someapi.com',
      path: '/comics'
    });
    expect(url).toEqual(
      'http://www.someapi.com/comics/1234?apikey=a1b2c3&title=Captain%20America'
    );
  });
});
