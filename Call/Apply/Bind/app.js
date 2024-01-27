// Examples of call, Apply,Bind

// Call Method

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}
const person = { name: "Amir Ali Anwar" }
greet.call(person, 'amir')

// Apply Method

function greets(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const personInfo = { name: 'John' };
const args = ['Alice', 30];

greets.apply(personInfo, args);  

// Bind

const BindPerson= greet.bind(personInfo)
BindPerson('Brad')
