const Koa = require('koa');
const app = new Koa();
const koaRoute = require('koa-route');
 
const { PORT } = process.env;

const pjson = require('../package.json');
const debug = require('debug')(`${pjson.name}:proxy-api`);

const fetchFromMarvel = require('./fetchFromMarvel');

// TODO: add config / 12factor-config

// const 

// TODO: create a route factory ? 

// response
app.use((ctx, next) => {
  debug('you are here');
  // ctx.body = 'Hello Koa';
  return next();
});

app.use(koaRoute.get('/', ctx => {
  debug('/ you are here');
  ctx.body = 'Hello koa';
}));

app.use(koaRoute.get('/comics', async ctx => {
  // ctx.body = 'comics data';
  const { request: { path }, query } = ctx;
  ctx.body = await fetchFromMarvel(path, query);
}));

app.listen(PORT);
debug(`listening on port ${PORT} `)
