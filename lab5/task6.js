const [k, l, ...numbers] = process.argv.slice(2).map(Number);
let sum = 0;

for (let i = k - 1; i < l; i++) {
  sum += numbers[i];
}

console.log("Среднее:", sum / (l - k + 1));
