// Даны длины A > B > 0. Уложить на отрезке A как можно больше отрезков длины B без наложений и найти длину остатка без умножения и деления.
const [a, b] = process.argv.slice(2).map(Number);
let rest = a;

while (rest >= b) {
  rest = Number((rest - b).toPrecision(15));
}

console.log("Незанятая часть:", rest);
