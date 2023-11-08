function isReachableAtTime(sx, sy, fx, fy, t) {
  let xDiff = Math.abs(sx - fx);
  let yDiff = Math.abs(sy - fy);
  if (xDiff == 0 && yDiff == 0 && t == 1) return false;
  return Math.max(xDiff, yDiff) <= t;
}
