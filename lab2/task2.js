const [a, b, c] = process.argv.slice(2).map(Number);
let sum;

if (a <= b && a <= c) {
    sum = b + c;
} else if (b <= c) {
    sum = a + c;
} else {
    sum = a + b;
}

console.log("Сумма двух наибольших:", sum);
