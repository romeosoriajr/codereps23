function minDeletionSize(strs) {
  const n = strs.length;
  const cols = strs[0].length;

  let result = 0;

  for (let col = 0; col < cols; col++) {
    for (let i = 1; i < n; i++) {
      const str = strs[i];
      const prevStr = strs[i - 1];

      if (str[col] < prevStr[col]) {
        result += 1;
        break;
      }
    }
  }

  return result;
}

