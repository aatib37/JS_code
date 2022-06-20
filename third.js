// 3. Print all the keys and values of employee object used in first problem

let emp = {
    myname: "Aatib Mansuri",
    email: "mansuriaatib@gmail.com",
    age: 22,
    address: "parmanad colony dewas",
    phone_no: 787913704,
    gender: "male",
    married_status: "single"
};
for (let x in emp) {
    console.log(`${x} = ${emp[x]}`);
}

// output :-
// myname = Aatib Mansuri
// email = mansuriaatib@gmail.com
// age = 22
// address = parmanad colony dewas
// phone_no = 787913704
// gender = male
// married_status = single