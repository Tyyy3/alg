// Дана строка из слов. Рекурсивно переставить слова в обратном порядке, сохранив порядок букв внутри каждого слова.
function reverseWords(words, index) {
  if (index === 0) return words[0];
  return words[index] + " " + reverseWords(words, index - 1);
}

const words = process.argv.slice(2).join(" ").trim().split(/\s+/);
console.log(reverseWords(words, words.length - 1));
