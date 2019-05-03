import snowboardsApi from '../src/snowboard-api.js';

const test = QUnit.test;

const key = 'test-snowboards';
snowboardsApi.key = key;

test('round trip snowboard detail into localstorage', assert => {
    localStorage.removeItem(key);
    //Arrange
    const snowboard1 = { boardBrand: 'Arbor' };
    const snowboard2 = { boardBrand: 'Burton' };

    //Act
    snowboardsApi.save(snowboard1);
    snowboardsApi.save(snowboard2);
    const result = snowboardsApi.get(snowboard2.boardBrand);

    //Assert
    assert.deepEqual(result, snowboard2);
});

test('return an empty array if no snowboards in array', assert =>{
    //arrange
    localStorage.removeItem(key);
    const expected = [];
    //act
    const snowboards = snowboardsApi.getAll();
    //assert
    assert.deepEqual(expected, snowboards);
});

test('Given two snowboards return an array of snowboards from getAll', assert => {
    //arrange
    localStorage.removeItem(key);
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