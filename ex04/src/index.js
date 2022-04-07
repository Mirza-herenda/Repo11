


                    //red       kolona
         //multiarray  [1]       [0]);

 averageDayTemp = [];

var temps = [
  monday = [31, 32, 19, 37],
  tuesday = [29, 27, 55, 36],
  wednesday = [17, 27, 42, 46],
  thursday = [29, 52, 21, 64],
  friday = [91, 27, 31, 61]
]

function myArrayFunction(obj1) {
  for (var i = 0; i < obj1.length; i++) {
  
    //console.log(obj1[i]);
    let temp = 0.0;
    for (var j = 0; j < obj1[i].length; j++) {
      temp = temp + obj1[i][j];
      


    }
    averageDayTemp.push(temp / obj1[i].length);

  }
  console.log("__________________________");
  return averageDayTemp;

}
averageDayTemp = myArrayFunction(temps);
console.log(averageDayTemp);
