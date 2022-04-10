//This funtion methods executes a function for each array eleemnt
//function returns True if the function returns true of all elements
//function returns False if the function returns true of all elements
// method dones not executes for empty values
//does not change the array of origional array
const myfriends = [
    { name: 'Mamoon', age: 25, position: 'Senior Full stack', salary: 1000 },
    { name: 'Mubahsar', age: 26, position: 'developer', salary: 100 },
    { name: 'Babar', age: 25, position: 'SQA', salary: 6000 },
    { name: 'Haroon', age: 24, position: 'SQA', salary: 400 },
    { name: 'Amir', age: 25, position: 'Full stack', salary: 50 },
];
let result= myfriends.every((friend)=>friend.age>40)
console.log(result)
