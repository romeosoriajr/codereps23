class SummaryRanges {
  constructor() {
    this.list = [];
  }

  addNum(num) {
    this.list[num] = true;
  }

  getIntervals() {
    const result = [];

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i]) {
        let j = i;
        while (this.list[j]) j++;
        result.push([i, j - 1]);
        i = j;
      }
    }

    return result;
  }
}
