import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import {
  apolloExpress,
  graphiqlExpress
} from 'apollo-server';

import config from '../config';
import schema from './data/schema';

const DEBUG = config.env !== 'production';
const server = express();

server.use(cors());
server.use(compression());
server.use(morgan(DEBUG ? 'dev' : 'combined'));

server.use('/graphql', bodyParser.json(), apolloExpress({
  schema
}));

if (DEBUG) {
  server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));
}

server.listen(config.server.port, () =>
  console.info(`Server running in ${server.get('env')} on port ${config.server.port}`) // eslint-disable-line no-console
);
