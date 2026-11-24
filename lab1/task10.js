const [x1, y1, x2, y2, x3, y3] = process.argv.slice(2).map(Number);
const a = Math.hypot(x2 - x1, y2 - y1);
const b = Math.hypot(x3 - x2, y3 - y2);
const c = Math.hypot(x1 - x3, y1 - y3);
const area = Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)) / 2;

console.log("Периметр:", a + b + c);
console.log("Площадь:", area);
