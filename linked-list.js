class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }  
  
  add(value) {
    const node = new Node(value);
    
    if (this.head === null) {
      this.head = node;
    } else {
      const tail = this.findTail(this.head);
      
      tail.next = node;
    }
    
    this.length++;
  }
  
  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
    } else {
      this.findAndRemove(this.head, value);
    }
  }
  
  findTail(currentNode) {
    if (currentNode && currentNode.next) {      
      return this.findTail(currentNode.next);
    }
    
    return currentNode;
  }
  
  findAndRemove(prevNode, value) {
    let currentNode = prevNode.next;
    
    if (!currentNode) {
      throw new Error("Node not found")  
    }
    
    if (currentNode.value === value) {
      prevNode.next = currentNode.next;
      currentNode = null;
      this.length--;
    } else {
      this.findAndRemove(currentNode, value);
    }
  }
}

const linkedList = new LinkedList();

linkedList.add(4);
linkedList.add(2);
linkedList.add(1);
linkedList.add(7);
linkedList.add(9);

linkedList.remove(4);
console.log(linkedList);
linkedList.remove(11);
console.log(linkedList);
