function power(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / power(x, -n);
  return x * power(x, n - 1);
}

const [x, n] = process.argv.slice(2).map(Number);
console.log("Результат:", power(x, n));
