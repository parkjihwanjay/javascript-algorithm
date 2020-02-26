// 그냥

function sumZero(arr){
  
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i]+arr[j] === 0)
        return [arr[i], arr[j]];
    }
  }
}

// multiple pointers 적용

function sumZero(arr){

  let left = 0;
  let right = arr.length -1;
  // 두 개의 Index 설정

  while(left<right){

    let sum = arr[left] + arr[right];

    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum<0){
      left++;
    } else{
      right--;
    }
  }
}

