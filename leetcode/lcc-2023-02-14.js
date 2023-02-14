function addBinary(a,b) {

  const result = [];


  let i=a.length-1;
  let j=b.length-1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += a.charAt(i) - '0';
      i--;
    }

    if (j >= 0) {
      sum += b.charAt(j) - '0';
      j--;
    }

    carry = sum > 1 ? 1 : 0;
    result.unshift(sum%2);
  }

  if (carry != 0) result.unshift(carry);

  return result.join('');
}

console.log(addBinary('1010', '1011'));

