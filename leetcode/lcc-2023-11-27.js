function knightDialer(n) {
  //2 vertical, 1 horizontal
  //2 horizontal, 1 vertical

  const rowLength = 4;
  const colLength = 3;

  // for (let currRow = 0; currRow < rowLength; ++currRow) {
  //   for (let currCol = 0; currCol < colLength; ++currCol) {
  //     if (currRow == 3 && currCol != 1) continue;
  //
  //     console.log(
  //       `[${currRow}, ${currCol}]:`,
  //       getNextPositions([currRow, currCol])
  //     );
  //   }
  // }

  console.log(getNextPositions([0, 0]));

  //make a function that returns an array of valid next positions;

  function getNextPositions(currPos) {
    const [currRow, currCol] = currPos;

    // 4x3
    // out of bounds
    // if arr[3], only column 1 is val

    const directions = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];

    const nextPos = [];

    for ([i, j] of directions) {
      const nextRow = currRow + i;
      const nextCol = currCol + j;
      console.log(nextRow, nextCol);
      if (nextRow < 0 || nextRow >= rowLength) continue;
      if (nextCol < 0 || nextCol >= colLength) continue;

      if (nextRow == 4 && nextCol != 1) continue;

      nextPos.push([nextRow, nextCol]);
    }

    return nextPos;
  }
}

knightDialer(0);
