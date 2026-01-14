//  methods

// ~find methods()
//~ Returns the value of the 1st element in the array where predicate is true, and undefined otherwise.
//~  it does not changes the original array.
//~
// let arr =[10,6,9,83,12]
// let result = arr.find((val)=>{
//     return val>100
// })
// console.log(result)          //undefined


//~findIndex()
// ~Return the index of the 1st element in the array where predicate is true and -1 otherwise.
//~It doesn't changes the original array.

// let result = arr.findIndex((val)=>{
//     return val>100
// })
// console.log(result)
// console.loh(arr)                  //-1(if it is not available)


// let result = arr.findIndex((val)=>{
//     return val>10
// })
// console.log(result)
// console.loh(arr)         //0(no. of index) 


//~ some(): 
//~ Determine wheter the specified callback function returns true for any element of an array.

// let res = arr.some((val)=>{
//     return val>82
// })
// console.log(res)

// ~ eyery()
//~Determines wheter all the members of an array satisfy the specified test.
// let res= arr.every((val)={
//     return val>83
// })
// console.log(res)


//~Sort()
//~ This method is used for sorting the array in ths ascending or descending order.

//& Ascending order 
// let res = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(res)            //[6,9,10,12,83]

//& Descending order 
// let res = arr.sort((a,b)=>{
//     return b-a
// })
// console.log(res)            //[83,12,10,9,6]

// *
// let arr =[10,6,9,83,12]
// let res = arr.sort((a,b)=>{
//     console.log(a,b)
//     return (a,b)
// })
// console.log(res) 

//? array method 
//! map
//!It is used to iterate and modify the array
//! It does not affect the original array
//! It return boolean value , if we're checking the condition and it return true for the elements who passes the conditi, and false or those element who doesnot passes the condn
let arr = [10,20,300,10,50,299]
let res = arr.map((val)=>{
    return val+1000
})
console.log(res)
console.log(arr)


// let arr = [10,20,300,10,50,299]
// let res = arr.map((val)=>{
//     return val%2==0
// })
// console.log(res)
// console.log(arr)

//~ Filter :
// ~ Return the elements of an array that meeet the condition specified in a calll back function

// let arr = [10,20,300,10,50,299]
// let res = arr.filter((val)=>{
//     return val>10
// })
// console.log(res)
// console.log(arr)


// let arr = [10,20,300,10,50,299]
// let res = arr.filter((val)=>{
//     return val%2==0
// })
// console.log(res)
// console.log(arr)

//! reduced():
//! It returns single value .It accept two arguements i.e callback fn, and initial value.
//! If we're not passing any initial val,then accumulator bocomes 0.
//! It doesn't affecs the original array.
//! initialVal optional

// let arr=[1,2,3,4,5,6]
//let totalPrice = arr.reduced(useCallback,initialVal)

// let totalPrice = arr.reduce((arr,currV)=>{
//     return acc+currV
// },10)
// console.log(totalPrice)

// console.log(arr)