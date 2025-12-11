//! conditional Statements : sometimes we might hava to execute a block of code based off some condition.
//!Decision statement
 //?1.if:the if statement in js looks like this.the if statement evaluates the conditions inside the()
//  if(condition){
//   //execute this code
//  }
//?2.if-else: the if statement can have an optional alse clause. the sysntax looks something we this
    // if(condition){
    //   //block of code if condition true
    // }
    // else{
    //   // block of code if condition false
    // }

//?3.else-if
//?4.switch
//?5.ternary:shorter way of writing the if-alse statement.
        //~ if
                // let data = 100
                // if(data == 100){
                //     console.log("100")
                // }else if(data == 200){
                //     console.lof("200")
                // }else if(data == 300){
                //     console.lof("300")
                // }else{
                //     console.log("else block")
                // }
        //~nested if-else
                // let age = 15;
                // if(age>=18){
                //     console.log("You can watch any movie")
                // }else{
                //     if(age>=13){
                //         console.log("watch pogo")
                //     }
                //     else{
                //         console.log("You are too young to watch movies")
                //     }
                // }

//! Truthy and falsy value

            // let data = ""
            // if(data){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }
                
            // let data1 = 0
            // if(data1){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }

            // let data2 =false
            // if(data2){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }

            // let data3 = 0n
            // if(data3){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }

            // let data4 = -0
            // if(data4){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }

            // let data5
            // if(data5){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }

            // let data6 = null
            // if(data6){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }

            // let data7 = NaN
            // if(data7){
            //     console.log("truthy")
            // }else{
            //     console.log("falsy")
            // }

    //~ switch

            // let day = "Wednesday"
            // switch (day){
            //     case "Monday" :
            //         console.log("Pizza")
            //         break;

            //     case "Tuesday" :
            //         console.log("Fasting")
            //         break;

            //     case "Wednesday" :
            //         console.log("Kadi-chawal")
            //         break;

            //     case "Thursday" :
            //         console.log("Pulav")
            //         break;

            //     case "Friday" :
            //         console.log("Burger")
            //         break;

            //     case "Satuarday" :
            //         console.log("Maggie")
            //         break;

            //     case "Sunday" :
            //         console.log("Pasta")
            //         break;
            //     default:
            //     console.log("Rest")
            //     break
            // }



        //~ ternary operator

            //     let data = 100;
            //    (data>100 ? console.log("It is greater") : console.log("less"))
