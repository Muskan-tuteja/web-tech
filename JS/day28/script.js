//!  
// let data = fetch("https://jsonplaceholder.typicode.com/todos")
// console.log(data)

// data.then((res)=>{
//   // console.log(res)
//   return res.json()
// })
// .then((actualData)=>{
//   console.log(actualData)
// })
// .catch((err)=>{
//   console.log(err)
// })

//~ async or await
async function apiData() {
let data = await fetch("https://jsonplaceholder.typicode.com/todos")
let actualData = await data.json()
console.log(actualData)
  
}
apiData()
   

// await= promise ka wait kryga, sare promise ko resolve krne k liye
//async  = we use async keyword with a function to return a functn in an asynchronus functn. the async functn returns a promise
//await keyword = passes to the async function waits ,until the prommise return a result(rsolve/rejected). the await keyword i s used to wait for a promise to settle down(resolve/rejected.)
// it can b only used wthin an async function)


//!CALL BACK HELL
//IS A situation in js where multiple nested callback creates a complex, deeply intended code. 
// it is also known as oyramid of doom. 
// this structure made the code difficult to read and maintain resulting in poor code quality.



async function apiData(){
  try{
        let data = await fetch("https://jsonplaceholder.typcode.com/todos");
        let actualData = await data.json();
    console.log(actualData);
  }catch(error){
    console.log(error)
  }
}
apiData()




