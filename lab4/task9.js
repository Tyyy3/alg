function hanoi(n, from, to, spare) {
  if (n === 0) return;

  hanoi(n - 1, from, spare, to);
  console.log("Диск", n, ":", from, "→", to);
  hanoi(n - 1, spare, to, from);
}

const n = Number(process.argv[2]);
hanoi(n, "A", "C", "B");
