let [a, b] = process.argv.slice(2).map(Number);

while (b !== 0) {
  const remainder = a % b;
  a = b;
  b = remainder;
}

console.log("НОД:", a);
