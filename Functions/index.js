function add(a, b) {
    if (new.target) {
        return 'The add function cannot be called as a constructor';
    }
    return a + b
}
console.log(add.length);
console.log(add.prototype);

let result = new add(10, 30)
console.log(result);


// closure

function outer() {
    this.value = 42;
    function inner() {
        console.log(this.value);
        return this.value
    }
    return inner()
}
  
  const closureFunc = outer();
  console.log(closureFunc);
//   closureFunc(); // Outputs: undefined (or an error in strict mode)
  