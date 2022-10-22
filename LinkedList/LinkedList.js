/*
    Linked List modes:
    0: singly,
    1: singly circular,
    2: doubly,
    3: double circular
*/
const Node = require("../ListNode/ListNode");

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
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return temp;
      temp = temp.next;
    }
  }
  insertNodeAtIndex(index, data) {
    if (index >= this.length || index < 0) {
      throw new RangeError("Invaild index!");
    }

    const prevNode = this.getNodeByIndex(index - 1);

    const insertedNode = new Node(this.mode, data, prevNode.next, prevNode);
    prevNode.next = insertedNode;
    if (this.mode > 1) insertedNode.next.prev = insertedNode;
    this.length++;
  }
  deleteNodeAtIndex(index) {
    if (index >= this.length || index < 0) {
      throw new RangeError("Invaild index!");
    }

    const prevNode = this.getNodeByIndex(index - 1);

    prevNode.next = prevNode.next.next;
    if (this.mode > 1) prevNode.next.prev = prevNode;
    this.length--;
  }
}

LinkedList.prototype.insertAtHead = require("./insertAtHead");
LinkedList.prototype.insertAtTail = require("./insertAtTail");
LinkedList.prototype.deleteHead = require("./deleteHead");
LinkedList.prototype.deleteTail = require("./deleteTail");

module.exports = LinkedList;
