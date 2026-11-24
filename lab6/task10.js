const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
const size = matrix.length;
const sums = [];

for (let offset = size - 1; offset >= 1 - size; offset--) {
  let row = Math.max(0, -offset);
  let col = Math.max(0, offset);
  let sum = 0;

  while (row < size && col < size) {
    sum += matrix[row][col];
    row++;
    col++;
  }
  sums.push(sum);
}

console.log(sums.join(" "));
