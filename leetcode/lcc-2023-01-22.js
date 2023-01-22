function partition(s) {
  const result = [];

  helper(0, []);

  return result;

  function helper(index, path) {
    if (index == s.length) {
      result.push([...path]);
      return;
    }

    for (let i = index; i < s.length; i++) {
      if (isPalindrome(index, i)) {
        path.push(s.substring(index, i + 1));
        helper(i + 1, path);
        path.pop();
      }
    }
  }

  function isPalindrome(start, end) {
    while (start <= end) {
      if (s.charAt(start++) != s.charAt(end--)) return false;
    }

    return true;
  }
}

console.log(partition("aab"));
