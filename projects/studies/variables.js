/**
 * VARIABLES
 * 0: To hold things in memory during the life-cycle of a program, we use variables. Variables
 * are named identifiers that can point to values of a particular type, like a number, string,
 * boolean, array, object or another data-type. Variables are called so because once created, we 
 * can CHANGE the value and the (type of value) to which they point
 *
 * 
 */

// 1: declaration and assignment and re-assignment//
// At the declaration phase, the variable myName is undefined because we have not initialized it to anything
var myName;
let myJob; 
console.log(myName);//prints >> undefined until given a value
// when using the const keyword, a value must be given when variable is declared
const myAge = 46;//this method could be used for variables declared with var or let as well
console.log(myAge);//prints >> 46
// Initialization//
// When you assign a value to an undeclared variable
myName = "sean"; 
console.log(myName);//prints >> sean
// re-assignment//
// changing or updating the value of a previously assigned variable if variable was declared with var or let
myName = "pickles"; 
console.log(myName);//prints >> pickles
//variables created with the const keyword can not be reassinged
myAge = 47; 
console.log(myAge);//throws an error message that value can not be re-assinged

// 2: var,let,const//
// variables declared with var keyword are globally or function scoped.
var varValue = 5
function doSomething(){
    varNewValue = varValue + 1;
    return varNewValue; 
}
doSomething(); 
console.log(varValue); //prints >> 5
console.log(varNewValue); //prints >> 6
// variables declared with const or lets are block scoped
function greet(){
    let hello = "sup?"; 
    const goodbye = "later"; 
}
console.log(hello)//throws reference error when called out side of scope
console.log(goodbye)//throws reference error when called out side of scope

// 3: hoisting
// interpreter pulls variable and function declarations to top of call before the function executes.
// only the name of the variable is hoisted not the name
// variables declared with let and const keyword are not hoisted
console.log(firstName);//>>prints undefined as name of variable was hoisted but not the value
var firstName = "bob"; 
console.log(lastName);//>>prints "ReferenceError: cannot access "lastName" before initialization
const lastName = "jones"
console.log(fullName);//>>prints "ReferenceError: Cannot access "fullName"befor intialization
let fullName = "bob jones"; 
// function expression only hoist the name of the function
console.log(x());//prints >> x is not a function
console.log(x);//prints >> undefined; 
console.log(y()); //prints >> "hoists entire function"
var x = function(){
    console.log("hoists function name only"); 
}
function y(){
    console.log("hoists entire function")
}