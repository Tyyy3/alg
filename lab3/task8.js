const n = Number(process.argv[2]);
let k = 0;
let sum = 0;

while (sum < n) {
  k++;
  sum += k;
}

console.log("K:", k);
console.log("Сумма:", sum);
