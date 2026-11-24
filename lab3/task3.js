const n = Number(process.argv[2]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += 2 * i - 1;
  console.log(sum);
}
