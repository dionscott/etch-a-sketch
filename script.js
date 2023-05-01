const container = document.querySelector('#container');

function createGrid(rowsAndColumns = 16) {
    let squares = rowsAndColumns
//create number of rows
    for (let x = 0; x < squares; x++) {
        let grid = document.createElement('div');
        grid.classList.add('row');
        container.appendChild(grid)
    }

    let rows = document.querySelectorAll('.row');

    // create columns
    for (const row of rows) {
        for (let x = 0; x < squares; x++) {
            let column = document.createElement('div');
            column.classList.add('grid', 'column');
            row.appendChild(column)
        }
    }
    paint();
}

function change() {
    this.classList.toggle("change")
}
function paint() {
    let grids = document.querySelectorAll('.grid')

    for (const grid of grids) {
        grid.addEventListener("mouseover", change);
    }
}


function remove() {

    let grids = document.querySelectorAll('.grid')
    //remove columns
    for (const grid of grids) {
        grid.remove();
    }
    //find rows
    let rows = document.querySelectorAll('.row');
    //remove rows
    for (const row of rows) {
        row.remove();
    }
}

createGrid();

function changeSize() {
    let number = prompt("How many?", "16")
    return number;
}

function resetGrid() {
    let squares = changeSize();
    remove();
    createGrid(squares);
}
let button = document.querySelector('#change-size');
button.addEventListener('click', resetGrid)
