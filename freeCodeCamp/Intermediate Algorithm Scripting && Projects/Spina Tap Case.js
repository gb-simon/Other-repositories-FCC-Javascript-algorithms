function spinalCase(str) {
    var spinal = str.replace(/(?!^)([A-Z])/g, ' $1')
                  .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
    return spinal 
  
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str;
  }
  
  spinalCase('This Is Spinal Tap');
  