class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while(true){
      if(value>currentNode.value){
        if(!currentNode.right){
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }else if(value<currentNode.value){
        if(!currentNode.left){
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;       
      }else{
        return undefined;
      }
    }
  }
  find(value){
    if(!this.root)  return undefined;
    let currentNode = this.root;
    while(true){
      if(value === currentNode.value) return true
      else if(value > currentNode.value){
        if(!currentNode.right) return false;
        currentNode = currentNode.right;
      }else{
        if(!currentNode.left) return false;
        currentNode = currentNode.left;
      }
    }
  }
  contains(value){
    if(!this.root)  return undefined;
    let currentNode = this.root;
    while(true){
      if(value === currentNode.value) return currentNode
      else if(value > currentNode.value){
        if(!currentNode.right) return undefined;
        currentNode = currentNode.right;
      }else{
        if(!currentNode.left) return undefined;
        currentNode = currentNode.left;
      }
    }
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new BinarySearchTree();
console.log(a.insert(5));
console.log(a.insert(10));
console.log(a.insert(3));
