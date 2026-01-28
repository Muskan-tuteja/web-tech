//
//! PROMISE STATIC METHOD :-

//~ (1) promise.all 
// it takes an array of multiple promies as input and returns a single promise . it resolve when all the promises in the array has resolved and rejected when any 1 of the promise inside the array get rejected.
// it waits for all the promises in the array to reduced and then returns array of their result .
// whwn we're using promise.all if any 1 of the promise in the array get rejected then the whole / entire promise will be reejected.

// let p1 = new Promise((resolve,rejected)=>{
//   resolve("Promise 1 resoloved")
// })
// let p2 = new Promise((resolve,rejected)=>{
//   rejected("Promise 212 resoloved")
// })
// let p3 = new Promise((resolve,rejected)=>{
//   rejected("Promise 13 resoloved")
// })

// Promise.all([p1,p2,p3])
// .then((res)=>{
//   console.log("Promise resolved",res)
// })
// .catch((rej)=>{
//   console.log("Promise rejected",rej)
// })

//~(2)promise.allsettled
//this method is similar to promise.all but it waits for all the promise to settled down (either resolved/rejeced)and returns an array of object with the status of  each promise.
// it is used when we want to ensure that all the promises are completed and we want the result of each promise wheater it is succeed or rejecteed.

// let p1 = new Promise((resolve,rejected)=>{
//   resolve("Promise 1 resoloved")
// })
// let p2 = new Promise((resolve,rejected)=>{
//   rejected("Promise 212 rejected")
// })
// let p3 = new Promise((resolve,rejected)=>{
//   rejected("Promise 13 rejected")
// })

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//   console.log("Promise resolved",res)
// })
// .catch((rej)=>{
//   console.log("Promise rejected",rej)
// })

//~(3) promise.any{interview q}
// it takes the array of promises and returns a single promise which is resolved as soon as any 1 of tyhe promise is fullfilled . if all the promise are rejected then it returns the whole promise as rejected with an aggregate error.which contains all the rejected reason
// let p1 = new Promise((resolve,rejected)=>{
//   resolve("Promise 1 resoloved")
// })
// let p2 = new Promise((resolve,rejected)=>{
//   rejected("Promise 212 rejected")
// })
// let p3 = new Promise((resolve,rejected)=>{
//   rejected("Promise 13 rejected")
// })

// Promise.any([p1,p2,p3])
// .then((res)=>{
//   console.log("Promise resolved",res)
// })
// .catch((rej)=>{
//   console.log("Promise rejected",rej)
// })

//~(4)promise.race{interview q}
//this method takes an array of promises as input and retuns a single promise .
// it will return the promies as soon as any 1 of the promise is either resolved or rejected

let p1 = new Promise((resolve,rejected)=>{
  resolve("Promise 1 resoloved")
})
let p2 = new Promise((resolve,rejected)=>{
  rejected("Promise 212 rejected")
})
let p3 = new Promise((resolve,rejected)=>{
  rejected("Promise 13 rejected")
})

Promise.race([p1,p2,p3])
.then((res)=>{
  console.log("Promise resolved",res)
})
.catch((rej)=>{
  console.log("Promise rejected",rej)
})