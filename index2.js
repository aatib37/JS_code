// 2. Create another promisified function that sorts this employee list from above response by name. Chain it to above promise
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


employees(Arr).then(function(res) {
    console.log("Sorted Array");
    let arr1 = res.sort();
    console.log(arr1);

}).catch(function() {
    console.log("array not found");
})


// output:-
// employees are present
// Sorted Array
// [ 'aatib', 'banti', 'goldi', 'nimisha' ]