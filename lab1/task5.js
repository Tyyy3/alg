// Даны два ненулевых числа a и b. Найти сумму и произведение их модулей, а также разность |a| − |b| и частное |a| / |b|.
const [a, b] = process.argv.slice(2).map(Number);
const absA = Math.abs(a);
const absB = Math.abs(b);

console.log("Сумма:", absA + absB);
console.log("Разность:", absA - absB);
console.log("Произведение:", absA * absB);
console.log("Частное:", absA / absB);
