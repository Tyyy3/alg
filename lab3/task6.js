// Даны целые числа 0 < A < B. Для каждого целого числа от A до B включительно вывести его столько раз, каково его значение.
const [a, b] = process.argv.slice(2).map(Number);

for (let number = a; number <= b; number++) {
  for (let i = 0; i < number; i++) {
    console.log(number);
  }
}
