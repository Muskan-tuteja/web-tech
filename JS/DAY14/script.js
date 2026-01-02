//! Literal's Way 

// let obj ={
//   id : 1,
//   eName : "muskan"
// }
//! Constructor's way
// let obj = new Object({id:1,eName:"adb",sal:899888})
// // console.log(obj)
// let newObj = Object.create(obj)
// console.log(newObj)
// console.log(newObj.eName)
// console.log(newObj.sal)

// //? Create 
// newObj.newPop="xyz"
// console.log(newObj)

//? prototype : it is a object. In js every has an internal link to anthor object which is called it's prototype.

console.log(String)//captial string is constructors
console.log( typeof(String.prototype))
console.log( typeof(Array.prototype))
console.log( typeof(Object.prototype))

let arr = [1,2,3,45]
console.log(Array.prototype)
console.log(arr.__proto__)// array method
console.log(arr.__proto__.__proto__)// object method
console.log(window.__proto__.__proto__)



//? Prota inhertances : it is features is js . where as object inhertani propert and method from anthor object form a proporty change is 

//? prototype vs __proto: proto type is canscatrion which is used to  stor share method  while __proto__ is as iterenal of an object that point its concatrion proportype 
