function counter() {
    let count = 0;
    function abc() {
      return ++count;
    };
    return abc
  }
  const increment = counter();
  console.log(increment()); 
  console.log(increment()); 
  console.log(increment());