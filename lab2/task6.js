const n = Number(process.argv[2]);
const parity = n % 2 === 0 ? "четное" : "нечетное";
let size;

if (n < 10) {
    size = "однозначное";
} else if (n < 100) {
    size = "двузначное";
} else {
    size = "трехзначное";
}

console.log(parity, size, "число");
