// Даны искомое число и массив, отсортированный по возрастанию. Рекурсивным бинарным поиском определить индекс числа или сообщить, что его нет в массиве.
function binarySearch(numbers, target, left, right) {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);
  if (numbers[middle] === target) return middle;
  if (target < numbers[middle]) {
    return binarySearch(numbers, target, left, middle - 1);
  }
  return binarySearch(numbers, target, middle + 1, right);
}

const [target, ...numbers] = process.argv.slice(2).map(Number);
const index = binarySearch(numbers, target, 0, numbers.length - 1);
console.log(index === -1 ? "Число не найдено" : "Индекс: " + index);
