const container = document.querySelector('#container');

//make 256 divs and append them to container div
for (x = 0; x < 256; x++) {
    let grid = document.createElement('div');
    grid.className = 'grid';
    grid.textContent = 'x';
    container.appendChild(grid)
}

