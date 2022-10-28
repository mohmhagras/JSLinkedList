# JS Linked List

Javascript Linked list data structure implmentation.

[![codecov](https://codecov.io/github/mohagras903/JSLinkedList/branch/main/graph/badge.svg?token=P4ZX9SAEHX)](https://codecov.io/github/mohagras903/JSLinkedList)

## List types

- Singly
- Circular
- Doubly
- Doubly Circular

## Installation

Install js-ds-ll with npm

```bash
  npm install js-ds-ll
```

## Usage

### Defintion

```javascript
import LinkedList from "js-ds-ll";

//singly list
const singlyList = new LinkedList();
const singlyList2 = LinkedList.Singly();

//singly circular list
const circularList = LinkedList.Circular();

//doubly list
const doublyList = LinkedList.Doubly();

//doubly circular
const doublyCircularList = LinkedList.DoublyCircular();
```

### Methods

```javascript
//insertion
list.insertAtHead(5); //inserts 5 to the beginning of the list
list.insertAtTail(7); //inserts 7 to the end of the list
list.insertAtIndex(2, 13); //inserts 13 at index 2

//deletion
list.deleteHead(); //deletes the item at the head of the list
list.deleteTail(); //deletes the item at the end of the list
list.deleteNodeAtIndex(4); //deletes the item at index 4

//printing
list.print();
/* logs to the console all the list elements in order
    e.g: 3 -> 1 -> 90 -> 4 -> null
*/

//searching
list.find(7);
/*
returns the node that contains the element 7 
e.g: {data: 7, next: {data: 14, next: [NODE]}}
returns undefined if the element does not exist
*/

//retreival

list.getNodeByIndex(3);
/*
returns the node in index 3
e.g: {data 9, next: {data: 144, next: [NODE]}}
*/
```

### Properties

```javascript
const listSize = list.length; //returns the number of list elements
const headNode = list.head; // returns the node at the head of the list
const tailNode = list.tail; // returns the node at the end of the list
```

## Author

- [Mohamed Hagras](https://www.github.com/mohagras903)
