const gridMaker = document.querySelector(".grid-maker");
gridMaker.addEventListener("click", createGrid);

function createGrid() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const cols = prompt("How many cols do you want?(max: 100)", 0);
    const rows = prompt("How many rows do you want?(max: 100)", 0);
    if (cols > 100 || cols <= 0 || rows > 100 || rows <= 0) return;
    for (let col = 0; col < cols; col++) {
        const colElement = document.createElement("div");
        colElement.classList.add("col");
        container.appendChild(colElement);
        for (let row = 0; row < rows; row++) {
            const rowElement = document.createElement("div");
            rowElement.classList.add("row");
            colElement.appendChild(rowElement);
        }
    }
    generateEffect();
}

function generateEffect() {
    const cells = document.querySelectorAll(".row");
    cells.forEach(cell => cell.addEventListener("mouseenter", generateRandomColor))
}

function generateRandomColor() {
    this.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    return `rgb(${r}, ${g}, ${b})`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}