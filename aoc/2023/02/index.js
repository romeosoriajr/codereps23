const fs = require("fs");
const str = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";

function run02(inputFile) {
  const data = fs.readFileSync(inputFile, { encoding: "utf8" }).split("\n");

  let sum = 0;
  for (const str of data) {
    if (!str) continue;

    const { sets } = parseGameString(str);

    let minRed = 0;
    let minBlue = 0;
    let minGreen = 0;

    for (const { red, blue, green } of sets) {
      minRed = Math.max(minRed, red);
      minBlue = Math.max(minBlue, blue);
      minGreen = Math.max(minGreen, green);
    }

    sum += minRed * minBlue * minGreen;
  }

  return sum;
}

function run01(inputFile) {
  const maxRed = 12;
  const maxBlue = 14;
  const maxGreen = 13;

  const data = fs.readFileSync(inputFile, { encoding: "utf8" }).split("\n");

  let sumIDs = 0;

  for (const str of data) {
    if (!str) continue;
    const { id, sets } = parseGameString(str);

    let i = 0;

    while (i < sets.length) {
      const { red, blue, green } = sets[i];

      if (red > maxRed || blue > maxBlue || green > maxGreen) break;

      i += 1;
    }

    if (i == sets.length) {
      sumIDs += id;
    }
  }

  return sumIDs;
}

function parseGameString(str) {
  const [gameStr, setsStr] = str.split(": ");

  const gameNum = gameStr.split(" ").pop();
  const sets = setsStr.split("; ").map((setStr) => {
    const obj = { red: 0, blue: 0, green: 0 };

    const set = setStr.split(", ");

    for (const v of set) {
      const [numStr, color] = v.split(" ");
      obj[color] = Number(numStr);
    }

    return obj;
  });

  return { id: Number(gameNum), sets };
}

console.log(run02("./input.txt"));
