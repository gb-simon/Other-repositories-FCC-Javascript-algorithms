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
  });
}


function anagrams(word, words) {
  const firstArray = word.split('');
  const finalArray = [];
  const secondArray = [];
    for(let i = 0; i < words.length; i++){
      secondArray.push(words[i]);
      const x = secondArray.toString();
      const edited = x.split('');
        if(equals(edited, firstArray) === true) {
          finalArray.push(x)
        }
      secondArray.pop();
    }
  console.log(finalArray)
  return finalArray;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) // => []