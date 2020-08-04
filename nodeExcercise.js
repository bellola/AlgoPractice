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

    addToTail(data){
        const newTail = new Node(data)
        const currentTail = this.tail
        if(currentTail){
          currentTail.setNextNode(newTail);
          newTail.setPreviousNode(currentTail)
        }
        this.tail = newTail
        if(!this.head){
          this.head = newTail
        }
      }

      removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
          return;
        }
        this.head = removedHead.getNextNode();
        if (this.head) {
          this.head.setPreviousNode(null);
        }
        if (removedHead === this.tail) {
          this.removeTail();
        }
        return removedHead.data;
      }

      removeTail(){
        const removedTail = this.tail
        if(!removedTail){
          return;
        }
        this.tail = removedTail.getPreviousNode()
        if(this.tail){
          this.tail.setNextNode(null)
        }
        if(removedTail === this.head){
          return this.removeHead()
        }
        return removedTail.data
      }

      removeByData(data) {
        let nodeToRemove;
        let currentNode = this.head;
        while (currentNode !== null) {
          if (currentNode.data === data) {
            nodeToRemove = currentNode;
            break;
          }
          currentNode = currentNode.getNextNode();
        }
        if (!nodeToRemove) {
          return null;
        }
        // Continue your .removeByData() method below:
        if(nodeToRemove === this.head){
          this.removeHead()
        }
        else if(nodeToRemove === this.tail){
          this.removeTail()
        } else{
            const nextNode = nodeToRemove.getNextNode();
            const previousNode = nodeToRemove.getPreviousNode();
            nextNode.setPreviousNode(previousNode);
            previousNode.setNextNode(nextNode);
        }
        return nodeToRemove
      }

      //SWAPPING NODES
      swapNodes(list, data1, data2) {
        console.log(`Swapping ${data1} and ${data2}:`);
        
        let node1Prev = null;
        let node2Prev = null;
        let node1 = list.head;
        let node2 = list.head;
      
        if (data1 === data2) {
          console.log('Elements are the same - no swap to be made');
          return;
        }
        
        while (node1 !== null) {
          if (node1.data === data1) { 
            break;
          }
          node1Prev = node1;
          node1 = node1.getNextNode();
        }
        
        while (node2 !== null) {
          if (node2.data === data2) {
            break;
          }
          node2Prev = node2;
          node2 = node2.getNextNode();
        }
        
        if (node1 === null || node2 === null) {
          console.log('Swap not possible - one or more element is not in the list');
          return;
        }
      
        if (node1Prev === null) {
          list.head = node2;
        } else {
          node1Prev.setNextNode(node2);
        }
      
        if (node2Prev === null) { 
          list.head = node1;
        } else {
      node2Prev.setNextNode(node1);
        }
        
        let temp = node1.getNextNode();
        node1.setNextNode(node2.getNextNode());
        node2.setNextNode(temp); 
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

  //queue as linkedList

  class Queue {
    constructor() {
      this.queue = new LinkedList();
      this.size = 0;
    }
    enqueue(data){
      this.queue.addToTail(data)
      this.size++
      console.log(`Added ${data}! Queue size is now ${this.size}.`)
    }
    dequeue(){
        let data = this.queue.removeHead()
        this.size--
        console.log(`Removed ${data}! Queue size is ${this.size}.`)
        return data
     
       }
  }