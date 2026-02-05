async function apiFetch() {
  //fetching the data form the api
  let response = await fetch('./app.json')
  let user= await response.json()
  console.log(user)

  //find the main container where we want to put our cards
  let mainDiv = document.getElementById("#mainDiv")
  console.log(mainDiv)

  user.forEach(user => {
    console.log(user)
    
  });
  
}
apiFetch()