const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const slideValDisplay = document.querySelector('.slide-val-display');
const clearBtn = document.querySelector('.clear');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('#rainbow');
const colorBtn = document.querySelector('#color-mode');
const eraserBtn = document.querySelector('#eraser');
const buttons = document.querySelectorAll('button');

const COLOR_MODE = 0;
const RAINBOW_MODE = 1;
const BACKGROUND_COLOR = '#ededed';

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

function refreashButtonColors() {
    buttons.forEach(button => {
        button.style.backgroundColor = BACKGROUND_COLOR;
        button.style.color = 'black';
    })
}

function alterButtonColors(button) {
    button.style.backgroundColor = 'black';
    button.style.color = BACKGROUND_COLOR;
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
rainbowBtn.addEventListener('click', (event) => {
    mode = RAINBOW_MODE;
    refreashButtonColors();
    alterButtonColors(event.target);
});
colorBtn.addEventListener('click', (event) => {
    mode = COLOR_MODE;
    color = colorPicker.value;
    refreashButtonColors();
    alterButtonColors(event.target);
});
eraserBtn.addEventListener('click', (event) => {
    mode = COLOR_MODE;
    color = 'white';
    refreashButtonColors();
    alterButtonColors(event.target);
})
clearBtn.addEventListener('click', (event) => {
    changeGrid(slider.value);
    refreashButtonColors();
    alterButtonColors(event.target);
});

slider.oninput = () => slideValDisplay.textContent = slider.value + ' x ' + slider.value;
slider.onchange = () => changeGrid(slider.value);

slideValDisplay.textContent = slider.value + ' x ' + slider.value;
createGrid(10);