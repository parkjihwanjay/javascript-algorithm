import math

def merge(arr1, arr2):
  answer = []
  i = 0
  j = 0

  while(i<len(arr1) and j<len(arr2)):
    if(arr1[i]<arr2[j]):
      answer.append(arr1[i])
      i += 1
    else:
      answer.append(arr2[j])
      j += 1

  while(i<len(arr1)):
    answer.append(arr1[i])
    i += 1

  while(j<len(arr2)):
    answer.append(arr2[j])
    j += 1

  return answer

def mergeSort(arr):
  if(len(arr)<=1):
    return arr

  mid = math.floor(len(arr)/2)

  left_arr = mergeSort(arr[0:mid])
  right_arr = mergeSort(arr[mid:])

  return merge(left_arr, right_arr)

print(mergeSort([2,4,2,1,7,9]))

