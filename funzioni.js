"use strict";
function maggiore(numeri){
  var max=numeri[0]
  for (var n in numeri){
    console.log(numeri[n])
    if(n>max){
      max=numeri[n]
    }
  }
  return max;
}
