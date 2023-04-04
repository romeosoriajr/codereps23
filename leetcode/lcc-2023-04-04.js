function partitionString(s) {
  let i = 0;
  let count = 0;

  let set = new Set();

  while (i < s.length) {
    if (set.has(s.charAt(i))) {
      count += 1;
      set.clear();
    }

    set.add(s.charAt(i));
    i += 1;
  }

  return count + 1;
}
