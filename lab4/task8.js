function countDigits(n) {
  if (n < 10) return 1;
  return 1 + countDigits(Math.floor(n / 10));
}

const n = Number(process.argv[2]);
console.log("Количество цифр:", countDigits(Math.abs(n)));
