//!!Destructuring:  Destructuring makes your code shorter and more readable.Works with arrays, objects, and even function parameters.

//!!Destructuring in Array:  It is a way to extract values from an array and store them in variables easily.


// let arr  = [1,"abc",true,null,undefined,false]

// let [abc,def,bhy] = arr
// console.log(abc)
// console.i4`log(def)
// console.log(bhy)
// let  [abc,def,bhy, ...remain] =arr//?...speard opeator
// console.log(remain)
// console.log(abc)
// console.log(def)

// let [, , def] = arr
// console.log(def)


//! Destructuring in Object:means extracting values from an object and storing them in variables using property names.

// let obj = {
//   id :1,
//   eName:"mahi",
//   sal:789,

//   isDev : false
// }
// let{id,eName}=obj
// console.log(id)

// let{id,eName,...spear}=obj
// console.log(id)
// console.log(spear)

// let {id} = obj
// console.log(id)



//!Rest Parameters:  Rest parameters collect multiple function arguments into a single array using .....
//?It is written using three dots ...
let obj = {
  id :1,
  eName:"mahi",
  sal:789,
  isDev : false
}
// function rePara({id,eName}){
//   console.log(id)
//   console.log(eName)

// }
// rePara(obj)

function rePara(...obj){//?rest parameter
  console.log(obj)

}
rePara({obj})

//& pratice rest parameter
// function resPara(newObj){
//   let {obj} = newObj
//   console.log(obj)
// }
// resPara({obj})

// let newObj = {obj}
// function resPara(newObj2){
//   let {newObj} = newObj2
//   let {obj} = newObj
//   console.log(obj)
// }
// resPara({newObj})

// let newObj = {obj}
// let newObj2 = {newObj}
// let newObj3 = {newObj2}

// function resPara(newObj4){
//   let{newObj3} = newObj4
//   let{newObj2} = newObj3
//   let{newObj} = newObj2
//   let{obj} = newObj
//   console.log(obj)
//   // console.log(newObj4)


// }
// resPara({newObj3})

// let qwerty = {obj}
// let asdfg = {qwerty}
// let zxcv = {asdfg}

// function resPara({def}){
//   let {zxcv} = def
//   let {asdfg} = zxcv
//   let {qwerty} = asdfg
//   let {obj} = qwerty
//   console.log(obj)
// }
// resPara ({def:{zxcv}})


le