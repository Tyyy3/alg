const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));

for (const row of matrix) {
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 1; i < row.length; i++) {
    if (row[i] < row[minIndex]) minIndex = i;
    if (row[i] > row[maxIndex]) maxIndex = i;
  }
  [row[minIndex], row[maxIndex]] = [row[maxIndex], row[minIndex]];
}

for (const row of matrix) {
  console.log(row.join(" "));
}
