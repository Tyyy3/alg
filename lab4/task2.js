// Дано целое n ≥ 0. Рекурсивно найти n-е число Фибоначчи в последовательности, начинающейся с F(0) = 0 и F(1) = 1.
function fibonacci(n, current = 0, next = 1) {
  if (n === 0) return current;
  return fibonacci(n - 1, next, current + next);
}

const n = Number(process.argv[2]);
console.log("Число Фибоначчи:", fibonacci(n));
