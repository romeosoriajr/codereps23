function gcdOfStrings(str1, str2) {
  // find a divisor..
  // start from beginning as curr divisor

  const a = str1 + str2;
  const b = str2 + str1;

  return a == b ? str1.substr(0, gcd(str1.length, str2.length)) : "";

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
}
