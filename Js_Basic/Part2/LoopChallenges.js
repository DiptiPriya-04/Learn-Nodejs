//Question 01

let sum = 0;
let i = 1;
while(i <=5)
    {
    sum = sum + i;
    i++;
   } 
console.log(sum);

//Question 02
let countdown=[];
let j = 5;
while(j > 0){
  countdown.push(j);
  j--;
}
console.log(countdown);

//Question 03

// let teacollection = [];
// let tea 
// do{
//   tea = prompt('Enter ur favorite tea type("stop to finish")');
//    if(tea!=="stop"){
//       teacollection.push(tea)
//    }
// }
// while( teatype!=='STOP')


//Question 04
 let k = 1;
 let total = 0;
do{
    total = total + k;
   k++
}
while(k<=3)
console.log(total)

//Question 05

let arr = [2,4,6];
let multipliedNumber =[];
for(let i = 0;i<arr.length;i++){
   multipliedNumber.push(arr[i] * 2);
}
console.log(multipliedNumber);

//Question 06
let Cities = ["London","Tokyo","Paris","New York"];
for(let l=0;l<Cities.length;l++){
  let mycities = Cities[l];
   Cities.push(mycities);
}
console.log(Cities);
