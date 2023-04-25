// filter method iterates over the array
//returns single value and whatever you want to return from reduce like number, object ,array
const myfriends = [
    { name: 'Mamoon', age: 25, position: 'Senior Full stack', salary: 1000 },
    { name: 'Mubahsar', age: 26, position: 'developer', salary: 100 },
    { name: 'Babar', age: 25, position: 'SQA', salary: 6000 },
    { name: 'Haroon', age: 24, position: 'SQA', salary: 400 },
    { name: 'Amir Ali Anwar', age: 25, position: 'Full stack', salary: 50 },
];
const dailyTotal = myfriends.reduce((total, person) => {

    console.log(total)
    console.log(person)
    total += person.salary
    return total
}, 0);
console.log(dailyTotal)


// Example--2

const countSalary = myfriends.reduce((acc, person) => {
    const key = person.name;
    const isExist = acc[key] || [];
    return { ...acc, [key]: isExist + 1 }
}, {})

console.log(countSalary);