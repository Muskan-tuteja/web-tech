// data type
// typeof
let no = 1.3456;
console.log(no);
console.log(typeof no);

// string
let str = "mahi";
console.log(str);
console.log(typeof str);
// color full comments

//& null
//  symbol : it is used to uniquely specifing the variables.
let syb1 = Symbol(12345);
let sub2 = Symbol(34590);
console.log(typeof sub1);
console.log(syb1 == sub2);
//null & undefined
// null: it is assisgned as a value,which represent the absences of the value
let data = null
//undefined: when the variable is declared, nut value is not assignrd is the variables

// primitive/mutable :which can be changed
//function typepf function
// array typeof object
//object typeof object

// output methods in js:


// type casting :convesion of one data type into another data type is called type casting. 

//  implicit : if type casting is done authomatically by the js,it is called implicit type casting
//console.log(2+ "2" -2)
// console.log(2* "2" -2)
// console.log(type NaN)

//  explicit
//let str = string(123456)
// console.log(typeof str)

// let no1 = parseInt(prompt("enter 2nd no"))

// scope in js : accessibility and availability of a variable inside js file 
// types of scopes
//1 global scope: if the variable is declared by using var, the scope of the variable is in the global scope
var a=10 
console.log(a)
//2 script scope:if the variable is declared by using let and const, the scope of the variable is in the script scope
// let a =3
// console.log(a)
//3 block scope: if the vrible is declared by using var, let and const,then all the varibles is accessible inside the block, but only the variable which is created by using vea is accessible outside the block. Block restricts the varibles created by using let and const from accessing outside the block.
// {
//   var a =10
//   let b =30
//   const c =34
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// console.log(a)
//   console.log(b)
//   console.log(c)

//4 local/Function scope : it restrict the variable (var,let , and const ) from accessible outside the function, because varibales are declared inside the function and its scope is limited within the function.

// Hoisting: if we are trying to access the variables before declaration,its is known ase hoisting 
//// Moving the variables to the top of its scope is called hosting declaration.


// if the variable,is declared by using var, we'll get the output as undefined.
// if the variable is declared by using et and const, we'll get uncaught references error, because the variable want into the dead zone, which is known as tdz(temporal dead zone) 

var a =10
let b =20
const c =34;
console.log(a)
console.log(b)
console.log(c)