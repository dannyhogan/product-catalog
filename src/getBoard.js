function getBoard(formData) {

    const boardWithBindings = formData.get('boardWithBindings') === 'yes';
    const boardQuality = parseInt(formData.get('boardQuality'));

    const boardEntry = {
        boardBrand: formData.get('boardBrand'),
        boardType: formData.get('boardType'),
        boardLength: formData.get('boardLength'),
        boardAge: formData.get('boardAge'),
        boardWithBindings: boardWithBindings,
        boardQuality: boardQuality,
        boardStyle: formData.get('boardStyle'),
        boardDescription: formData.get('boardDescription')
    };
    return boardEntry;
}

export default getBoard;