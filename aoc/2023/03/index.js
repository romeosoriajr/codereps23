const fs = require("fs");

function partTwo() {
  const grid = getGrid("./input.txt");

  const m = grid.length;
  const n = grid[0].length;

  let sum = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const char = grid[row][col];

      if (char === "*" && hasNeighborNumber(grid, row, col)) {
        const foundNums = getNeighborNumbers(grid, row, col);

        if (foundNums.length == 2) {
          const blah = foundNums.reduce((total, val) => total * val);
          sum += blah;
        }
      }
    }
  }

  return sum;
}

function partOne() {
  const grid = getGrid("./input.txt");

  const m = grid.length;
  const n = grid[0].length;

  let sum = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const char = grid[row][col];

      if (isSymbol(char) && hasNeighborNumber(grid, row, col)) {
        // render visual
        // row - 1 > 0 &&
        //   console.log(
        //     grid[row - 1].slice(Math.max(0, col - 1), Math.min(n - 1, col + 2))
        //   );
        // console.log(
        //   grid[row].slice(Math.max(0, col - 1), Math.min(n - 1, col + 2))
        // );
        // row + 1 > 0 &&
        //   console.log(
        //     grid[row + 1].slice(Math.max(0, col - 1), Math.min(n - 1, col + 2))
        //   );

        // output
        const foundNums = getNeighborNumbers(grid, row, col);

        for (const num of foundNums) {
          sum += num;
        }
      }
    }
  }

  return sum;
}

function getNeighborNumbers(grid, row, col) {
  const found = [];
  const m = grid.length;
  const n = grid[0].length;

  const visited = new Set();
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [x, y] of directions) {
    const nextRow = row + x;
    const nextCol = col + y;
    const key = `${nextRow}-${nextCol}`;
    if (visited.has(key)) continue;
    visited.add(key);
    const char = grid[nextRow][nextCol];
    if (isNumber(char)) {
      let left = 0;
      let right = 0;

      while (nextCol + left >= 0 && isNumber(grid[nextRow][nextCol + left])) {
        visited.add(`${nextRow}-${nextCol + left}`);
        left -= 1;
      }

      while (nextCol + right < n && isNumber(grid[nextRow][nextCol + right])) {
        visited.add(`${nextRow}-${nextCol + right}`);
        right += 1;
      }

      const num = Number(
        grid[nextRow]
          .slice(Math.max(0, nextCol + left + 1), Math.min(n, nextCol + right))
          .join("")
      );
      found.push(num);
    }
  }

  return found;
}

function hasNeighborNumber(grid, row, col) {
  const m = grid.length;
  const n = grid[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [x, y] of directions) {
    const char = grid[row + x][col + y];

    if (isNumber(char)) {
      return true;
    }
  }

  return false;
}

function isNumber(char) {
  return "0123456789".includes(char);
}
function isSymbol(char) {
  return "*@-+#%=/$&".includes(char);
}

function getGrid(filename) {
  const data = fs.readFileSync(filename, { encoding: "utf8" }).split("\n");
  data.pop();

  return data.map((row) => row.split(""));
}

console.log(partTwo());
