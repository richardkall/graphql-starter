import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import schema from './data/schema';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(compression());
app.use(morgan(isProduction ? 'combined' : 'dev'));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

if (!isProduction) {
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

app.listen(port, console.info(`GraphQL Server running on port ${port}`)); // eslint-disable-line no-console
