function fib(n) {
  const memo = {};
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return (memo[n] = fib(n - 1) + fib(n - 2));
}


console.log(fib(10));
