// Даны длины сторон прямоугольника a и b. Вывести его площадь S = a · b и периметр P = 2 · (a + b).
const [a, b] = process.argv.slice(2).map(Number);

console.log("Площадь:", a * b);
console.log("Периметр:", 2 * (a + b));
