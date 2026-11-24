// Даны координаты точек A, B и C на числовой оси, причём C лежит между A и B. Найти произведение длин отрезков AC и BC.
const [a, b, c] = process.argv.slice(2).map(Number);
const ac = Math.abs(c - a);
const bc = Math.abs(c - b);

console.log("Произведение длин:", ac * bc);
