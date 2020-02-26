function charCount(str){

  const result = {}

  lowerStr = str.toLowerCase();

  for(char of lowerStr){
    if(isAlphaNumeric(char)){
      result[char] = result[char]++ || 1 
    }
  }

  return result;
}

function isAlphaNumeric(char){

  let code = char.charCodeAt(0)
  
  if(!(code>47 && code < 58) && !(code>64 && code<91) && !(code>96 && code<123)) return false;
  
  return true;
}