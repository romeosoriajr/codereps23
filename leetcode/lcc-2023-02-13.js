function countOdds(low, high) {

  let count = 0;

  count += (low % 2 || high %2) ? 1 : 0;

  return count += Math.floor((high-low)/2);
}

