/**
 * 
 * 0.STRING MANIPULATIONS - strings are have an ordered index where the first character is 0 and have length properties thus
 * have many methods similar to arrays, allowing them to be iterated through and altered.
 * 
 * 
 **/
 //  1. Manipulating with operators// strings can be built or added to y using the plus sign.
 var string = ""//string is initialized as an empty string
 string =+ "The string can be built like this"; 
 // declared values can also be added to a string
 var firstName = "Krusty";
 var job = "clown"; 
 var hometown = "Springfield"; 
 console.log(firstName + " " + "is a" + " " + job + " " + "who lives in" + hometown); 
 //prints: "Krusty is a clown who lives in Springfield"

// 2. string methods
// putting dot length on the end of a string will return the number of characters in the string
var str = "how long is this string?"
console.log(str.length)//prints>> 24(sum of letters, spaces, and special characters)

//string.slice // remove a part of a string by adding .slice to it and putting 2 number is parenthesis
var stringToSlice = "The first number is where to start slicing the second is where to stop"; 
console.log(stringToSlice.slice(0, 17))//prints >> The first number
console.log(stringToSlice.slice(-10))//prints >> here to stop (a negative number counts from the end)

// string.split // adding .split() to put the value(s) of a string into an array, the contents of the parenthesis tell the array
//how to divide it into elements (" ") >> creates a new element at each space in the string. 
var stringToArray = "one two three four five";
console.log(stringToArray.split(" "));//prints >> var stringToArray = [one, two, three, four, five]
console.log(stringToArray.split()); //>>prints an array with just one element [one two three four five]

