const getmd5Hash = require("./getmd5Hash");

const MARVEL_API_PUBLIC_KEY = "7436c621bff054b7fea5028096cc3ae0";
const MARVEL_API_PRIVATE_KEY = "4eeb6033568625c3983ee43f19a437a63cfb4ddd";

const MARVEL_API_ROOT = "https://gateway.marvel.com/v1/public/";

// TODO: create a fetcher factory?
// const apiRoute = "comics";

const rp = require("request-promise");

const fetchFromMarvel = async (apiRoute, searchParams) => {
  const ts = Math.floor(Date.now() / 1000);

  const hashData = `${ts}${MARVEL_API_PRIVATE_KEY}${MARVEL_API_PUBLIC_KEY}`;
  console.log(`hashData: ${hashData}`);
  const hash = getmd5Hash(hashData);
  const securityParams = {
    ts,
    apikey: MARVEL_API_PUBLIC_KEY,
    hash
  };

  const options = {
    uri: `${MARVEL_API_ROOT}${apiRoute}`,
    qs: {
      ...searchParams,
      ...securityParams
    },
    json: true
  };

  return rp(options);
};

module.exports = fetchFromMarvel;
