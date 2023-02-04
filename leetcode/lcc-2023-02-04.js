function checkInclusion(s1, s2) {
  const mapA = new Array(26).fill(0);

  for (const char of s1) mapA[char.charCodeAt(0) - 97] += 1;

  const mapB = new Array(26).fill(0);
  let start = 0;
  let end = 0;

  while (end < s2.length) {
    mapB[s2.charCodeAt(end) - 97] += 1;

    if (end - start + 1 == s1.length) {
      if (isSame()) {
        return true;
      }
    }

    if (end - start + 1 < s1.length) {
      end += 1;
    } else {
      mapB[s2.charCodeAt(start) - 97] -= 1;
      start += 1;
      end += 1;
    }
  }

  return false;

  function isSame() {
    for (let i = 0; i < 26; i++) {
      if (mapA[i] != mapB[i]) return false;
    }

    return true;
  }
}
