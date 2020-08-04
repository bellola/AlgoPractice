//singly linkedList
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  let strawberryNode = new Node('Berry Tasty')
  
  let vanillaNode = new Node('Vanilla')
  
  let coconutNode = new  Node('Coconuts for Coconut')
  
  vanillaNode.setNextNode(strawberryNode)
  strawberryNode.setNextNode(coconutNode)
  
  let currentNode = vanillaNode
  
  while(currentNode !== null){
    console.log(currentNode.data);
    currentNode = currentNode.next
  }
  
  module.exports = Node;

  //doubly linkedList

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
    // Create your .addToHead() method below:
    addToHead(data){
      const newHead = new Node(data)
      const currentHead = this.head
      if(currentHead){
        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead)
      }
      this.head = newHead
      if(!this.tail){
        this.tail = newHead
      }
    }
    
    printList() {
      let currentNode = this.head;
      let output = '<head> ';
      while (currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
      output += '<tail>';
      console.log(output);
    }
  }
  
  module.exports = DoublyLinkedList;