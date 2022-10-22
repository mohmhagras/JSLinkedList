function deleteTail() {
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

module.exports = deleteTail;
