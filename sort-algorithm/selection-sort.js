function selectionSort(arr){
  let mIndex = 0;
  for(let i=0; i<arr.length; i++){
    mIndex = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]<arr[mIndex]){
        mIndex = j;
      }
    }
    if(mIndex !== i)
      arr = changeVal(arr, mIndex, i);
  }
  return arr;
}

function changeVal(arr, index1, index2){
  let temp;
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
 }

 console.log(selectionSort([37, 45, -3, 8]));
