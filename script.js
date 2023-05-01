const container = document.querySelector('#container');

//initialize a number for boxes

let squares = 20;



//create number of rows
for (let x = 0; x < squares; x++) {
    let grid = document.createElement('div');
    grid.classList.add('row');
    container.appendChild(grid)
}

let rows = document.querySelectorAll('.row');

for (const row of rows) {
    for (let x = 0; x < squares; x++) {
        let column = document.createElement('div');
        column.classList.add('grid', 'column');
        row.appendChild(column)
    }
}


function change() {
    this.classList.toggle("change")
}

let grids = document.querySelectorAll('.grid')

for (const grid of grids) {
    grid.addEventListener("mouseover", change);
    console.log(this)
    // grid.style.minWidth = percentage + "%";
}



