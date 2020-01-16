function incrementString(str) {
      if(isNaN(str.slice(-1))) {
            return `${str}1`;
          }
          else {
            var chars = str.split('') .filter(n => isNaN(n)).join('');
            var nums = str.split('') .filter(n => !isNaN(n)).join('');
            var incrementedNum = +nums + 1;
            if(nums.length > incrementedNum.toString().length) {
              var zeros = '';
              for(var i = 0; i < nums.length; i++) {
                zeros += '0';
              }
              return chars + (zeros + incrementedNum).slice(-nums.length);
            }
            else {
              return chars + incrementedNum;
            }
          }
        }
console.log(incrementString("foobar000")) // "foobar001"
console.log(incrementString("foo")) // "foo1"
console.log(incrementString("foobar001")) // "foobar002"
console.log(incrementString("foobar99")) // "foobar100"
console.log(incrementString("foobar099")) // "foobar100"
console.log(incrementString("")) // "1"

