//!Literal's way
//? constructor way
//? object.created()
//? constructor function


//?object.defineProperty: Adds a property to an object, or modifies attributes of an existing property.
// let obj ={}
// Object.defineProperty(obj, "eName",{
//   value:"abc",
// })
// console.log(obj)

//?object.defineProperties: Adds one or more properties to an object, and/or modifies attributes of existing properties.

// let obj ={}
// Object.defineProperties(obj,{
//   id:{value:1},
//   eName:{value:"abc"},
//   sal:{value:12345}

// })
// console.log(obj)
//!Object Methods
//~Object.Keys(): Returns the names of the enumerable(inumrable) string properties and methods of an object.
let obj ={
  id:1,
  eName:"muskab",
  sal:7889,
}
// console.log(Object.keys(obj))
//~Object.value : Returns an array of values of the enumerable own properties of an object
// console.log(Object.values(obj))
//~object.enteries():Returns an array of key/values of the enumerable own properties of an object
// let arrObj =Object.entries(obj)
// console.log(arrObj)
//~Object.fromEnteries():Returns an object created by key-value entries for properties and methods
// console.log(Object.fromEntries([["id",1],["ename","abc"]]))
//~object freeze:Prevents the modification of existing property attributes and values, and prevents the addition of new properties,prevents the deletion of properties
// Object.freeze(obj)//not user crud
//~object seal:Prevents the modification of attributes of existing properties, and prevents the addition of new properties,and prevents deletion of properties
Object.seal(obj)// update only used 





//?method are two type of divide (String)
// static method
// console.log(typeof String)
// console.log(typeof Array)
// console.log(typeof Object)

//instance method(str)
//eg
// let str = "uyterv"




