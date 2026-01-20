//?Bom stands for broweser object modeles.Whenever we open  the browser ,the browser itself consider as an objects.   this object is known as bom the another name of bom is window. window is the global object is the frontend. it is the parent of all the object.Global is window.
//?window is a object

//!Window -------> document navigator location screen history

console.log("hi")

//?Dom stands for documents object models. dom is used to manipulate the html to the js. [adding the elemmet, delted the elemnt, remvoing the elemet, addint the attribute]
//? Dom is one of the major object inside the window .. whenever  be open html file inisde the browser the browser converts the html  CODE INFO a tree like etc. // the tree like strc

//? where each elemets are reperensting is the font of node in the dom tree.


//! ways of accening in js

//? Document.getElementById()
//? Document.getElementByClassName()
//? document.getElementByTagName()
//? documnet.querySelector()
//?document.querySelectorAll()


//? its array like object
// //~ Document.getElementById(): it is used for targetting the html elements based on the id of the html element. it return the single targetted element.
// let head = document.getElementById("hyj")
// console.log(head)
//~Document.getElementByClass Name()=it is used for targetting the html elemets based on the className of the html element. it return the html collection in which all the targetted elements are stored.
// let head1 = document.getElementsByClassName("hyjio")
// console.log(head1)
//~document.getElementBy TagName()= it is used for targetting the html elemets based on the tagName of the html element. it return the html collection in which all the targetted elements are stored
// let head2 = document.getElementsByTagName("h2")
// console.log(head2)

//~documnet.querySelector()= it is used to target the html elemnts based on the id,class and TagName,but here to especify the symbols also for the class and id.//? if we're targetting based on the className or tagName,then it returns the first maching element.it doesn't returns nodelist
let head3 = document.querySelector(".hyjio")
console.log(head3)
let head6 = document.querySelector("#hyj")
console.log(head6)
//~//~documnet.querySelectorAll()=it is used to target the html elemnts based on the id,class and TagName,but here to especify the symbols also for the class and id.//? if we're targetting based on the className or tagName,then it returns the all maching element and store it in the Nodelist.
let head4 = document.querySelectorAll("#hyj")
console.log(head4)
let head9 = document.querySelectorAll(".hyjio")
console.log(head9)


//~ Node list diff html collection