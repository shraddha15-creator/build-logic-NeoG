// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let num1 = 8;
let num2 =23;
let num3 =17;
let minimum;

if(num1 <= num2 && num1 <= num3){
    minimum = num1;
}else if(num2 <= num1 && num2 <= num3){
    minimum = num2;
}else if(num3 <= num1 && num3 <= num2){
    minimum = num3;
}

console.log(`The ${minimum} is minimum number out of three given numbers.`);