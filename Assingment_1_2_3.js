// 1. Declare all the variables in above form without initialising and print their value.



let name;
let email;
let age;
let address;
let phone;
let gender;
let married_status;
console.log(name, email, age, address, phone, gender, married_status);

// output:- undefined undefined undefined undefined undefined undefined undefined


// 2. After printing their value assign them as null and print it again. 

name = null;
email = null;
age = null;
address = null;
phone = null;
gender = null;
married_status = null;
console.log(name, email, age, address, phone, gender, married_status);

// output :- null null null null null null null

/* 3. Declare an object called employeeDetails 
and add all the above variables to this object now as keys 
with value as null and print this object. */

const employeeDetails = {
    name,
    email,
    age,
    address,
    phone,
    gender,
    married_status
}
console.log(employeeDetails);

/* 
output:-
{
  name: null,
  email: null,
  age: null,
  address: null,
  phone: null,
  gender: null,
  married_status: null
}
*/


//Assing 3 .  In the variables declare above assign the variables as appropriate default value instead of null.

name = "Aatib";
email = "xyz@gmail.com";
age = 22;
address = "dewas";
phone = 123456789;
gender = "Male";
married_status = "single";

console.log(name, email, age, address, phone, gender, married_status);

/*
output:-
Aatib xyz@gmail.com 22 dewas 123456789 Male single
*/