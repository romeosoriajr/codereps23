function addDigits(num) {
  while (num >= 10) {
    let sum = 0;
    while (num) {
      const lastDigit = num % 10;
      sum += lastDigit;
      num = parseInt(num / 10);
    }
    num = sum;
  }
  return num;
}

console.log(addDigits(0));
