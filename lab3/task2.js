const n = Number(process.argv[2]);
let product = 1;

for (let i = 1; i <= n; i++) {
  product *= (10 + i) / 10;
}

console.log("Произведение:", product);
