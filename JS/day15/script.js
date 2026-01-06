//! Constructor Function:The function name starts with a Capital letter

//!It is called using the new keyword

//!this refers to the current object

// function consFn(Id,eName,sal){
//   this.empId =Id;
//   this.empName =eName;
//   this.empSal =sal,

// }
// let obj = new consFn(1,"abc0",1234566)
// console.log(obj)

//! This keyword : its is a pointing  .it will to the object

//? use-Strict: the purpose of used strict id   that code

// a =100
// console.log(a)//hosting is not possible

// "use Strict"
// function abc(){
//   console.log(this)//window,undefined
// }
// abc()//~ under non strict mode inside a function. the "this"    the value of the this keyword will bi undefined

//!Function and Arrow Function

// let obj ={
//   objName:"abc",
//   printName: function(){
//     console.log(this)//obj
//   },
//   printName2:()=>{
//     console.log(this)//window
//   }
// }
// obj.printName()
// obj.printName2()

//in Arrow function,this is lexically scoped,meaning it is inherited from the surrounding scope where the function is defined, not form how it is called.

// var objName = "efg"
// let obj ={
//   objName:"abc",
//   printName: function(){
//     console.log(this.objName)//obj
//   },
//   printName2:()=>{
//     console.log(this.objName)//window
//   }
// }
// obj.printName()
// obj.printName2()

// function Test(){
//   this.value=23;
//   const arrow =()=>{
//     console.log(this.value)
//   }
//   arrow()
// }
// Test()

//?anynoums function
(function () {
  let x = (y = 10);
  console.log(x);
})();
console.log(typeof x);
console.log(typeof y);
console.log(y);
// console.log(x);





////////////////////////////////////////////////////////////
//& constructor's function : A constructor function in JavaScript is a special function used to create multiple objects with the same structure (same properties and methods).
//& this : it refers to the current object in which context it is being used.

//!Rules of Constructor Function

//function name starts with Capital letter

//Use this keyword

//Object is created using new keyword

function consfn(id, name, sal) {
    //^ why we are using this here? - because when we create an object using constructor function using new keyword, this will point to that newly created object.and we are assigning the values to that newly created object.
    this.id = id
    this.name = name
    this.sal = sal  
}
let obj = new consfn(1, "abc", 12345)
console.log(obj)

//& this:- it is a pointing mechanism .it will point through te object that is calling the function.

//& purpose of usestrict : is to indicate that the code should be created and executed in strict mode. it helps in catching common coding bloopers, prevents the use of certain syntax likely to be defined in future versions of ECMAScript.

a = 100;
var a = 100;  
console.log(a)               //^  diffrence in both? - in strict mode, using a variable without declaring it will throw an error, whereas       in non-strict mode, it will create a global variable implicitly.
                            //^ why hoisting is not possible here? - because in strict mode, variables must be declared before use, so hoisting does not apply to undeclared variables.
console.log(this);  //^ window- global object 

function strictfn() {
    console.log(this);  //^ undefined - in strict mode, this remains undefined in functions that are not called as methods of an object.
}
 strictfn();                     //^ under non-strict mode this keyword points to the window .In case of useStrict,the value of this keyword will be undefined


 //////////////////////  
 let obj1 = {
    name : "abc",
    printName : function() {
        console.log(this);   //^ points to the obj because the function is called as a method of the object
        console.log(this.name);
    },   
    printName2 : () => {
        console.log(this);   //^ points to the window object because arrow functions do not have their own this and inherit it from the surrounding lexical context

        // console.log(this.name);   //^ undefined - in arrow functions, this does not refer to the calling object but inherits from the surrounding lexical context, which is the global scope here. means this points to window object.
        // console.log(this.obj1.name)  //^ abc    // accessing obj1 name property through window object
    }
 }
 obj1.printName(); // regular function
 obj1.printName2(); // arrow function

 // & summary : In strict mode, this behaves differently compared to non-strict mode. In regular functions, this is undefined in strict mode when not called as a method of an object, while in non-strict mode, it points to the global object. Arrow functions do not have their own this and inherit it from the surrounding lexical context regardless of strict mode.

 // nested function and this keyword : When a function is defined inside another function, it is called a nested function.
 let obj2 = { //^ difference in making function in var and let ? - both var and let can be used to declare functions, but let has block scope while var has function scope. using let can help avoid hoisting issues and unintended global variable creation. In simple words- var creates variables that are accessible throughout the entire function, while let creates variables that are only accessible within the block they are defined in.
    name : "xyz",
    outerfn : function() {
        console.log(this);  //^ points to obj2
        console.log(this.name);
        function innerfn() {
            console.log(this);  //^ undefined in strict mode, points to window in non-strict mode. why it always points to window? - because innerfn is a regular function and when called, it is not called as a method of any object, so in non-strict mode, this defaults to the global object (window in browsers).and in strict mode, it remains undefined.
            console.log(this.name);  //^ undefined in strict mode, may throw error in non-strict mode if name is not defined globally
        }

        innerfn();
    }
    }

    obj2.outerfn();

    function Test() {
        this.value = 42;
        const arrow = ()=>{
            console.log(this.value)
        }
        arrow()
    }
    Test()



    (function(){
        "use Strict"
        let x = (y=10) //^ why y is global? - because y is assigned a value without using var, let, or const making it a global variable.
    })()
    console.log(typeof x)         //undefined
    console.log(typeof y) 