// Дано целое N > 0. Вычислить N² как сумму нечётных чисел от 1 до 2N − 1 и выводить текущую сумму после каждого сложения.
const n = Number(process.argv[2]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += 2 * i - 1;
  console.log(sum);
}
