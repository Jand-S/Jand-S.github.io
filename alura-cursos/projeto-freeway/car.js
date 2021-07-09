let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let wCar = 50;
let hCar = 40;
let velocityCars = [2.5, 1, 3, 5, 3.5, 4];

function showCar(){
    for (let i = 0; i < imageCars.length; i++){
        image(imageCars[i], xCars[i], yCars[i], wCar, hCar);
    }
}

function movementCar(){
    for (let i = 0; i < imageCars.length; i++){
        xCars[i] -= velocityCars[i];
    }
}

function returnCarPosition(){
    for (let i = 0; i < imageCars.length; i++){
        if(bordCarCheck(xCars[i]))
        xCars[i] = 600;
    }
}

function bordCarCheck(xCar){
    return xCar < -100;
}