// Josephus permutation

function josephus(items,k){

      let results = []
      let counter = 1
    
      for ( var i = 0; items.length !== results.length; i++){
        if (i > items.length - 1 ) {
          i = 0;
        }
        if(counter === k) {
          if(results.indexOf(items[i]) < 0) {
            results.push(items[i])
            counter = 1
          }
        } else {
          if(results.indexOf(items[i]) >= 0){
          
          } else {
          counter++
          }
        }
      }
      return results
    }
    
    console.log(josephus([1,2,3,4,5,6,7],3)); // [3, 6, 2, 7, 5, 1, 4]
    console.log(josephus([1,2,3,4,5,6,7,8,9,10],1));
    console.log(josephus([1,2,3,4,5,6,7,8,9,10],2));
    console.log(josephus(["C","o","d","e","W","a","r","s"],4));
    console.log(josephus([],3));