class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.pre = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode; 
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.pre = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.tail) return undefined;
    const temp = this.tail;
    if(this.length===1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = this.tail.pre;
      this.tail.next = null;
      temp.pre = null;
    }
    this.length--;
    return temp;
  }
  shift(){
    if(!this.head) return undefined;
    const temp = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.head = this.head.next;
      temp.next = null;
      this.head.pre = null;
    }
    this.length--;
    return temp;
  }
  unshift(val){
    const newNode = new Node(val);
    if(!this.length){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.pre = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index<0 || index>=this.length) return null;
    const middle = this.length/2;

    let count, current;

    if(index < middle){
      current = this.head;
      count = 0;
      while(count != index){
        current = current.next;
        count++;
      }
    }else{
      current = this.tail;
      count = this.length-1;
      while(count != index){
        current = current.pre;
        count--;
      }
    }
    return current;
  }
  set(index, value){
    let result = this.get(index)
    if(!result) return false;
    result.val = value;
    return true;
  }
  insert(index, value){
    if(index<0 || index>this.length) return false;
    if(index===0) this.shift();
    else if(index === this.length) this.push()
    else{
      let newNode = new Node(value);
      let prevNode = this.get(index-1);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.pre = prevNode;
      newNode.next = nextNode;
      nextNode.pre = newNode;
      this.length++;
    }
    return true;
  }
  remove(index){
    if(index<0 || index>=this.length) return undefined;
    if(index===0) return this.shift();
    if(index === this.length-1) return this.pop();

    let target = this.get(index);
    let prevNode = target.pre;
    let nextNode = target.next;
    prevNode.next = nextNode;
    nextNode.pre = prevNode;
    target.next = null;
    target.pre = null;
    this.length++;

    return target;
  }
}

