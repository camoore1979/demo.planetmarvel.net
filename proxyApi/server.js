const Koa = require('koa');
const app = new Koa();
const koaRoute = require('koa-route');
const rp = require('request-promise');
 
const { PORT } = process.env;

const pjson = require('../package.json');
const debug = require('debug')(`${pjson.name}:proxy-api`);

// TODO: add config / 12factor-config

// const 

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

app.use(koaRoute.get('/comics', ctx => {
  ctx.body = 'comics data';
}));

app.listen(PORT);
debug(`listening on port ${PORT} `)
