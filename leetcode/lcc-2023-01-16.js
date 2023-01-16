function insert(intervals, newInterval) {
  const result = [];

  for (const [a, b] of intervals) {
    if (b < newInterval[0]) result.push([a, b]);
    else if (newInterval[1] < a) {
      result.push(newInterval);
      newInterval = [a,b];
    } else {
      newInterval[0] = Math.min(newInterval[0], a);
      newInterval[1] = Math.max(newInterval[1], b);
    }
  }
  result.push(newInterval);
  return result;
}
