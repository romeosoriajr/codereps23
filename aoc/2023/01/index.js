const fs = require("fs");

const spelledNums = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const mapped = new Map();

mapped.set("one", "1");
mapped.set("two", "2");
mapped.set("three", "3");
mapped.set("four", "4");
mapped.set("five", "5");
mapped.set("six", "6");
mapped.set("seven", "7");
mapped.set("eight", "8");
mapped.set("nine", "9");

let input;
fs.readFile("./input.txt", { encoding: "utf8" }, (err, data) => {
  const input = data.split("\n");

  const result = input.reduce((acc, str) => {
    if (!str.length) return acc;
    const arr = getArr(str);

    const firstDigit = arr[0];
    const lastDigit = arr[arr.length - 1];

    const result = Number(firstDigit + lastDigit);
    return (acc += result);
  }, 0);

  console.log(result);
});

// p1
// let input;
// fs.readFile("./input.txt", { encoding: "utf8" }, (err, data) => {
//   const input = data.split("\n");
//
//   const result = input.reduce((acc, str) => {
//     if (!str.length) return acc;
//     const num = getTwoDigits(str);
//
//     return (acc += num);
//   }, 0);
//
//   console.log(result);
// });

// string gets first and last number;
// filter for numbers
// get first last

function getTwoDigits(str) {
  const nums = str.split("").filter((char) => "0123456789".includes(char));
  const firstDigit = nums[0];
  const lastDigit = nums[nums.length - 1];
  return Number(firstDigit + lastDigit);
}

// splits into str and nums
function getArr(str) {
  const result = [];
  let left = 0;

  while (left < str.length) {
    if ("0123456789".includes(str[left])) {
      result.push(str.charAt(left));
      left += 1;
    } else {
      let right = left;

      while (!"0123456789".includes(str.charAt(right))) {
        right += 1;
      }

      const subStr = str.substr(left, right - left);
      const bleh = getNumsFromString(subStr);
      result.push(...bleh);

      left = right;
    }
  }

  return result;
}

const sample = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

function getNumsFromString(str) {
  const nums = [];

  let left = 0;

  while (left < str.length - 1) {
    let right = left + 1;
    while (right < str.length) {
      const subStr = str.substr(left, right - left + 1);

      const found = spelledNums.find((num) => num == subStr);

      if (found) {
        nums.push(mapped.get(found));
        break;
      }

      right += 1;
    }
    left += 1;
  }

  return nums;
}

const strs = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

console.log(getArr("4nineeightseven2"));
