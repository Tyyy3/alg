function isPalindrome(text, left, right) {
  if (left >= right) return true;
  if (text[left] !== text[right]) return false;
  return isPalindrome(text, left + 1, right - 1);
}

const text = process.argv.slice(2).join(" ");
console.log(isPalindrome(text, 0, text.length - 1) ? "Палиндром" : "Не палиндром");
