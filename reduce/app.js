// filter method iterates over the array
//returns single value and whatever you want to return from reduce like number, object ,array
const myfriends = [
    { name: 'Mamoon', age: 25, position: 'Senior Full stack', salary: 1000 },
    { name: 'Mubahsar', age: 26, position: 'developer', salary: 100 },
    { name: 'Babar', age: 25, position: 'SQA', salary: 6000 },
    { name: 'Haroon', age: 24, position: 'SQA', salary: 400 },
    { name: 'Amir Ali Anwar', age: 25, position: 'Full stack', salary: 500000 },
];
// const dailyTotal = myfriends.reduce((total, person) => {

//     console.log(total)
//     console.log(person)
//     total += person.salary
//     return total
// }, 0);
// console.log(dailyTotal)


// Example--2

const countSalary = Object.entries(myfriends.reduce((acc, person) => {
    const key = person.name;
    const keysalary = person.salary;

    const isExist = acc[key] || { count: 0, salary: 0, name: "" };
    return {
        ...acc, [key]: {
            name: key,
            count: isExist.count + 1,
            salary: isExist.salary + keysalary,
            color: 'red',
        }
    }
}, {})).map(([name, { count, salary, color }])=>({
    name,count,salary,color
}))
// console.log(countSalary);



//Example--3 below code block is much simpler to acheieve the same task 

const countdata= Object.values(myfriends?.reduce((acc,{name,salary,position})=>{
 const isExisting= acc[name];
  if(isExisting){
    isExisting.count ++;
    isExisting.salary+=salary
  }else{
    acc[name]= {name,count:1,color:"red",position}
  }  
 return acc
},{})).sort((a,b)=>a.name-b.name)

console.log(countdata);