class MaxBinaryHeap{
  constructor(){
    this.values = []
  }
  insert(value){
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length-1;
    let parentIndex = 0;
    let temp = 0;
    while(index > 0){
      parentIndex = Math.floor((index-1)/2)
      if(this.values[parentIndex] > this.values[index]) break;

      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;

      index = parentIndex;
    }
    return this.values;
  }
  extractMax(){
    let lastIndex = this.values.length-1;
    let last = this.values.pop();
    const Max = this.values[0];
    if(this.values.length > 0){
      this.values[0] = last;
      this.bubbleDown()
    }
    return Max
  }
  bubbleDown(){
    let index = 0;
    const length = this.values.length;
    let leftIndex, rightIndex, largestIndex;
    let temp;
    while(1){

      leftIndex = 2*index+1;
      rightIndex = 2*index+2;

      if(rightIndex >= length){
        if(leftIndex < length){
          largestIndex = leftIndex
        }else{
          return
        }
      }
      else{
        largestIndex = this.values[leftIndex] < this.values[rightIndex] ?  rightIndex : leftIndex;        
      }

      if(this.values[largestIndex] <= this.values[index]){
        return
      }

      temp = this.values[largestIndex];
      this.values[largestIndex] = this.values[index]
      this.values[index] = temp;

      index = largestIndex;
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(44)
heap.insert(33)
heap.insert(55)
heap.insert(49)
heap.insert(51)
heap.insert(22)
heap.insert(30)
heap.insert(69)
console.log(heap)
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap)