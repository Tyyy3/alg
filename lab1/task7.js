// Даны координаты точек A, B и C на числовой оси. Вычислить длины отрезков AC и BC и вывести обе длины и их сумму.
const [a, b, c] = process.argv.slice(2).map(Number);
const ac = Math.abs(c - a);
const bc = Math.abs(c - b);

console.log("AC:", ac);
console.log("BC:", bc);
console.log("Сумма длин:", ac + bc);
