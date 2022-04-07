
myNestedArray=[["Tablerone",5],["Milka",3]];

function myNestedFunction(arr) 
{
    let arr2=[];
    for (let i = 0; i < arr.length; i++) 
    {
       
        arr2[i]=[arr[i][0],arr[i][1]];
        
    } 
    return arr2;    
}
console.log(myNestedFunction(myNestedArray));