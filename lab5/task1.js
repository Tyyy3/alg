const n = Number(process.argv[2]);
const numbers = [];

for (let i = 0; i < n; i++) {
  numbers.push(2 * i + 1);
}

console.log(numbers.join(" "));
