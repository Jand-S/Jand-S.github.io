function setup(){
    createCanvas(500,400);
}

function draw(){
    background(roadImage);
    showTortoise();
    showCar();
    movementTortoise();
    movementCar();
    returnCarPosition()
    verifyCollision();
    scoreboard();
    addScore();
}