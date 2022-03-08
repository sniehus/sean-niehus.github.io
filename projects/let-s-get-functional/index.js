// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *   npm start --prefix ./sean-niehus.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer){
        return customer.gender === "male"; 

    }); //==>[{male object, male object, male object}]
return males.length;
};
var femaleCount = function(array){
    var females =  _.filter(customer, function(customer){
        return customer.gender === "female"
    });  
         _.reduce(customer.gender)(function (previousValue, currentValue){
        return previousValue + currentValue;
    }, 0); 
    return females; 
};
    
   
var oldestCustomer = function(array){
    //create an output array
    var results = [{age : 0}];
    //use the .each function
    var oldest = _.filter(array, function(customer){
        //determine if current index has age greater than the previous
        if (customer.hasOwnProperty(age) && (customer.age > array[array.length - 1].age)) {
            //if so, push into array
            results.push(customer); 
        }
    });
    //return the last objects age value
    oldest = results[results.length - 1];
    return (oldest["name"]); 
};
    

var youngestCustomer = function(array){
    //create an output array
    var results = [{age : 200}];
    //use the .each function
    var youngest = _.each(array, function(array){
        //determine if current index has age greater than the previous
        if (array.age < array[array.length - 1](age)) {
            //if so, push into array
            results.push(object); 
        }
    });
    //return the last objects age value
    youngest = results[results.length - 1]; 
    return youngest.name;
}
var averageBalance = function(array){
    var balance = _.reduce(array, function(sum, customer){
        return sum + customer.balance; 
        }, 0);
    return balance / array.length;
}


var firstLetterCount = function(){

};

var friendFirstLetterCount = function(){

};


var friendsCount = function(){

};//Find the customers' names that have a given customer's name in their friends list
//input: array and name/output: array
var topThreeTags = function(){

};//**Objective**: Find the three most common tags among all customers' associated tags

var genderCount = function(){

};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
