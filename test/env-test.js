const chai = require('chai');
const expect = chai.expect;

describe('Environment Tests', function() {
  it('should load from file if dev environment', function() {
    if(process.env.NODE_ENV !== 'production'){
      expect(process.env.DEVICES.length).to.be.at.least(2);
    }
  });
});
