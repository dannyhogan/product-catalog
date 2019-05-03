import getBoard from './getBoard.js';
import snowboardsApi from './snowboard-api.js';

//Imports form from HTML
const form = document.getElementById('boardForm');

// Gets DOM elements for range slider and label
const boardQuality = document.getElementById('boardQuality');
const boardQualityLabel = document.getElementById('boardQualityLabel');

// Sets the label equal to range slider value to display quality
boardQuality.addEventListener('change', function() {
    boardQualityLabel.textContent = boardQuality.value + '/10';
});

form.addEventListener('submit', event => {
    event.preventDefault();

    // Creates form from DOM element
    const formData = new FormData(form);

    // Converts board entry to object from formData
    const snowboard = getBoard(formData);

    // Saves the snowboard object to snowboardsApi
    snowboardsApi.save(snowboard);

    // Redirects user to thank you page upon submitting
    window.location = './thank-you.html';
});