const Node = require("./ListNode");

/*
    Linked List modes:
    0: singly,
    1: singly circular,
    2: doubly,
    3: double circular
*/

class LinkedList {
  constructor(mode = 0) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.mode = mode;
  }

  static Singly() {
    return new LinkedList();
  }

  static Circular() {
    return new LinkedList(1);
  }

  static Doubly() {
    return new LinkedList(2);
  }

  static DoublyCircular() {
    return new LinkedList(3);
  }

  insertAtHead(data) {
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

  insertAtTail(data) {
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

  find(check) {
    let headTemp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (check(headTemp.data, i)) {
        return headTemp;
      }
      headTemp = headTemp.next;
    }
    return undefined;
  }

  getNodeByIndex(index) {
    if (index >= this.length || index < 0) {
      throw new RangeError("Invaild index!");
    }
    let headTemp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return headTemp;
      headTemp = headTemp.next;
    }
  }
  deleteHead() {
    if (!this.length) {
      throw new Error("You cannot delete from an empty list!");
    }
    switch (this.mode) {
      case 0: {
        this.head = this.head.next;
        break;
      }
      case 1: {
        this.head = this.head.next;
        this.tail.next = this.head;
        break;
      }
      case 2: {
        this.head = this.head.next;
        this.head.prev = null;
        break;
      }
      case 3: {
        this.head = this.head.next;
        this.head.prev = this.tail;
        this.tail.next = this.head;
        break;
      }
    }
    this.length--;
  }
  deleteTail() {
    if (!this.length) {
      throw new Error("You cannot delete from an empty list!");
    }
    switch (this.mode) {
      case 0: {
        this.tail = this.getNodeByIndex(this.length - 2);
        this.tail.next = null;
        break;
      }
      case 1: {
        this.tail = this.getNodeByIndex(this.length - 2);
        this.tail.next = this.head;
        break;
      }
      case 2: {
        this.tail = this.getNodeByIndex(this.length - 2);
        this.tail.next = null;
        break;
      }
      case 3: {
        this.tail = this.getNodeByIndex(this.length - 2);
        this.tail.next = this.head;
        this.head.prev = this.tail;
        break;
      }
    }
    this.length--;
  }
}

module.exports = LinkedList;
