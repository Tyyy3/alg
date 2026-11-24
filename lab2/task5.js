const n = Number(process.argv[2]);

if (n === 0) {
    console.log("нулевое число");
} else {
    const sign = n > 0 ? "положительное" : "отрицательное";
    const parity = n % 2 === 0 ? "четное" : "нечетное";
    console.log(sign, parity, "число");
}
