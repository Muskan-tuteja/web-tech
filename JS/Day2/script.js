console.log("hello");
// alert("hiii");

// operators: it is used yo perform operations in js.
//~ == ,===

console.log(2 == "2")
console.log(2 === "2")

//~ DataTypes-
//^ primitive/Immutable : which cannot be changed.
//&  1.number
let no = 12333.8;
console.log(no)
console.log(typeof no)

//&  2.String
let str = "khushi";
console.log(str)
console.log(typeof str)

//& 3.Boolean
let bool = "true";
console.log(bool);
console.log(typeof bool);

//& 4.null
let data = null;
console.log(data)
console.log(typeof data)

//& 5.undefined
let abc;
console.log(abc)
console.log(typeof undefined)

//& 6.bigInt
let bigData = 1345678798n
console.log(bigData)
console.log(typeof bigData)

//& 7.symbol- it is used to specifying the variables.
// let syb1 = symbol("abc") 
// let syb2 = symbol("abc")
// console.log(syb1 == syb2)
// console.log(syb1 === syb2) 
// console.log(typeof syb1)


//~ null vs undefined

//* null- it is assigned as a value , which represent the absence of the value.
//* undefined- when the variable is declared, but value is not assigned to the variable then we'll get undefined.
    
//^ non-primitive/mutable : which cannot be changed.

//& 1.function 
function abc1(){
    console.log("function")
}
abc1()
console.log(typeof abc1)

//& 2.Array
let arr = []
console.log(typeof arr)

//& 3.object
let aobj = {}
console.log(typeof obj)



//~ Output Methods
//& console.log() -  
//^ it is used for testing purpose. it prints the data on console tab.
console.log("i am console")

//& document.writeln() -
//^ it is used for printing the data on the UI. 
document.writeln("jasnlknskjdakj")

//& alert()-
//^ it is a popup method.
alert("hello baby")

//& confirm()-
//^ it is a popup method.
let r = confirm("are u 18+ ?")
console.log(r)

//& prompt()-
//^ it is used for taking the input from the user. and converts the received data into string.
let res = prompt("Enter oyur name")
console.log(res)
console.log(typeof res)



console.log(1+1)
console.log(2+"hii")
console.log(first)



// let a = 10;
// let b = "10";

// console.log(typeof a)
// console.log(typeof b)


// console.log(a==b)
// console.log(a===b)

//^ typeof Operator : It is used for checking the type of the data, which type of data you are using.


//& Primitive Datatypes :

//~ number
// let no = 1000;
// console.log(typeof no) // number
//~ string
// let str = "abc"
// console.log(typeof str) // string
//~ boolean
// let bool = true
// console.log(typeof bool)
//~ null
// let abc = null
// console.log(typeof abc)
//~ undefined
// console.log(typeof undefined)
//~ bigInt
// let bigNo = 17n
// console.log(typeof bigNo)
//~ Symbol
// let sym = Symbol("a")
// console.log(typeof sym)


//! Non-Primitive Datatype / Mutable  : 
//~ functions
// function sum(){
    // body of funtion
// }
// console.log(typeof sum) // function
//~ array
// let arr = []
// console.log(typeof arr) // object
//~ object
// let obj = {}
// console.log(typeof obj) // object


// console.log(typeof NaN)

// let x = null;
// let xyz ;
// console.log(xyz)



// let sym1 = Symbol("a")
// let sym2 = Symbol("a")

// console.log(sym1 == sym2)
// console.log(sym1 === sym2)


//! type casting :convesion of one data type into another data type is called type casting. 
//? Implicit type casting : 

// console.log(10+10)
// console.log(10+"10")
// console.log(10+ typeof 10)
// console.log(10* "2" )
// console.log(10 * "hii")
// console.log(10+ typeof window)
// console.log(2 + 3 * "5" + 10 - "5")
// console.log(10 - "10")

// console.log( typeof( 10+ typeof window))
// console.log( typeof(true + false) )
// console.log(true-0.5 *2+"5")
// console.log(typeof(true-0.5 *2+"5"))
// console.log(2/2)
// console.log(2/"2")
// console.log(typeof(2/"2"))
// console.log(false -true + "hii")
// console.log(typeof(false -true + "hii"))

// console.log(2*"hii")
// console.log( typeof( typeof((typeof (2*"hii")))))


// console.log(1 + 1)
// console.log(1 + "1")
// console.log(2 + "hii")
// console.log(2*"hii")  // NaN
// console.log(typeof(2 * "hii")) // number
// console.log(typeof(typeof(2 * "hii"))) // string
// console.log(typeof(typeof(2 * "hii")) + "qwerty") 
// console.log(typeof (2 + "5" * 2))
// console.log(typeof null + 5)
// console.log(5 + true - "2")

//!explicit:
//let str = string(123456)
// console.log(typeof str)



// Red (!)
// Blue (?)
// Green (*)
// Yellow (^)
// Pink (&)
// Purple (~)
// Mustard (todo)
// Grey (//)
//! HTML

//! CSS

//! JS
