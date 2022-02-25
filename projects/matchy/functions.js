/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a fuction
  function search(animals, animal) {
    console.log("animal is:" + animal);
    //iterate through array
    for (var i = 0; i <= animals.length - 1; i++){
      //write a conditional
      if (animals[i].name === animal) {
        console.log("hit this condition")
        //return animal object
        return animals[i]; 
    }
   
    

  } //return null
  return null;
} 

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function

 function replace(animals, animal, replacement){
   
//iterate through array
for (var i = 0; i <= animals.length -1; i++){
  //write a conditional
  if (animals[i].name === animal) {
    //return replacement replaces current value
    animals.splice(i, 1, replacement);
  }
  
}


 }
  

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function
function remove(animals, animal) {
//interate through array
for (var i = 0; i <= animals.length -1; i++){
  //write a conditional
  if (animals[i].name === animal){
    return animals.splice(i, 1); 
  }
  else {
    return animals 
    
  }
}
}; 

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function
function add(animals, animal){ 
  //initialize a boolean
  var nameMatches = false; 
//iterate through input array
for (var i = 0; i <= animals.length - 1; i++){
//determine if current animal object has
// a name property that matches input animal's name property
  if (animals[i].name === animal.name){
    nameMatches = true; 
    } 
  }
    //determine if there is no match and the input animal
    //object has a name property with a length > 0 and
    //the species propety has a length > 0
    if (nameMatches === false && animal.name.length > 0 && animal.species.length > 0) {
      //push into array
      animals.push(animal); 
    }
}
 

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
