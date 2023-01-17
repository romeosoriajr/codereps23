function minFlipsMonoIncr(s) {
  let zeroes = 0;
  let ones = 0;

  for (const char of s) {
    if (char == '0') zeroes++;
    else ones++;

    zeroes = Math.min(zeroes, ones);
  }

  return zeroes;
}
