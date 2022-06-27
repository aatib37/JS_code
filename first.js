// 1.Add the list of employees in a json file and import it in below file to use it. Add unique ids for each employee.


let data = require("./file.json");
let newData = JSON.stringify(data)
console.log(newData);
// console.log(data)

/* output:-
{"employees":[{"id":1,"name":"Aatib","Email":"gmail","Age":23,"address":"indore","phone_number":123456789,"gender":"M","married":"false"},
{"id":2,"name":"Avesh","Email":"aveshgmail","Age":30,"address":"dewas","phone_number":1234,"gender":"M","married":"false"},
{"id":3,"name":"Ankita","Email":"ankitagmail","Age":40,"address":"bhopal","phone_number":6789,"gender":"F","married":"true"}]}
*/