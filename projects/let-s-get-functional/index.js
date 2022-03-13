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
    var females =  _.filter(array, function(count, customer){
        customer.gender === "female"
        count += 1; 
    }, 0);  
      return females; 
};
 var oldestCustomer = function(array) {
      var oldest = array.reduce(function (prev, curr) {
        return prev.age > curr.age ? prev : curr
      })
        return oldest.name
 };
   
 var youngestCustomer = function(array) {
      var youngest = array.reduce(function (prev, curr) {
        return prev.age > curr.age ? curr : prev
      })
        return youngest.name
 };

    
    


   

var averageBalance = function(array){
    var balance = _.reduce(array, function(sum, customer){
        return sum + customer.balance; 
        }, 0);
    return (balance / array.length);
}


var firstLetterCount = function(array){
    //create an output array
    var matches = _.filter(array, function(customer, letter){
    //set condition for value to be return true
    return customer.name.charAt(0) === letter
    });
    return matches.length;
};

var friendFirstLetterCount = function(){

};


var friendsCount = function(){

};//Find the customers' names that have a given customer's name in their friends list
//input: array and name/output: array
var topThreeTags = function(){

};//**Objective**: Find the three most common tags among all customers' associated tags

var genderCount = function(array){
    var genders = _.reduce(object, function(obj, customer){
  //determine if the current customer gender exists as 
  //a key in the obj, if true, add the current name to the property's array
  if (obj[customer.gender]){
    obj[customer.gender] += 1;
  }
  //else it doesn't exist
  else {
  //create the key, initialize as an empty object and add the current name 
    obj[customer.gender] = 1;
    
  }
  return genders; 
  
}, {});

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
