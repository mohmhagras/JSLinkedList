class Node {
  constructor(mode = 0, data = null, next = null, prev = null) {
    this.data = data;
    this.next = next;
    if (mode > 1) {
      this.prev = prev;
    }
  }
}

module.exports = Node;
