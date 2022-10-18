const Node = require("./ListNode");

describe("List node", () => {
  test("singly list node", () => {
    const nextNode = new Node(0, 14);
    const node = new Node(0, 5, nextNode);
    expect(node.data).toBe(5);
    expect(node.next).toBe(nextNode);
    expect(node.prev).toBeUndefined();
  });
  test("singly circular list node", () => {
    const nextNode = new Node(1, 77);
    const node = new Node(1, 5, nextNode);
    expect(node.data).toBe(5);
    expect(node.next).toBe(nextNode);
    expect(node.prev).toBeUndefined();
  });
  test("doubly list node", () => {
    const prevNode = new Node(2, 66);
    const nextNode = new Node(2, 77);
    const node = new Node(2, 5, nextNode, prevNode);
    expect(node.data).toBe(5);
    expect(node.next).toBe(nextNode);
    expect(node.prev).toBe(prevNode);
  });
  test("doubly circular list node", () => {
    const prevNode = new Node(3, 66);
    const nextNode = new Node(3, 77);
    const node = new Node(3, 5, nextNode, prevNode);
    expect(node.data).toBe(5);
    expect(node.next).toBe(nextNode);
    expect(node.prev).toBe(prevNode);
  });
});
