
// > Implement a swype keyboard. Given a path like "bnhjkioikjhnbvcxsza" and a list of words as a dictionary [“apple”, “boba”, “tea”], 
// they should be able to guess what the user is trying to type (“boba”).
// > Input: a path(string) and a dictionary(a list of strings)
// > Output: all potential words that this path matches(a list of strings)
// > Note: if nothing matches, return an empty list.

wordsList = ['apple', 'boba', 'tea'];

// bnhjkioikjhnbvcxsza == (“boba”)

const wordChecker = document.getElementById('word').value;

function keyboard(word) {

  for(let i = 0; i < wordChecker.length; i++) {
      if(wordsList.includes(word)){
        return wordChecker; 
      } else {
        wordChecker = "No match";
      }
  }


  document.getElementById("result").innerHTML = document.getElementById('word').value  ;
  

}
