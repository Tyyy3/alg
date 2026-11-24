const year = Number(process.argv[2]);
const animals = [
    "крысы", "коровы", "тигра", "зайца", "дракона", "змеи", "лошади",
    "овцы", "обезьяны", "курицы", "собаки", "свиньи"
];
const femaleColors = ["зеленой", "красной", "желтой", "белой", "черной"];
const maleColors = ["зеленого", "красного", "желтого", "белого", "черного"];

const cycleYear = ((year - 1984) % 60 + 60) % 60;
const animal = animals[cycleYear % 12];
const colorIndex = Math.floor(cycleYear / 12);
let color = femaleColors[colorIndex];
if (animal === "тигра" || animal === "зайца" || animal === "дракона") {
    color = maleColors[colorIndex];
}

console.log("год", color, animal);
