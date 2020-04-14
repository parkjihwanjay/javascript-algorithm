// 그냥 
function bubbleSort(arr){
  let temp;
  for(let i=arr.length-1; i>=0; i--){
    for(let j=0; j<i; j++){
      console.log(arr, arr[j], arr[j+1])
      if(arr[j]>arr[j+1]){
        arr = changeVal(arr, j, j+1);
        // temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;
      }
    }
    console.log('one pass');
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

 console.log(bubbleSort([37, 45, -3, 8]));

//  optimized

function bubbleSort(arr){
  let temp;
  let noSwap;
  for(let i=arr.length-1; i>=0; i--){
    noSwap = true;
    for(let j=0; j<i; j++){
      console.log(arr, arr[j], arr[j+1])
      if(arr[j]>arr[j+1]){
        arr = changeVal(arr, j, j+1);
        noSwap = false;
        // temp = arr[j];
        // arr[j] = arr[j+1];
        // arr[j+1] = temp;
      }
    }
    if(noSwap) break;
  }

  return arr;
 }