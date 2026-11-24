function decompose(n) {
  if (n === 2 || n === 3) return String(n);
  return "2 + " + decompose(n - 2);
}

const n = Number(process.argv[2]);
if (n < 2) {
  console.log("Разложения нет");
} else {
  console.log(n + " = " + decompose(n));
}
