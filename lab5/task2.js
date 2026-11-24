const [n, a, d] = process.argv.slice(2).map(Number);
const numbers = [];
let term = a;

for (let i = 0; i < n; i++) {
  numbers.push(term);
  term *= d;
}

console.log(numbers.join(" "));
