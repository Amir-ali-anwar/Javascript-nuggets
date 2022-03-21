const employees = {
    engineers: {
        0: {
            id: 1,
            name: "Amir Ali",
            // occupation: "Fullstack Engineer"
        },
        1: {
            id: 2,
            name: "Mubashar Akram",
            occupation: "Front-end Engineer"
        },
        2: {
            id: 3,
            name: "Babar mumtaz",
            occupation: "SQA Engineer"
        },
        3: {
            id: 4,
            name: "Haroon hassan",
            occupation: "SQA Engineer"
        },
    }
};
// console.log(employees);

// const { engineers:{0:{name,occupation}}} = employees
// console.log(name,'',occupation)
// Destructuring with Error handling 
const { engineers:{0:{name='',occupation=''}=''}=''} = employees
console.log(name,'',occupation)














