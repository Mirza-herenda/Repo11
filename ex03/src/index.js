
myPetsArray=["Dog","Cat"];

function myArrayFunction(myPets) 
{
   var myNewPets=myPets.push("Bird","Fish");
   var firstPet=myPets.unshift("Bird");
   firstPet=myPets[0];
   var lastPet=myPets.push["Fish"];
   lastPet=myPets[3];
    myNewPets=myPets.pop("Fish");
    myNewPets=myPets.shift("Bird");
    myPets[0]="Lion";
    return {
        myPets
        //firstPet
    };    
}

//console.log(myPetsArray);
console.log(myArrayFunction(myPetsArray));