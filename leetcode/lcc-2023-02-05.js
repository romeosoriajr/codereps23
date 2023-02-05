function findAnagrams(s, p) {
  const m = s.length;
  const n = p.length;

  if (m < n) return [];

  const mapS = new Array(26).fill(0);
  const mapP = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    mapS[s.charCodeAt(i) - 97] += 1;
    mapP[p.charCodeAt(i) - 97] += 1;
  }
  const result = [];

  if (isSame()) {
    result.push(0);
  }

  for (let i = n; i < m; i++) {
    mapS[s.charCodeAt(i - n) - 97] -= 1;
    mapS[s.charCodeAt(i) - 97] += 1;

    if (isSame()) {
      result.push(i - n + 1);
    }
  }

  return result;

  function isSame() {
    for (let i = 0; i < mapS.length; i++) {
      if (mapS.at(i) != mapP.at(i)) return false;
    }

    return true;
  }
}
