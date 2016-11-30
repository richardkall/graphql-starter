import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { DATABASE_URI, ENV, PORT } from '../config/server';
import schema from './data/schema';

const isProduction = ENV === 'production';
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(DATABASE_URI);

app.use(cors());
app.use(compression());
app.use(morgan(isProduction ? 'combined' : 'dev'));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

if (!isProduction) {
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

app.listen(PORT, () => {
  console.info(`GraphQL Server running on port ${PORT}`); // eslint-disable-line no-console
});
