function snakesAndLadders(board) {
  const n = board.length;
  const endPos = n * n;
  const set = new Set();
  const queue = [[1, 0]];

  while (queue.length) {
    let [cell, path] = queue.shift();
    const [r, c] = getNext(cell);

    if (board[r][c] !== -1) cell = board[r][c];
    if (cell == endPos) return path;

    for (let i = 1; i < 7; i++) {
      const nextCell = cell + i;
      if (set.has(nextCell)) continue;
      set.add(nextCell);
      queue.push([nextCell, path + 1]);
    }
  }

  return -1;

  function getNext(cell) {
    const r = Math.floor((cell - 1) / n);
    const c = (cell - 1) % n;

    if (r % 2 === 0) return [n - r - 1, c];
    return [n - r - 1, n - c - 1];
  }
}

