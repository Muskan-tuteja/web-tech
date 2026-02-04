let email = document.querySelector(".email")
let password = document.querySelector(".password")

// console.log(email,password)

let form = document.querySelector("form")

form.addEventListener("submit",()=>{
  let users = JSON.parse(localStorage.getItem("users")) || []
})