function canPlaceFlowers(flowerbed, n) {

  if (n == 0) return true;

  let i = 0;

  while (i < flowerbed.length) {

    if (flowerbed[i] == 0) {
      const left = i - 1;
      const right = i + 1;

      if ((left < 0 || flowerbed[i - 1] == 0) && (right == flowerbed.length || flowerbed[i + 1] == 0)) {
        flowerbed[i] = 1;
        n--;
      }
      if (n == 0) return true;
    }

    i++;
  }

  return false;

}

console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0))
