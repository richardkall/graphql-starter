const {
  MONGODB_URI,
  NODE_ENV,
  PORT,
} = process.env;

export default {
  env: NODE_ENV || 'development',
  database: {
    uri: MONGODB_URI || 'mongodb://localhost/apollo-starter',
  },
  server: {
    port: PORT || 5000,
  },
};
