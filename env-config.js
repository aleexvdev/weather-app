const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  BASE_URL: process.env.APP_BASE_URL,
  API_KEY: process.env.APP_API_KEY,
};
