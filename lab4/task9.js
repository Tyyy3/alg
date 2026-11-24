// Для Ханойской башни из n дисков рекурсивно вывести ходы переноса с A на C через B. За один ход переносится один диск, больший диск нельзя класть на меньший.
function hanoi(n, from, to, spare) {
  if (n === 0) return;

  hanoi(n - 1, from, spare, to);
  console.log("Диск", n, ":", from, "→", to);
  hanoi(n - 1, spare, to, from);
}

const n = Number(process.argv[2]);
hanoi(n, "A", "C", "B");
