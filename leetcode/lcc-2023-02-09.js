function distinctNames(ideas) {
  const count = new Map();
  for (const idea of ideas) {
    const firstChar = idea.charAt(0);

    if (!count.has(firstChar)) count.set(firstChar, new Set());

    count.get(firstChar).add(idea.substr(1));
  }

  let result = 0;

  const seen = new Set();
  for (const keyA of count.keys()) {
    seen.add(keyA);
    for (const keyB of count.keys()) {
      if (seen.has(keyB)) continue;

      let a = 0;
      let b = 0;

      for (const c of count.get(keyA)) {
        if (!count.get(keyB).has(c)) a++;
      }
      for (const c of count.get(keyB)) {
        if (!count.get(keyA).has(c)) b++;
      }

      result += a * b;
    }
  }

  return result * 2;
}

const ideas = ["coffee", "donuts", "time", "toffee"];
console.log(distinctNames(ideas));
