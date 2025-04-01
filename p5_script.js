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
    "yellow" : [],
    "multicolor" : []
};
// Setup
const canvasWidth = gridWidth * pixelSize;
const canvasHeight = gridHeight * pixelSize;

function setup() {
    createCanvas(canvasWidth, canvasHeight, document.getElementById('canvas'));
    noLoop();
    noiseDetail(n_lod, n_falloff);
}

// Functions
function draw() {
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            let data = noise(x * noiseScale, y * noiseScale);
            
            let img = fill(data);

            let srcX = floor(random(img.width - pixelSize));
            let srcY = floor(random(img.height - pixelSize));

            image(img, x * pixelSize, y * pixelSize, pixelSize, pixelSize, srcX, srcY, pixelSize, pixelSize);

            // console.log(data);

            /* 
            if (data == 0 || data == 1) {
                value = color("red");
            } else if (data == 2 || data == 8 || data == 9) {
                value = color("purple");
            } else if (data == 4 || data == 7 || data == 3) {
                value = color("blue");
            } else if (data == 6 || data == 5) {
                value = color("magenta");
            } else {
                value = color("white");
            }
            */
        }
    }
}

function preload() {
    Object.keys(images).forEach(img => {
        for (let i = 0; i < 3; i++) {
            images[img].push(loadImage(`assets/${img}/${img}-${i}.jpg`));
        }
    });
}

function fill(d) {
    // Pick color
    let color = Math.round((d * 100) % 5); 
    let img = Math.round((d * 100) % 3);

    console.log(color, img);

    if (color == 0) {
        return images["red"][img];
    } else if (color == 1) {
        return images["white"][img];
    } else if (color == 2) {
        return images["blue"][img];
    } else if (color == 3) {
        return images["yellow"][img];
    } else {
        return images["multicolor"][img];
    }
}