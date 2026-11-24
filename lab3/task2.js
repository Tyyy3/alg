// Дано целое N > 0. Найти произведение N множителей, первый из которых равен 1,1, а каждый следующий на 0,1 больше предыдущего.
const n = Number(process.argv[2]);
let product = 1;

for (let i = 1; i <= n; i++) {
  product *= (10 + i) / 10;
}

console.log("Произведение:", product);
