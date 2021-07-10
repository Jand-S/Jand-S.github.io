// Tortoise
let xTortoise = 211;
let yTortoise = 370;
let hit = false;
let score = 0;

function showTortoise(){
    image(tortoiseImage, xTortoise, yTortoise, 50, 50);
}

function movementTortoise(){
    if (keyIsDown(UP_ARROW)){
        yTortoise -= 1;
    }else if (keyIsDown(DOWN_ARROW)){
        if (canMove()){
            yTortoise += 1;
        }
    }
}

function verifyCollision(){
    for (let i = 0; i < imageCars.length; i = i+1){
        hit = collideRectCircle(xCars[i], yCars[i], wCar, hCar, xTortoise, yTortoise+20, 40);
        if (hit){
            crashSound.play()
            yTortoise = 370;
            if (score > 0){
                score -= 1;
            }
        }

    }
}

function scoreboard(){
    fill(color(255,240,50));
    textAlign(CENTER);
    textSize(25);
    text(score, width / 5, 27);
}

function addScore(){
    if (yTortoise < 15){
        pointSound.play();
        score += 1;
        yTortoise = 370;
    }
}

function canMove(){
    return yTortoise < 370;
}