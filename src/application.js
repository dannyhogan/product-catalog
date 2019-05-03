import getBoard from './getBoard.js';

//Imports form from HTML.
const form = document.getElementById('boardForm');

// Gets DOM elements for range slider and label.
const boardQuality = document.getElementById('boardQuality');
const boardQualityLabel = document.getElementById('boardQualityLabel');

// Sets the label equal to range slider value to display quality.
boardQuality.addEventListener('change', function() {
    boardQualityLabel.textContent = boardQuality.value + '/10';
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(getBoard(formData));
});