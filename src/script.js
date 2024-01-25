const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');
const slideValDisplay = document.querySelector('.slide-val-display');
const clearBtn = document.querySelector('.clear');
const colorPicker = document.querySelector('#color-picker');

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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeGrid(n) {
    removeAllChildNodes(grid);
    createGrid(n);
}

function changeColorOnHover(event) {
    const cell = event.target;
    cell.style.backgroundColor = color;
}


slider.oninput = () => slideValDisplay.textContent = slider.value;
slider.onchange = () => changeGrid(slider.value);

colorPicker.addEventListener('input', (event) => color = event.target.value);

clearBtn.addEventListener('click', () =>
    changeGrid(slider.value));

let color = 'black';
slideValDisplay.textContent = slider.value;
createGrid(16);