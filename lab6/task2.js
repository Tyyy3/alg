const k = Number(process.argv[2]);
const matrix = process.argv.slice(3).map(row => row.trim().split(/\s+/).map(Number));
let sum = 0;
let product = 1;

for (const number of matrix[k - 1]) {
  sum += number;
  product *= number;
}

console.log("Сумма:", sum);
console.log("Произведение:", product);
