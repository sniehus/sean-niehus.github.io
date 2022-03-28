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


var femaleCount = function(array) {
  var females = customers.reduce(function(count, current){
    console.log(count);
    if (current.hasOwnProperty("gender") && current.gender === "female"){
      count = count + 1; 
     }
     return count;
     
   }, 0)
    return females; 
  }

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
  var results = [];
  var removed = [];
  var total = 0;
   //iterate throuh input array
    for (let i = 0; i < array.length; i++){
      //look for customers with account key
      if(array[i]["balance"]){
        results.push(array[i].balance.slice(1));
        
      }
    }
      removed = results.map(function(result){
        return result.replace(',', '');
      });
      
      for(let i = 0; i < removed.length; i++){
          total += parseFloat(removed[i]);
          
      };  
  
      
  return total / removed.length; 
}; 

    
var firstLetterCount = function(array, letter){
  var results = [];
  var count = [];
for (let i = 0; i < array.length; i++){
    //look for customers with name key
    if(array[i]["name"]){
      results.push(array[i].name);
    }
}
  
  results.map(function(result){
    if (result[0].toUpperCase() === letter.toUpperCase()){
      count.push(result);
    }; 
    
  });
 
return count.length; 
};

var friendFirstLetterCount = function(customers, customer, letter){
  var friendsList = [];
  for (let i = 0; i < customers.length; i++){
    if (customers[i].name === customer){
       friendsList = customers[i].friends;   
      }
    var count = 0;
   for (let i = 0; i < friendsList.length; i++){
     if (friendsList[i].name[0].toUpperCase() === letter.toUpperCase()){
       count += 1; 
     }
    
   }
    
  }
  return count; 
};


var friendsCount = function(array, target){
  var array = [];
  var results = {}; 
  //iterate throuh input array
  var friendsList = customers.map(function(customer){
    results = {"name": customer["name"], "friends": customer["friends"]};
    array.push(results);
    });
return array;
  var matches = [];
  for (let i = 0; i < array.length; i++){
    for (var key in array[i]){
      for (let j = 0; j < array[i][friends][j].length; j++){
        for (var key in array[i][friends][j]){
          if (array[i][friends][j][name] === target){
            matches.push(array[i][name]); 
          }
          
        }
      }
    }
  }
  
};



var topThreeTags = function(array){
  var results = [];
    //iterate throuh input array
    for (let i = 0; i < array.length; i++){
      //look for customers with account key
      if(array[i]["tags"]){
        results.push(array[i].tags);
      }
    };
   var flattened = results.flat();
   var sorted = flattened.sort();
  function getMax(sorted, n) {
    var tmp = {}, tops = [];
  
    // create an object to count number of occurrances
    sorted.forEach(function(item) {
        tmp[item] = tmp[item] ? tmp[item]+1 : 1;
    });
  
    // create an array of the sorted object properties
    tops = Object.keys(tmp).sort(function(a, b) { return tmp[a] - tmp[b] });
  
    // Return last n elements in reverse order
    return tops.slice(-(n));
};
return getMax(sorted, 3);
}; 

  
    



 

var genderCount = function(array){
var genders = _.reduce(array, function(countObj, customer){
  //determine if the current customer gender exists as 
  //a key in the obj, if true, add the current name to the property's array
  if (countObj.hasOwnProperty(customer.gender)){
    countObj[customer.gender] += 1;
  }
  //else it doesn't exist
  else {
  //create the key, initialize as an empty object and add the current name 
    countObj[customer.gender] = 1;
    
  }
return countObj; 
  
}, {});
return genders; 
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
