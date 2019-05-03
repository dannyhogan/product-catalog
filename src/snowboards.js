import snowboardsApi from './snowboard-api.js';

const tbody = document.getElementById('snowboards');

// Uses the getAll method to store all snowboards in a variable
const snowboards = snowboardsApi.getAll();

// Loops through each snowboard in the array and creates a table row
for(let i = 0; i < snowboards.length; i++) {
    let snowboard = snowboards[i];

    // Creates new row for each loop iteration
    const tr = document.createElement('tr');
    

    const brandCell = makeBrandCell(snowboard.boardBrand);
    tr.appendChild(brandCell);

    const typeCell = makeTextCell(snowboard.boardType);
    tr.appendChild(typeCell);

    const lengthCell = makeTextCell(snowboard.boardLength + ' cm');
    tr.appendChild(lengthCell);

    const ageCell = makeTextCell(snowboard.boardAge);
    tr.appendChild(ageCell);

    const boardWithBindingsCell = makeTextCell(snowboard.boardWithBindings);
    tr.appendChild(boardWithBindingsCell);
   
    const qualityCell = makeTextCell(snowboard.boardQuality + '/10');
    tr.appendChild(qualityCell);
   
    const styleCell = makeTextCell(snowboard.boardStyle);
    tr.appendChild(styleCell);
   
    const descriptionCell = makeTextCell(snowboard.boardDescription);
    tr.appendChild(descriptionCell);
    
    //Appends the row to the body of the table
    tbody.appendChild(tr);
}

function makeBrandCell(brand) {

    const brandCell = document.createElement('td');
    const link = document.createElement('a');

    const searchParams = new URLSearchParams();
    searchParams.set('brand', brand);
    link.href = 'board-details.html?' + searchParams.toString();
    link.textContent = brand;
    brandCell.appendChild(link);

    return brandCell;
}

function makeTextCell(board) {
    const newCell = document.createElement('td');
    newCell.textContent = board;
    return newCell;
}