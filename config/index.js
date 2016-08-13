const {
  NODE_ENV,
  PORT
} = process.env;

export default {
  env: NODE_ENV || 'development',
  server: {
    port: PORT || 5000
  }
};
