// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }
//Fat Arrow format of the above function
printHello = () => "Hello there!";

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
// Converted to an arrow function
addition = (a, b) => a + b;

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
//Converted to a fat arrow format of the above function
doubleAddition = (c, d) => addition(c, d) * 2;
