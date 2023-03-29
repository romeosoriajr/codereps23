function maxSatisfaction(satisfaction) {

  satisfaction.sort((a,b) => b-a);

  let sum = 0;
  let result = 0;

  for (const val of satisfaction) {
    if (sum + val > 0) {
      result += sum + val;
      sum += val;
    }
  }

  return result;

}
