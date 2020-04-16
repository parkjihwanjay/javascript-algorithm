class PriorityQueue{
  constructor(){
    this.values = []
  }
  Enqueue(val, priority){
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length-1;
    let parentIndex = 0;
    let temp = 0;
    while(index > 0){
      parentIndex = Math.floor((index-1)/2)
      if(this.values[parentIndex].priority <= this.values[index].priority) break;

      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;

      index = parentIndex;
    }
    return this.values;
  }
  Dequeue(){
    let lastIndex = this.values.length-1;
    let last = this.values.pop();
    const Min = this.values[0];
    if(this.values.length > 0){
      this.values[0] = last;
      this.bubbleDown()
    }
    return Min
  }
  bubbleDown(){
    let index = 0;
    const length = this.values.length;
    let leftIndex, rightIndex, MinIndex;
    let temp;
    while(1){

      leftIndex = 2*index+1;
      rightIndex = 2*index+2;

      if(rightIndex >= length){
        if(leftIndex < length){
          MinIndex = leftIndex
        }else{
          return
        }
      }
      else{
        MinIndex = this.values[leftIndex].priority < this.values[rightIndex].priority ?  leftIndex : rightIndex;        
      }

      if(this.values[MinIndex].priority >= this.values[index].priority){
        return
      }

      temp = this.values[MinIndex];
      this.values[MinIndex] = this.values[index]
      this.values[index] = temp;

      index = MinIndex;
    }
  }
}

class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

let queue = new PriorityQueue()
queue.Enqueue('asdf', 3)
queue.Enqueue('박지환', 1)
queue.Enqueue('박ㄴㄴ', 2)
queue.Enqueue('박ㅋㅋ', 6)
queue.Enqueue('ㅁㄴㅇㄹ', 5)

console.log(queue)

console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())
console.log(queue.Dequeue())

console.log(queue)