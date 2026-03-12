//Question 1
let Teas = ["Green tea","black tea","chai","oolong tea"];
let selectedtea = [];

for(let m = 0 ; m <Teas.length; m++)
{
if(Teas[m] === "chai"){
    break;
}
selectedtea.push(Teas[m]);
}
// console.log(selectedtea);

//Question 2 -->skips paris and adds the rest of the cities to the visitedcities array

let cities = ["London","New York","Paris","barlin"];
let visitedcities = [];
 
for(let i = 0; i <cities.length;i++){
if(cities[i] === "Paris"){
    continue;
}
visitedcities.push(cities[i])
}
// console.log(visitedcities);


//Question 03 

let Tea = ["Green tea","black tea","chai","oolong tea"];
let preferredtea = [];
 
for (const i  of Tea) {
if(Tea === "black tea"){
    continue;
}
    preferredtea.push(Tea)
}
// console.log(preferredtea);

//Question 04

let citiespopulation = {
    London : 8900000,
    New_York : 8900000,
    Berlin : 3600000,
    Paris : 2200000,

};
    // console.log(Object.keys(citiespopulation));
    // console.log(Object.values(citiespopulation));
    for (const city in citiespopulation) {
        if(city == "Berlin"){
            break;
        }
        // console.log(city);
        // console.log(citiespopulation[city]);
    }
    
//Question 05
let worldcitisespopulation = {
    London : 8900000,
    New_York : 8900000,
    Berlin : 3600000,
    Paris : 2200000
};
let largecities={}
for (const city in worldcitisespopulation) {
   if(worldcitisespopulation[city] > 5000000){
    continue;
}
largecities[city] = worldcitisespopulation[city];

};

//Question 06
let teacollection=["earl grey","green tea","chai","oolong tea"];
let availableteas = []
 teacollection.forEach((tea)=> {
    console.log(tea); 
    if(tea == 'chai')
    {
      return;
    }
    // availableteas.push(tea);
    // console.log(availableteas);
 });

 //Question 07
 let myworldcities = ["Berlin","Tokyo","Sydney","Paris"];
  let traveledcities = [];
  myworldcities.forEach(citie => {
    if(citie == 'Sydney'){
        return;
    }
    // traveledcities.push(citie)
    // console.log(traveledcities)
  });

  //Question 08
  let arr = [2,5,7,9]
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] == '7'){
        continue;
    }
    let doubleNumber = 2 * arr[i];
    console.log(doubleNumber);
  }

  //Question 10
let tea = ["chai","green tea","herbal tea","jasmine tea","black tea"]
 for (const teasize of tea) {
    if(teasize.length > 10){
        break;
    }
    let shortteas = teasize;
    console.log(shortteas);
    
 };