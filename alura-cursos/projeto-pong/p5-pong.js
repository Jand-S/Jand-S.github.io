let xBall = 300;
let yBall = 200;
let diameterBall = 15;
let radius = diameterBall/2;
let velocityX = 5;
let velocityY = 5;

let xRacket = 5;
let yRacket = 150;
let wRacket = 10;
let hRacket = 100;

let playPoints = 0;
let opponentPoints = 0;

let xOpponentRacket = 586;
let yOpponentRacket = 150;
let yOpponentVelocity;

let collisionRacket = false;

let racketSong;
let pointSong;
function preload() {
  racketSong = loadSound('songs/racket.mp3');
  pointSong = loadSound('songs/point.mp3')
}


function setup(){
createCanvas(600,400);
}


function draw(){
background(0);
showBall();
ballMoviment();
borderCollision();
racket(xRacket,yRacket);
racket(xOpponentRacket,yOpponentRacket);
racketMovement();
collision2dRacket(xRacket,yRacket);
collision2dRacket(xOpponentRacket,yOpponentRacket);
racketOpponentMovement()
includeScoreboard();
addScore();
}

function showBall(){
    circle(xBall, yBall, diameterBall);
}


function ballMoviment(){
    xBall += velocityX;
    yBall += velocityY;
}

function borderCollision(){
    if (xBall + radius > width || xBall - radius <0){
        velocityX *= -1;
    }else if(yBall + radius > height || yBall - radius <0){
        velocityY *= -1;
    }
}

function racket(x,y){
  rect(x, y, wRacket, hRacket);
}

function racketMovement(){
  if(keyIsDown(UP_ARROW) && yRacket > 0){
    yRacket -= 5;
  }else if(keyIsDown(DOWN_ARROW) && yRacket < 400- hRacket){
    yRacket += 5;
  }
}
function racketOpponentMovement(){
    yOpponentVelocity = yBall - yOpponentRacket - wRacket / 2 -30;
    yOpponentRacket += yOpponentVelocity;
  }

function collision2dRacket(x1, x2){
    collisionRacket = collideRectCircle(x1, x2, wRacket, hRacket, xBall, yBall, radius);
    if (collisionRacket){
        velocityX *= -1;
        racketSong.play();
    }
}

function includeScoreboard(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(255,40,0);
    rect (180, 10, 40, 20);
    rect (380, 10, 40, 20);
    fill(255);
    text(playPoints, 200, 26);
    text(opponentPoints, 400, 26);
    
}

function addScore(){
    if (xBall > 590){
        playPoints += 1;
        pointSong.play();
    }else if (xBall < 10){
        opponentPoints += 1;
        pointSong.play();
    }
}

