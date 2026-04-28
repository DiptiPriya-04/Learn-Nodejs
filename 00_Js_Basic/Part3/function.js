// Function in JavaScript
// A function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).
//Question 01

function makeTea(typeofTea){
    return 'Making ' + typeofTea;
}
let TeaOrder = makeTea('Lemon Tea');
console.log(TeaOrder);

//Question 02
function OrderTea(teatype){
    function confirmOrder(){
        return 'Order confirmed for chai'+ teatype;
    }
    return confirmOrder();
}
let order = OrderTea('Masala Chai');
console.log(order);

//Question 03

const calculateTotal= (price , quantity) => price * quantity;

let Totalcost = calculateTotal(499, 100);
console.log(Totalcost);

//Question 04
function makeTea(typeofTea){
return `makeTea : ${typeofTea}`;
}
function processTeaOrder(teaFunction){
 return teaFunction("earl grey");
}

// let OrderTea = processTeaOrder(makeTea)
// console.log(OrderTea);
 

//Question 5

function createTeaMaker (){
    return function(teatype){
        return `making : ${teatype}`;
    };
}
let teamaker = createTeaMaker();
// console.log(teamaker('green tea'));
let result = teamaker('green tea');
console.log(result);
