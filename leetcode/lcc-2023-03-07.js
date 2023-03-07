function minimumTime(time, totalTrips) {
  let left = 1;
  let right = totalTrips * Math.min(...time);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let count = 0;

    for (const num of time) {
      count += Math.floor(mid / num);
    }

    if (count >= totalTrips) right = mid;
    else left = mid + 1;
  }

  return left;
}
