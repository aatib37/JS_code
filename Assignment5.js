//1.   Take 2 numbers and print the smallest one amongst them



let a = 25,
    b = 20;
if (a < b) {
    console.log("a is smallest number");
} else if (b < a) {
    console.log("b is smallest number");
}

//output:- b is smallest number


//2. Take 3 numbers and print the biggest one amongst them

let x = 12,
    y = 15,
    z = 5;
if (x > y && x > z) {
    console.log("x is largest number");
} else if (y > x && y > z) {
    console.log("y is largest number");

} else if (z > x && z > y) {
    console.log("z is largest number");
}

//output:-  y is largest number





/*3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself)
 Anything below 50 is F*/


let score = 100;
let gscore;
switch (true) {
    case (score <= 100 && score >= 90):
        gscore = 'A grade';
        break;
    case (score <= 89 && score >= 80):
        gscore = 'B grade';
        break;
    case (score <= 79 && score >= 70):
        gscore = 'C grade';
        break;
    case (score <= 69 && score >= 60):
        gscore = 'D grade';
        break;
    case (score <= 59 && score >= 0):
        gscore = 'fail';
        break;
    default:
        console.log('INVALID SCORE');

}

console.log(gscore);


//output:- A grade