function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");
palindrome("eye");

console.log(palindrome("eye"))
console.log(palindrome("eye"))
console.log(palindrome("_eye"))
console.log(palindrome("race car"))
console.log(palindrome("not a palindrome"))
console.log(palindrome("A man, a plan, a canal. Panama"))
console.log(palindrome("never odd or even"))
console.log(palindrome("nope"))
console.log(palindrome("almostomla"))
console.log(palindrome("My age is 0, 0 si ega ym."))
console.log(palindrome("1 eye for of 1 eye."))
console.log(palindrome("0_0 (: /-\ :) 0-0"))
console.log(palindrome("five|\_/|four"))
console.log(palindrome('racecar'))
console.log(palindrome('RaceCar'))
console.log(palindrome('race CAR'))
console.log(palindrome('2A3*3a2'))
console.log(palindrome('2A3 3a2'))
console.log(palindrome('2_A3*3#A2'))