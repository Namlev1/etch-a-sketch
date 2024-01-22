function createGrid(n) {
    const div = document.querySelector('.grid');

    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', changeColorOnHover);
            row.appendChild(cell);
        }
        div.appendChild(row);
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeGrid(n) {
    const div = document.querySelector('.grid');
    removeAllChildNodes(div);
    createGrid(n);

}

function changeColorOnHover(event) {
    const cell = event.target;
    cell.style.backgroundColor = 'black';
}

let slider = document.querySelector('.slider');
let slideValue = document.querySelector('.slide-value');
slideValue.textContent = slider.value;

slider.oninput = () => slideValue.textContent = slider.value;
slider.onchange = () => changeGrid(slider.value);

createGrid(16);