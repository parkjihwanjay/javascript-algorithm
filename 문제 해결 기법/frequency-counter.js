// 그냥

function same(arr1, arr2){
  if(arr1.length !== arr2.length)
    return false;

  for(let val of arr1){

    let index = arr2.indexOf(val**2);
      // indexOf -> 반복문을 돈다. -> O(n^2)

    if(index === -1)
      return false;
      // 해당 키가 존재하지 않는다

    arr2.splice(index, 1)
      // 빈도수가 같아야하기 때문에 일치하는 키는 없앤다.           
  }

  return true;    
}

// frequency counter 기법을 이용했을 때

function same(arr1, arr2){

  let arr1Count = {};
  let arr2Count = {};

  if(arr1.length !== arr2.length)
    return false;

  for(let val of arr1){
    arr1Count[val] = (arr1Count[val] || 0) + 1;
  }
  // arr1 값이 없다면 1로 설정, 없다면 이미 있는 값에 +1

  for(let val of arr2){
    arr2Count[val] = (arr2Count[val] || 0) + 1;
  }
  // 위와 동일 

  for(let val in arr1Count){

    if(!arr2Count[val**2])
      return false;
    // 상응하는 키가 있는지 검사

    if(arr1Count[val] !== arr2Count[val**2])
      return false;
    // 상응하는 키가 있다면 빈도수가 같은지 검사
    
  }        

  return true;
}