
String.prototype.camelCase=function(){
      return (this.length < 1) ? '' : this.match(/[^\s]+/gi).map((v,i,a) => {
        return v.charAt(0).toUpperCase() + v.slice(1);
      }).join('').replace(/\s/gi,'');
    }


// Also


function spinWords(String) {
      
      var phraseArray = String.split(' ');
           function reverseString(stringReverse) {
                  return stringReverse.split("").reverse().join("");
      }

      for (var i = 0; i < phraseArray.length; i++) {
            if (phraseArray[i].length >= 5) {
                  var word = phraseArray[i]
                  phraseArray[i] = reverseString(word)
     }
    }
            return phraseArray.join(' ');
}

