const [x1, y1, x2, y2] = process.argv.slice(2).map(Number);

console.log("Расстояние:", Math.hypot(x2 - x1, y2 - y1));
