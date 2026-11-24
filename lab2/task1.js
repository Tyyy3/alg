let [a, b] = process.argv.slice(2).map(Number);

if (a === b) {
    a = 0;
    b = 0;
} else if (a > b) {
    b = a;
} else {
    a = b;
}

console.log("A =", a);
console.log("B =", b);
