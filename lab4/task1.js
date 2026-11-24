// Дано целое n ≥ 0. Написать рекурсивную функцию для вычисления факториала n, принимая 0! = 1.
function product(first, last) {
  if (first > last) return 1n;
  if (first === last) return first;

  const middle = (first + last) / 2n;
  return product(first, middle) * product(middle + 1n, last);
}

const input = process.argv[2]?.trim() ?? "";
if (process.argv.length !== 3 || !/^\+?\d+$/.test(input)) {
  console.error("Введите одно целое неотрицательное число.");
  process.exitCode = 1;
} else {
  const n = BigInt(input);
  console.log("Факториал:", product(1n, n).toString());
}
