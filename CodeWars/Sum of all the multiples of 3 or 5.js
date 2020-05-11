//Since it works with a list, this solution only works with multiples of 3 and 5 minors than 100

function findSum(n) {
  const multiples_3 = [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99];
  const multiples_5 = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
  const finalArray = [];
  for(let i = 0; i < multiples_3.length; i++){
    if(n >= multiples_3[i]){
      finalArray.push(multiples_3[i]);
    }
  }
  
  for(let i = 0; i < multiples_5.length; i++){
    if(n >= multiples_5[i]){
      finalArray.push(multiples_5[i]);
    }  
  }

var result = finalArray.reduce((a, b) => a + b, 0);

console.log(result)
return result;

}  
 
findSum(5)

// This is a better solution by a random user

function findSum(n) {
  var answer = 0;
  for(var i = 3; i <= n; i++){
    if(i % 3 === 0 || i % 5 === 0){
      answer += i;
    }
  }
  return answer;
}