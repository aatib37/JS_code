// Take an array of objects of employees created above and print those employees whose age is less than 50.

let emp = [{
        myName: "aatib",
        email: "mansuriaatib@gmail.com",
        age: 22,
        address: "dewas",
        gender: "male",
        phone_no: 787991425
    },
    {
        myName: "bbbbb",
        email: "bbbbbiaatib@gmail.com",
        age: 30,
        address: "indore",
        gender: "male",
        phone_no: 789456321
    },
    {
        myName: "cccc",
        email: "ccccriaatib@gmail.com",
        age: 51,
        address: "bhopal",
        gender: "female",
        phone_no: 1425
    }
]

let result = emp.filter(result => result.age < 50);
console.log(result);

/* output:-
[
  {
    myName: 'aatib',
    email: 'mansuriaatib@gmail.com',
    age: 22,
    address: 'dewas',
    gender: 'male',
    phone_no: 787991425
  },
  {
    myName: 'bbbbb',
    email: 'bbbbbiaatib@gmail.com',
    age: 30,
    address: 'indore',
    gender: 'male',
    phone_no: 789456321
  }
]
*/