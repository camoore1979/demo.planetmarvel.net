'use strict';

const debug = require('./debug');
const Koa = require('koa');
const cors = require('@koa/cors');

// const { PORT, API_PUBLIC_KEY, API_PRIVATE_KEY, API_ROOT } = process.env;

const { port, apiPublicKey, apiPrivateKey, apiRoot } = require('./config');
const createApiAuthMiddleware = require('./middleware/createApiAuthMiddleware');
const createProxyApi = require('./middleware/createProxyApi');

const app = new Koa();

app.use(cors());

// handle call to root
app.use((ctx, next) => {
  if (ctx.method === 'GET' && ctx.request.path === '/') {
    ctx.body = 'proxy-api says \'hello!\'';
  } else {
    return next();
  }
});

app.use(createApiAuthMiddleware({ apiPublicKey, apiPrivateKey }));

app.use(
  createProxyApi({
    baseUrl: apiRoot
  })
);

app.listen(port);
debug(`listening on port ${port} `);
