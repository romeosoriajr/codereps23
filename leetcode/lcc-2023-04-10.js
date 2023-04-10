function isValid(s) {
  const stack = [];

  const open = new Set(["[", "(", "{"]);

  const pair = new Map();

  pair.set("[", "]");
  pair.set("(", ")");
  pair.set("{", "}");

  for (const char of s) {
    if (open.has(char)) {
      stack.push(pair.get(char));
    } else {
      const closed = stack.pop();
      if (closed !== char) return false;
    }
  }

  return stack.length == 0;
}
