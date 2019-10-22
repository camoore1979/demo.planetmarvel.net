import log from 'loglevel';
import config from '../config/config';
import { name, repository, version, author } from '../utils/appInfo';
const { appTitle = 'Planet Marvel' } = config;

function printApiInfo() {
  log.info(
    `The ${appTitle} website (${name} v${version}) is a demo application made by ${author}. For more, visit ${
      repository.url
    } `
  );
}

export default printApiInfo;
