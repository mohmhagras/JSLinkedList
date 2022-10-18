const LinkedList = require("./LinkedList.js");

describe("Singly linked list", () => {
  test("#InsertAtHead", () => {
    const list = new LinkedList();

    list.insertAtHead(5);
    list.insertAtHead(6);
    list.insertAtHead({ a: 9, b: "string" });

    expect(list.head.data).toEqual({ a: 9, b: "string" });
    expect(list.tail.data).toBe(5);
    expect(list.length).toBe(3);
  });
  test("#InsertAtTail", () => {
    const list = new LinkedList();

    list.insertAtTail(4);
    list.insertAtTail(2);
    list.insertAtTail(87);
    list.insertAtTail(17);

    expect(list.head.data).toBe(4);
    expect(list.tail.data).toBe(17);
    expect(list.length).toBe(4);
  });
  test("Mixed Insertions", () => {
    const list = new LinkedList();

    list.insertAtHead(66);
    list.insertAtTail(90);
    list.insertAtHead(11);
    list.insertAtTail(99);
    list.insertAtHead(12);
    list.insertAtHead(5);

    expect(list.head.data).toBe(5);
    expect(list.tail.data).toBe(99);
    expect(list.length).toBe(6);
  });
});
