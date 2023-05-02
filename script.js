const container = document.querySelector('#container');

function createGrid(rowsAndColumns = 16) {
    let squares = rowsAndColumns
    changeDimension(squares);
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

//darkens the color by lowering brightness
function darkenColor(string) {
    //remove last four characters of string
    let incompleteColor = string.slice(0, -4);
    //returns the first number of the brightness
    let brightness = string.substr(11, 1);
    newBrightness = (Number(brightness) - 1).toString();
    let result = string.replace(brightness, newBrightness);
    return result; 
}

function change() {
    styles = this.style.backgroundColor
    if (styles) {
        if (this.style.filter) {
            this.style.filter = darkenColor(this.style.filter)
        } else {
            this.style.filter = "brightness(90%)"
        }
    } else {
        this.style.backgroundColor = randomColor();
    }
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

function changeSize() {
    let number = prompt("How many squares per side would you like?", "Please input a number between 1 and 100")
    return number;
}

function resetGrid() {
    let squares = changeSize();
    //checks if the squares value is valid
    if ((Number(squares) <= 100) && (Number(squares) > 0)) {
        remove();
        createGrid(squares);
    } else {
        //if not do nothing and alert the user to try again
        alert("You did not input a number between 1 and 100. Try again.")
    }
}

function changeDimension(sides) {
    let dimension = document.querySelector('#dimensions')
    dimension.innerHTML = sides + ' X ' + sides 
}

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let bgColor = "rgb(" + x + "," + y + ","+ z + ")";
    return bgColor;
}

createGrid();
let button = document.querySelector('#change-size');
button.addEventListener('click', resetGrid)
