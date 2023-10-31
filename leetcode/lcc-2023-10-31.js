function findArray(pref) {
  // for (let i = pref.length - 1; i > 0; i--) {
  //   pref[i] ^= pref[i - 1];
  // }
  //
  // return pref;

  return pref
    .reduceRight((acc, val, i) => {
      const xor = val ^ pref[i - 1];
      acc.push(xor);
      return acc;
    }, [])
    .reverse();
}

console.log(findArray([5, 2, 0, 3, 1]));
