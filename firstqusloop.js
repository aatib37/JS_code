// 1. Find sum of first 10 natural numbers
// usig for loop

let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;

}
console.log("Sum of first 10 no." + sum); //55

//do while loop

sum = 0;
let i = 1;
do {
    sum += i;
    i++;
} while (i <= 10)
console.log("Sum of first 10 no." + sum);

//while loop
sum = 0;
i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum of first 10 no." + sum);


/*OUTPUT :-
Sum of first 10 no.55
Sum of first 10 no.55
Sum of first 10 no.55
*/