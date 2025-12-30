//? objects: objects are the no primtive data type .which used to stor the data in the form the key value paries key and value paries are spearty by colon key value paries togther is ni as poperty

//? tro property are , 

let obj = {
  id: 1,
  eName: "Muskan",
  sal:12000,
  isMarried: false,
  skills: ["JS","SQL","css",["kinm","hggyhgu"]],
  printName:()=>{
    console.log("my name is muskan")
  },
  address:{
    pincode: 12356,
    street: "njugnk",
    insideAdress:{
      houseNo:100,
      printAdd:()=>{
        console.log("Gopal is house")
      }
    }
  }

}

// console.log(obj)
// console.log(obj.printName())
// obj.printName()
// console.log(obj.address.insideAdress.houseNo)
console.log(obj.skills[1])
console.log(obj.skills[2][1])

//!Read : is a object

//!Update

console.log(obj)
obj.eName="mahi"
console.log(obj)
obj.address.insideAdress.houseNo=200
console.log(obj)
//!deleted : 
delete obj.eName
console.log(obj)