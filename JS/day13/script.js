//! objects
//? objects are entities
//? are non primitive data(i.e mutable) type which is used to stored the data in the form of key and value pair .
//?  key and value pair are seprated by the colon
//? key and value pair together  is known  properties
//? 2 properties are seprate by  " ,"

//~ According to data of object
//~ keys  eg =  id , eName , sal,isMarried etc
//~ value = 1, Anjali , 94567 , false , null etc
//~ property = keys + value             eg =   id: 1   ,     eName : "Anjali" etc
//~ key and pair is seprated by colon i.e  " : "
// let obj = {
//     id: 1 ,
//     eName : "Anjali" ,
//     sal:94567 ,
//     isMarried :false,
//     isDeveloper : null ,
//     skills : ["js","java",["cooking","sdfghgfd"]],
//     printName : ()=>{
//         console.log("my name is anjali");
//     },
//     address : {
//         pincode : 123434,
//         street : "punjabi market",
//         insideAddress : {
//             houseNo : 1233,
//             printAdd : ()=> {
//                 console.log("ANJALI'S HOUSE")
//             }
//         }
//     }
// }

//! Read
// console.log(obj)
// console.log(obj.id)
// console.log(obj.isMarried)
// console.log(obj.skills)
// console.log(obj.skills[1])
// console.log(obj.skill[4][0])
// obj.printName()
// console.log(obj.address.street)
// console.log(obj.address.insideAddress.houseNo)
// obj.address.insideAddress.printAdd()                    //() = by this we invoke also , don't use clg coz it doesn't "return " keyword use so give result as well as "undefined"

//!   Update

// console.log(obj)                    //y phle jo value h wo
// obj.eName = "abc"                   //add updated value              isme output result m change ayga
// console.log(obj)

// console.log(obj)
// obj.address.insideAddress.houseNo = 234567
// console.log(obj)                                         //isme before and after dono m change hoga houseno y cocept sir baad m smjhyng shallow copy / deepcopy concept

//! Delete

// delete obj.eName
// delete obj.address
// console.log(obj)

//! Pratices HW
let obj = {
  id: 1,
  eName: "Muskan",
  class: "Cse",
  Skill: ["Html", "Css", ["Mahi", "mkih", "mkoli"]],
  printOdd: () => {
    console.log("i am muskan");
  },
};
// console.log(obj);
// console.log(obj.Skill[2][2])
// console.log(obj.printOdd())
// obj.printOdd()
obj.id = 2;
console.log(obj);


//?DELETED ID
delete obj.id;
console.log(obj);
