// Problem

// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted

// 1
function countUniqueValues(arr){
  if(!arr.length)
    return 0;

  let count = 1;

  for(let i=0; i<arr.length-1; i++){
    if(arr[i] !== arr[i+1])
      count++;
  }

  return count;
}

// 2
function countUniqueValues(arr){
  if(!arr.length)
    return 0;

  let uniqueIndex = 0;

  for(let i=1; i<arr.length; i++){
    if(arr[uniqueIndex] !== arr[i]){
      arr[++uniqueIndex] = arr[i];
    }
  }
  return uniqueIndex+1;
}


countUniqueValues([1,1,1,1,1,2]);