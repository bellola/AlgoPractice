//you are given a nodle class that has a name and an arrray of optional children node. Wheb put together, nodes form a
//simple tree-like strcuture. Implement the depthFirstSearch method on the node class.

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // Write your code here.
      array.push(this.name)
      for(const child of this.children){
          child.depthFirstSearch(array)
      }
      return array
    }
  }
  