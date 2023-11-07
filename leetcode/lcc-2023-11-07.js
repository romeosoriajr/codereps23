function eliminateMaximum(dist, speed) {
  for (let i = 0; i < dist.length; i++) {
    dist[i] = (dist[i] - 1) / speed[i];
  }

  dist.sort((a, b) => a - b);

  for (let i = 0; i < dist.length; i++) {
    if (i > dist[i]) {
      return i;
    }
  }

  return dist.length;
}

console.log(eliminateMaximum([4, 2, 3], [2, 1, 1]));
