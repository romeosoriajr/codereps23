class SeatManager {
  constructor(n) {
    this.end = 0;
    this.queue = [];
  }

  reserve() {
    if (this.queue.length) {
      return this.queue.shift();
    }

    return ++this.end;
  }

  unreserve(n) {
    this.queue.push(n);
    this.queue.sort((a, b) => a - b);
  }
}
