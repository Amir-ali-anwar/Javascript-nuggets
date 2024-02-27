// Every javascript object has a anonymous property called prototype
// Point to be remember functions and Array in javascript are objects
// Prototype will the parent of that object, prototype property is object by itself, which have some special properties & methods.
// Every object is associated with another object.
// The object (a) is associated with [[Prototype]] Object
// -> which means a object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:

// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)

// ********* Checking the Prototype
// const obj = {};
// console.log(obj.__proto__.__proto__);


// const arr = new Array();
// console.log(arr.__proto__.__proto__.__proto__);

// const str = new String();
// console.log(str.__proto__.__proto__.__proto__);


function Person(firstName,lastName,ProgramingLanguage){
this.firstName=firstName
this.lastName=lastName
this.ProgramingLanguage=ProgramingLanguage
}
const person1= new Person("Amir Ali", 'Anwar',"Frontend")
console.log(person1);
console.log(person1.__proto__);
console.log(person1.__proto__.__proto__);
console.log(person1.__proto__.__proto__);

 Array.prototype.pop = function () {
      return "POP IT UP BABE";
 };