function permAlone(str) {
  const strArr = [...str];
  const possiblePermuts = [];
  const noRepPermuts = [];
  
  function permuts(n) {
    if (n === 1) {
      possiblePermuts.push(strArr.join(''));
    } else {
      for (let i = 0; i !== n; i++) {
        permuts(n - 1);
        if (n % 2 === 0) {
          [strArr[0], strArr[n - 1]] = [strArr[n - 1], strArr[0]];
        } else {
          [strArr[i], strArr[n - 1]] = [strArr[n - 1], strArr[i]];
        }
      }
    }
  }
  
  permuts(strArr.length);
  
  for (const permut of possiblePermuts) {
    if (!permut.match(/([a-z])(?=\1)/g)) {
      noRepPermuts.push(permut);
    }
  }
  
  return noRepPermuts.length;
}