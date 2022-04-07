
 arr=[[2],[5,6,7],[8,9]];
 arr2=[[2.5, 2],[0.5,0.2],[8]];
 arr3=[[1,2],[3,4,5,6],[7,8,9]];

 //arr=[1,2,3];

function multiplyArrayFunction(myArray) 
{
    let product=1;
    let sum=0;
    for (let i = 0; i < myArray.length; i++) 
    {
        for (let j = 0; j< myArray[i].length; j++)
        {
            product=product*myArray[i][j];
            sum=sum+myArray[i][j];
        }

        
    }
    console.log(product)
    console.log(sum);
return [product,sum];
    
    
}
multiplyArrayFunction(arr);
console.log("___");

multiplyArrayFunction(arr2);
console.log("___");

multiplyArrayFunction(arr3);