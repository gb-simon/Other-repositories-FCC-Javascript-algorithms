function sym(args) {
   function findSymDiff(a, b){
    var curDiff = [];
    a.reduce(function(prevVal, curVal){
      if(b.indexOf(curVal)==-1 && curDiff.indexOf(curVal)==-1)
        curDiff.push(curVal);
    }, 0);

    b.reduce(function(prevVal, curVal){
      if(a.indexOf(curVal)==-1 && curDiff.indexOf(curVal)==-1)
        curDiff.push(curVal);
    }, 0);
    
    return curDiff;
  }

  var symDiff = arguments[0];
  
  for(var i=1; i<arguments.length; i++){
    symDiff = findSymDiff(symDiff, arguments[i]);
  }
 
  return symDiff;
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))

function sym(args){
  function findSymDiff(arr1, arr2) {
    var firstDiff = [];
    arr1.reduce(function(prevVal, curVal) {
      if(arr2.indexOf(curVal) == - 1 && firstDiff.indexOf(curVal) == - 1)
        firstDiff.push(curVal);
    }, 0);
    
    arr2.reduce(function(prevVal, curVal){
      if(arr1.indexOf(curVal)==-1 && firstDiff.indexOf(curVal)==-1)
      firstDiff.push(curVal);
    }, 0);

    return firstDiff
  }
  var symDiff = arguments[0];

  for(var i=1; i<arguments.length; i++){
  }
  return symDiff;
}