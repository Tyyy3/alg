// Дано целое n ≥ 0. Рекурсивно найти n-е число Фибоначчи в последовательности, начинающейся с F(0) = 0 и F(1) = 1.
function fibonacciPair(n) {
  if (n === 0n) return [0n, 1n];

  const half = n / 2n;
  const [current, next] = fibonacciPair(half);
  const even = current * (2n * next - current);
  const odd = current * current + next * next;

  if (n % 2n === 0n) return [even, odd];
  return [odd, even + odd];
}

const input = process.argv[2]?.trim() ?? "";
if (process.argv.length !== 3 || !/^\+?\d+$/.test(input)) {
  console.error("Введите одно целое неотрицательное число.");
  process.exitCode = 1;
} else {
  const [result] = fibonacciPair(BigInt(input));
  console.log("Число Фибоначчи:", result.toString());
}
