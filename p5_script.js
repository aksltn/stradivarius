// Variables
const gridWidth = 50;
const gridHeight = 50;

const pixelSize = 10;

let n_lod = 6;
let n_falloff = 0.25;
let noiseScale = 0.1;

const images = {
    "red" : [],
    "white" : [],  
    "blue" : [],
    "multicolor" : []
};

// Setup
const canvasWidth = gridWidth * pixelSize;
const canvasHeight = gridHeight * pixelSize;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    noLoop();
    noiseDetail(n_lod, n_falloff);
}

// Functions
function draw() {
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            let data = noise(x * noiseScale, y * noiseScale);

            console.log(data);
            
            fill(assign(data));
            
            noStroke();

            rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}

function assign(data) {
    let col;
    
    if (data < 0.15) {
        col = "blue";
    } else if (data < 0.3) {
        col = "red";
    }
    else if (data < 0.45) {
        col = "white";
    } else {
        col = "purple";
    }

    return col;
}

setup();
draw();