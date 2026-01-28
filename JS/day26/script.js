//! Timing function: setTimeOut, setInterval, clearTimeOut, clearInterval


//? setTimeOut: It is a method which accepts 2 argument callback function and the time in mili seconds. It make a js code asynchronized
//? It is used to call function after some spam of time

// console.log("Task 1")
// let timeOutCancel = setTimeout(()=>{
//     console.log("Task 2 completed")
// }, 4000);

// btn.addEventListener("click", ()=>{
//     console.log("button is click");
//     clearInterval(timeOutCancel);
// });

//? clearTimeOut is a method wheere the argument is the reference of the setTImeOut.

//? setInterval: It is a function which accepts 2 arguments callback function which is executed after every span of times and the second is time in s
//?              
//? clearInterval is a method which is used to clear the set interval it accepts one argument where the argumen t is the reference of set intyerval.

// let i =0;
// let cancelInterval = setInterval(()=>{
//     console.log(i);
//     i++;
// }, 1000);

// btn.addEventListener("click", ()=>{
//     console.log("button is click");
//     clearInterval(cancelInterval);
// });


//? Fetch : It is a method which is used for fetching the data from the api server or bcakend and it returns one promise.
//? Promise: It is a object which tells the eventual completion of failure of a asnchronous task.
                //?It returns one another promise.
                //?There are 3 stages of promises: pending, resolve , rejected.

    //! Promises instance method:    
        //? .then: It is executed when the promise is successfully resolved.
        //? .catch: It is executed when the promise is rejected.
        //? .finally: It is executed in both the cases either the promise is resolve or get rejected.


//? custom promise
let pro = new Promise((res, rej)=>{
    res("Promise is resolve");
    // rej("Promise is rejected")
});
// console.log(pro)

pro 
    .then(()=>{
        console.log("RESOLVED")
    })
    .catch(()=>{
        console.log("REJECT")
    })
    .finally(()=>{
        console.log("FINALLY")
    })