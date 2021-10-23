// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

var readlineSync = require('readline-sync')

var month = readlineSync.question("Enter the number of month: ");
var year = readlineSync.question("Enter the year: ");

if(month == 1 || month == 3 || month == 5 || month == 7 ||  month == 8 || month == 10 || month == 12  ){
  console.log("this month has 31 days")
}else if((month == 2) && ((year%400 == 0) || (year%4==0 && year%100!=0))){
  console.log("month has 28 day")
}else{
  console.log("month has 30 days")
}