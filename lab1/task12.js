// Дано число x. Подставить его в формулу y = 4(x − 3)⁶ − 7(x − 3)³ + 2 и вывести значение функции.
const x = Number(process.argv[2]);
const t = x - 3;

console.log("y =", 4 * t ** 6 - 7 * t ** 3 + 2);
