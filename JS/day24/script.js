//! EVENT HANDLER IN JAVASCRIPT :
//EVENTS ARE THE SPECIAL TYPE OF ATTRIBUTES IN JS WHICH ALLOWS US TO CALL THE FUNCTION BASED ON THE USER ACTION.
// event is nothing just a function
// all the event handler have prefix with "on" keyword

let btn = document.querySelector("#btn")
btn.addEventListener("click",function(){
console.log("btn")
})


//? attributes = which gives extra info. of tags

// ! types of events
//(1) click event= on click and on dbl(double) click
//(2) mouse event = on mouse hover , on mouse move , on mouse up , on mouse down
//(3) input event = on focus , on change , on blur , on select 
//(4) keyboard event = on key up, on key down , on key press
//(5) form event = on submit 

// function abc(){
//     console.log("asdfghj")
// }

// let i=0 
// function move(){
//     console.log(++i)
// }

// let btn = document.querySelector("button")
// btn.addEventListener("eventName","callback FN","eventPhase --> optional(iski defalut value=false false hoga to bubbling phase or true hoga to event capturing hoga")
//chcek krle bhai target hora h ya nhi
// console.log(btn)
// to execute
// function abc(){
//     console.log("button is clicked")
// }
// btn.addEventListener("click",abc)

// btn.addEventListener("click",()=>{
//     console.log("button is click")
// })


//! EVENT PROPOGATION :-  
// the process of calling an event is called E.P .
// there are 2 types of E.P .
// (1) event bubbling
// (2) event capturing

//~ (1) event bubbling= 
// the process of calling the inner event 1st and then the outer event is called E.B .
// by default all the event handler perform event bubbling .

//~ (2) event capturing = 
// the process of calling the outer event 1st and then the inner event is called E.C .
// event capturing can b perporm by using add event listener where we've to pass true as a last argument in the add event listener.