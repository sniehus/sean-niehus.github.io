/**
 * VARIABLES
 * 0: To hold things in memory during the life-cycle of a program, we use variables. Variables
 * are named identifiers that can point to values of a particular type, like a number, string,
 * boolean, array, object or another data-type. Variables are called so because once created, we 
 * can CHANGE the value and the (type of value) to which they point
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our variable.
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

//1. declaration//
//At the declaration phase, the variable myName is undefined because we have not initialized it to anything
var myName;
console.log(myName);//prints >> undefined

//2. initialization//
//When you assign a value to an undeclared variable
myName = "sean"; 
console.log(myName);//prints >> sean

// re-assignment//
// changing or updating the value of a previously assigned varaible
myName = "pickles"; 
console.log(myName);//prints >> pickles


//var,let,const

//hoisting