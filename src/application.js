import getBoard from './getBoard.js';
const form = document.getElementById('boardForm');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(getBoard(formData));
});