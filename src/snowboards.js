import snowboardsApi from './snowboard-api.js';

const tbody = document.getElementById('snowboards');

// Uses the getAll method to store all snowboards in a variable
const snowboards = snowboardsApi.getAll();

// Loops through each snowboard in the array and creates a table row
for(let i = 0; i < snowboards.length; i++) {
    let snowboard = snowboards[i];

    // Creates row for each loop iteration
    const tr = document.createElement('tr');
    
    // Creates TD cell and sets the text content
    const brandCell = document.createElement('td');
    brandCell.textContent = snowboard.boardBrand;
    tr.appendChild(brandCell);

    // Creates TD cell and sets the text content
    const typeCell = document.createElement('td');
    typeCell.textContent = snowboard.boardType;
    tr.appendChild(typeCell);

    // Creates TD cell and sets the text content
    const lengthCell = document.createElement('td');
    lengthCell.textContent = snowboard.boardLength;
    tr.appendChild(lengthCell);

    // Creates TD cell and sets the text content
    const ageCell = document.createElement('td');
    ageCell.textContent = snowboard.boardAge;
    tr.appendChild(ageCell);
   
    // Creates TD cell and sets the text content
    const boardWithBindingsCell = document.createElement('td');
    boardWithBindingsCell.textContent = snowboard.boardWithBindings;
    tr.appendChild(boardWithBindingsCell);
   
    // Creates TD cell and sets the text content
    const qualityCell = document.createElement('td');
    qualityCell.textContent = snowboard.boardQuality;
    tr.appendChild(qualityCell);
   
    // Creates TD cell and sets the text content
    const styleCell = document.createElement('td');
    styleCell.textContent = snowboard.boardStyle;
    tr.appendChild(styleCell);
   
    // Creates a new TD cell and sets the text content
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = snowboard.boardDescription;
    tr.appendChild(descriptionCell);
    
    //Appends the row to the body of the table
    tbody.appendChild(tr);
}