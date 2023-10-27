function longestPalindrome(s) {
  const n = s.length;
  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;

      while (s.charAt(left) && s.charAt(left) == s.charAt(right)) {
        left -= 1;
        right += 1;
      }

      if (right - left - 1 > result.length) {
        result = s.substring(left + 1, right);
      }
    }
  }

  return result;
}
