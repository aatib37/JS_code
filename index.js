//Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.

let Arr = ["aatib", "nimisha", "banti", "goldi"];

function employees(Arr) {
    return new Promise((resolve, reject) => {
        if (employees != undefined) {

            setTimeout(() => {
                console.log("employees are present")
                resolve(Arr);
            }, 3000)

        } else {

            setTimeout(() => {
                console.log("employees are not present");
                reject("error");
            }, 3000)

        }
    })
}
employees(Arr).then((employeeList) => {
        console.log(employeeList);
    })
    .catch((msg) => {
        console.log(msg);
    })

// output:-
// employees are present
// [ 'aatib', 'nimisha', 'banti', 'goldi' ]