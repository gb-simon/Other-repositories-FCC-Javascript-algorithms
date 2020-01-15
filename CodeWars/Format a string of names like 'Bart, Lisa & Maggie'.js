function list(names) {

  return names.map(
    function(x) {
       return x.name;
    })
       .join(", ")
       .replace(/,(?!.*,)/gmi, " &");
  }


console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'}]))
console.log(list([{name: 'Bart'}]))
console.log(list([]))