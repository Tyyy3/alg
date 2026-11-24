// Даны два положительных целых числа A и B. Найти их наибольший общий делитель с помощью алгоритма Евклида.
const args = process.argv.slice(2);
if (args.length !== 2 || !args.every(value => /^\+?\d+$/.test(value) && BigInt(value) > 0n)) {
  console.error("Введите два положительных целых числа. Пример: node task10.js 48 18");
  process.exit(1);
}

let [a, b] = args.map(BigInt);
while (b !== 0n) {
  const remainder = a % b;
  a = b;
  b = remainder;
}

console.log("НОД:", a.toString());
