// Assignment no 11
// chapter no 26 to 30  MATH METHODS


// Question no 1 
var userInput = prompt("Enter a positive integer:");
var parsedInput = parseFloat(userInput);
document.write("Number: " + parsedInput + "<br>");
document.write("Round off value: " + Math.round(parsedInput) + "<br>");
document.write("Floor value: " + Math.floor(parsedInput) + "<br>");
document.write("Ceil value: " + Math.ceil(parsedInput) + "<br>");

// Question no 2
var userInput = prompt("Enter a negative floating-point number:");
var parsedInput = parseFloat(userInput);
document.write("Number: " + parsedInput + "<br>");
document.write("Round off value: " + Math.round(parsedInput) + "<br>");
document.write("Floor value: " + Math.floor(parsedInput) + "<br>");
document.write("Ceil value: " + Math.ceil(parsedInput) + "<br>");

// Question no 3
var number = -4;
var absoluteValue = Math.abs(number);
document.write("Absolute value of " + number + " is " + absoluteValue + "<br>");

// // Question no 4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceValue + "<br>");

// // Question no 5
var coinToss = Math.floor(Math.random() * 2);
if (coinToss === 0) {
    document.write("Random coin value: Tails<br>");
} else {
    document.write("Random coin value: Heads<br>");
}
// Question no 6
var randomNum = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNum + "<br>");

// Question no 7
var weightInput = prompt("Enter your weight (in kilograms):");
var parsedWeight = parseFloat(weightInput);
if (!isNaN(parsedWeight)) {
    document.write("The weight of user is " + parsedWeight + " kilograms.<br>");
} else {
    document.write("Invalid input. Please enter a valid number.<br>");
}

// Question no 8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Guess a number between 1 and 10:");
var parsedGuess = parseInt(userGuess);
if (parsedGuess === secretNumber) {
    document.write("Congratulations! Your guess is correct.<br>");
} else {
    document.write("Sorry, your guess is incorrect. The secret number was " + secretNumber + ".<br>");
}
