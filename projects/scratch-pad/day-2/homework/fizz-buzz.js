// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE // 
    //create for loop
    for (var i = 1; i < 101; i++) {
        //write an if statment 
        if (i % 3 === 0 && i % 5 === 0) {
         //print a message if true
         console.log("FizzBuzz"); 
        }
        //write an else if statement
        else if (i % 3 === 0 ) {
        //print a message if true
            console.log("Fizz"); 
        }
        //write an else if statement
        else if (i % 5 === 0) {
        //print a message if true
            console.log("Buzz"); 
        }
        //write an else statement
        else {
        //print the number 
            console.log(i); 
        }
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}