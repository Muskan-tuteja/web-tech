//~Method Object

let obj = {
  id:1,
  eName : "muskan",

}
//!Oboject.isFrozen:Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
Object.freeze(obj)
console.log(Object.isFrozen(obj))

//!Object.isSealed: Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
// Object.seal(obj)
// console.log(Object.isSealed(obj))

//!Object assign : Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// let obj = {
//   id:1,
//   eName : "muskan",

// }
//?let newObj = Object.assign(target,source)
// let newObj = Object.assign({},obj)
// console.log(newObj)
// let newObj2 = Object.assign([],obj)
// console.log(newObj2)


//~Abvanced loop
// let obj = {
//   id:1,
//   eName:"mahi",
//   RollNo:9,
//   1:"mkisk",
//   true:"boleean"

// } 
//!for-in:for...in loop is used to iterate over the keys of an object in JavaScript.
// for(let key in obj){
//   console.log(key)
// }for(let a in obj){
//   console.log(a,obj[a])
// }
// console.log(obj.id)
// console.log(obj["1"])
// console.log(obj[1])
// console.log(obj["eName"])

// for-in is iteration 

//! for-of
// let arr = [1,3,4,5,6]
// for(let a of arr){
//   console.log(a)
// }
// array se iterate karte h 
// string se iterate karte h

//?set : set is used to unqiue value is defined . remove duplicate value
// let setData = new Set([1,2,3,45,5,6,3,1,2])
// for(let data of setData){
// console.log(data)
// } //? for-of is used to set 

//! for-each :Performs the specified action for each element in an array.

//?@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// let arr = [1,"mjki",true,677n]
// arr.forEach((Val,indx,element)=>{
//   console.log(Val,indx,element)

// })

