class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.length) return undefined

    let current = this.head;
    let pre = null;

    while(current.next){
      pre = current;
      current = current.next;
    }

    if(!pre){
      this.head = null;
      this.tail = null;
    }else{
      pre.next = null;
      this.tail = pre;
    }
    
    this.length--;

    return current;
  }
  shift(){
    if(!this.length) return undefined

    const temp = this.head
    this.head = this.head.next;
    this.length--;

    if(!this.head) this.tail = null;
    return temp;
  }
  unshift(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this
  }
  get(index){
    if(index<0 || index>=this.length) return null;
    let current = this.head;
    for(let i=0; i<index; i++){
      current = current.next;
    }
    return current;
  }
  set(index, value){
    const current = this.get(index);
    if(!current) return false;
    current.val = value;
    return true;
  }
  insert(index, val){
    if(index<0 || index>this.length) return false;
    if(index === this.length){
      this.push(val);
    }else if(index === 0){
      this.unshift(val);
    }else{
      const newNode = new Node(val);
      const pre = this.get(index-1);
      newNode.next = pre.next;
      pre.next = newNode; 
      this.length++;
    }
    return true;
  }
  remove(index){
    if(index<0 || index>=this.length) return undefined;
    if(index === this.length-1) return this.pop();
    if(index === 0) return this.shift();
    else{
      const pre = this.get(index-1);
      const del = pre.next;
      pre.next = del.next;
      this.length--;
      return del;
    }
  }
  reverse(){
    let next;
    let pre=null;

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let current = this.tail;

    for(let i=0;i<this.length;i++){
      next = current.next;
      current.next = pre;
      pre = current;
      current = next;
    }

    return this;
  }
}
