function destroyer(arr) {

    var args = [];
     //You want add all the nums you want remove from array, so you start from 1, which means second arg,first arg is the array you want to perform
     for(var j = 1; j<arguments.length; j++){ 
     //You store the args to an arg array
         args.push(arguments[j]);
       //Once you have the arg, you want loop the target array, see if the newly added arg exist in the target array, if it is, then remove it
       for(var i = 0; i<arr.length; i++){
           //Found it, remove it now! note: your found the index, then you need take it out, check the doc for slice function arr.slice([begin[, end]]) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
           if(args.indexOf(arr[i]) > -1){
               //key change, remove the element 
               arr.splice(i, i+1)
              }
          }
      }
     return arr;
     }
    destroyer([2, 3, 2, 3], 2, 3);