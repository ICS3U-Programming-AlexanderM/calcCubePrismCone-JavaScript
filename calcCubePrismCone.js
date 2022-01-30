// Created in: JavaScript version ES2015
// (I don't know the sheband for JavaScript)

// Created by: Alexander Matheson
// Created on: Jan 30, 2022
// This program uses a function to calculate
// either the surface area of a cube, the surface
// area of a rectangular prism or the volume of
// a cone (user's choice).

// allow for input
var readline = require('readline-sync');


// calculate sa of cube
function calcCube(side) {
    // declare variable
    var saCube;
    saCube = 6 * side ** 2;
    return saCube;
}


// calculate sa of rectangular prism
function calcPrism(length, width, height) {
    // declare variable
    var saPrism;
    saPrism = 2 * (length * width + length * height + height * width);
    return saPrism;
}


// calculate volume of cone
function calcCone(radius, height) {
    // declare variable
    var volumeCone;
    volumeCone = Math.PI * radius ** 2 * height / 3;
    return volumeCone;
}



// declare variables
var userChoice;
var sideString;
var lengthString;
var widthString;
var heightString;
var radiusString;
var heightStringCone;
var sideInput;
var lengthInput;
var widthInput;
var heightInput;
var radiusInput;
var heightInputCone;
var answer;

// get input
console.log("What would you like to calculate?");
console.log("Enter 1 for the surface area of a cube.");
console.log("Enter 2 for the surface area of a rectangular prism");
console.log("Enter 3 for the volume of a cone");
userChoice = readline.question("Enter your choice: ");

// choose function
// for cube
if (userChoice == "1") {
    // get side length
    sideString = readline.question("Enter the side length of the cube: ");
    // error checking
    try {
        sideInput = parseFloat(sideString);
        // call function
        answer = calcCube(sideInput);
        // display results
        console.log("The surface area is " + answer + " cm squared.");
    } catch (e) {
        console.log("Invalid input.");
    }
// for rectangular prism
} else if (userChoice == "2") {
    // get width, length and height of rectangular prism
    lengthString = readline.question("Enter the length of the prism: ");
    widthString = readline.question("Enter the width of the prism: ");
    heightString = readline.question("Enter the height of the prism: ");
    // error checking
    try {
        lengthInput = parseFloat(lengthString);
        widthInput = parseFloat(widthString);
        heightInput = parseFloat(heightString);
        // call function
        answer = calcPrism(lengthInput, widthInput, heightInput);
        // display results
        console.log("The surface area is " + answer + " cm squared.");
    } catch (e) {
        console.log("Invalid input.");
    }
// for cone
} else if (userChoice == "3") {
    // get radius and height of cone
    radiusString = readline.question("Enter the radius of the cone: ");
    heightStringCone = readline.question("Enter the height of the cone: ");
    // error checking
    try {
        radiusInput = parseFloat(radiusString);
        heightInputCone = parseFloat(heightStringCone);
        // call function
        answer = calcCone(radiusInput, heightInputCone);
        // display results
        console.log("The volume is " + answer + " cm cubed.");
    } catch (e) {
        console.log("Invalid input.");
    }
// for invalid input
} else {
    console.log("Invalid input.");
}

