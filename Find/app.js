//  returns a single value, always returns a single ,if no match found return undefined

const myfriends = [
    { name: 'Mamoon', age: 25, position: 'Senior Full stack', salary: 1000 },
    { name: 'Mubahsar', age: 26, position: 'developer', salary: 100 },
    { name: 'Babar', age: 25, position: 'SQA', salary: 6000 },
    { name: 'Haroon', age: 24, position: 'SQA', salary: 400 },
    { name: 'Amir', age: 25, position: 'Full stack', salary: 50 },
];

let isAvailable= myfriends.find((friend)=>friend.name==='Mamoon')
console.log(isAvailable)

 isAvailable= myfriends.find((friend)=>friend.name==='unce tom')
console.log(isAvailable)