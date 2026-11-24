// Даны координаты двух точек на плоскости (x1, y1) и (x2, y2). Вычислить длину отрезка между ними.
const [x1, y1, x2, y2] = process.argv.slice(2).map(Number);

console.log("Расстояние:", Math.hypot(x2 - x1, y2 - y1));
