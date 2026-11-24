const [a, b] = process.argv.slice(2).map(Number);
let rest = a;

while (rest >= b) {
  rest = Number((rest - b).toPrecision(15));
}

console.log("Незанятая часть:", rest);
