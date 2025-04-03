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

function preload() {
    red_img = loadImage('assets/red/red-1.jpg');
    blue_img = loadImage('assets/blue/blue-1.jpg');
    white_img = loadImage('assets/white/white-1.jpg');
    multicolor_img = loadImage('assets/multicolor/multicolor-1.jpg');
}

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

            // console.log(data);

            let src = assign_img(data);

            image(
                img=src[0], 
                dx=x * pixelSize, 
                dy=y * pixelSize,
                dw=pixelSize,
                dh=pixelSize,
                sx=src[1],
                sy=src[2],
                sw=pixelSize,
                sh=pixelSize
            )
            
            /*
            fill(assign(data));
            noStroke();
            rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            */
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

function assign_img(data) {

    imageMode(CORNER);

    let output;

    if (data < 0.15) {
        output = [blue_img, floor(random(blue_img.width - pixelSize)), floor(random(blue_img.height - pixelSize))];
    } else if (data < 0.3) {
        output = [red_img, floor(random(red_img.width - pixelSize)), floor(random(red_img.height - pixelSize))];
    } else if (data < 0.45) {
        output = [white_img, floor(random(white_img.width - pixelSize)), floor(random(white_img.height - pixelSize))];
    } else {
        output = [multicolor_img, floor(random(multicolor_img.width - pixelSize)), floor(random(multicolor_img.height - pixelSize))];
    }

    // console.log("OUTPUT", output);

    return output;
}

setup();
draw();