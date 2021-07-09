let roadImage;

function preload(){
    roadImage = loadImage('images/road.png')
}
function setup(){
    createCanvas(500,400);
}

function draw(){
    background(roadImage);
}