/**
 * 
 * 0: OPERATORS--operators manipulate on our data in various way. Operators are classified by how many operands
 * they require and how they change values.  
 *  Assignment, Arithmetic, Comparison, Logical, Unary(!,typeOf, -), Ternary(a ? b: c)
 * 
 */ 

// 1: Assignment Operator//
// the assignment (=) operator gives a variable a value 
var z = 3
var obj = {};
var array = [];
//
// 2. Arithmetic // mathmatical operations that change the values of numbers
//Addition
var a = z += 3; 
//Subtraction 
var b = z -= 5; 
//Multiplication
var c = z *= 10; 
//Division
var d = z /= 3; 
// Remainder
var e = z % 3; 
// Expontial
var f = z ** 2; 
// Increment 
var g = z++
// Decrement
var h = z--


//3. Comparison 
var x = 10; 
var y = 20; 
//loosely equal
if (x == y);
//strictly equal
if (x === y); 
//bang operator (!) "not" -- flips logic
if (x != y);// loosely not equal
if (x !== y);// strictly not equal
// greater than
if (x > y); 
// less than
if (x < y);
// greater than or equal
if (x >= y);
// less than or equal
if (x <= y); 
// ternary - a condition followed by a question mark and ratio (a:b) a returns if true, else b
var number  = 10;
number > 1 ? true:false// returns true

//4. Logical
// && checks and returns only if conditions are both true
if (5 > 4  && 10 > 16); // returns false
// || checks if either consdition is true
if (5 > 4  && 10 > 16); // returns true


//5. typeof - returns the data type of a value
typeof 10; //returns number
typeof "text";// returns string
typeof true; // return boolean




