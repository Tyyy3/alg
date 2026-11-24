const [ax, ay, bx, by, cx, cy] = process.argv.slice(2).map(Number);
const ab = Math.hypot(bx - ax, by - ay);
const ac = Math.hypot(cx - ax, cy - ay);

if (ab < ac) {
    console.log(`Ближе точка B (${bx}, ${by}). Расстояние: ${ab}`);
} else if (ac < ab) {
    console.log(`Ближе точка C (${cx}, ${cy}). Расстояние: ${ac}`);
} else {
    console.log(`Точки B (${bx}, ${by}) и C (${cx}, ${cy}) равноудалены. Расстояние: ${ab}`);
}
