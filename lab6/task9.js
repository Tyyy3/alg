// Переставить строки матрицы размера M × N по возрастанию их первых элементов. Вывести матрицу в новом порядке, сохраняя все элементы каждой строки. Каждая строка матрицы вводится в кавычках.
const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
matrix.sort((a, b) => a[0] - b[0]);

for (const row of matrix) {
  console.log(row.join(" "));
}
