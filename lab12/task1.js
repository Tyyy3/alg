const values = process.argv.length > 2 ? process.argv.slice(2) : [1, 2, 3];
const queue = [];

for (const value of values) {
  queue.push(value);
}
console.log("Очередь:", queue.join(" "));

console.log("Удалён первый элемент:", queue.shift());
console.log("Первый элемент после удаления:", queue[0] ?? "очередь пуста");
console.log("Очередь пуста?", queue.length === 0);
console.log("Размер очереди:", queue.length);

const target = values[values.length - 1];
console.log(`Есть ли в очереди элемент ${target}?`, queue.includes(target));
for (const value of queue) {
  console.log("Элемент очереди:", value);
}

queue.length = 0;
console.log("Размер после очистки:", queue.length);
