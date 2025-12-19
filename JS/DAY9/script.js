//! string Method
//~ Pad():Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
// let str1 ='A'
// console.log(str.padStart(5,"xyz"))
// console.log(str.padEnd(10,"xyz"))
// console.log(str.padStart(10))
//~ Repeat():Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
// let str = "relia matchMedi"
// console.log(str.repeat(12))
//~Replace():Replaces first matching text in a string.
// let str = "I am muskan, I am mshi"
// console.log(str.replace("I","My"))
//~replaceAll:Replace all instances of a substring in a string,
// console.log(str.replaceAll("I","My"))
//~ indexof():Returns the position of the first occurrence of a substring.
//~ if the string is not found then it return -1.
let str = "my nhio is nin"
console.log(str.indexOf("is"))
//~includes:Returns true if searchString appears as a substring .and returns false if searchstring not found in the string.
console.log(str.includes("my"))
//~lastindexof():Returns the last occurrence of a substring in the string.
console.log(str.lastIndexOf("nin"))
//~match(): Matches a string with a regular expression, and returns an array containing the results of that search.
//~if the matching string is not found,then it returns null
console.log(str.match("mhio"))
//~search:Finds the first substring match in a regular expression search.if the string is not found ther it return -1 
console.log(str.search("modiii"))
