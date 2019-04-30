import getBoard from './getBoard.js';
const form = document.getElementById('boardForm');

const boardQuality = document.getElementById('boardQuality');
const boardQualityLabel = document.getElementById('boardQualityLabel');

boardQuality.addEventListener('change', function() {
    boardQualityLabel.textContent = boardQuality.value + '/10';
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(getBoard(formData));
});