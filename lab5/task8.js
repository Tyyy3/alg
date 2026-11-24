// Дан массив из N элементов с нумерацией от единицы. Найти и вывести наименьший из элементов на второй, четвёртой и остальных чётных позициях.
const numbers = process.argv.slice(2).map(Number);
let minimum = numbers[1];

for (let i = 3; i < numbers.length; i += 2) {
  if (numbers[i] < minimum) {
    minimum = numbers[i];
  }
}

if (minimum === undefined) {
  console.log("Нет элементов с чётными номерами.");
} else {
  console.log("Минимум:", minimum);
}
