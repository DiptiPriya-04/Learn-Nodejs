// to exports multiple functions,we have 2 options:

//1.Named Exports
//2.Default Exports

// 1. Named Exports
// const value = require('./math'); // no .js is required because it is a js file and it will automatically look for index.js if we require a folder
// console.log(value.add(2,5));
// console.log(value.sub(5,2));

// we can remove this value variable and put a const{add,mul,sub,div} here and directly log(add(3,4))
const{add,mul,sub,div} = require('./math');
console.log(add(3,4));
console.log(mul(3,4));
console.log(sub(8,4));
console.log(div(3,4));  

// 2. Default Exports
// we can export only one function as default and we can import it with any name we want
// const add = require('./math'); // this will import the default export from math.js and we can use it as add
// console.log(add(2,5));

const xyz = require('./math');
console.log(xyz());