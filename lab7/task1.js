const numbers = process.argv.slice(2).map(Number);

for (let end = numbers.length - 1; end > 0; end--) {
  for (let i = 0; i < end; i++) {
    if (numbers[i] > numbers[i + 1]) {
      const temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = temp;
    }
  }
}

console.log(numbers.join(" "));
