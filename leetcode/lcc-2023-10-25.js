function kthGrammar(n, k) {
  if (n == 1) return 0;

  if (k % 2) return kthGrammar(n - 1, (k + 1) / 2) ? 1 : 0;

  return kthGrammar(n - 1, k / 2) ? 0 : 1;
}
