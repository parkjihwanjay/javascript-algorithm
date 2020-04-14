class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      newNode.next = this.first; 
      this.first = newNode;
    }
    this.size++;
    return this.size;
  }
  pop(){
    if(!this.first) return null;

    let rVal = this.first;

    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return rVal.val;
  }
}

// 끝에 추가하는건 O(n)이 걸리니까
// 앞에 추가하고 앞에서 제거하는 식으로 진행 -> O(1)

let a = new Stack();
a.push('a')
a.push('b')
a.push('c')

console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
