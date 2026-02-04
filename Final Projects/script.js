let formData = document.querySelector("form")
// console.log(formData)

formData.addEventListener("submit",(e)=>{
  e.preventDefault()
  // console.log(formData)


  let username = document.querySelector(".username").value.trim()
  let email = document.querySelector(".email").value.trim()
  let password = document.querySelector(".password").value.trim()
  let confirmpass = document.querySelector(".confirmpass").value.trim()
  let gender = document.querySelector(".gender").value.trim()

  // console.log(username,email,password,confirmpass,gender)

  let users = JSON.parse(localStorage.getItem("users")) || []

  // Checking that the user already exits or not
  let userExits = users.some((user)=>{
    user.email === email && user.password === password
  })
  if(userExits){
    alert("User Aleady Exits")
    return;
  }
  //validation

  if(username === "" || email === "" || password === "" || confirmpass=== "" || gender=== ""){
    alert("Please fill all details")
    return;
  }
  if(password !== confirmpass){
    alert("Password do not matched")
    return;
  }
  //Creating the user
  let newUser={
    username,
    email,
    password,
    confirmpass,
    gender
  }
  //Adding the data to the local storage
  users.push(newUser)
  localStorage.setItem("users", JSON.stringify(users))
  alert("Registration completed")

  // rediercting to the login page
  window.location.href="./Login.html"


})