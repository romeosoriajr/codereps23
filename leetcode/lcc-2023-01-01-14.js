function smallestEquivalentString(s1, s2, baseStr) {

  const map = {};

  for (let i=0; i < s1.length; i++) {
    union(s1.charAt(i), s2.charAt(i));
  }

  let result = '';

  for (const char of baseStr) {
    result += helper(char);
  }

  return result;

  function helper(char) {
    if (!map[char]) map[char] = char;

    while (map[char] != char) {
      map[char] = map[map[char]];
      char = map[char];
    }

    return char;
  }

  function union(a, b) {
    a = helper(a);
    b = helper(b);
    if (a > b) {
      [a,b] = [b,a];
    }
    map[b] = a;
  }
}
