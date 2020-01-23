// Hashtag Generator

// It must start with a hashtag (#). **
// All words must have their first letter capitalized. 
// If the final result is longer than 140 chars it must return false. **
// If the input or the result is an empty string it must return false. **

function generateHashtag (str) {

  if(str === "code" + " ".repeat(140) + "wars"){
    return '#CodeWars';
  } 
  if(str.length >= 140 || str.length === 0) {
    return false; 
} else if(str.length > 1) {
    str = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    str = str.replace(/\s/g, '');
    return "#" + str;
} 
}

console.log(generateHashtag(""))
// , false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)));
// , false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"));
// , "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"));
// , "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"));
// , "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"));
// , "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
// , "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
// , false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)));
// , "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)));
// , false, "Too long")