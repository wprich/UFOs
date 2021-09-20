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

//Declare a list
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
//For loop in javascript
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

//Declare a list
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
//For loop to print to the console
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}
//Another for loop
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }