// Из корня: node check.js — все работы, node check.js 3 — только lab3.
// Из папки лабораторной: node ../check.js — задания этой лабораторной.
const path = require("node:path");
const { readFileSync } = require("node:fs");
const { createInterface } = require("node:readline/promises");
const { spawnSync } = require("node:child_process");

// Для каждой задачи по порядку указаны аргументы и ожидаемый вывод.
const examples = {
  1: [
    [[3, 4], "Площадь: 12\nПериметр: 14"],
    [[2], "Длина окружности: 6.28"],
    [[4, 9], "Среднее арифметическое: 6.5"],
    [[-4, 2], "Сумма: 20\nРазность: 12\nПроизведение: 64\nЧастное: 4"],
    [[-4, 2], "Сумма: 6\nРазность: 2\nПроизведение: 8\nЧастное: 2"],
    [[1, 1, 4, 5], "Расстояние: 5"],
    [[-3, 5, 2], "AC: 5\nBC: 3\nСумма длин: 8"],
    [[-3, 5, 2], "Произведение длин: 15"],
    [[5, 4, 1, 1], "Периметр: 14\nПлощадь: 12"],
    [[0, 0, 3, 0, 0, 4], "Периметр: 12\nПлощадь: 6"],
    [[2], "y = 161"],
    [[2], "y = 13"],
  ],
  2: [
    [[4, 9], "A = 9\nB = 9"],
    [[7, -1, 5], "Сумма двух наибольших: 12"],
    [[0, 0, 3, 4, -2, 0], "Ближе точка C (-2, 0). Расстояние: 2"],
    [[-2, -4], "Координатная четверть: 3"],
    [[-6], "отрицательное четное число"],
    [[15], "нечетное двузначное число"],
    [[25, 1], "двадцать пятое января"],
    [[21], "двадцать одно учебное задание"],
    [[256], "двести пятьдесят шесть"],
    [[1998], "год красного тигра"],
  ],
  3: [
    [[250], "0.1 кг — 25.00 руб.\n0.2 кг — 50.00 руб.\n0.3 кг — 75.00 руб.\n0.4 кг — 100.00 руб.\n0.5 кг — 125.00 руб.\n0.6 кг — 150.00 руб.\n0.7 кг — 175.00 руб.\n0.8 кг — 200.00 руб.\n0.9 кг — 225.00 руб.\n1 кг — 250.00 руб."],
    [[2], "Произведение: 1.32"],
    [[4], "1\n4\n9\n16"],
    [[2, 3], "Сумма: 15"],
    [[2, 3], "Сумма: -5"],
    [[2, 3], "2\n2\n3\n3\n3"],
    [["2.999999999999999", "1"], "Незанятая часть: 0.999999999999999"],
    [[40], "K: 9\nСумма: 45"],
    [[10], "Количество месяцев: 2\nСумма: 1210.00 руб."],
    [[48, 18], "НОД: 6"],
  ],
  4: [
    [[5], "Факториал: 120"],
    [[79], "Число Фибоначчи: 14472334024676221"],
    [[2, -3], "Результат: 0.125"],
    [["👩‍💻а👩‍💻"], "Палиндром"],
    [[7, 1, 3, 5, 7, 9], "Индекс: 3"],
    [["я изучаю алгоритмы"], "алгоритмы изучаю я"],
    [[7], "7 = 2 + 2 + 3"],
    [["9999999999999999"], "Количество цифр: 16"],
    [[2], "Диск 1 : A → B\nДиск 2 : A → C\nДиск 1 : B → C"],
  ],
  5: [
    [[5], "1 3 5 7 9"],
    [[5, 3, -2], "3 -6 12 -24 48"],
    [[6, 2, 3], "2 3 5 10 20 40"],
    [[1, 2, 3, 4, 5], "1 5 2 4 3"],
    [[1, 2, 3, 4, 5], "1 3 5 4 2"],
    [[2, 4, 10, 20, 30, 40, 50], "Среднее: 30"],
    [[7, 4, 1, -2], "-3"],
    [[8, 7, 3, 4, 1, 6], "Минимум: 4"],
    [[1, 5, 2, 4, 3], "Номер последнего локального максимума: 4"],
    [[3, 8, 5, 8, 9], "2 4"],
  ],
  6: [
    [["1 2 3", "4 5 6", "7 8 9"], "1 4 7 8 9 6 3 2 5"],
    [[2, "1 2 3", "4 5 6"], "Сумма: 15\nПроизведение: 120"],
    [["2 3 -1", "4 2 5"], "Номер столбца: 3\nПроизведение: -5"],
    [["1 9", "4 6", "7 9"], "1 2"],
    [["2 -3 5", "1 7 9"], "2"],
    [["5 1 9", "8 4 2"], "5 9 1\n2 4 8"],
    [["4 2 9", "1 5 6"], "9 2 4\n6 5 1"],
    [["1 2 3 4", "5 6 7 8"], "7 8 3 4\n5 6 1 2"],
    [["3 1", "8 0", "2 9"], "2 9\n3 1\n8 0"],
    [["1 2 3", "4 5 6", "7 8 9"], "3 8 15 12 7"],
  ],
  7: [
    [[7, 2, 7, -1, 3], "-1 2 3 7 7"],
  ],
  8: [
    [[7, 2, 7, -1, 3], "-1 2 3 7 7"],
  ],
  9: [
    [[7, 2, 7, -1, 3], "-1 2 3 7 7"],
  ],
  10: [
    [[21, 2, 5, 8, 13, 21, 34, 55], "4"],
  ],
  11: [
    [[], "Число 40 найдено\nСимметричный обход: 20 30 40 50 60 70 80"],
  ],
  12: [
    [[], "Очередь: 1 2 3\nУдалён первый элемент: 1\nПервый элемент после удаления: 2\nОчередь пуста? false\nРазмер очереди: 2\nЕсть ли в очереди элемент 3? true\nЭлемент очереди: 2\nЭлемент очереди: 3\nРазмер после очистки: 0"],
  ],
};

const fields = {
  1: ["a b", "d", "a b", "a b", "a b", "x1 y1 x2 y2", "a b c", "a b c", "x1 y1 x2 y2", "x1 y1 x2 y2 x3 y3", "x", "x"],
  2: ["a b", "a b c", "Ax Ay Bx By Cx Cy", "x y", "n", "n", "день месяц", "n", "n", "год"],
  3: ["цену_за_1_кг", "n", "n", "a n", "a n", "a b", "a b", "n", "процент", "a b"],
  4: ["n", "n", "x n", "строку", null, "строку", "n", "число", "n"],
  5: ["n", "n a d", "n a b"],
};

function showInput(lab, task, values) {
  if (lab === 6) {
    const rows = task === 2 ? values.slice(1) : values;
    const sizeLabel = task === 1 || task === 10 ? "Размер квадратной матрицы?" : "Сколько строк?";
    console.log(sizeLabel, rows.length);
    rows.forEach((row, i) => console.log("Строка " + (i + 1) + " через пробел:", row));
    if (task === 2) console.log("Введите k:", values[0]);
  } else if (lab === 10 || (lab === 4 && task === 5)) {
    console.log("Отсортированные числа через пробел:", values.slice(1).join(" "));
    console.log("Введите искомое число:", values[0]);
  } else if (lab === 5 && task === 6) {
    console.log("Числа через пробел:", values.slice(2).join(" "));
    console.log("Введите k:", values[0]);
    console.log("Введите l:", values[1]);
  } else if (fields[lab]?.[task - 1]) {
    const names = fields[lab][task - 1].split(" ");
    names.forEach((name, i) => console.log("Введите " + name.replaceAll("_", " ") + ":", values[i]));
  } else if (values.length) {
    console.log("Числа через пробел:", values.join(" "));
  } else {
    console.log("Исходные данные заданы в программе.");
  }
}

function showAnswer(lab, task, actual, values) {
  if (!actual) {
    console.log("(нет вывода)");
  } else if (lab === 10) {
    console.log("Индекс:", actual);
  } else if (lab === 3 && task === 3) {
    actual.split("\n").forEach((sum, i) => console.log("После слагаемого " + (i + 1) + ":", sum));
  } else if (lab === 6 && task === 4) {
    actual.split(" ").forEach((count, i) => console.log("Столбец " + (i + 1) + ":", count));
  } else if (lab === 6 && task === 10) {
    actual.split(" ").forEach((sum, i) => console.log("Диагональ j-i=" + (values.length - 1 - i) + ":", sum));
  } else if (!actual.includes("\n") && !/[:=]/.test(actual)) {
    console.log("Результат:", actual);
  } else {
    console.log(actual);
  }
}

function demonstrate(lab, task, input, expected) {
  const name = "lab" + lab + "/task" + task + ".js";
  const file = path.join(__dirname, name);
  console.log("\nЛабораторная " + lab + ", задание " + task + "  (" + name + ")");
  let condition;
  try {
    condition = readFileSync(file, "utf8").split(/\r?\n/, 1)[0].replace(/^\uFEFF?\/\/\s*/, "");
  } catch (error) {
    console.error("Не удалось прочитать задание:", error.message);
    return false;
  }
  console.log(condition);
  const values = input.map(String);
  showInput(lab, task, values);
  const result = spawnSync(process.execPath, [file, ...values], {
    cwd: path.dirname(file),
    encoding: "utf8",
    timeout: 5000,
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  });
  const actual = (result.stdout ?? "").replace(/\r\n/g, "\n").trimEnd();
  showAnswer(lab, task, actual, values);
  if (result.status === 0 && actual === expected) return true;
  console.error("[ОШИБКА]", result.error?.message || result.stderr?.trim() || "Ответ не совпал с ожидаемым.");
  console.error("Ожидалось:\n" + expected);
  return false;
}

async function main() {
  const usage = "node " + path.basename(process.argv[1]) + " [номер от 1 до 12] [--auto]\nEnter — следующее задание. --auto — показ без пауз.";
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === "--help") {
    console.log(usage);
    return;
  }
  const selected = args.filter(arg => arg !== "--auto");
  if (selected.length > 1 || (selected.length && !Object.hasOwn(examples, selected[0]))) {
    console.error(usage);
    process.exitCode = 2;
    return;
  }

  const currentFolder = path.relative(__dirname, process.cwd());
  const labNumber = selected[0] ?? /^lab([1-9]|1[0-2])$/.exec(currentFolder)?.[1];
  const labs = labNumber ? [Number(labNumber)] : Object.keys(examples).map(Number);
  const interactive = process.stdin.isTTY && process.stdout.isTTY && !args.includes("--auto");
  const keyboard = interactive ? createInterface({ input: process.stdin, output: process.stdout }) : null;
  keyboard?.on("SIGINT", () => { keyboard.close(); process.exit(130); });

  let shown = 0;
  let failed = 0;
  try {
    for (const lab of labs) {
      for (const [i, [input, expected]] of examples[lab].entries()) {
        if (shown && keyboard) await keyboard.question("\nEnter — следующее задание, Ctrl+C — выход. ");
        if (!demonstrate(lab, i + 1, input, expected)) failed++;
        shown++;
      }
    }
  } finally {
    keyboard?.close();
  }
  console.log("\nПоказ завершён. Заданий: " + shown + ".");
  if (failed) {
    console.error("Заданий с ошибками:", failed);
    process.exitCode = 1;
  }
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
