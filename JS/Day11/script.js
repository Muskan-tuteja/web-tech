//& unshift()-  this methos is used t add elements from the starting of the Array.it modifies the original array. and it returns the length of the array.
let arr = [1,2,3,5,6]

let result = arr.unshift(100,10,20)
console.log(result)


//& shift() - it is used for removing the elements from the starting of the array.it modifies the original array and it returns the removed elements from the array.
let res = arr.shift();
console.log(res)
console.log(arr)    //[10, 20, 1, 2, 3, 5, 6]

//& slice() -it accepts two arguments start,end.it returns the new array in which all the deleted elements will be stored.it doesnot changes the original array.
let arr1 = [10,20,30,40,50,60]
console.log(arr1.slice(2,4))    // 30,40
console.log(arr1)               // 10, 20, 30, 40, 50, 60

//& splice()- it is used for removing the elements adding new element  to the array . it accepts three arguments where the first arguments is the starting index,second argument is the delete the number of counts and third argument is new updated element. it modifies the original array and it returns the deleted elements
console.log(arr1.splice(2,4,"hii"))    // 30,40,50,60
console.log(arr1)                      // 10, 20, 'hii'

//& flat()- it is used for converting multi-dimensional array into single dimension array
let arr2 = [[[[[[[[[[[[[[10]]]]]]]]]]]]]]
console.log(arr2.flat(Infinity))

let arr3 = [0,20,[30,40]]
console.log(arr3.flat(Infinity))     // 0, 20, 30, 40

//& reverse() -it is used for reversing the array.
console.log(arr1.reverse())      //'hii', 20, 10
let str = "ajndjdns"
let reversed = str.split("").reverse().join("")
console.log(reversed)

// join() - it is used for converting array into string.it accepts one argument as a separator which is optional.if we dont provide any separator then by default comma will be added between the elements.