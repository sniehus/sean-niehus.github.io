/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */



//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare an object
var animal = {}; 
//add a key of species and a value
animal.species = "tiger";
//add another key using bracket notation
animal["name"] = "Stripes"; 
//add a key that is an empty array
animal.noises = [];
//log animal to the console
console.log(animal); 



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an array
var noises = [];
//add a value
noises[noises.length] = "roar";
//push another value
noises.push("growl"); 
//add another value
noises.unshift("yawn"); 
//add one more
noises[noises.length]= "hiss"; 
//print to the console
console.log(noises.length); 
console.log(noises[noises.length -1]); 
console.log(noises); 

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//add a key of noises
animal.noises = noises; 
//push another value into array
animal.noises.push("slurp"); 
//pring the object
console.log(animal); 

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */1.// hasOwnProperty method., iterate over keys
   2. //by index Number, by .length,

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//add an array named animals
animals = [];
//push my animal into array 
animals.push(animal); 
//pring animals to the console
console.log(animals); 
//create a new property
var duck = {species: "duck", name: "Jerome", noises: ["quack", "honk", "sneeze", "woosh"]}; 
//add another property
animals.push(duck);
//print to the console
console.log(animals);
//create a variable for another animal
var lion = {species: "lion", name: "Steve", noises: ["roar", "snarl"]}; 
//push lion into array
animals.push(lion);
//create a variable for a new animal 
var penquin = {species: "penquin", name: "Bob", noises: ["penquin noises", "squeak"]};
//push into array
animals.push(penquin); 
//print to the console
console.log(animals); 
//print to the console
console.log(animals.length); 




// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1.array
//2.being that it is a list, an array would be best
  //declare a variable
  var friends = [];
  //write a function
  function getRandom() {
  return Math.floor(Math.random() * (animals.length -1));

  

  

 

 
 
 
   
//////////////////////////////////////////////////////////////////////
  
}
//push result of function into friends array
friends.push(animals[getRandom()].name);
//log friends to the console
console.log(friends);
duck["friends"] = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}