// Problem

// given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// 1

function validAnagram(str1, str2){
  if(str1.length !== str2.length)
    return false;

  let str1Count = {};
  let str2Count = {};

  for(let val of str1){
    str1Count[val] = (str1Count[val] || 0) + 1;
  }

  for(let val of str2){
    str2Count[val] = (str2Count[val] || 0) + 1;
  }

  for(let val in str1Count){
    if(!str2Count[val])
      return false;

    if(str1Count[val] !== str2Count[val])
      return false;

  }
  return true;
}

// 2

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {

    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
