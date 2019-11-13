const chai = require('chai');
const expect = chai.expect;


describe('Tuya API', function() {
  it('should return a function', function() {
    const tuyaAPI = require('tuyapi');

    expect(tuyaAPI).to.be.a('Function');
  });
});


