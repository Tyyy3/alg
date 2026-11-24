const [a, b] = process.argv.slice(2).map(Number);
const squareA = a ** 2;
const squareB = b ** 2;

console.log("Сумма:", squareA + squareB);
console.log("Разность:", squareA - squareB);
console.log("Произведение:", squareA * squareB);
console.log("Частное:", squareA / squareB);
