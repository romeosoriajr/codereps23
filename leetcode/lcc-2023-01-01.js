function wordPattern(pattern, s) {
  const n = pattern.length;
  const map = new Map();
  const seen = new Set();
  const words = s.split(" ");

  if (words.length !== n) return false;

  for (let i = 0; i < n; i++) {
    const key = pattern.charAt(i);
    const word = words[i];

    if (map.has(key)) {
      if (map.get(key) !== word) return false;
    } else if (seen.has(word)) {
      return false;
    } else {
      map.set(key, word);
    }
  }

  return true;
}

