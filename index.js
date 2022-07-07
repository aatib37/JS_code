// 1. Create a function that returns array of employees from a random time from 1 to 2 seconds using async await.

const employees = [{
        "name": "Aatib",
        "age": 25
    },
    {
        "name": "Aman",
        "age": 22
    }
];

const employeesList = () => {
    return new Promise((resolve) => {
        setTimeout(function() {
            const response = employees;
            resolve(response);
        }, 1000);

    });
}


const employeesDetails = async() => {
    const resolvedList = await employeesList();
    console.log(resolvedList);
}

employeesDetails();


// OUTPUT:-
// [ { name: 'Aatib', age: 25 }, { name: 'Aman', age: 22 } ]