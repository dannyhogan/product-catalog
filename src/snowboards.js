import snowboardsApi from './snowboard-api.js';
import makeBoardCells from './makeBoardCells.js';

const tbody = document.getElementById('snowboards');

// Uses the getAll method to store all snowboards in a variable
const snowboards = snowboardsApi.getAll();

// Loops through each snowboard in the array and creates a table row
for(let i = 0; i < snowboards.length; i++) {
    let snowboard = snowboards[i];

    // Creates new row for each loop iteration
    const tr = document.createElement('tr');
    const brandCell = makeBoardCells.makeBrandCell(snowboard.boardBrand);
    const typeCell = makeBoardCells.makeTextCell(snowboard.boardType);
    const lengthCell = makeBoardCells.makeTextCell(snowboard.boardLength + ' cm');
    const ageCell = makeBoardCells.makeTextCell(snowboard.boardAge);
    const boardWithBindingsCell = makeBoardCells.makeTextCell(snowboard.boardWithBindings);
    const qualityCell = makeBoardCells.makeTextCell(snowboard.boardQuality + '/10');
    const styleCell = makeBoardCells.makeTextCell(snowboard.boardStyle);
    const descriptionCell = makeBoardCells.makeTextCell(snowboard.boardDescription);
    
    tr.appendChild(brandCell);
    tr.appendChild(typeCell);
    tr.appendChild(lengthCell);
    tr.appendChild(ageCell);
    tr.appendChild(boardWithBindingsCell);
    tr.appendChild(qualityCell);
    tr.appendChild(styleCell);
    tr.appendChild(descriptionCell);
    
    //Appends the row to the body of the table
    tbody.appendChild(tr);
}
