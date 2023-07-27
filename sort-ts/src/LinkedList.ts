import { Sorter } from "./Sorter";

class NodeCollection {
  next: NodeCollection | null = null;

  constructor(public data: number) { }
}

export class LinkedList extends Sorter {
  // Head is going to be either a reference to a node or it might be null
  // default null
  head: NodeCollection | null = null;

  add(data: number): void {
    const node = new NodeCollection(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): NodeCollection {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: NodeCollection | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty!');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: NodeCollection | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}