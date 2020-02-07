// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

var moveZeros = function (arr) {

      for (var i = 0; i < arr.length; i++) {
         arr.push(arr.splice(arr.indexOf(0), 1)[0]);
      }
      return arr
    }
    console.log(moveZeros([1,2,0,4,7])) //([[1,2,4,6,7,0] ]))
    console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) //([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]))