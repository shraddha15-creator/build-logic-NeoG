// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

let num1 = 8;
let num2 =23;
let num3 =17;
let largest;

if(num1 >= num2 && num1 >= num3){
    largest = num1;
}else if(num2 >= num1 && num2 >= num3){
    largest = num2;
}else if(num3 >= num1 && num3 >= num2){
    largest = num3;
}

console.log(`The ${largest} is max number.`);