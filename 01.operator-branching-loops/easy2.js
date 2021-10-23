// Write a program to take a number input from user and determine whether the number is odd or even.

// Go to: https://replit.com/@ShraddhaMuley/easy2#index.js

var readlineSync = require("readline-sync");
var userNum = readlineSync.question("Enter a number: ");

if(userNum % 2 === 0){
  // console.log("number is even");
  console.log("-------------------------------")
  console.log(`${userNum} is an even number`);
}else{
  // console.log("number is odd");
  console.log("-------------------------------")
  console.log(`${userNum} is an odd number`);
}


