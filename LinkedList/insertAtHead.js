const Node = require("../ListNode/ListNode");

function insertAtHead(data) {
  switch (this.mode) {
    case 0: {
      const newSinglyHead = new Node(this.mode, data, this.head);
      this.head = newSinglyHead;
      break;
    }
    case 1: {
      const newSinglyCircularHead = new Node(this.mode, data, this.head);
      this.head = newSinglyCircularHead;
      if (this.length) this.tail.next = newSinglyCircularHead;
      break;
    }
    case 2: {
      const newDoublyHead = new Node(this.mode, data, this.head);
      if (this.length) this.head.prev = newDoublyHead;
      this.head = newDoublyHead;
      break;
    }
    case 3: {
      const newDoublyCircularHead = new Node(
        this.mode,
        data,
        this.head,
        this.tail
      );
      if (this.length) this.head.prev = newDoublyCircularHead;
      this.head = newDoublyCircularHead;
      if (this.length) this.tail.next = newDoublyCircularHead;
      break;
    }
  }
  if (!this.length) this.tail = this.head;
  this.length++;
}

module.exports = insertAtHead;
