let form = document.querySelector('.form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = [... new FormData(e.currentTarget).values()];
  console.log(formData);
  if (formData.includes('')) {
    showError("Please enter all the values")
    throw new Error("Please enter all the values")
  }
  const formObject = Object.fromEntries(formData)
  let values = []
  for (const [key, value] of formObject) {
    values.push(`${key}: ${value}`);
  }
  const message = values.join('\n');
  showSuccess({message})
  currentTarget.reset();
});
function showError(msg) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: msg,
  })
}

function showSuccess(msg) {
  Swal.fire({
    icon: 'Success',
    title: 'Your form Values',
    text: msg,
  })
}


// Object.fromEntries() 

//The fromEntries() method creates an object from iterable key / value pairs.

//1.Converting an Array of Key-Value Pairs to an Object
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
  ];

  
const myObj= Object.fromEntries(fruits)
console.log({myObj});

//2.Converting a Map to an Object

const map = new Map([
  ['name', 'Alice'],
  ['age', 30],
  ['city', 'New York']
]);
const obj = Object.fromEntries(map);
console.log({obj});

//3.Filtering and Modifying Entries Before Converting Back

const person = {
  name: 'John',
  age: 25,
  role: 'Developer'
};

const filtered= Object.entries(person).filter(([key,value])=>key !=='role')
const result = Object.fromEntries(filtered)
console.log({result});
