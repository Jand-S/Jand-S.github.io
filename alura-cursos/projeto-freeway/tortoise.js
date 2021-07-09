// Tortoise
let xTortoise = 100;
let yTortoise = 345;

function showTortoise(){
    image(tortoiseImage, xTortoise, yTortoise, 50, 50);
}

function movementTortoise(){
    if (keyIsDown(UP_ARROW)){
        yTortoise -= 1;
    }else if (keyIsDown(DOWN_ARROW)){
        yTortoise += 1;
    }
}