// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //created a for loop that prints contents of an array to the console
  for (var i = 0; i < array.length; i++) {
     console.log(array[i]);  
  } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //iterate the values and reverse the order
   for (var i = array.length - 1; i > -1; i--) {
   //log to the console 
   console.log(array[i]); 
  } 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create an array to accept keys of an object
  var arr = []; 
  //return the keys of an object
  for (var keys in object) {
  //push object keys into array;
    arr.push(keys);
  }
    //return the array
    return arr; 
  
  

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create a for loop 
  for (var key in object) {
  //print the keys to the console
  console.log(key); 
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //declare an array literal
  var arr = [];
 //create a for loop to access values of the object
  for (var key in object) {
  //push key into array
  arr.push(object[key]); 
  }
  //return the array
  return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //create a for loop
  for (var key in object) {
  //print values
    console.log(object[key]); 
  }; 
  

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //declare an array
  var arr = [];
    for (var key in object) {
    //push the keys into the array
    arr.push(key); 
    }
      //return the length of the array
      return arr.length; 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //declare an array
  var arr = [];
    //interate through keys 
    for (var key in object) {
    //push the keys into the array
    arr.push(object[key]); 
    }
    //iterate through array and print values in reverse
    for (var i = arr.length - 1; i >= 0; i--) {
       console.log(arr[i]);
    }
    
     
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
