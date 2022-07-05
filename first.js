//Add a js class called Employee and create methods in it to sort employees by different paramters and to filter by age.


const firstEmployeeDetails = {
    name: 'first name',
    email: 'firstemployee@gmail.com',
    age: 55,
    address: 'Home Address',
    phone: 1243434312,
    gender: 'male',
    married: true
};
const secondEmployeeDetails = {
    name: 'second name',
    email: 'secondemployee@gmail.com',
    age: 45,
    address: 'Address',
    phone: 3552121212,
    gender: 'female',
    married: false
};

const thirdEmployeeDetails = {
    name: 'third name',
    email: 'thirdemployee@gmail.com',
    age: 42,
    address: 'Local Address',
    phone: 1265757571,
    gender: 'male',
    married: false
};
let listEmp = [firstEmployeeDetails, secondEmployeeDetails, thirdEmployeeDetails];
class Employees {
    EmployeesList;
    constructor(employees) {
        this.EmployeesList = employees;
    }
    sortByParameter(perameter) {
        this.EmployeesList.sort((first, secound) => {
            if (first[perameter] > secound[perameter])
                return 1;
            if (first[perameter] < secound[perameter])
                return -1;

            return 0;

        })
    }
    filterByAge(filterAge) {
        return this.EmployeesList.filter((employees) => {
            return employees.age < filterAge
        })
    }
}
let EmployeesList = new Employees(listEmp);
EmployeesList.sortByParameter('name');
console.log(EmployeesList.filterByAge(50));


// output:-

// [
//     {
//       name: 'third name',
//       email: 'thirdemployee@gmail.com', 
//       age: 42,
//       address: 'Local Address',
//       phone: 1265757571,
//       gender: 'male',
//       married: false
//     },
//     {
//       name: 'zsecond name',
//       email: 'secondemployee@gmail.com',
//       age: 45,
//       address: 'Address',
//       phone: 3552121212,
//       gender: 'female',
//       married: false
//     }
//   ]