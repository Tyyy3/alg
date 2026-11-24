const n = Number(process.argv[2]);
const teens = [
    "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать",
    "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"
];
const tens = ["", "", "двадцать", "тридцать", "сорок"];
const units = ["", "одно", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
const lastDigit = n % 10;

let numberName;
let ending = "учебных заданий";
if (n < 20) {
    numberName = teens[n - 10];
} else {
    numberName = tens[Math.floor(n / 10)];
    if (lastDigit > 0) {
        numberName += " " + units[lastDigit];
    }
    if (lastDigit === 1) {
        ending = "учебное задание";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        ending = "учебных задания";
    }
}

console.log(numberName, ending);
