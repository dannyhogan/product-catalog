function getBoard(formData) {

    let boardWithBindings = formData.get('boardWithBindings');
    
    if(boardWithBindings) {
        boardWithBindings = 'Yes';
    } else {
        boardWithBindings = 'No';
    }

    const boardQuality = parseInt(formData.get('boardQuality'));

    // Creates an object based off the formData passed into the function
    const boardDetails = {
        boardBrand: formData.get('boardBrand'),
        boardType: formData.get('boardType'),
        boardLength: formData.get('boardLength'),
        boardAge: formData.get('boardAge'),
        boardWithBindings: boardWithBindings,
        boardQuality: boardQuality,
        boardStyle: formData.get('boardStyle'),
        boardDescription: formData.get('boardDescription')
    };
    return boardDetails;
}

export default getBoard;