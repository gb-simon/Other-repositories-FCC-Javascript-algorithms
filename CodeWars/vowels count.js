// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
      if(str.match(/[aeiou]/g)){
        return str.match(/[aeiou]/g).length;
      } else {
        return 0;
      }
    }
    
    console.log(getCount("abracadabra")); // 5
    console.log(getCount("my pyx")); // 0`