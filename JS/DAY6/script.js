//! Function
//^Named
//^Anonous
//^Arrow
//^IIFE
//^Function with expression:When we are passing function as a value to a variable, this type of function is known as function with expression.

// let funExp = function(){
//   console.log("Function With Expression")
// }
// funExp()

//^First class fn/ first citizen fn: the Stored function which is passed as a value to the variable is known as first class fn or first citizen fn.
//^Higher order function: if a function is accepting another function as a programmer, and return a function, it is known as higher order functiin.

//^callback function: when a function is passed as a argument while calling the function,it is called callback function
function Hdf(a, b, cd) {
  //?higher order function
  cd();
}
// Hdf(100,200,function(){
//   console.log("callback fn ")//?callback function

// })

// function callback(){ //? function
//   console.log(a+b)
// }
// function Hof(a,b,cd){//?Higher order function
//   cb(a,b)
// }
// Hof(10,100,callback)

// function Hof(a, b, callback) {
//   callback(200, 1000);
// }
// Hof(100, 100, (a, b) => {
//   console.log(a + b);
// });

//^recursive function: if a function is calling itself, it is known as recusive function
// function sum(n){
//   if(n<=1){
//     return 1
//   }
//   return n+ sum(n-1)
// }
// let res = sum(5)
// console.log(res)
//^Generator function:
//^Nested Fn: When Function is parsent inside function, it is called nested function. //! interview question
// function grandPar() {
//   console.log("Grand Parent");
//   function parent() {
//     console.log("parent");
//     function Child() {
//       console.log("Child");
//     }
//     Child();
//   }
//   parent();
// }
// grandPar();

//!JS currying: if a function is returning multiple functions, it is called js currying.
function grandPar() {
  console.log("Grand Parent");
  return function parent() {
    console.log("parent");
   return function Child() {
      console.log("Child");
    }
   
  }
}
// grandPar()()();

let par = grandPar()
let ch = par()    
ch()
