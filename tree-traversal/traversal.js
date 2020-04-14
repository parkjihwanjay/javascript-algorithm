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
  BFS(){
    let queue = []
    let visited = []
     
    queue.push(this.root)
    
    while(queue.length){
      const node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return visited;
  }
  // DFS
  PreOrder(){
    let visited = [];
    let currentNode = this.root;
    function traverse(node){
      visited.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(currentNode);
    return visited;
  }
  PostOrder(){
    let visited = [];
    let currentNode = this.root;
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(currentNode);
    return visited;
  }
  InOrder(){
    let visited = [];
    let currentNode = this.root;
    function traverse(node){
      if(node.left) traverse(node.left);
      visited.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(currentNode);
    return visited;
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



