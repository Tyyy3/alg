const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
const counts = [];

for (let col = 0; col < matrix[0].length; col++) {
  let sum = 0;
  for (const row of matrix) {
    sum += row[col];
  }
  const average = sum / matrix.length;

  let count = 0;
  for (const row of matrix) {
    if (row[col] > average) {
      count++;
    }
  }
  counts.push(count);
}

console.log(counts.join(" "));
