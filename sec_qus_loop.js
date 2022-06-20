//2. Print fibbonaci series upto first 10 numbers.
//using foor loop

let n1 = 0,
    n2 = 1;
console.log("first 10 fibbonaci number:- ")
console.log(n1);
console.log(n2);

for (let i = 2; i < 10; i++) {

    let n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;

}

/*first 10 fibbonaci number:- 
0
1
1
2
3
5
8
13
21
34
*/

//using do while loop
n1 = 0;
n2 = 1;
let i = 2;
console.log("first 10 fibbonaci number:- ")
console.log(n1);
console.log(n2);
do {
    let n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
    i++;

} while (i < 10);


/*first 10 fibbonaci number:- 
0
1
1
2
3
5
8
13
21
34
*/


// using while loop
n1 = 0;
n2 = 1;
i = 2;
console.log("first 10 fibbonaci number:- ")
console.log(n1);
console.log(n2);
while (i < 10) {
    let n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
    i++;
}

/*first 10 fibbonaci number:- 
0
1
1
2
3
5
8
13
21
34
*/