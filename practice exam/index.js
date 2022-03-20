// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
    //declare variable and concat message
    var message = greeting + " " + location + " " + time; 
    //log to console
    console.log(message); 
}

// 2.
var contestants = function(array){
    return array.length; 
};



// 3. 
    var filterSpecies = dogs.filter(function(entrants){
        return entrants.species === "dog"; 
    }); 
/*var filterSpecies = function(array){

    var filterSpecies = array.filter(function (entrants){
    let results = [];
    array.push(entrants.species === "dog"); 
    });
    return results; 
}
*/


// 4. 
var dogContestants = [...filterSpecies]; 

/*
var dogContestants = function(array){
    var copyArray = array.forEach(function(...entrants){
    })
    return array.splice();  
}; 
    

*/



// 5. 

var dogsWithClasses = dogContestants.map(function(contestant){

        if (contestant.weight < 11){
            contestant.class = "red"; 
        }
        else if (contestant.weight < 21){
            contestant.class = "yellow"
        }
        else {
            contestant.class = "green"; 
        }

return contestant; 
    }); 
/**
 * Using the native map method, add a key of `class` with the value:
        - "red" if the dog's weight is between 0 and 10.
        - "yellow" if the dog's weight is between 11 and 20.
        - "green" if the dog's weight is 21 or over.
 * 
 * 
 */



// 6.
var firstInClass = function(array, obj = {}){
    //base
    if (array.length === 0){
        return obj; 
    }

    
    
    //recursion
    array[0]
    Object.assign(obj, array[0]); 
    return firstInClass(array.slice(1), obj); 
}; 
 
    


// 7.
var votes= dogs.reduce(function(count, current){
    count += current.votes; 

    return count; 

}, 0); 
    