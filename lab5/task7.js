// Дан массив из N различных целых чисел. Если его элементы в исходном порядке образуют арифметическую прогрессию, вывести её разность, в остальных случаях вывести 0.
const numbers = process.argv.slice(2).map(Number);
let difference = numbers.length > 1 ? numbers[1] - numbers[0] : 0;

for (let i = 2; i < numbers.length; i++) {
  if (numbers[i] - numbers[i - 1] !== difference) {
    difference = 0;
    break;
  }
}

console.log(difference);
