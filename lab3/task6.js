const [a, b] = process.argv.slice(2).map(Number);

for (let number = a; number <= b; number++) {
  for (let i = 0; i < number; i++) {
    console.log(number);
  }
}
