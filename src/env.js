const dotenv = require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  devices: JSON.parse(process.env.DEVICES)
};
