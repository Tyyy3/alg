// Даны координаты точки (x, y), которая не лежит на осях координат. Определить номер её координатной четверти от 1 до 4.
const [x, y] = process.argv.slice(2).map(Number);
let quarter;

if (x > 0 && y > 0) {
    quarter = 1;
} else if (x < 0 && y > 0) {
    quarter = 2;
} else if (x < 0 && y < 0) {
    quarter = 3;
} else {
    quarter = 4;
}

console.log("Координатная четверть:", quarter);
