let num1 = 0.1;
let num2 = 0.7;
let num3 = 1995;
let num4 = 10.398547293502945;

console.log(num1.toString() + num2);
console.log(num3.toString(2));
console.log(num4.toFixed(2));
console.log(Number.isInteger(num4));

let temp = num4 * 'Ola';
console.log(Number.isNaN(temp));

console.log(Number(num1 + num2).toFixed(2));
console.log(num1);

let num5 = ((num1 * 100) + (num2 * 100))/100;
console.log (num5);