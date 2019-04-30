function getBoard(formData) {

    const boardWithBindings = formData.get('boardWithBindings') === 'yes';

    const boardEntry = {
        boardBrand: formData.get('boardBrand'),
        boardType: formData.get('boardType'),
        boardLength: formData.get('boardLength'),
        boardWithBindings: boardWithBindings,
        boardStyle: formData.get('boardStyle'),
        boardDescription: formData.get('boardDescription')
    };
    return boardEntry;
}

export default getBoard;