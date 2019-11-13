const chai = require('chai');
const expect = chai.expect;

describe('Environment Tests', function() {
  it('should load from file if dev environment', function() {
    let {env, devices} = require('../src/env.js');
    if(env !== 'production'){
      expect(devices.length).to.be.at.least(2);
    }
  });
});
