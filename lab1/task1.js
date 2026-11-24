const [a, b] = process.argv.slice(2).map(Number);

console.log("Площадь:", a * b);
console.log("Периметр:", 2 * (a + b));
