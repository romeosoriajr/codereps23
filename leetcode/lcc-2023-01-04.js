function minimumRounds(tasks) {
  const map = new Map();

  for (const val of tasks) {
    map.set(val, (map.get(val) || 0) + 1);
  }

  let result = 0;

  for (const val of map.values()) {
    if (val == 1) return -1;

    result += Math.floor(count / 3);

    if (count % 3) result++;
  }

  return result;
}
