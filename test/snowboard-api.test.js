import snowboardsApi from '../src/snowboard-api.js';

const test = QUnit.test;

snowboardsApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round trip snowboard detail into localstorage', assert => {
    //Arrange
    const snowboard = { brand: 'Arbor' };

    //Act
    snowboardsApi.save(snowboard);
    const result = snowboardsApi.get();

    //Assert
    assert.deepEqual(result, snowboard);
});



test('return an empty array if no snowboards in array', assert =>{
    //arrange
    testStorage.removeItem('snowboards');
    const expected = [];
    //act
    const snowboards = snowboardsApi.getAll();
    //assert
    assert.deepEqual(expected, snowboards);
});

test('Given two snowboards return an array of snowboards from getAll', assert => {
    //arrange
    testStorage.removeItem('snowboards');
    const snowboard1 = { brand: 'Arbor' };
    const snowboard2 = { brand: 'Burton' };
    snowboardsApi.save(snowboard1);
    snowboardsApi.save(snowboard2);
    const expected = [snowboard1, snowboard2];
    //act
    const result = snowboardsApi.getAll();
    //assert
    assert.deepEqual(result, expected);
});