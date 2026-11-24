// Даны два положительных целых числа A и B. Найти их наибольший общий делитель с помощью алгоритма Евклида.
let [a, b] = process.argv.slice(2).map(Number);

while (b !== 0) {
  const remainder = a % b;
  a = b;
  b = remainder;
}

console.log("НОД:", a);
