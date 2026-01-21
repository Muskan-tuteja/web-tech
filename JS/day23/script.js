let heading = document.querySelector("h1")
console.log(heading)

//! classList.add(): it is used for adding the class through the js.
heading.classList.add("abc")
//!classList.remove(): it is used for removing the class through the js

// heading.classList.remove("abc")
//! classList.toogle: it is used for adding as well as removing the class. if the class is already present, it will remove the class.if there is no class,the it will add the class.
// heading.classList.toggle("abc")

//  let bdy = document.querySelector("body")
// function ChangeMode(){
//   // console.log("Change click button")
//   bdy.classList.toggle("button")
 
// }

let count = 0
function ChangeMode(){
  count++
  console.log("count")
}
function ChangeMode1(){
  count--
  console.log("count1")
}