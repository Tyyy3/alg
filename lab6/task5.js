const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
let columnNumber = 0;

for (let col = 0; col < matrix[0].length; col++) {
  if (matrix.every(row => row[col] % 2 !== 0)) {
    columnNumber = col + 1;
    break;
  }
}

console.log(columnNumber);
