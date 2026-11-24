// Даны два числа a и b. Вычислить и вывести их среднее арифметическое (a + b) / 2.
const [a, b] = process.argv.slice(2).map(Number);

console.log("Среднее арифметическое:", (a + b) / 2);
