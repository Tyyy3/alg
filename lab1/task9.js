const [x1, y1, x2, y2] = process.argv.slice(2).map(Number);
const width = Math.abs(x2 - x1);
const height = Math.abs(y2 - y1);

console.log("Периметр:", 2 * (width + height));
console.log("Площадь:", width * height);
