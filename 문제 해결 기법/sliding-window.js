// 그냥

function maxSubarraySum(arr, num){

  if(arr.length<num)
    return null;

  let maxSum = -Infinity;
  let tempSum;
  
  for(let i=0; i<arr.length-num+1; i++){

    tempSum = 0;

    for(let j=0; j<num; j++){
      tempSum += arr[i+j];
    }

    if(tempSum > maxSum){
      maxSum = tempSum;
    }

  }

  return maxSum;
}

// sliding window 기법 적용 후

function maxSubarraySum(arr, num){
    
  if(arr.length<num)
    return null;
  
  let maxSum = 0;
  let tempSum = 0;
          
  for(let i=0; i<num; i++){
    tempSum += arr[i];
  }

  maxSum = tempSum;

  // window --> maxSum

  for(let i=0; i<arr.length-num+1; i++){
      
    tempSum = tempSum - arr[i] + arr[i+num];
    // 젤 앞의 값은 빼고 젤 뒤의 값을 더한다

    if(tempSum>maxSum)
      maxSum = tempSum;
  }    

  return maxSum;
}