import compression from 'compression';
import express from 'express';
import morgan from 'morgan';

import config from '../config';

const DEBUG = config.env !== 'production';
const server = express();

server.use(compression());
server.use(morgan(DEBUG ? 'dev' : 'combined'));

server.listen(config.server.port, () =>
  console.info(`Server running in ${server.get('env')} on port ${config.server.port}`) // eslint-disable-line no-console
);
