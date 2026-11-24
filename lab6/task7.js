const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
let min = matrix[0][0];
let max = matrix[0][0];
let minCol = 0;
let maxCol = 0;

for (const row of matrix) {
  for (let col = 0; col < row.length; col++) {
    if (row[col] < min) {
      min = row[col];
      minCol = col;
    }
    if (row[col] > max) {
      max = row[col];
      maxCol = col;
    }
  }
}

for (const row of matrix) {
  [row[minCol], row[maxCol]] = [row[maxCol], row[minCol]];
  console.log(row.join(" "));
}
