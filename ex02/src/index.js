
myStr="Paragon is the best!";

function useMethods(str) 
{
    var countCharacters;
    var myReverse;

    var MojaRijec=str.split(" ");
     MojaRijec=MojaRijec.reverse();
    //var myReverse=MojaRijec.join('');
    countCharacters=MojaRijec.map((x) => x.length);

    MojaRijec=MojaRijec.map((x) =>x.split("").reverse().join(""));
    myReverse=MojaRijec.join("");






    return {myReverse,countCharacters};      
}

console.log(useMethods(myStr));