const chai = require('chai');
const { env, devices } = require('../src/env.js');

const { expect } = chai;

describe('Environment Tests', function () {
  it('should load from file if dev environment', function () {
    if (env !== 'production') {
      expect(devices.length).to.be.at.least(2);
    }
  });
});
