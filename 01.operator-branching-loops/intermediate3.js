// Write a program to take a number input from user and print multiplication table 12 times for that number.

var readlineSync = require('readline-sync')
var table = readlineSync.question("Enter number to make table: ");

for(let i = 1; i <= 12; i++){

  const result = i * table;
  
// console.log(`${result}`)
console.log(`${table} * ${i} = ${result}`)
}

