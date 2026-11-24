// Дан массив из N элементов. Вывести первый элемент, затем последний, затем второй и предпоследний и так далее до середины, выводя каждый элемент один раз.
const numbers = process.argv.slice(2).map(Number);
const result = [];
let left = 0;
let right = numbers.length - 1;

while (left < right) {
  result.push(numbers[left], numbers[right]);
  left++;
  right--;
}
if (left === right) {
  result.push(numbers[left]);
}

console.log(result.join(" "));
