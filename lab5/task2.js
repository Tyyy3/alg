// Даны целое число N > 1, первый член A и знаменатель D геометрической прогрессии. Сформировать и вывести первые N членов, каждый раз умножая предыдущий член на D.
const [n, a, d] = process.argv.slice(2).map(Number);
const numbers = [];
let term = a;

for (let i = 0; i < n; i++) {
  numbers.push(term);
  term *= d;
}

console.log(numbers.join(" "));
