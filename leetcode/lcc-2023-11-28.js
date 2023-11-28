function numberOfWays(corridor) {
  const mod = 10 ** 9 + 7;

  const pos = [];

  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] == "S") {
      pos.push(i);
    }
  }

  if (pos.length % 2 || !pos.length) {
    return 0;
  }

  let result = 1;
  let prev = pos[1];
  for (let i = 2; i < pos.length; i += 2) {
    const length = pos[i] - prev;
    result = (result * length) % mod;
    prev = pos[i + 1];
  }

  return result;
}
