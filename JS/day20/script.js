// var sName = "def"
// let sName1 = "mahi"
// const sName2 = "mahi"

// let studnet={
//   id : 2,
//   sName : "Muskan",
//   age: 23,
//   gender: "Male",
//   printName :()=>{ //? arror function is used to this output is window
//     console.log(this)
//     console.log(this.sName)
//     console.log(this.sName1)//undefind
//     console.log(this.sName2)//undefined
    

//   },
//    printName2 :function(){ //?noramal function is object crates student
//     console.log(this)
//     console.log(this.sName)
//      console.log(this.sName1)//undefined
//        console.log(this.sName2)//undefined
//    }

// }
// studnet.printName()//window print
// studnet.printName2()//Object print student () (parent object is created)



//? Call,Apply,bind:
// let Student1 ={
//   stdName:"abc",
//   age: 12

// }
// let Student2 ={
//   stdName:"wer",
//   age: 12

// }
// let Student3 ={
//   stdName:"mkih",
//   age: 12

// }
// let Student4 ={
//  gender:"Male",
//   age: 12

// }
// function StudentDe(){
//   console.log(`My name is ${this.stdName} and my age is ${this.age}`)
// }
// StudentDe.call(Student1)
// StudentDe.call(Student2)
// StudentDe.call(Student3)
// StudentDe.call(Student4)


let Student1 ={
  stdName:"abc",
  age: 12

}
let Student2 ={
  stdName:"wer",
  age: 16

}
let Student3 ={
  stdName:"mkih",
  age: 12

}
let Student4 ={
 gender:"Male",
  age: 12

}

function makeBill(date,gstno){
  console.log(`my name is ${this.stdName} mand today date is ${date} and get no is ${gstno}`)
}
//!call (objName,argument1,argument2)
makeBill.call(Student1,"12","mjiku")

//! apply (objName, [arguments])
makeBill.apply(Student2,["12","mjiku"])

//! bind()
let res = makeBill.bind(Student3,"12","mjiku")
res()// Bound

//~ the call method is used to invoke a function immediately while explicitely especifying what the this keywoard should refers to.it accepts arguments individually (comma seperated),

//~ the apply method is similar to call method, but it accepts the arguments in the array. it also immediately ecutes the function.

//~ the bind method does not immediate execute the function, it return a new function , which you can call multiple times.