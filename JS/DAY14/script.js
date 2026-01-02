//! Literal's way:In JavaScript, object literal is the simplest and most common way to create an object.

// let obj ={
//     id : 1,
//     eName : "abc",
//     sal : 12345 
// }

//! Consructor's way : In JavaScript, constructor way means creating objects using a constructor function with the new keyword.

let obj = new Object({id : 1, eName : "abc", sal : 12345})
// console.log(obj)

//! Object.create()
 let newObj = Object.create(obj)
 console.log(newObj)
 console.log(newObj.eName)
 console.log(newObj.sal)

 newObj.newProp = "xyz"
 console.log(newObj)

// console.log(String)
// console.log(String.prototype)
// console.log(typeof(String.prototype))

// console.log(Array)
// console.log(Array.prototype)

 //! prototype = It is a object in JS every object has an internal link to another object which is called it's prototype.

//! Prototypal Inheritance : 
// it is a feature in a JS where objects inheriet properties and methods from other object forming a prototype chain this is known as PI.
// console.log(window)

// let arr = [1,2,3,4,,5]
// console.log(Array.prototype)        //constructor k liye
// console.log(_proto_)              //instance(just like copy)
// console.log(arr._proto.proto_)

// console.log(Array.prototype == arr._proto_)

// console.log(window._proto.proto.proto.proto_)

// let obj = {
//    id : 1,
//    eName : "abc" 
// }


//! prototype V/S _proto_
// prototype is a property of a constructor function , which is used to store shared method while _proto_ is a internal refrence of an object that points to it's consuctor prototype.