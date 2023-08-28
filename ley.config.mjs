import { setEnvironmentVariables } from './util/config.mjs';

setEnvironmentVariables();

const options = {
  ssl: true,
  sslmode: 'require',
};

export default options;
