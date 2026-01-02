//! Constructor Function

// function consFn(Id,eName,sal){
//   this.empId =Id;
//   this.empName =eName;
//   this.empSal =sal,

// }
// let obj = new consFn(1,"abc0",1234566)
// console.log(obj)

//! This keyword : its is a pointing  .it will to the object

//? use-Strict: the purpose of used strict id   that code

// a =100
// console.log(a)//hosting is not possible

// "use Strict"
// function abc(){
//   console.log(this)//window,undefined
// }
// abc()//~ under non strict mode inside a function. the "this"    the value of the this keyword will bi undefined

//!Function and Arrow Function

// let obj ={
//   objName:"abc",
//   printName: function(){
//     console.log(this)//obj
//   },
//   printName2:()=>{
//     console.log(this)//window
//   }
// }
// obj.printName()
// obj.printName2()

//in Arrow function,this is lexically scoped,meaning it is inherited from the surrounding scope where the function is defined, not form how it is called.

// var objName = "efg"
// let obj ={
//   objName:"abc",
//   printName: function(){
//     console.log(this.objName)//obj
//   },
//   printName2:()=>{
//     console.log(this.objName)//window
//   }
// }
// obj.printName()
// obj.printName2()

// function Test(){
//   this.value=23;
//   const arrow =()=>{
//     console.log(this.value)
//   }
//   arrow()
// }
// Test()

//?anynoums function
(function () {
  let x = (y = 10);
  console.log(x);
})();
console.log(typeof x);
console.log(typeof y);
console.log(y);
// console.log(x);
