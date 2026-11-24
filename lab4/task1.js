// Дано целое n ≥ 0. Написать рекурсивную функцию для вычисления факториала n, принимая 0! = 1.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const n = Number(process.argv[2]);
console.log("Факториал:", factorial(n));
