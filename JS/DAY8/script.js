//! Method of the string: 

// let str="A quick brown fox jumps over the lazy dog"
//~ways of extracting a character from the string:

// let str = "Apletghy"
// console.log(str[2])

// //~ at(): Returns the character at the specified index.
// console.log(str.at(1))
// console.log(str.at(0))

// //~ charAt(): Returns the character at the specified index.
// console.log(str.charAt(0))

// 
// //~ charCodeAt(): Returns the Unicode value of the character at the specified location.
// console.log(str.charCodeAt(0))

//! ways on extracting sequence of character from the string
let str="A quick brown fox jumps over the lazy dog"
//&slice(): Returns a section of a string .
// console.log(str.slice(-2,5))//will bi not the print the single neative value is no print
// console.log(str.slice(4))
// console.log(str.slice(2,7))
// console.log(str.slice(-41,-1))//will bi double neative value is print ths answer.
// //& substring(): Returns the substring at the specified location within a String object.
// //~ if staring index is greter than ending index, then the values swapped.
// //~ negative values are treater as 0.


// console.log(str.substring(8,13))
// console.log(str.substring(13,0))
// console.log(str.substring(-13,8))

//~ toLowercase:Converts all the alphabetic characters in a string to lowercase.
console.log(str.toLowerCase())
//~ uppercase: Converts all the alphabetic characters in a string to uppercase.
console.log(str.toUpperCase())

//~ concat():Returns a string that contains the concatenation of two or more strings.
// let a = "hello"
// let b = "hij"
// let c = "hnh"
// console.log(a.concat(b,c))

let str2="           yhnhuygy    "
console.log(str2)
//~Trimstart:Removes the leading white space and line terminator characters from a string.
console.log(str2.trimStart())
//~Trimsend:Removes the  leading white space from the end of the string
console.log(str2.trimEnd())
//~trim:Removes the extra white spaces from both the ends.
console.log(str2.trim())


