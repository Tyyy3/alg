// Дано целое число N > 0. Сформировать и вывести массив из первых N положительных нечётных чисел, начиная с единицы.
const n = Number(process.argv[2]);
const numbers = [];

for (let i = 0; i < n; i++) {
  numbers.push(2 * i + 1);
}

console.log(numbers.join(" "));
