function orderWeight(strng) {
      return strng
        .split(' ')
        .map(num => {
          const weight = num.split('').reduce((a, b) => Number(a) + Number(b), 0)
          return { num, weight }
        })
        .sort(
          (a, b) =>
            a.weight === b.weight ? a.num.localeCompare(b.num) : a.weight - b.weight
        )
        .map(({ num }) => num)
        .join(' ');
    }
   
    console.log(orderWeight("103 123 4444 99 2000"))
    console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
   
   // not working correctly
   // function orderWeight(strng) {
   //       return strng
   //         .split(' ')
   //         .map(num => {
   //           const weight = num.split('').reduce((a, b) => Number(a) + Number(b), 0)
   //           return { num, weight }
   //         })
   //         .sort(
   //           (a, b) =>
   //             a.weight === b.weight ? a.num.localeCompare(b.num) : a.weight - b.weight
   //         )
   //         .map(({ num }) => num)
   //         .join(' ')
   //     }
   
   // console.log(orderWeight(103 123 4444 99 2000))
   // console.log(orderWeight(2000 10003 1234000 44444444 9999 11 11 22 123))