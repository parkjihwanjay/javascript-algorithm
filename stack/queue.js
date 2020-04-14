class Queue{
  constructor(){
    this.size = 0;
    this.first = null;
    this.last = null;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  dequeue(){
    if(!this.first){
      return null;
    }
    let temp = this.first;
    if(this.size === 1){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class Node{
  constructor(value){
    this.next = null;
    this.value = value;
  }
}

let a = new Queue();
a.enqueue('a')
a.enqueue('b')
a.enqueue('c')

console.log(a.dequeue());
console.log(a.dequeue());
console.log(a.dequeue());


