function accum(s) {
    var letters = s.toLowerCase().split(''); 
  
  for( var i = 0; i < letters.length; i++) {
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);

  }

  return letters.join('-');

}