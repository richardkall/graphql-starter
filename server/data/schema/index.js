import { makeExecutableSchema } from 'graphql-tools';

import resolvers from '../resolvers';
import types from './types';

const schema = `
  type Query {
    user(id: ID!) : User
  }

  schema {
    query: Query
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    ...types,
    schema,
  ],
  resolvers,
});
