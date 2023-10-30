function sortByBitsNaive(arr) {
  return arr.sort((a, b) => {
    const aOnes = numOnes(a);
    const bOnes = numOnes(b);

    if (aOnes === bOnes) {
      return a - b;
    }

    return aOnes - bOnes;
  });

  function numOnes(num) {
    return num
      .toString(2)
      .split("")
      .filter((val) => val === "1").length;
  }
}

function sortByBits(arr) {
  return arr
    .map(helper)
    .sort((a, b) => a - b)
    .map((v) => (v %= 10001));

  function helper(num) {
    let n = num;
    let result = 0;
    while (n != 0) {
      result += n & 1;
      n >>= 1;
    }

    return result * 10001 + num;
  }
}
