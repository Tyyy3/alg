const [target, ...numbers] = process.argv.slice(2).map(Number);

function binarySearch(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (numbers[middle] === target) return middle;
    if (numbers[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch(numbers, target));
