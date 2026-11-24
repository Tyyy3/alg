// Даны длины A > B > 0. Уложить на отрезке A как можно больше отрезков длины B без наложений и найти длину остатка без умножения и деления.
function readLength(text) {
  const [mantissa, exponent = "0"] = text.toLowerCase().split("e");
  const [whole, fraction = ""] = mantissa.split(".");
  return { digits: whole + fraction, exponent: Number(exponent) - fraction.length };
}

function inUnits(length, exponent) {
  return BigInt(length.digits + "0".repeat(length.exponent - exponent));
}

function formatLength(units, exponent) {
  if (units === 0n) return "0";
  const digits = units.toString();
  const point = digits.length + exponent;
  const significant = digits.replace(/0+$/, "");
  if (point <= -6 || point > 21) {
    const mantissa = significant.length === 1 ? significant : significant[0] + "." + significant.slice(1);
    return mantissa + "e" + (point > 0 ? "+" : "") + (point - 1);
  }
  if (point <= 0) return "0." + "0".repeat(-point) + significant;
  if (point >= significant.length) return significant.padEnd(point, "0");
  return significant.slice(0, point) + "." + significant.slice(point);
}

const args = process.argv.slice(2);
const decimal = /^\+?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i;
if (args.length !== 2 || !args.every(value => decimal.test(value))) {
  console.error("Введите две положительные десятичные длины. Пример: node task7.js 7.5 2");
  process.exit(1);
}
const [a, b] = args.map(readLength);
if (BigInt(a.digits) === 0n || BigInt(b.digits) === 0n) {
  console.error("Длины должны быть положительными.");
  process.exit(1);
}
const exponent = Math.min(a.exponent, b.exponent);
let rest = inUnits(a, exponent);
const segment = inUnits(b, exponent);

const blocks = [];
for (let block = segment; block <= rest; block += block) {
  blocks.push(block);
}

while (blocks.length > 0) {
  const block = blocks.pop();
  if (block <= rest) rest -= block;
}

console.log("Незанятая часть:", formatLength(rest, exponent));
