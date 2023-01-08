function maxPoints(points) {
  const n = points.length;

  if (n <= 2) return n;
  let result = 0;

  for (const a of points) {
    const [x1, y1] = a;
    const map = new Map();

    for (const b of points) {
      if (a == b) continue;
      const [x2, y2] = b;

      const slope =
        x2 - x1 == 0 ? Number.MAX_SAFE_INTEGER : ((y2 - y1) / (x2 - x1)).toPrecision();

      map.set(slope, (map.get(slope) || 0) + 1);

      result = Math.max(result, map.get(slope));
    }
  }

  return result + 1;
}
