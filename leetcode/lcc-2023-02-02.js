function isAlienSorted(words, order) {
  const translated = words.map((word) => {
    return word
      .split("")
      .map((char) => String.fromCharCode(order.indexOf(char) + 97));
  });

  for (let i = 1; i < translated.length; i++) {
    if (translated[i] < translated[i - 1]) return false;
  }
  return true;
}

console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));

