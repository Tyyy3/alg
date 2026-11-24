const numbers = process.argv.slice(2).map(Number);

for (let i = 1; i < numbers.length; i++) {
  const value = numbers[i];
  let j = i - 1;
  while (j >= 0 && numbers[j] > value) {
    numbers[j + 1] = numbers[j];
    j--;
  }
  numbers[j + 1] = value;
}

console.log(numbers.join(" "));
