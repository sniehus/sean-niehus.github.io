// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //return true if function is an array
    if (Array.isArray(value) === true) {
        return true;
    }
    else {
        return false;
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //determine if typeof of the input value is "object"
    //AND that the value is not an arrya AND that the value is not an instance of the date object
    if (typeof value === "object" && value !== null && Array.isArray(value) === false && value instanceof Date === false) {
    return true; 
    }
    else {
        //else return false
        return false; 
    }
    // YOUR CODE ABOVE HERE //

}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
  //determine if typeof of the input value is "object"
    //AND that the value is not an arrya AND that the value is not an instance of the date object
    if (Array.isArray(value) === true || typeof value === "object" && value !== null && Array.isArray(value) === false && value instanceof Date === false) {
        return true; 
        }
        else {
            //else return false
            return false; 
        }  
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //determine if the input value is not an object
    if (typeof value !== "object"){
        return typeof value; 
    }
    //else determine if the value is an array
    //else determine if the value is null
    //else determine if value is a instance of Date
    //else it must be an object

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
