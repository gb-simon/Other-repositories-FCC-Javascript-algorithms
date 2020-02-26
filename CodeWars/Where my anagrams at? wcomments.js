// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none.

function equals(a, b) {
            
      if (a.length !== b.length) {
          return false;
      }
    
      var seen = {};
      a.forEach(function(v) {
          var key = (typeof v) + v;
          if (!seen[key]) {
              seen[key] = 0;
          }
          seen[key] += 1;
      });
    
      return b.every(function(v) {
          var key = (typeof v) + v;
          if (seen[key]) {
              seen[key] -= 1;
              return true;
          }
          // not (anymore) in the map? Wrong count, we can stop here
      });
    }
    
    
    function anagrams(word, words) {
    // word = string; words = array;
      const firstArray = word.split('');
      const finalArray = [];
      const secondArray = [];
    // Iterate through the array looking exactly the same letters in word
      for(let i = 0; i < words.length; i++){
       // if the same letters match no matter the order, we push that element to another array.
        //take 'word' and put all letters in an array
            //  (firstArray)
        // take the element in the array to compare and put all letters in an array
        secondArray.push(words[i]);
        const x = secondArray.toString();
        const edited = x.split('');
          
      //if they match then push that element to 'finalArray'
              // if they don't then keep with the next element.
        if(equals(edited, firstArray) === true) {
          finalArray.push(x)
        }
              secondArray.pop();
        
        // if the same letters match no matter the order but there are more different lettes, then it doesn't count i++
      }
    // Return final array with matched words.
      console.log(finalArray)
      return finalArray;
    }
    
    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // => ['aabb', 'bbaa']
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // => ['carer', 'racer']
    anagrams('laser', ['lazing', 'lazy',  'lacer']) // => []