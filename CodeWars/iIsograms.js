function isIsogram(str){
  var strK = str.toLowerCase();

for (var i = 0;  i < strK.length; i++) {
      if ( strK.indexOf(strK[i]) !== strK.lastIndexOf(strK[i]) ) {
        return false; // repeats
      }
    }
  return true;
}

console.log(isIsogram("hello"))     