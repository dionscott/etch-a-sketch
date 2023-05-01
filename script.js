const container = document.querySelector('#container');

//initialize a number for boxes




function createGrid(rowsAndColumns) {
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
}

createGrid(25);

function change() {
    this.classList.toggle("change")
}

let grids = document.querySelectorAll('.grid')

for (const grid of grids) {
    grid.addEventListener("mouseover", change);
}

function remove() {
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


