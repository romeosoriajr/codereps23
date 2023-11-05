function getWinner(arr, k) {
  let currWinner = arr[0];
  let wins = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currWinner) {
      currWinner = arr[i];
      wins = 0;
    }

    if (++wins == k) break;
  }

  return currWinner;
}

console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2));
