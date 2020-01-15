function getDivisorsCnt(n){

  var numDivisors = 1;
  var factor = 2; 

  while (factor * factor <= n) {
      if (n % factor === 0) {
          var exponent = 0;
          do {
              n /= factor;
              exponent++;
          } while (n % factor === 0)
          numDivisors *= exponent + 1;
      }
      factor = factor == 2 ? 3 : factor + 2
  }
  if (n > 1) {
      numDivisors *= 2;
  }
  return numDivisors;
}

console.log(getDivisorsCnt((1) , 1))
console.log(getDivisorsCnt((10) , 4))
console.log(getDivisorsCnt((11) , 2))
console.log(getDivisorsCnt((54) , 8))
