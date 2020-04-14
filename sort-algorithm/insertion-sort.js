function insertionSort(arr){
  for(let i=1; i<arr.length; i++){
    let currenVal = arr[i];
    for(var j=i-1; j>=0; j--){
      if(arr[j]<=currenVal) break;
      else  {
        arr[j+1] = arr[j];
      }
      arr[j+1] = currenVal;
    }
  }
  return arr;
}

function changeVal(arr, index1, index2){
  console.log(arr, index1, index2);
  let temp;
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;

  return arr;
}

 console.log(insertionSort([37, 45, -3, 8]));
