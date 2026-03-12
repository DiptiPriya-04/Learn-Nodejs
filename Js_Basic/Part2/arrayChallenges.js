//Question-01
let teaFlavours=["green tea","balck tea","herbal tea","oolong tea","white tea"];
const firstTea = teaFlavours[2];
console.log(firstTea)

//Question-02
let cities = ["London","Tokyo","Paris","New York"]
var FavoriteCity = cities[2];
console.log(FavoriteCity)

//Question-03
let Teatype = ["Herbal Tea","White tea","Masala Tea"]
Teatype[1] = "jasmin Tea";
console.log(Teatype)

//Question-04
let citiesVisited = ["Mumbai","Sydney"]
citiesVisited[citiesVisited.length] ='Berlin'
// citiesVisited[2] = "berlin"
// citiesVisited.push("Berlin");
console.log(citiesVisited)

//Question-05
let teaOrders = ["Chai","Iced tea","Matcha","earl grey"];
let lastOrder=teaOrders.pop();
console.log("last pop element" , lastOrder);

//Question-06
//{soft copy}
let popularTeas = ["green tea","oolong tea","chai"];
let SoftcopyTeas = popularTeas;
console.log(SoftcopyTeas);
console.log(popularTeas); 

//Question-07
let topcities = ["berlin","singapore","new york"]
let hardcopycities = [...topcities];
topcities.pop();
console.log(hardcopycities);
console.log(topcities);

//Question-08
let europeanCities = ["Paris","Rome"];
let asiancities = ["Tokya","Bangkok"];
let worldcities = europeanCities.concat(asiancities)
console.log(worldcities);

//Question-09
let teamenu =["masala chai","oolong tea","green tea","earl grey"]
let menulength = teamenu.length;
console.log(menulength);


//Question-10

let citybucketlist=["Kyoyo","London","Cape Town","Vancouver"];
let isLondon = citybucketlist.includes("London");
console.log(isLondon);