function convert(s, numRows) {
  if (numRows <= 1) return s;

  const arr = new Array(numRows).fill("");

  let j = 0;
  let dir = -1;

  for (let i=0; i < s.length; i++) {
    if (j == numRows - 1 || j == 0) dir *= (-1);

    arr[j] += s.charAt(i);

    j += dir == 1 ? 1 : -1;

  }

  let result = '';

  for(const char of arr) {
    result += char;
  }

  return result;
}
