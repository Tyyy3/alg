const rate = Number(process.argv[2]);
let amount = 1000;
let months = 0;

while (amount <= 1100) {
  amount += amount * rate / 100;
  months++;
}

console.log("Количество месяцев:", months);
console.log("Сумма:", amount.toFixed(2), "руб.");
