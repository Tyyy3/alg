// Дана строка. Рекурсивно определить, совпадает ли последовательность её символов при чтении слева направо и справа налево.
function isPalindrome(symbols, left, right) {
  if (left >= right) return true;
  if (symbols[left] !== symbols[right]) return false;
  return isPalindrome(symbols, left + 1, right - 1);
}

const text = process.argv.slice(2).join(" ");
const segmenter = new Intl.Segmenter("ru", { granularity: "grapheme" });
const symbols = Array.from(segmenter.segment(text), item => item.segment);
console.log(isPalindrome(symbols, 0, symbols.length - 1) ? "Палиндром" : "Не палиндром");
