// A generator function in JavaScript is a special type of function that can be paused and resumed during its execution.
//It is defined using the function* syntax, and it returns a generator object which conforms to both the iterable and iterator protocols.
// The yield keyword is used to pause the function and return a value.
// When the generator's next() method is called, it resumes execution until it either hits another yield statement or completes.

function* generatorFuntion() {
  yield "First output";
  yield "Second Output";
  yield "Third Output";
}

const gen = generatorFuntion();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Second Example

function* RangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }
  
  const range = RangeGenerator(1, 10);
  for (const rangeNumber of range) {
    console.log({ rangeNumber });
  }
  