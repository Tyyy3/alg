// Дано целое N > 1. Найти наименьшее целое K, для которого сумма 1 + 2 + … + K не меньше N, и вывести K и полученную сумму.
const n = Number(process.argv[2]);
let k = 0;
let sum = 0;

while (sum < n) {
  k++;
  sum += k;
}

console.log("K:", k);
console.log("Сумма:", sum);
