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

const makeBoardCells = {
    makeBrandCell: makeBrandCell,
    makeTextCell: makeTextCell
};

export default makeBoardCells;