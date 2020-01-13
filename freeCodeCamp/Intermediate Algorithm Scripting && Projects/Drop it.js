function dropElements(arr, func) {
    while(arr.length) {
    if ( func(arr[0])) {
       break
    } else {
        arr.shift();
    }
}
  return arr;
}
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))