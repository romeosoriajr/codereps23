function totalFruit(fruits) {
  const map = new Map();

  let i = 0;
  let j = 0;
  let result = 0;

  while (j < fruits.length) {
    map.set(fruits[j], (map.get(fruits[j]) || 0) + 1);

    if (map.size <= 2) result = Math.max(result, j - i + 1);
    else {
      map.set(fruits[i], map.get(fruits[i]) - 1);

      if (map.get(fruits[i]) == 0) map.delete(fruits[i]);

      i += 1;
    }

    j += 1;
  }

  return result;
}
