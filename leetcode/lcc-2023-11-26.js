function largestSubmatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let result = 0;

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j]) matrix[i][j] += matrix[i - 1][j];
    }
  }

  for (let i = 0; i < m; i++) {
    matrix[i].sort((a, b) => b - a);

    for (let j = 0; j < n; j++) {
      result = Math.max(result, matrix[i][j] * (j + 1));
    }
  }

  return result;
}
const matrix = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
];
console.log(largestSubmatrix(matrix));
