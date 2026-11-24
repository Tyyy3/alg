// Вводятся целое число K и матрица размера M × N, причём 1 ≤ K ≤ M. Найти сумму и произведение всех элементов K-й строки при нумерации строк от единицы. Каждая строка матрицы вводится в кавычках.
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
