arr1=[7, "ate", "", false, 9];
arr2=["a", "b", "c"];
arr3=[false, null, 0, NaN, undefined, ""];
arr4=[null, NaN, 1, 2, undefined];


function myBouncer(arr) 
{
    let bool=arr.filter(element=>Boolean(element)===true)
    
  

 return bool;
}
console.log(myBouncer(arr1));
 console.log(myBouncer(arr2));
 console.log(myBouncer(arr3));
console.log(myBouncer(arr4));