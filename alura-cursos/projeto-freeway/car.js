let xCars = [500, 500, 500];
let yCars = [40, 95, 147];
let velocityCars = [2, 1, 3];

function showCar(){
    for (let i = 0; i < imageCars.length; i = i+1){
        image(imageCars[i], xCars[i], yCars[i], 50, 40);
    }
}

function movementCar(){
    for (let i = 0; i < xCars.length; i = i+1){
        xCars[i] -= velocityCars[i];
    }
}

function returnCarPosition(){
    if (xCars[0] < -100){
        xCars[0] = 500;
    }else if (xCars[1] < -100){
        xCars[1] = 500;
    }else if (xCars[2] < -100){
        xCars[2] = 500;
    }
}