class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let curr = this.head;

    let count = 0;
    let result = 0;

    while (curr) {
      count += 1;

      if (Math.floor(Math.random() * count) == 0) {
        result = curr.val;
      }

      curr = curr.next;
    }

    return result;
  }
}
