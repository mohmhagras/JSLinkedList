const LinkedList = require("./LinkedList.js");

function mixedInsertion(list) {
  list.insertAtHead(66);
  list.insertAtTail(90);
  list.insertAtHead(11);
  list.insertAtTail(99);
  list.insertAtHead(12);
  list.insertAtHead(5);
}

function headInsertion(list) {
  list.insertAtHead(5);
  list.insertAtHead(6);
  list.insertAtHead(9);
}

function tailInsertion(list) {
  list.insertAtTail(4);
  list.insertAtTail(2);
  list.insertAtTail(87);
  list.insertAtTail(17);
}
describe("Singly linked list", () => {
  test("#InsertAtHead", () => {
    const list = new LinkedList();

    headInsertion(list);
    expect(list.head.data).toBe(9);
    expect(list.tail.data).toBe(5);
    expect(list.length).toBe(3);
  });
  test("#InsertAtTail", () => {
    const list = new LinkedList();

    tailInsertion(list);

    expect(list.head.data).toBe(4);
    expect(list.tail.data).toBe(17);
    expect(list.length).toBe(4);
  });
  test("Mixed Insertions", () => {
    const list = LinkedList.Singly();

    mixedInsertion(list);

    expect(list.head.data).toBe(5);
    expect(list.tail.data).toBe(99);
    expect(list.length).toBe(6);
  });

  test("#deleteHead", () => {
    const emptyList = new LinkedList();
    const deleteFromEmptyList = () => {
      emptyList.deleteHead();
    };
    const list = new LinkedList();
    mixedInsertion(list);
    list.deleteHead();

    expect(deleteFromEmptyList).toThrow(
      "You cannot delete from an empty list!"
    );
    expect(list.head.data).toBe(12);
    expect(list.length).toBe(5);
  });

  test("#deleteTail", () => {
    const emptyList = new LinkedList();
    const deleteFromEmptyList = () => {
      emptyList.deleteTail();
    };
    const list = new LinkedList();
    mixedInsertion(list);
    list.deleteTail();

    expect(deleteFromEmptyList).toThrow(
      "You cannot delete from an empty list!"
    );
    expect(list.tail.data).toBe(90);
    expect(list.length).toBe(5);
  });
});

describe("Circular linked list", () => {
  test("#InsertAtHead", () => {
    const list = LinkedList.Circular();
    headInsertion(list);

    expect(list.head.data).toBe(9);
    expect(list.tail.data).toBe(5);
    expect(list.tail.next.data).toBe(9);
    expect(list.length).toBe(3);
  });

  test("#InsertAtTail", () => {
    const list = LinkedList.Circular();
    tailInsertion(list);

    expect(list.head.data).toBe(4);
    expect(list.tail.data).toBe(17);
    expect(list.tail.next.data).toBe(4);
    expect(list.length).toBe(4);
  });

  test("Mixed Insertions", () => {
    const list = LinkedList.Circular();
    mixedInsertion(list);

    expect(list.head.data).toBe(5);
    expect(list.tail.data).toBe(99);
    expect(list.tail.next.data).toBe(5);
    expect(list.length).toBe(6);
  });

  test("#deleteHead", () => {
    const list = LinkedList.Circular();
    mixedInsertion(list);

    list.deleteHead();
    expect(list.head.data).toBe(12);
    expect(list.length).toBe(5);
  });

  test("#deleteTail", () => {
    const list = LinkedList.Circular();
    mixedInsertion(list);

    list.deleteTail();
    expect(list.tail.data).toBe(90);
    expect(list.tail.next).toBe(list.head);
    expect(list.length).toBe(5);
  });

  test("Mixed deletion", () => {
    const list = LinkedList.Circular();
    mixedInsertion(list);

    list.deleteTail();
    list.deleteHead();
    expect(list.tail.data).toBe(90);
    expect(list.head.data).toBe(12);
    expect(list.tail.next).toBe(list.head);
    expect(list.length).toBe(4);
  });
});

describe("Doubly linked list", () => {
  test("#InsertAtHead", () => {
    const list = LinkedList.Doubly();

    headInsertion(list);

    expect(list.head.data).toBe(9);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.data).toBe(6);
    expect(list.tail.prev.data).toBe(6);
    expect(list.length).toBe(3);
  });

  test("#InsertAtTail", () => {
    const list = LinkedList.Doubly();
    tailInsertion(list);

    expect(list.head.data).toBe(4);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.data).toBe(2);
    expect(list.tail.prev.data).toBe(87);
    expect(list.tail.data).toBe(17);
    expect(list.length).toBe(4);
  });

  test("Mixed Insertions", () => {
    const list = LinkedList.Doubly();
    mixedInsertion(list);

    expect(list.head.data).toBe(5);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.data).toBe(12);
    expect(list.tail.prev.data).toBe(90);
    expect(list.tail.data).toBe(99);
    expect(list.length).toBe(6);
  });

  test("#deleteHead", () => {
    const list = LinkedList.Doubly();
    mixedInsertion(list);

    list.deleteHead();
    expect(list.head.data).toBe(12);
    expect(list.length).toBe(5);
  });

  test("#deleteTail", () => {
    const list = LinkedList.Doubly();
    mixedInsertion(list);

    list.deleteTail();
    expect(list.tail.data).toBe(90);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(5);
  });

  test("Mixed deletion", () => {
    const list = LinkedList.Doubly();
    mixedInsertion(list);

    list.deleteTail();
    list.deleteHead();
    expect(list.tail.data).toBe(90);
    expect(list.head.data).toBe(12);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(4);
  });
});

