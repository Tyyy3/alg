// Дано целое число. Рекурсивно определить количество цифр в его десятичной записи без учёта знака.
function countDigits(digits) {
  if (digits.length === 1) return 1;
  const middle = Math.floor(digits.length / 2);
  return countDigits(digits.slice(0, middle)) + countDigits(digits.slice(middle));
}

const value = process.argv[2] ?? "";
if (!/^[+-]?\d+$/.test(value)) {
  console.error("Введите целое число в десятичной записи.");
  process.exit(1);
}
const digits = value.replace(/^[+-]/, "").replace(/^0+(?=\d)/, "");
console.log("Количество цифр:", countDigits(digits));
