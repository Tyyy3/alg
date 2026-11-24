const [a, b, c] = process.argv.slice(2).map(Number);
const ac = Math.abs(c - a);
const bc = Math.abs(c - b);

console.log("AC:", ac);
console.log("BC:", bc);
console.log("Сумма длин:", ac + bc);
