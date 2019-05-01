import snowboardsApi from '../src/snowboard-api.js';

const test = QUnit.test;

test('round trip snowboard detail into localstorage', assert => {
    //Arrange
    const snowboardListing = { brand: 'Arbor' };

    //Act
    snowboardsApi.save(snowboardListing);
    const result = snowboardsApi.get();

    //Assert
    assert.deepEqual(result, snowboardListing);
});