// Дан массив из N элементов. Вывести номер последнего элемента, который строго больше каждого из своих соседей. Нумерация начинается с единицы, крайний элемент сравнивается с одним соседом.
const numbers = process.argv.slice(2).map(Number);
let position = 0;

for (let i = numbers.length - 1; i >= 0; i--) {
  const greaterThanLeft = i === 0 || numbers[i] > numbers[i - 1];
  const greaterThanRight = i === numbers.length - 1 || numbers[i] > numbers[i + 1];
  if (greaterThanLeft && greaterThanRight) {
    position = i + 1;
    break;
  }
}

console.log("Номер последнего локального максимума:", position);
