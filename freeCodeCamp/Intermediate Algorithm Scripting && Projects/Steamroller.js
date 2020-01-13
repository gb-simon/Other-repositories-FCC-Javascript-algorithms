//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    // I'm a steamroller, baby
  
    return arr.flat(Infinity);
  }
  
console.log(steamrollArray([1, [2], [3, [[4]]]])) 
console.log(steamrollArray([1, [], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))