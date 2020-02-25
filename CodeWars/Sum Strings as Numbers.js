// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


function sumStrings(a, b) {
  a = "0" + a.replace(/\D/g,"");
  b = "0" + b.replace(/\D/g,"");
  var c = 0;
  var result = "";

  for(var i=b.length-a.length; i>0; --i) a = "0" + a;
  for(var i=a.length-b.length; i>0; --i) b = "0" + b;

  for(var i=a.length-1; i>-1; --i) {
    c = +a[i] + +b[i] + c;
    result = (c%10) + result;
    c = Math.floor(c/10);
  }
  
  return result.replace(/^0+/,"");
}


    
    console.log(sumStrings('123','456')); // => '579'
    console.log(sumStrings('1','2')); // => '3'
    
