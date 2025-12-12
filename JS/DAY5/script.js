//! looping statement
//& for loop

//structur
//? for(initialization,consition,updation){//body}

// for(let i=0;i<10; i++){
//   console.log(i)
// }

//&while loop
// let i =0
// while(i<10){
//   console.log(i)
//   i++
// }
//& do-while loop
// let i =0

//! Function: it is a reusable block of code,which is used to avoid the code repetition in our Program.
//? It helps us to follow the DRY pricipal. (Don't repeat yourself)


// structure //&(Function -> keyword , abc-> identifier)
// function abc(){
//   console.log("hello")
// }
// abc()//? function calling / Function invoking()

// function bhy(no1,no2,no3){ //^ parameter: if function is accepting some data inside the parenthesis, it is known as parameters.
//   console.log(no1+no2+no3)
// }
// bhy(10,20,30)//~ Argumentst: while calling the function if we are passing the data, it is calling arguments.

//! Named Function: function which is having some name, it is called named function.
// let data prompt("Enter your name")
// function sorryindu(){
//   for(let i=0; i<1000; i++){
//     console.log("indumati")
//     document.writeln("indymati")
//   }
// }
// sorryindu()
// sorryindu(data)

//!Anonymous Function: Function which doesn't hava any name,called anonymous function.

// function(){

// }

//! IIFE(immediate invoke function expression) : After creating the function,immediately we're invoking the function. it helps us to avoid the global varibale pollution.(gvp: )

// (function (){
//   console.log("IIFE")
// })()

//! Arror function:  sorter from of writting the function code.
let fn= (a,b)=>{
  console.log(a)
  // return "hi anana awwow function" //^ Implict return: if there is no return statement inside the function, then by default function return indefined,then if is known as implict return
    return "hi anana awwow function"

}
let res = fn(10,20)//^ explicit return : if you have added return statement,inside the function, then it is known as explicit return.
console.log(res)


  //? if arrow function is accepting  one perameter,then there is no need usign the paranthesis.
  //? if there is only 1 statement inside the arrow fn, the there is no need of usign the currly brackets. 

  //& if there 1 return statement, and only 1 statement is paresent inside the arrow function, then there is no need of using return keyword
