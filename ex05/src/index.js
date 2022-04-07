monitorsListArray=["Apple","Peach","Berry"];

function myMonitorsFunction(obj1) 
{
    var monitorList=[];
    for (let i = 0; i < obj1.length; i++) 
    {
        //monitorList=[obj1 + "," + i];
        monitorList[i]=[obj1[i], i+1];
    }
    return monitorList;
    
}

console.log(myMonitorsFunction((monitorsListArray)));
