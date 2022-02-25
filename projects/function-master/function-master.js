//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function objectValues(object) {
    //create an array to collect values
    var arr = []
    //iterate through key in object
    for (var key in object){
        //push values into array
        console.log(arr.push(object[key]));
    }
            //return array
            return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//create a string to collect keys
var array = [];
//iterate through the object
for (var key in object){
    //add keys to the string;
    array.push(key); 
}
    return array.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create a string
    var array = [];

    //iterate through object 
    for (var key in object) {
        //put values into string{
        if (typeof (object[key]) === "string"){
        
            array.push(object[key]); 
            }
        }
             return array.join(" ");

    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array";
    }
    else {
        return "object"; 
    }

    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return with first letter capitalized
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  //make string an array  
  var arr = string.split(" ");
  //iterate over array, capitalize the first letter of each
  for (var i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }
      //return the converted array as a string
      return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //itterate through keys
    for (var key in object);  {
        return "Welcome" + " " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!"; 

    }
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
   //itterate through keys
   for (var key in object);  {
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1); 

}
}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   
    //create a string to collect noises
    var result;
    var arr = [];
    //loop through object
    for (var key in object){
        //determine if noises is a key
        if (object.hasOwnProperty("noises")){
            //determine if array has values
            if(object.noises === []){
                //return
                result = "there are no noises"
            }
            //write an else condition
             else {
                //iterate through array
                for (var i = 0; i <= object.noises.length -1; i++){
                    //push i into array;
                    arr.push(object.noises[i]);
                } 
            //return array as a string
            result = arr.join(" ");   
            }
        }
    
        //write an else statement
        else {
        result = "there are no noises";
        }       
        }     
        return result;  
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //iterate through string
    for (var i = 0; i < string.length; i++){
    //deterine if string includes word
    if  (string[i] === word){
        //return true
        results = "true"
    }  else {
    //return false
    results = "false";
}       
}   return results; 
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name); 
    return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //iterate through objecet
    for (i = 0; i <= object.friends[object.friends.length - 1]; i++) {
        //determine if name is a friend
        if (object.friends[i] === name) {
            //return "true"
        }
        //else return false
        return "false";
    }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //iterate through object
    for (var key in object){
        //add or change property
        return object.key = value; 
        }
    }
    



//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //declare an array to push copy into
    var copyArr = [];
        //iterate through array
        for (var i = 0; i < array.length; i ++) {
            //determine if current element already exist in array
            if (copyArr.includes(array[i]) === false){
                //push element into copy array
                copyArr.push(array[i]);
            }
        } 
            return copyArr;
        }
   


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}