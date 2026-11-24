// Даны целые числа N > 2, A и B. Сформировать и вывести массив из N чисел, в котором первые два элемента равны A и B, а каждый следующий равен сумме всех предыдущих.
const [n, a, b] = process.argv.slice(2).map(Number);
const numbers = [a, b];
let sum = a + b;

while (numbers.length < n) {
  const next = sum;
  numbers.push(next);
  sum += next;
}

console.log(numbers.join(" "));
