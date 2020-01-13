function myReplace(str, before, after) {
    
    var index = str.indexOf(before);

        if(str[index] === str[index].toUpperCase()){
            after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    var newStr = str.replace(before, after);
    return newStr;
  }
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
  console.log(myReplace("His name is Tom", "Tom", "john"))

 /* 
  function myReplace(str, before, after) { 
    var words = str.split("");      
    if(before[0] === before[0].toUpperCase()){
     after = after[0].toUpperCase() + after.slice(1); 
;}
    for (var i=0; i<words.length; i++) {
        if (words[i] === before) {
            words[i] = after;
        }
    }    
    return words.join("");
}
    console.log(myReplace("Let us go to the store", "mall", "store"))

    */