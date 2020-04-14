# sorting algorithm

## 1. bubble-sort

앞에서부터 반복하며 제일 큰 숫자를 젤 뒤로 보낸다.

(<strong>bubble</strong>처럼 뒤로 이동)

```javascript
function bubbleSort(arr){
  let temp;
  for(let i=arr.length-1; i>=0; i--){
    for(let j=0; j<i; j++){
      if(arr[j]>arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}
```

* swap을 하는지 확인해서 swap을 안한다면 멈추도록 optimization을 할 수도 있다.

#### optimization 버전
```javascript
function bubbleSort(arr){
  let temp;
  let noSwap; // 스왑을 했는지 확인하는 변수
  for(let i=arr.length-1; i>=0; i--){
    noSwap = true;
    for(let j=0; j<i; j++){
      if(arr[j]>arr[j+1]){
        noSwap = false;
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    // 스왑을 하지 않았다는 것은 이미 sorting이 되어있는 뜻이기에 종료
    if(noSwap) break;
  }

  return arr;
}
```

time complexity는 O(n^2)
space complexity는 O(1)

best case(이미 sorting 거의 되어 있는)일 경우 optimization 버전을 활용하면 O(n)이 가능하다.

<hr/>

## 2. selection-sort

sorting의 가장 원시적인 형태. 앞에서부터 반복하며 제일 작은 값을 찾아 젤 앞에 위치시킨다. 

(가장 작은 값을 <strong>select</strong>해서 위치시킨다.)
```javascript
function selectionSort(arr){
  let mIndex=0;
  let temp;
  for(let i=0; i<arr.length; i++){
    mIndex = i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]<arr[mIndex]){
        mIndex = j;
      }
    }
    // 만약 젤 앞의 있는 값이 젤 작다면 다음 단계로 이동
    if(mIndex !== i){
      temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
  return arr;
}
```

time complexity는 O(n^2)
space complexity는 O(1)

best case인 경우 심지어 sorting되어 있는 배열에 대해서도 O(n^2)이 걸린다.

<hr/>

## 3. insertion-sort

앞에서부터 sorting된 배열을 만들어가며 하나씩 sorting된 배열에 알맞게 배치시킨다.

(sorting 되어 있는 배열에 알맞게 <strong>insert</strong> 시킨다.)

```javascript
function insertionSort(arr){
  for(let i=1; i<arr.length; i++){
    let currenVal = arr[i];
    // sorting된 배열 안에 위치 시킬 값
    for(var j=i-1; j>=0; j--){
      // 0부터 j까지는 이미 sorting 되어 있음
      if(arr[j]<=currenVal) break;
      else  {
        arr[j+1] = arr[j];
      }
      arr[j+1] = currenVal;
    }
  }
  return arr;
}
```

time complexity는 O(n^2)
space complexity는 O(1)

best case인 경우 안에 있는 for문이 한번 밖에 안돌기 때문에 O(n)

특히, 실생활에서 이미 sorting되어 있는 배열에 새로운 데이터가 추가될때 사용하기 좋다.

> bubble sort, selection sort, insertion sort 모두 데이터가 적을 때는 빠르다.