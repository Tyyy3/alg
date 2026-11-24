const [n, a, b] = process.argv.slice(2).map(Number);
const numbers = [a, b];
let sum = a + b;

while (numbers.length < n) {
  const next = sum;
  numbers.push(next);
  sum += next;
}

console.log(numbers.join(" "));
