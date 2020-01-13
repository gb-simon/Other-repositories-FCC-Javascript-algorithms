function whatIsInAName(collection, source) {
     var keys = Object.keys(source);

    return collection.filter(function(obj) {
        for(var key of keys){
            if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
                return false;
            }
        }    
        return true;
 });
}
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
  // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

 