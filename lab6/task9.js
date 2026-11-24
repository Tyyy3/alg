const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
matrix.sort((a, b) => a[0] - b[0]);

for (const row of matrix) {
  console.log(row.join(" "));
}
