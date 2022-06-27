// 1. Create a function that takes a number and prints all even numbers upto that number


function evenNumber(n) {

    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }

    }

}
evenNumber(10);

// output:-
// 0
// 2
// 4
// 6
// 8
// 10


//2. Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is less than input age.

let emp = [{
        name: "Aatib",
        age: 45,
        city: "dewas"
    },
    {
        name: "bnil",
        age: 30,
        city: "indore"
    },
    {
        name: "avesh",
        age: 20,
        city: "bhopal"
    }

]

function lessAge(temp, num) {
    let res = temp.filter(res => res.age < num);
    return res;
}
console.log("Record of particuler age", lessAge(emp, 50));

/*output:-
Record of particuler age [
    { name: 'Aatib', age: 45, city: 'dewas' },
    { name: 'Anil', age: 30, city: 'indore' },
    { name: 'avesh', age: 20, city: 'bhopal' }
*/

// 3.Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees sorted based on the emoplees attribute being passed as second parameter.
emp = [{
        name: "Aatib",
        age: 45,
        city: "dewas"
    },
    {
        name: "bnil",
        age: 30,
        city: "indore"
    },
    {
        name: "avesh",
        age: 20,
        city: "bhopal"
    }

]

function f1(temp, ab) {

    temp.sort((a, b) => {
        let a1 = a[ab].toLowerCase();
        let b1 = b[ab].toLowerCase();

        if (a1 < b1) {
            return -1
        }

        if (a1 > b1) {
            return 1
        }

        return 0;
    });

    return temp

}
console.log("Sorted through city", f1(emp, 'city'));
/* output:-
Sorted through city [
  { name: 'avesh', age: 20, city: 'bhopal' },
  { name: 'Aatib', age: 45, city: 'dewas' },
  { name: 'bnil', age: 30, city: 'indore' }
]
*/
// sort age
let n1 = emp.sort((a, b) => (a.age - b.age));
console.log(n1);

// output:-
// [
//     { name: 'avesh', age: 20, city: 'bhopal' },
//     { name: 'bnil', age: 30, city: 'indore' },
//     { name: 'Aatib', age: 45, city: 'dewas' }
//   ]