describe("Doubly Circular linked list", () => {
  test("#insertAtHead", () => {
    const list = LinkedList.DoublyCircular();
    headInsertion(list);

    expect(list.head.data).toBe(9);
    expect(list.head.prev.data).toBe(5);
    expect(list.head.next.data).toBe(6);
    expect(list.tail.prev.data).toBe(6);
    expect(list.tail.next.data).toBe(9);
    expect(list.length).toBe(3);
  });

  test("#insertAtTail", () => {
    const list = LinkedList.DoublyCircular();
    tailInsertion(list);

    expect(list.head.data).toBe(4);
    expect(list.head.prev.data).toBe(17);
    expect(list.head.next.data).toBe(2);
    expect(list.tail.prev.data).toBe(87);
    expect(list.tail.next.data).toBe(4);
    expect(list.length).toBe(4);
  });

  test("Mixed Insertions", () => {
    const list = LinkedList.DoublyCircular();
    mixedInsertion(list);

    expect(list.head.data).toBe(5);
    expect(list.head.prev.data).toBe(99);
    expect(list.head.next.data).toBe(12);
    expect(list.tail.prev.data).toBe(90);
    expect(list.tail.data).toBe(99);
    expect(list.tail.next.data).toBe(5);
    expect(list.length).toBe(6);
  });

  test("#deleteHead", () => {
    const list = LinkedList.DoublyCircular();
    mixedInsertion(list);

    list.deleteHead();
    expect(list.head.data).toBe(12);
    expect(list.head.prev).toBe(list.tail);
    expect(list.length).toBe(5);
  });

  test("#deleteTail", () => {
    const list = LinkedList.DoublyCircular();
    mixedInsertion(list);

    list.deleteTail();
    expect(list.tail.data).toBe(90);
    expect(list.tail.next).toBe(list.head);
    expect(list.length).toBe(5);
  });

  test("Mixed deletion", () => {
    const list = LinkedList.DoublyCircular();
    mixedInsertion(list);

    list.deleteTail();
    list.deleteHead();
    expect(list.tail.data).toBe(90);
    expect(list.head.data).toBe(12);
    expect(list.tail.next).toBe(list.head);
    expect(list.length).toBe(4);
  });
});

describe("#find", () => {
  test("returns found item if exists", () => {
    const list = new LinkedList();
    mixedInsertion(list);

    const item = list.find((nodeData) => nodeData === 11);

    expect(item.data).toBe(11);
    expect(item.next.data).toBe(66);
  });
  test("returns undefined if no such item exists", () => {
    const list = new LinkedList();
    mixedInsertion(list);

    const item = list.find((nodeData) => nodeData === 102);

    expect(item).toBeUndefined();
  });
});

describe("#getNodeByIndex", () => {
  test("returns node when index is valid", () => {
    const list = new LinkedList();
    headInsertion(list);

    const item = list.getNodeByIndex(1);

    expect(item.data).toBe(6);
  });

  test("throws error on invalid range", () => {
    const list = new LinkedList();
    headInsertion(list);

    const testFunction = () => {
      list.getNodeByIndex(4);
    };
    expect(testFunction).toThrow(RangeError);
  });
});

describe("#InsertNodeAtIndex", () => {
  test("adds properly when range is valid and list is singly", () => {
    const list = new LinkedList();

    mixedInsertion(list);
    list.insertNodeAtIndex(3, 144);
    const insertedNode = list.getNodeByIndex(3);
    expect(list.length).toBe(7);
    expect(insertedNode.data).toBe(144);
    expect(insertedNode.next.data).toBe(66);
  });

  test("throws error when range is invalid", () => {
    const list = new LinkedList();

    mixedInsertion(list);
    const testFunction = () => {
      list.insertNodeAtIndex(9, 144);
    };
    expect(list.length).toBe(6);
    expect(testFunction).toThrow("Invaild index!");
  });

  test("adds properly when range is valid and list is doubly", () => {
    const list = LinkedList.Doubly();
    mixedInsertion(list);
    list.insertNodeAtIndex(3, 144);
    const insertedNode = list.getNodeByIndex(3);
    expect(list.length).toBe(7);
    expect(insertedNode.data).toBe(144);
    expect(insertedNode.next.data).toBe(66);
    expect(insertedNode.prev.data).toBe(11);
    expect(insertedNode.next.prev.data).toBe(144);
  });
});

describe("#DeleteNodeAtIndex", () => {
  test("deletes properly when range is valid and list is singly", () => {
    const list = new LinkedList();

    mixedInsertion(list);
    list.deleteNodeAtIndex(3);

    expect(list.length).toBe(5);
    expect(list.getNodeByIndex(3).data).toBe(90);
  });

  test("throws error when range is invalid", () => {
    const list = new LinkedList();

    mixedInsertion(list);
    const testFunction = () => {
      list.deleteNodeAtIndex(9);
    };
    expect(list.length).toBe(6);
    expect(testFunction).toThrow("Invaild index!");
  });

  test("adds properly when range is valid and list is doubly", () => {
    const list = LinkedList.Doubly();
    mixedInsertion(list);
    list.deleteNodeAtIndex(3);
    expect(list.length).toBe(5);
    expect(list.getNodeByIndex(3).data).toBe(90);
  });
});
