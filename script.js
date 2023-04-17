const container = document.querySelector('#container');

//make 256 divs and append them to container div
for (x = 0; x < 256; x++) {
    let grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid)
}

function change() {
    this.classList.toggle("change")
}

let grids = document.querySelectorAll('.grid')

for (const grid of grids) {
    grid.addEventListener("mouseover", change)
}



