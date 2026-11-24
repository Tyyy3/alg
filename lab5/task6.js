// Вводятся целые K и L, затем N элементов массива, причём 1 ≤ K ≤ L ≤ N. Найти среднее арифметическое элементов с номерами от K до L включительно.
const [k, l, ...numbers] = process.argv.slice(2).map(Number);
let sum = 0;

for (let i = k - 1; i < l; i++) {
  sum += numbers[i];
}

console.log("Среднее:", sum / (l - k + 1));
