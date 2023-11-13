function sortVowels(s) {
  const strArr = s.split("");

  const vowelIndices = [];
  const vowels = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if ("AEIOUaeiou".includes(char)) {
      vowelIndices.push(i);
      vowels.push(char);
    }
  }

  vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  for (let i = 0; i < vowels.length; i++) {
    const index = vowelIndices[i];
    const vowel = vowels[i];

    strArr[index] = vowel;
  }

  return strArr.join("");
}

console.log(sortVowels("lEetcOde"));
