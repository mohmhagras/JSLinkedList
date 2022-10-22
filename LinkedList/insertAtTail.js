const Node = require("../ListNode/ListNode");

function insertAtTail(data) {
  switch (this.mode) {
    case 0: {
      const newTail = new Node(this.mode, data);
      if (this.length) this.tail.next = newTail;
      this.tail = newTail;
      break;
    }
    case 1: {
      const newCircularTail = new Node(this.mode, data, this.head);
      if (this.length) this.tail.next = newCircularTail;
      this.tail = newCircularTail;
      break;
    }
    case 2: {
      const newDoublyTail = new Node(this.mode, data, null, this.tail);
      if (this.length) this.tail.next = newDoublyTail;
      this.tail = newDoublyTail;
      break;
    }
    case 3: {
      const newDoublyCircularTail = new Node(
        this.mode,
        data,
        this.head,
        this.tail
      );
      if (this.length) {
        this.tail.next = newDoublyCircularTail;
        this.head.prev = newDoublyCircularTail;
      }

      this.tail = newDoublyCircularTail;
      break;
    }
  }
  if (!this.length) this.head = this.tail;
  this.length++;
}
module.exports = insertAtTail;
