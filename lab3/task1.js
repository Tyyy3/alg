const price = Number(process.argv[2]);

for (let i = 1; i <= 10; i++) {
  const weight = i / 10;
  console.log(weight + " кг — " + (price * weight).toFixed(2) + " руб.");
}
