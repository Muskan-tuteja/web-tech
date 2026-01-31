//hw = registratn form (onsubmit=use krke)
// Create a form via html css using form tag  use input tag . Jb submit  button p click kroge toto a fn ko call kroge onsubmit.
//Fn kya kryga = apne input tag se sare data ko collect kryga or local storage m push kr dega. 


// setTimeout(() => {
    
// }, timeout);//1st argument=callback fn , 2nd=time in millisec.    settimeout=ek fn h

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        console.log("asdfgh")
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
//called as call back hell 
//shape=pyramid of doom
//islko execute hone m 6sec lgynge (jaise y to humne likh rkha h agar na likhe to?? or multiple times krde to ho skta h wo task kbhi execute hhih na ho.)
//isse structure khrb hota h .





//Storage = Jisme data store kr rhe ho  like = mongodb,oracle . if we talk about front-end ,front-end m hum data dalte h save krte h,jb b need pdhti h to use use  krte h.jo hmare browser h usme b storages +snt h
//web storages 3 types ki hoti h = local,session, extenstion
//! web storages = are the storages that r provided by the browser,
//  mainly some imp.web storages are:- local storage , session stroage, cache , cookies .
// Local storage = persist , after closing data 
//session storage = data nhi milta(data delete ho jata h) , after closing the browser


//~ (1) Local storage = the s. that persist the data even after closing the browser  is known as =LS
//the size of the local storage is generally 2/8mb(depends upon thebrowser)
//kuch b set krna h to use setItem , pass (key , value) pair p
// e.g = irctc ,  banking app , govt.form.  (particular limit hoti h usko violent krte h to sara data dlt ho jata h dubara login krta h etc)  etc


//? setItem(key,value) : It is used for adding the data to the local storage.
// localStorage.setItem("id",1);
// localStorage.setItem("name","ABC");
// localStorage.setItem("id",10); //ek hi chiz dubara add krte h to wo chiz update ho jygi ab id m 1 nhi 10 store hogi

//? getItem(key)    :   It is used for getting the data from the local storage
//Agar get krna h to
// console.log(localStorage.getItem("id"))

//? removeItem(key) : It is used for remove the single data to the local storage.
//kuch b single property remove krna h to use removeItem , pass (key) only
// localStorage.removeItem("id");

//? clear() : It delete all the data from the local storage.
//kuch b sare property delete krna h to use clear() , pura local storage khali ho jyga. 
// localStorage.clear();


//local storage m kuch b  dalte h to dusre browser m b vhi ayga?????

//~(2) Sesssion strogate = The storage that keeps the data for a certain period of time called SS.
//the size of session storage is generally 2/8mb(depends upon thebrowser)

//agr zyda storage chiy to use kro myssql etc 

//? setItem(key,value) : It is used for adding the data to the local storage.
// sessionStorage.setItem("ID",1234);
// sessionStorage.setItem("Ename","abd@gmail.com");
// sessionStorage.setItem("id",10);
// inke sath sath live server ka b ayga true (value m) use ignore krna h qki it represent that our live server runs(or currently works or even dlt b kroge to wo dubara aa jyga).

//? getItem()
// console.log(sessionStorage.getItem("ID"))

//? removeItem(key) : It is used for remove the single data to the local storage.
// ek bar remove hone k baad add nhi hoga untill we use setItem .
// sessionStorage.removeItem("id");

//? clear() : It delete all the data from the local storage.
// sessionStorage.clear();



//! Date Object
// agr js m date h chiy to we use this , date is an bbjecct
// let d1=new Date();
// console.log(d1)      // current date aa jygi

// let d2=new Date(0);  
// console.log(d2)     //EPOCH TIME : JAVASCRIPT BDY    //if we add any argument vse to 199 h pr pta nhi 1970 q add h

// let d = new Date();
// console.log(d2-d1)       //ab tk ka tym aa jyga in millisecond ki kitna time ho gya js ko bne hue

//customized date aa jygi 
// let d3=new Date("2026-03-22");
// console.log(d3);                     



// console.log(d1.getFullYear());       //only current yr aa jygi
// console.log(d2.getMonth());          // current month aa jyga in index k (like = jan=0 , feb=1 etc)
// console.log(d1.getHours())
// console.log(d1.getMinutes());
// console.log(d1.getSeconds());
// console.log(d1.getMilliseconds());


//customize krne k liye(agr manually sb kuch dalna h to???) :-
//ek syntax hota h sir b confuse the isme , so we've to google it !


// let d4=new Date();
// console.log(d4)         //string

// console.log(typeof d4) //object
// console.log(date)       //fn
// console.log(typeof d4())//string


// console.log(typeof Array) // fn
// console.log(typeof Object) //fn
// console.log(typeof arr) //undefined(typeof undefined = undefined)
// console.log(typeof array) //obj

//! Math Object

// console.log(typeof Math())   //error = coz math is not a fn 
// console.log(typeof Math)     //obj   (isme bhut sare method store h)

//PI = pie 3.14
// console.log(Math.PI);

//E = eular's constant
// console.log(Math.E);

//sqrt = sq.root
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(121));

//pow= power 
// console.log(Math.pow(2, 3));

//cbrt = cube root
// console.log(Math.cbrt(27));

//random = har tym koi b decimal m random value dega
// console.log(Math.random());

//floor = nearest lowest value dega
// console.log(Math.floor(4.4))     //4
// console.log(Math.floor(4.5))     //4
// console.log(Math.floor(4.6))     //4
// console.log(Math.floor(4.9))     //4

//ceil = nearest highest value dega
// console.log(Math.ceil(4.4))      //5
// console.log(Math.ceil(4.5))      //5
// console.log(Math.ceil(4.6))      //5
// console.log(Math.ceil(4.9))      //5

//round = it's like round off . agr .5 se choti h value to nearest choti value dega  .5 se bdi value h to nearest bdi value dega
// console.log(Math.round(4.2))    //4
// console.log(Math.round(4.4)) //4
// console.log(Math.round(4.5)) //5
// console.log(Math.round(4.6)) //5
// console.log(Math.round(4.9)) //5

//trunc = it remove all the values after decimal
// console.log(Math.trunc(4.423456789))     //4

//abs = it will covert into +ve value
// console.log(Math.abs(-23))           //23




// Math.random*1000
// console.log(Math.floor(100+Math.random*900));



let form = document.querySelector("form")

    addEventListener("" , {













    })
localStorage.setItem("Id",1);
localStorage.setItem("Ename","ABC");