// 

// Composition in JavaScript refers to a design principle that combines simple functions or components to build more complex ones. 
// It's often used in functional programming and component-based architectures,
// such as React. Instead of relying on inheritance (where a class inherits properties and methods from another class), composition allows for greater flexibility and reusability.


// 1. Function Composition:

// This involves combining two or more functions to create a new function. The output of one function becomes the input of the next.

const add = (x) => x + 1;
const multiply = (x) => x * 2;
const compose= (f,g)=>(x)=>f(g(x));

const addMultipley= compose(multiply,add)

console.log(addMultipley(6));


// Object Composition:

// This involves combining properties and methods from multiple objects to create a new object.

const person = {
  name: "Amir Ali Anwar",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const employee = {
  jobTitle: "Frontend Developer",
  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}`);
  },
};

const createEmployees = (name) => {
  return Object.assign({}, person, employee, { name });
};

const newEmployee = createEmployees('Bob');
newEmployee.greet();
newEmployee.work();