// console.log(email,password)

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector(".email").value.trim()
  let password = document.querySelector(".password").value.trim()
  let users = JSON.parse(localStorage.getItem("users")) || [];

   let userExits = users.some((user)=>{
    return user.email === email && user.password === password
  })
  if(userExits){
    alert("Logeed Successfull")
    window.location.href= "./Home.html"
    return
  }else{
    alert("Username and password are not matched")
    return;
  }
});
