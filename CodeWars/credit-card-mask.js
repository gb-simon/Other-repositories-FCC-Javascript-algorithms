// return masked string
function maskify(cc) {

  var replaced = cc.replace(/.(?=.{4,}$)/g, '#');
  return replaced;
  
}