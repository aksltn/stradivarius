// Variables
const canvasWidth = 500;
const canvasHeight = 500;
const pixelSize = 10;

// Element selection
const canvas = document.getElementById('canvas');

canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);

const ctx = canvas.getContext('2d');    

// Dimensioning
const pixelHeight = canvas.height;
const pixelWidth = canvas.width;    

const gridHeight = pixelHeight / pixelSize;
const gridWidth = pixelWidth / pixelSize;   

// Functions
function generate() {
    let grid = [];
    for (let y = 0; y < gridHeight; y++) {
        let row = [];
        for (let x = 0; x < gridWidth; x++) {
            row.push(Math.round(Math.random())); // Plug formula here
        }
        grid.push(row);
    }
    return grid;
}

function draw(grid) {
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            let data = grid[y][x];

            // plug color and image selection here
            let value = `rgb(${data * 255}, ${data * 255}, ${data * 255})`; 
            
            ctx.fillStyle = value;
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}

draw(generate());