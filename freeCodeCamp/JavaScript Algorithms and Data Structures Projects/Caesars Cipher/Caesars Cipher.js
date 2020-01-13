const rot13 = (string) => {
  
    const letterBox = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const iter = (str, acc) => {   
        if (str.length===0) { return acc; }

        if (! /^[A-Z]*$/.test(str[0])) {return iter(str.substring(1), acc+str[0]); };
 
       for (let i=0; i<26;i++)
       {
         if ( (letterBox[i]===str[0]) && (i>12))
         { return iter(str.substring(1), acc + letterBox[i-13]); }
         if ( (letterBox[i]===str[0])&& (i<13))
         { return  iter(str.substring(1), acc + letterBox[i+13]); };
        };
    };
   return iter(string,'');
  };
     console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
  