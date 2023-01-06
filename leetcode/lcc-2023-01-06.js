function maxIceCream(costs, coins) {
  costs.sort((a,b) => a-b);
  const map = new Map();

  for (let i = 0; i < costs.length; i++) {
    map.set(costs[i], (map.get(costs[i]) || 0) + 1);
  }

  let result = 0;

  for (const key of map.keys()) {
    if (coins < key) {
      break;
    }

    const count = map.get(key);

    for (let j = 0; j < count; j++) {
      if (coins >= key) {
        coins -= key;
        result++;
      }
    }
  }

  return result;
}

console.log(maxIceCream([8,2,10,2,5,4,2,6,3,8], 46));
