// str 버전
// function getDigit(num, place){
//   num = num.toString();
//   if(num.length<=place){
//     return 0;
//   }
//   return parseInt(num[num.length-place-1]);
// }

// math 버전
function getDigit(num, place){
  return Math.floor(Math.abs(num)/Math.pow(10, place))%10
}

function digitCount(num){
  let count = 1;
  num = parseInt(num);
  while(Math.floor(num/10) >0){
    num = Math.floor(num/10);
    count++;
  }

  return count;
}

function mostDigits(arr){
  let maxDigit = 0;
  let result = [];
  for(let i=0; i<arr.length; i++){
    digit = digitCount(arr[i]);
    if(digit>maxDigit){
      maxDigit = digit;
    }
  }
  return maxDigit;
}

function radixSort(arr){
  let maxDigit = mostDigits(arr);
  let bucket = [];

  for(let k=0; k<maxDigit; k++){
    bucket = [];
    for(let i=0; i<10; i++){
      bucket.push([]);
    }
    for(let i=0; i<arr.length; i++){
      let index = getDigit(arr[i], k);
      bucket[index].push(arr[i]);
    }
    arr = [];
    for(let j=0; j<bucket.length; j++){
      for(let z=0; z<bucket[j].length; z++){
        arr.push(bucket[j][z]);
      }
    }
  }
  return arr;
}

console.log(radixSort([23,492,567,12,89,90]));

