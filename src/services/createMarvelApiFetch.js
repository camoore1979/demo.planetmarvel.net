const { REACT_APP_MARVEL_API_URL } = process.env;

export default function createMarvelApiFetch() {
  return async function fetchFromMarvelApi() {
    const response = await fetch(`${REACT_APP_MARVEL_API_URL}/comics`);
    //TODO: get fetch working in the deployed instance
    return response.json();
  };
}
