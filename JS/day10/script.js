//! Array: is is non-primitive data type.which is used to store multiple element inside the single variable .Array is java script can be Homogenous as well as Heterogenous.

//? based on the creative of array

//~ Literal's way :
//&Homogenous Array
// let arr = [1,2,3,4,5]
// let arr2 = ["abs","hju","hbh"]

//& Heterogenous Array
// let arr3 = [1,"abs", true,12n.null, undefined,[],{},function(){}]
// console.log(arr3)

//~ Constructor's Way

// let arr = new Array(10,20,30,49)
// console.log(arr)

// let arr2 = new Array(10)
// console.log(arr2)

//~Array.of()

// let arr = Array.of(10,20,30,null,function(){})
// console.log(arr)
//*CRUD
//? create
// let arr = ["mahi",4,true,null,function(){
//   console.log("my name is muskan")
// }]
//? read:
// console.log(arr)
// console.log(arr[3])
// arr[5]()
//?update
// console.log(arr[0])
// arr[0]="mjik"
// console.log(arr[0])

// console.log(arr)
// arr[6] = "newdata"
// console.log(arr)

//?Delete
// delete arr[5]
// console.log(arr)

//* Properties of array
//~lenght : it is used for calculating the length of the array.
let arr = [10, 20, 30, 40, 56];
console.log(arr.length);
//length: 1 se clculating
//index:0 se calculating

//*Methods of the Array
//~Push Method() :  this method is used for adding the elements from the end of the array.

// let arr = [1,2,3,4,5]
arr.push(6,7,8,9)
// console.log(arr)
//~it modified the array and it returns the length of the new array or updated array.
// let res = arr.push(6,7,8,9)
// console.log(res)//?10..>lenght of the

//~pop(): it is used for Removes the last element from an array and returns it.

//? it modified the original array and returns the deleted element
let res = [20, 30, 40];
res.pop();
console.log(res);

