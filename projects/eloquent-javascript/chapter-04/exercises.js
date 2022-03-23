////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, scale = 1) {
  let results = [];
  if ((x === y) || ((x < y) && (scale < 0))){
    return results;
  }
  if (x < y){
  for(var i = x; i <= y; i += scale){
    results.push(i);
  }
  
  }
  return results;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  if (array === []){
    return 0;
  }
  //iterate through the numbers from x to y and return 
  let result = 0;
  for (var i = 0; i < array.length; i++){
    //add current value to result;
    result = result + array[i];

  }
return result;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //create an output array
  let reverse = [];
  //iterate through array
  for (var i = array.length - 1; i >= 0; i--){
    //push i into output array
    reverse.push(array[i]);
  }
return reverse;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  if (array[0] === undefined){
    return array;
  }

  let halfLength = Math.floor(array.length/2);
  //iterate over half of array
  for (var i = 0; i <= halfLength - 1; i++){
    let mirror = array[i];
    array[i] = array[array.length - (i + 1)];
    array[array.length - (i + 1)] = mirror;
  }
  return array;
}
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
 //create a variable called rest and give it a value of null
 let rest = null; 
 //iterate through array in reverse
 for(var i = array.length - 1; i >= 0; i--){
   //re-assign rest to a vlaue property equal to array[i] and a rest property
   //equal to the current value of rest
   rest = {value: array[i], rest}; 
 }
 return rest; 
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function listToArray(obj, output=[]) {
  //base
  if (obj.rest === null){
  output.push(obj.value); 
  return output; 
  }

  ///recursion
  output.push(obj["value"])
  return listToArray(obj.rest, output); 

}



////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Then add a helper function prepend, which takes an element and a list and creates 
//a new list that adds the element to the front of the input list,
function prepend(value, rest) {
  let output = {
    value: value,
    rest: rest
  }
  
  return output;
 
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  //
  ; 
  if (index === 0){
    return list.value; 
    
  }
  //recursion
  else{
    return nth(list, index - 1);
  }

    
  };
  
  



////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  
  //determine if x AND y are NOT OBJECTS
  if (typeof x !== "object" && typeof y !== "object" ){
    return x === y;
  }
  if (typeof x !== "object" || typeof y !== "object"){
    return false;
  }
  //use the object.keys() method to create an array of keys for both values
  let xKeys = Object.keys(x);//["a", "b"]
  let yKeys = Object.keys(y);//["a", "b"]
  //determine if the length of the arrays DONT MATCH
  if (xKeys.length !== yKeys.length) {
    return false; 
  }
  //iterate through xKeys
    /*for (let i = 0; i < xKeys.length; i++){
      if (!yKeys.includes(xKeys[i]) || !deepEqual(xKeys[i], y[xKeys[i]])){
        return false; 
      }
     */
      for (let key of xKeys) {
        if (!yKeys.includes(key) || !deepEqual(x[key], y[key])) 
        return false;
      }   
    
  

  return true; 
  };
  /*
  function deepEqual(x, y) {
  //determine if x AND y are NOT OBJECTS
  if (typeof x !== "object" && typeof y !== "object" ){
    return x === y;
  }
  if (typeof x !== "object" || typeof y !== "object"){
    return false;
  }
  //use the object.keys() method to create an array of keys for both values
  let xKeys = Object.keys(x);//["a", "b"]
  let yKeys = Object.keys(y);//["a", "b"]
  //determine if the length of the arrays DONT MATCH
  if (xKeys.length !== yKeys.lengths) {
    return false; 
  }
  //iterate through xKeys
    for (let i = 0; i < xKeys.length; i++){
      if (!yKeys.includes(xKeys[i]) || !deepEqual(xKeys[i], y[xKeys[i]])){
        
      }
    }
  return true; 
  };
*/
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
