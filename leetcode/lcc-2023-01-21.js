function restoreIpAddresses(s) {
  const result = [];

  helper("", s, 0);

  return result;

  function helper(path, str, k) {
    if (!str.length || k == 4) {
      if (!str.length && k == 4) {
        result.push(path.substr(1));
      }

      return;
    }

    for (
      let i = 1;
      i <= (str.charAt(0) == "0" ? 1 : 3) && i <= str.length;
      i++
    ) {
      const p = str.substr(0, i);

      if (parseInt(p) <= 255) {
        helper(`${path}.${p}`, str.substr(i), k + 1);
      }
    }
  }
}

