function findMinArrowShots(points) {
  points.sort((a, b) => a[1] - b[1]);

  let result = 1;

  let prev = 0;

  for (let curr = 1; curr < points.length; curr++) {
    if (points[curr][0] > points[prev][1]) {
      result++;
      prev = curr;
    }
  }

  return result;
}
