// Дано целое число. Найти с помощью рекурсии одно его разложение в сумму простых чисел или сообщить, что такого разложения нет.
function decompose(n) {
  if (n === 2 || n === 3) return String(n);
  return "2 + " + decompose(n - 2);
}

const n = Number(process.argv[2]);
if (n < 2) {
  console.log("Разложения нет");
} else {
  console.log(n + " = " + decompose(n));
}
