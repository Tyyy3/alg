const numbers = process.argv.slice(2).map(Number);

for (let i = 0; i < numbers.length; i++) {
  const next = numbers.indexOf(numbers[i], i + 1);
  if (next !== -1) {
    console.log(i + 1, next + 1);
    break;
  }
}
