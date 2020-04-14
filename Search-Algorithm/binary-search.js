// sorting된 array에서
function binarySearch(arr, value){
  let left = 0;
  let right = arr.length-1;
  let middle;

  while(left<=right){
    middle = Math.round((left+right)/2);
    if(arr[middle] === value) return middle;
    else if(arr[middle] > value) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}

// O(logn)

console.log(binarySearch([1,3,5,7,9], 2))