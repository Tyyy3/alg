// Построить двоичное дерево поиска из чисел 50, 30, 20, 40, 70, 60, 80 в указанном порядке. Проверить, есть ли в дереве число 40, и вывести значения узлов в порядке возрастания симметричным обходом.
function insert(node, value) {
  if (node === null) return { value, left: null, right: null };

  if (value < node.value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }
  return node;
}

function search(node, value) {
  if (node === null) return false;
  if (value === node.value) return true;
  if (value < node.value) return search(node.left, value);
  return search(node.right, value);
}

function traverse(node, result) {
  if (node === null) return;
  traverse(node.left, result);
  result.push(node.value);
  traverse(node.right, result);
}

let root = null;
for (const value of [50, 30, 20, 40, 70, 60, 80]) {
  root = insert(root, value);
}

console.log(search(root, 40) ? "Число 40 найдено" : "Число 40 не найдено");
const result = [];
traverse(root, result);
console.log("Симметричный обход:", result.join(" "));
