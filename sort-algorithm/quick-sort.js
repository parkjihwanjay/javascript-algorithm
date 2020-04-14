function pivot(arr, left, right){
  let pivotIndex = left;
  let pivot = arr[left]
  let temp = 0;

  for(let i=left+1; i<=right; i++){
    if(arr[i]<pivot){
      pivotIndex++
      temp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = temp;    
    }
  }

  temp = arr[pivotIndex];
  arr[pivotIndex] = arr[left];
  arr[left] = temp;  

  return pivotIndex;
}

function quickSort(arr, left=0, right=arr.length-1){
  if(left>=right) return arr;

  let pivoIdx = pivot(arr, left, right);

  quickSort(arr, left, pivoIdx-1);
  quickSort(arr, pivoIdx+1, right);

  return arr;
}

console.log(quickSort([4,3,2,1,5,7,6,8]))