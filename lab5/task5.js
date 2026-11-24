const numbers = process.argv.slice(2).map(Number);
const result = [];

for (let i = 0; i < numbers.length; i += 2) {
  result.push(numbers[i]);
}
for (let i = numbers.length - 1; i >= 0; i--) {
  if ((i + 1) % 2 === 0) {
    result.push(numbers[i]);
  }
}

console.log(result.join(" "));
