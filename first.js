//Divide the employee age by null and handle the error. Also if the error occurs divide the age by 2 and print it.
const employeesJson = [{
        "name": "Aatib",
        "age": 36
    },
    {
        "name": "Chhaya",
        "age": 50
    },
    {
        "name": "Avesh",
        "age": 55
    },
    {
        "name": "Purabi",
        "age": 60
    },
    {
        "name": "Arkan",
        "age": 70
    }
]

let len = employeesJson.length


for (let i = 0; i < len; i++) {
    try {
        console.log("Inside try block")
            (employeesJson[i]['age']) / null
    } catch (e) {
        console.log("Error Handled here, divide age by 2")
        console.log("Original age is ", employeesJson[i]['age'])
        let ans = employeesJson[i]['age'] / 2;
        console.log("Final age= ", ans)
    }
}


// output:-

// D:\Documents\js_code>node first.js
// Inside try block
// Error Handled here, divide age by 2
// Original age is  36
// Final age=  18
// Inside try block
// Error Handled here, divide age by 2
// Original age is  50
// Final age=  25
// Inside try block
// Error Handled here, divide age by 2
// Original age is  55
// Final age=  27.5
// Inside try block
// Error Handled here, divide age by 2
// Original age is  60
// Final age=  30
// Inside try block
// Error Handled here, divide age by 2
// Original age is  70
// Final age=  35