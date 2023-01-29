class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.minFreq = 0;
    this.keyMap = new Map();
    this.freqMap = new Map();
    this.freqKeys = new Map();
  }

  setFreq(key, freq) {
    this.freqMap.set(key, freq);

    if (!this.freqKeys.has(freq)) {
      this.freqKeys.set(freq, new Set());
    }

    this.freqKeys.get(freq).add(key);
  }
  get(key) {
    if (!this.keyMap.has(key)) return -1;

    const currFreq = this.freqMap.get(key);
    this.freqKeys.get(currFreq).delete(key);
    if (currFreq == this.minFreq && !this.freqKeys.get(currFreq).size) {
      this.freqKeys.delete(currFreq);
      this.minFreq += 1;
    }

    this.setFreq(key, currFreq + 1);
    return this.keyMap.get(key);
  }

  put(key, value) {
    if (this.capacity == 0) return;

    if (this.keyMap.has(key)) {
      this.keyMap.set(key, value);
      this.get(key);
      return;
    }

    if (this.keyMap.size == capacity) {
      const key = this.freqKeys.get(this.minFreq)[Symbol.iterator]().next().value;
      this.freqKeys.get(this.minFreq).delete(key);
      this.keyMap.delete(key);
    }

    this.minFreq = 1;
    this.setFreq(key, this.minFreq);
    this.keyMap.set(key, value);
  }
}
