function countHomogenous(s) {
  let result = 0;
  let curr = 0;
  let count = 0;
  const mod = 10 ** 9 + 7;

  for (const char of s) {
    count = char == curr ? count + 1 : 1;
    curr = char;
    result = (result + count) % mod;
  }

  return result;
}

console.log(countHomogenous("abbcccaa"));
