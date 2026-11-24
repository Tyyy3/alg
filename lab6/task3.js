const matrix = process.argv.slice(2).map(row => row.trim().split(/\s+/).map(Number));
let minProduct = Infinity;
let minColumn = 0;

for (let col = 0; col < matrix[0].length; col++) {
  let product = 1;
  for (const row of matrix) {
    product *= row[col];
  }
  if (product < minProduct) {
    minProduct = product;
    minColumn = col + 1;
  }
}

console.log("Номер столбца:", minColumn);
console.log("Произведение:", minProduct);
