function deleteHead() {
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

module.exports = deleteHead;
