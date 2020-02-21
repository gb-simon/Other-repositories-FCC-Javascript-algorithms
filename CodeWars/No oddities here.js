// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values){
      // See through the array and remove the even numbers
    
      for(let i = 0; i < values.length; i++){
        for(let j = 0; j < values.length; j++) {
          if(values[j] % 2 === 1) {
            values.splice(j, 1)
            break
          }
        }
      }  
      // Return all non-odd values (return array)
      return values;
    }
    
    
    console.log(noOdds([0,1])); //[0]
    console.log(noOdds([0,1,2,3])); //[0,2]
    