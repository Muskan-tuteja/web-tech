let obj = {
  id :1,
  eName :"Abc",
  sal:2,
  adreess:{
    street:"hanji",
    plotno:2
  }
}
//!!! Shallow copy : outer layer ===> different. innner layer ===> same reference .  Shallow copy creates a new object but shares references of nested objects, while deep copy creates a completely independent copy of the entire object structure.
//!1st way
// let newObj= Object.assign({},obj)

//!2nd way
// let newObj={...obj}

//!3rd way
let newObj ={}
for(let key in obj){
  newObj[key] = obj[key]
}


newObj.sal=3,
console.log(newObj.sal)
console.log(obj.sal)

newObj.adreess.plotno=3,
console.log(newObj.adreess.plotno)
console.log(obj.adreess.plotno)


////!deep copy: outer+ inner layer ===> different. Deep copy creates a fully independent copy of an object, including all nested objects, with no shared references.

//!&1st way
let newObj =structuredClone(obj)

//!2nd way
//?parse: Converts a JavaScript Object Notation (JSON) string into an object.A valid JSON string.
let newObj =JSON.parse(JSON.stringify(obj)) //!JSON.stringify converts an object into a JSON string.Therefore, a deep copy is created.
