function poorPigs(buckets, minutesToDie, minutesToTest) {
  let pigs = 0;
  while ((minutesToTest / minutesToDie + 1) ** pigs < buckets) {
    pigs += 1;
  }

  return pigs;
}
