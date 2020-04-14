function navieSearch(lstr, sstr){
  let count = 0;

  for(let i=0; i<lstr.length-sstr.length+1; i++){
    for(let j=0; j<sstr.length; j++){
      if(lstr[i+j] !== sstr[j]) 
        break;
      if(j===sstr.length-1)
        count++;
    }
  }

  return count;
}

console.log(navieSearch('womwggaom', 'omg'));