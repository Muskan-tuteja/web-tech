async function apiFetch() {
  //fetching the data form the api
  let response = await fetch('./app.json')
  let user= await response.json()
  console.log(user)

  //find the main container where we want to put our cards
  let mainDiv = document.getElementById("mainDiv")
  console.log(mainDiv)
// //loop through each user and create a card
  user.forEach(user => {
    console.log(user)
// create a card container
    let card = document.createElement("div")
    card.classList.add("cardDiv")
//put data(Content) inside the card
    card.innerHTML = `<h3> Product No: ${user.id}</h3>
  <img src="${user.images}" alt="${user.title}">
  <button class="viewButton">Add to card</button>`
//add the card to the page
  mainDiv.appendChild(card)
    
  });
  
}
apiFetch()