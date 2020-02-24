// Valid Parentheses

// Write a function called that takes a string of parentheses, 
// and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100


function validParentheses(parens){
      let holder = [];
      let openBrackets = ['('];
      let closedBrackets = [')'];
      for(let letter of parens){ // loop trought all letters of parens
          if(openBrackets.includes(letter)){ // if its oppening bracket
              holder.push(letter)
          } else if(closedBrackets.includes(letter)){ // if its closing
              let openPair = openBrackets[closedBrackets.indexOf(letter)] // find his pair
              if(holder[holder.length - 1] === openPair){ // check if that pair is last element in array
                  holder.splice(-1,1) //if so, remove it
              } else{ // if its not
                  holder.push(letter)
                  break // exit loop
              }
          }
      }
      return (holder.length === 0) // return true if length is 0, otherwise false
  }
  
  console.log(validParentheses( "()" )); // true;
  console.log(validParentheses( "())" )); // false;