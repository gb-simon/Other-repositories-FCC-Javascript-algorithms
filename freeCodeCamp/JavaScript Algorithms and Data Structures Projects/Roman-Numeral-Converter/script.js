var define = [{"1":["I","IV","V","IX"],
	"2":["X","XL","L","XC"],
	"3":["C","CD","D","CM"],
	"4":["M"]}
	];

	function convertToRoman(num) {
	  var romNum = [];
	  var arrNum = num.toString().split('');
	  var numLength = arrNum.length;

	  for (var i = 0; i<arrNum.length; i++) {
	    if (arrNum[i] < 4) {
	      for (var j = 0; j<arrNum[i]; j++) {
		romNum.push(define[0][numLength][0]);
	      }
	    } else if (arrNum[i] < 5) {
	       for (var j = 3; j<arrNum[i]; j++) {
		romNum.push(define[0][numLength][1]);
	      }
	    } else if (arrNum[i] < 9) {
		romNum.push(define[0][numLength][2]);
		for (var j = 5; j<arrNum[i]; j++) {
		    romNum.push(define[0][numLength][0]);
	      }
	    } else if (arrNum[i] < 10) {
		for (var j = 8; j<arrNum[i]; j++) {
		    romNum.push(define[0][numLength][3]);
	      }
	    }
	    numLength--;
	   }

	 return romNum.join('');
	}