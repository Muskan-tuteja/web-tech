//?
// let input = document.querySelector("input")
// console.log(input)

//? getting the attribute
// console.log(input.type)
// console.log(input.value)
// console.log(input.placeholder)

//? updating the attributes
// console.log(input.type)
// input.type="password"
// input.placeholder="Enter the password"

//? adding new attributes
// input.maxLength=10

//? methods
//~getAttribute: is a method which is used for getting the values of the atribute from the targetted elements.
// console.log(input.getAttribute("type"))

//~setAttributes: is a method which is used for setting the attributes to the targetted elements.
// input.setAttribute=("minlength",10)
// console.log(input)

// let box = document.querySelector(".container")
// console.log(box)
// console.log(box.innerHTML)
// console.log(box.innerText)
// console.log(box.textContent)

//~innerHtml : it gives the content as well as html tags present inside the targetted element.

//~innerText: it gives content present inside the targetted element.
//~textContent: it gives us the content as well as extra spaces, as it is written in the html.


//? css used 
let parar = document.querySelector("p")
console.log(parar)

//inline css used
// parar.style.color="red"
// parar.style.background="black"
// parar.style.fontFamily="Algerian"
// parar.style.fontSize="50px"

//~Adding multiple css properties ===> inline css
parar.style.cssText= `color:"red";background:"black";`



