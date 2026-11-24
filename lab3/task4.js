// Даны вещественное число A и целое N > 0. За один цикл вычислить сумму степеней A от 0 до N включительно.
const [a, n] = process.argv.slice(2).map(Number);
let term = 1;
let sum = 1;

for (let i = 1; i <= n; i++) {
  term *= a;
  sum += term;
}

console.log("Сумма:", sum);
