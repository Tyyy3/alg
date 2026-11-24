function fibonacci(n, current = 0, next = 1) {
  if (n === 0) return current;
  return fibonacci(n - 1, next, current + next);
}

const n = Number(process.argv[2]);
console.log("Число Фибоначчи:", fibonacci(n));
