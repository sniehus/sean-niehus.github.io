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
var femaleCount; //**Input**: `Array`**Output**: `Number` **Constraints**: use `reduce`

var oldestCustomer = function(array) {//Find the oldest's name/input: array/output: string
    var oldest = _.each function(customers){
        if (customers.age > age[0]) {
            age[0] === customers.age;
        }
    })
    return oldest;
};
/**
 * function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}
 */

var youngestCustomer;//same as oldest

var averageBalance = function(array)//i: array /o: number
/**
 * function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204
 *  
 */
//**Objective**: Find how many customer's names begin with a given letter
//input: array & letter/o: number
var friendFirstLetterCount;

var friendsCount;//Find the customers' names that have a given customer's name in their friends list
//input: array and name/output: array
var topThreeTags;//**Objective**: Find the three most common tags among all customers' associated tags
//nput: array /output: array /flatten, sort method
var genderCount;//create a summary of genders in an object, given the input array/use reduce

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
