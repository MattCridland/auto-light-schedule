const { expect } = require('chai');
const sinon = require('sinon');
const TuyaAPI = require('tuyapi');
const LightController = require('../src/lights/light-controller.js');

describe('Light Controller Tests', function () {
  const args = {
    id: 'xxxxxxxxxxxxxxxxxxxx',
    key: 'xxxxxxxxxxxxxxxx',
  };
  it('should create api with id & key', function () {
    // Expect the constructor to be called once with our defined args
    const mockCon = sinon.mock(TuyaAPI);
    mockCon.expects('constructor').once().withArgs(args);

    const light = new LightController(args);
    expect(light).to.be.a('Object');

    mockCon.verify();
    mockCon.restore();
  });

  it('should attempt to find our light and connect to it', function () {
    const mockConnect = sinon.mock(TuyaAPI);
    mockConnect.expects('connect').once();
    const findStub = sinon.stub(TuyaAPI, 'find').resolves(true);
    const light = new LightController(args);

    light.start();

    sinon.assert.calledOnce(findStub);
    mockConnect.verify();
    mockConnect.restore();
  });
});
