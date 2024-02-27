// Encapsulation is one of the four fundamental principles of object-oriented programming (OOP), along with inheritance, polymorphism, and abstraction.
// It refers to the bundling of data and methods that operate on the data, and controlling access to that bundle to ensure that data inside the object is accessible only through well-defined interfaces.
// we can create the closurs by four ways  1) Using Closure, 2) Using ES6 Classes, 3) Symbol-based encapsulation


// First method Using Closure

function Counter() {
    let count = 0;
    this.increment = function () {
        count++;
    }
    this.getCount = function () {
        return count
    }
}
const count = new Counter()
count.increment()
console.log(count.getCount());
console.log(count.count);
