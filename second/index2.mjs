 import Employee from "./second.mjs";
 import { employeeName } from "./second.mjs"
 let employees = [];
 employees.push(new Employee('Aatib', 26, 1));
 employees.push(new Employee('Avesh', 20, 2));
 employees.push(new Employee('Arkan', 45, 3));
 employees.push(new Employee('Ram', 28, 4));
 employees.push(new Employee('golu', 35, 5));

 console.log(employeeName(employees, 'name'));

 //  output:-
 //  [
 //     Employee { name: 'Aatib', age: 26, id: 1 },
 //     Employee { name: 'Arkan', age: 45, id: 3 },
 //     Employee { name: 'Avesh', age: 20, id: 2 },
 //     Employee { name: 'golu', age: 35, id: 5 },
 //     Employee { name: 'Ram', age: 28, id: 4 }
 //   ]