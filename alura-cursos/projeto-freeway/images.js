// Images
let roadImage;
let carImage;
let car2Image;
let car3Image;
let tortoiseImage;
let crashSound;
let pointSound;

function preload(){
    roadImage = loadImage('images/road.png');
    carImage = loadImage('images/car-1.png');
    car2Image = loadImage('images/car-2.png');
    car3Image = loadImage('images/car-3.png');
    tortoiseImage = loadImage('images/tortoise.png');
    imageCars = [carImage, car2Image, car3Image, car2Image, car3Image, carImage];
    crashSound = loadSound('sounds/crashed.mp3');
    pointSound = loadSound('sounds/points.wav');

}