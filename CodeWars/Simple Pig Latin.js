// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. 
// Leave punctuation marks untouched.
function pigIt(str){
      return str.split(' ').map(x =>/[a-zA-Z]+/.test(x) ? x.slice(1)+x[0]+'ay' : x).join(' ');
    }
    
    console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
    console.log(pigIt('Hello world !'));     // elloHay orldway !
    console.log(pigIt('This is my string')) // hisTay siay ymay tringsay 
    