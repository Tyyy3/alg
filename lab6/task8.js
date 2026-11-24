const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
const halfHeight = matrix.length / 2;
const halfWidth = matrix[0].length / 2;

for (let row = 0; row < halfHeight; row++) {
  for (let col = 0; col < halfWidth; col++) {
    const otherRow = row + halfHeight;
    const otherCol = col + halfWidth;
    const temp = matrix[row][col];
    matrix[row][col] = matrix[otherRow][otherCol];
    matrix[otherRow][otherCol] = temp;
  }
}

for (const row of matrix) {
  console.log(row.join(" "));
}
