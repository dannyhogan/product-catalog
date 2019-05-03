import getBoard from '../src/getBoard.js';
const test = QUnit.test;

test('returns form details in an object based off form', assert => {
    //arrange
    const expected = {
        boardBrand: 'Arbor',
        boardType: 'Rocker',
        boardLength: '164',
        boardWithBindings: true,
        boardQuality: 10,
        boardStyle: 'Rocker',
        boardDescription: ''
    };

    //act
    const formData = new FormData();
    formData.set('boardBrand', expected.boardBrand);
    formData.set('boardType', expected.boardType);
    formData.set('boardLength', expected.boardLength);
    formData.set('boardWithBindings', 'yes');
    formData.set('boardQuality', 10);
    formData.set('boardStyle', expected.boardStyle);
    formData.set('boardDescription', expected.boardDescription);

    const result = getBoard(formData);

    //assert
    assert.deepEqual(result, expected);
});