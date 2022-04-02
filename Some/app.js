// filter method iterates over array
//does not change the origional array
//returns false if not element found
//test of every element in an array
const myfriends = [
    { name: 'Mamoon', age: 25, position: 'Senior Full stack', salary: 1000 },
    { name: 'Mubahsar', age: 26, position: 'developer', salary: 100 },
    { name: 'Babar', age: 25, position: 'SQA', salary: 6000 },
    { name: 'Haroon', age: 24, position: 'SQA', salary: 400 },
    { name: 'Amir', age: 25, position: 'Full stack', salary: 50 },
];
 let isTrue= myfriends.some((friends)=>{
     return friends.age>20
 })   
 console.log(isTrue)

  isTrue= myfriends.some((friends)=>{
    return friends.age===20
})   
console.log(isTrue)