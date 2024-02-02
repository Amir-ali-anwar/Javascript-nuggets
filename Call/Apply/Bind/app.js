// Examples of call, Apply,Bind

// Call Method

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}
const person = { name: "Amir Ali Anwar" }
greet.call(person, 'amir')

function sayHello(role) {
    console.log(`Hello, ${this.name}! and I am ${role}`);
}
const PetterObj = { name: "Peter" }
const DocObj = { name: "Dr. Umair" }
const intro = sayHello.call(PetterObj, 'Software Engineer')
const DoctorInto= sayHello.call(DocObj,'Lawyer')


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



function minMovesToMedian(prices, k) {
    // Step 1: Sort the array
    prices.sort((a, b) => a - b);
  
    // Step 2: Calculate the current median index
    const n = prices.length;
    const medianIndex = Math.floor((n + 1) / 2) - 1; // Adjusted for zero-based index
  
    // Step 3: Check if the current median is already equal to k
    const currentMedian = prices[medianIndex];
    if (currentMedian === k) {
      return 0; // No moves needed
    }
  
    // Step 4 and 5: Adjust prices to make the median equal to k
    let moves = 0;
    for (let i = 0; i < n; i++) {
      const diff = k - prices[medianIndex];
      moves += Math.abs(diff);
    }
  
    return moves;
  }
  
  // Example usage:
  const prices = [1, 3, 5];
  const k = 4;
  const result = minMovesToMedian(prices, k);
  console.log(result); // Output the minimum number of moves
  