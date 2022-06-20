// "1. Take two numbers and perform all the arithmetic 
// operations over them.
let num1 = 10,
    num2 = 20;
console.log(num1 + num2); //30
console.log(num1 - num2); //-10
console.log(num1 / num2); //0.5
console.log(num1 * num2); //200
console.log(num1 % num2); //10
console.log(num1 ** num2); //1000000000000

console.log(num1++); //10
console.log(num1--); //11

// 2.Take 2 numbers and 2 strings and perform addition 
// operation on them in same sequence. 

let x = "Aatib";
let y = " Mansuri";
let result = num1 + num2 + x + y;
console.log(result); //30Aatib Mansuri


// 3. Take 2 Strings and 2 numbers and perform addition 
// operation on them in same sequence.

const result2 = x + y + num1 + num2;

console.log(result2); // Aatib Mansuri1020


//4 . Write an operation to get its result as NaN. 
let s = parseInt("fffff");
console.log(s); //NaN
console.log(Math.sqrt(-1)); //NaN
console.log(undefined + undefined); //NaN


/*5. Take 2 boolean variables as true and false and perform 
 And and Or logical operation over them and print the 
 result as well as operation.
 */

let l = true;
let k = false;
let m = true;
console.log(l && k); //false
console.log(l || k); //true


/* 6.Take 2 variables and compare them using == and 
 === such that result of both the comparisons operation 
 is not equal."
*/

let f = 10,
    g = "10";
console.log(f == g); //true
console.log(f === g); //false