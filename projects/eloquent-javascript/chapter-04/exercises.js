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

function arrayToList(...array) {
  //create an output object; 
  let list = {};
   //iterate through array
   for(var i = 0; i < array.length; i++){
     let key = i + 1;
     list[key] = array[i];
   }
  return list; 
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

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
