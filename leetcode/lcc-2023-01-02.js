function detectCapitalUse (word) {
  return word == word.toUpperCase() ||
         word == word.toLowerCase() ||
         (word.charAt(0) == word.charAt(0).toUpperCase() && word.slice(1).toLowerCase() == word.slice(1))
}
