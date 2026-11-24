// Для квадратной матрицы нечётного порядка M вывести все элементы по спирали против часовой стрелки. Начать с левого верхнего угла, спуститься по первому столбцу и закончить в центре. Каждая строка матрицы вводится в кавычках.
const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
const result = [];

for (let start = 0; start < matrix.length / 2; start++) {
  const end = matrix.length - 1 - start;

  for (let row = start; row <= end; row++) {
    result.push(matrix[row][start]);
  }
  for (let col = start + 1; col <= end; col++) {
    result.push(matrix[end][col]);
  }
  for (let row = end - 1; row >= start; row--) {
    result.push(matrix[row][end]);
  }
  for (let col = end - 1; col > start; col--) {
    result.push(matrix[start][col]);
  }
}

console.log(result.join(" "));
