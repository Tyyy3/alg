const [a, b, c] = process.argv.slice(2).map(Number);
const ac = Math.abs(c - a);
const bc = Math.abs(c - b);

console.log("Произведение длин:", ac * bc);
