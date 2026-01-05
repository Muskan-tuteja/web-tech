// //! Function:
// //^Clouser function: it is a object.In the nested function when the inner function trying access the data which is present in the outer function the clouser function.

// //? clouser is created for the  parents function.

// // function outer() {
// //   let a = 100;
// //   function inner() {
// //     let b = 200;
// //     console.log(a + b);
// //   }

// //   inner();
// // }
// // outer();

// // function fn(){
// //   return 1
// //   return 2
// //   return 3
// //   return 4
// //   return 5
// // }
// // let res = fn()
// // console.log(res)//& only 1 return

// ^ generative function: A generator function in js is a special type of function that can pause its execution and resume later. producing multiple values one by one on demand.
//yield: the yield keyword is used inside the generator function to pause exection.
//next(): it resumes the genertor's execution until the next yield or return statement.

// //~ The next() method returns an object with two properties.
// //& value: The value produced by the yield or return statement.
// //& done: A boolean indicating whether the generator function has completed its execution.

// // function * fnName(){
// //    yield  1
// //   yield  2
// //   yield  3
// //   yield  4
// //   yield  567
// // }
// // let res1 = fnName()
// // console.log(res1.next())
// // console.log(res1.next())
// // console.log(res1.next())
// // console.log(res1.next())
// // console.log(res1.next())

// //! Arguments Objects: the arguments object in js is an array-like object that is locally accessible inside all non-arrow functions and contains the values of the arguments passed to that function.

// // function argsObj(){
// //   console.log(arguments[0])
// //   console.log(arguments[1])

// // }
// // argsObj(100,200,300)

// //! Default Parmeters : in js, default parameters allow you to initi

// function add(a, b, c) {
//   //undefined
//   //undefined //? NaN
//   //undefined
// }
// // add(a+b+c)

// // function add (a,b,c){
// //   console.log(a+b+c)
// // }
// // add(100,200,300)

// function add(a = 1000) {
//   //& a=1000 default parmeter(overlap)
//   console.log(a);
// }
// add(234);
// //! String: collection of characters. string is primitive data 
// //? way of creating:
// //~literal way
// let str = "muskan";
// console.log(str);
// console.log(typeof str);
// //~
// let str2 = 'muskan';
// console.log(str2);
// console.log(typeof str2);
// //~template literal: it is used for creating multi line string
// let str3 = `muskn23`;
// let str4 = `muskn23
// jhbhdsbchds
// dbcdhvbdhvbh`;
// console.log(str3);
// console.log(str4);
// console.log(typeof str3);
// //~ constructor's way
// let str5 = new String("ert")
// console.log(str5)//&[String: 'ert']
// console.log( typeof str5)//&object
// //? property of string
// //~length: It gives the no of characters present inside the string
// let arr1 = "bbbbbbbbbbbbbbbbbbbbbbbb"
// console.log(arr1.length)
// //~ String Interpolation: Embedding varibles to the string is known as string Interpolation.
// let eName = "Mahi"
// console.log(`my name is ${eName}`)

console.log(" 'muskan' is mahi")
//! diff '' "" 


