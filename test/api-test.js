const chai = require('chai');
const tuyaAPI = require('tuyapi');

const { expect } = chai;


describe('Tuya API', function () {
  it('should return a function', function () {
    expect(tuyaAPI).to.be.a('Function');
  });
});
