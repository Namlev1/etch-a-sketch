const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const slideValDisplay = document.querySelector('.slide-val-display');
const clearBtn = document.querySelector('.clear');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#rainbow');
const colorBtn = document.querySelector('#color-mode');

const COLOR_MODE = 0;
const RAINBOW_MODE = 1;

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < n; j++) {
            addCell(row);
        }
        grid.appendChild(row);
    }
}

function addCell(row) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', changeColorOnHover);
    row.appendChild(cell);
}

function changeGrid(n) {
    removeAllChildNodes(grid);
    createGrid(n);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let color = 'black';
colorPicker.addEventListener('input', (event) => color = event.target.value);

function changeColorOnHover(event) {
    if (mode == RAINBOW_MODE)
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const cell = event.target;
    cell.style.backgroundColor = color;
}

let mode = COLOR_MODE;
rainbowBtn.addEventListener('click', () => mode = RAINBOW_MODE);
colorBtn.addEventListener('click', () => {
    mode = COLOR_MODE;
    color = colorPicker.value;
});

clearBtn.addEventListener('click', () =>
    changeGrid(slider.value));
slider.oninput = () => slideValDisplay.textContent = slider.value;
slider.onchange = () => changeGrid(slider.value);

slideValDisplay.textContent = slider.value;
createGrid(16);