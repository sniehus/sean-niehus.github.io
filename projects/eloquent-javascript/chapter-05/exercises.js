// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  //create an output array
  let result = array.reduce(function(previous, current){
    return previous.concat(current)
  }, [])
return result;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
Write a higher-order function loop that provides something like a for loop statement.
 It takes a value, a test function, an update function, and a body function.
  Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
  Then it calls the body function, 
giving it the current value. 
Finally, it calls the update function to create a new value and starts from the beginning.
*/
function loop(start, test, update, body){
  for(let value = start; i = test(value); value = update(value)){
    body(value); 
  }
 
  
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
////
function every(array) {
  //iterate through the array
  for (var i = 0; i < array.length; i++){
    if (array[i] >= 10){
      return false
    }
  } 
return true; 

  }

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//will go over in class
function dominantDirection(str) {//"Hello!"
  //create variable to point to string
  let newStr = str; 
  //create arrays to store ltr/rtl results
  let ltr = [];
  let rtl = []; 
  //iterate through string copy
  for (var i = 0; i < str.length; i++){
    let scriptName = characterScript(newStr.charCodeAt(i));
    // if scriptName is NOT null
    if (scriptName !== null){
      scriptName.direction === "ltr" ? ltr.push(scriptName.name): rtl.push(scriptName.name); 
    }
    
  }
    if (ltr.length > rtl.length){
      return "ltr"; 
    }else {
}   
        return "rtl"; 
}; 

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
