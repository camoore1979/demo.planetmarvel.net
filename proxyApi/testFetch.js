const fetchFromMarvel = require("./fetchFromMarvel");

async function testFetch() {
  const results = await fetchFromMarvel();
  console.log(results);
}

testFetch();
