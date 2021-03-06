// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product = 1) {
  //if n is a negative number, return null
  if (n < 0){
    return null; 
  }
  //base - return product when n = 1
  if (n > - 1 && n < 2){
    return product; 
  }
  //recursion - multiply current value of n times current value of product
  product *= n; 
  //re-invoke function with n decremented
  return factorial(n - 1, product); 
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
//base - return 0 if array is empty
if (array.length === 0){
  return 0; 
}
//recursion - return first value of array and re-invoke on a sliced copy of array
return array[0] + sum(array.slice(1)); 
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base -- return true the value of n has an absolute value of 2
  if (n === 2 || n === -2){
    return true;
  }
  //return false if the absolute value of n is 1
  else if (n === 1 || n === -1){
    return false
  }
  //recursion - re-invoke with n - 2 as an argument if positive
  else if (n > 0){
    return isEven(n - 2); 
  }
  //else re-invoke with a n + 2 as an argument
    return isEven(n + 2); 
  };


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base - break when n is -1, 0 or 1
  if (n === 1 || n === 0 || n=== -1 ){
    return 0; 
  }
  //recursion - determine if n is positive > decrement
  if (n > 0){
    return (n - 1) + sumBelow(n - 1); 
  }
  //then it is negative > increment
  return (n + 1) + sumBelow(n + 1); 
    };

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  //base - break when count x + 1 = y
  if (x + 1 === y || x === y || x - 1 === y){
  return output;
  }
  //recursion - if x is positive, push x + 1 into output array
  if (x > y){
  output.push(x - 1); 
  //re-invoke function with x incremented by 1
  return range(x - 1, y, output); 
  }
  //else is negative, push x - 1 into output array
  output.push(x + 1);
  return range(x + 1, y, output);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
   if (exp == 0) {
    return 1;

  } else if (exp > 0) {
    return base * exponent(base, exp - 1);
  }
  else  if (exp < 0) {
    return 1 / base * exponent(base, exp + 1).toPrecision(10);
  }
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, product = 2) {
  console.log(product);
  if (n === 1){
    return true;
  }
  else if (n === 0){
    return false;
  }
  else if(product > n){
    return false; 
  }
  else if(product === n){
    return true; 
  }
  else {
    product *= 2; 
    return powerOfTwo(n,product)
  }
};
// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, output = "") {
  //base - exit function when input has a length of 0
  if (string.length === 0){
  return output; 
  }
  //recursion - add character at the 0 index to the ouput string 
  output += string[string.length - 1];
  //re-invoke with a slice copy of string
  return reverse(string.slice(0, -1), output);
};
console.log(reverse("abcde"));

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
 
  //base - return true if string has a length of 0
  if (string.length === 1){
    return true; 
  }
  else if (string.lenth === 2){
    if(string[0].toUpperCase() === string[1].toUpperCase()){
      return true; 
    }
  }
  else if (string[0] === " "){
    return palindrome(string.slice(1));
  }
  else if (string.slice(-1) === " "){
    return palindrome(string.slice(-1));
  }
  else if(string[0].toUpperCase() === string.slice(-1).toUpperCase()){
    return palindrome(string.slice(1, -1));
  }
  else if (string[0].toUpperCase() !== string.slice(-1).toUpperCase()){
    return false
  }
  
  };


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0){
    return 0;
  }
  if (y > 0){
 return x = x + multiply(x, y - 1); 
  }
  else if (y < 0){
    return x = -x + multiply(x, y + 1); 
  }
 
  
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base - return true if both strings are empty
  if (str1.length === 0 && str2.length === 0){
    return true;
  }
  //determine if first character in each is not the same, if so return false
  else if (str1[0] !== str2[0]){
    return false; 
  }
  //recursion - re-ivoke with sliced copies of each string
  return compareStr(str1.slice(1), str2.slice(1));

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){
  //base - return output when length of string is 0
  if (str.length === 0){
  return output; 
} 
  //recursion - push first character into output and re-invoke function with a sliced copy of string
  output.push(str[0]);
  return createArray(str.slice(1), output);
  };

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
  //base - return output when length of array is 0
  if (array.length === 0){
    return output; 
  }
  //recursion  push last element of input into output, re-invoke function with sliced copy of input array
  output.push(array[array.length -1]); 
  return reverseArr(array.slice(0, -1), output); 
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  //base - return output when length = 0
  if (length === 0){
    return output; 
  }
  //recursion - push value into array and re-invoke function with length decremented by 1
  output.push(value); 
  return buildList(value, length - 1, output); 
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, output = 0) {
  //base - return output when length of array is 0
  console.log(array);
  if (array.length === 0){
    console.log(output);
    return output; 
  }
  //recursion - increase count by 1 if array[0] === target, re-invoke with sliced copy of array
  if (array[0] === value){
    output += 1; 
  }
    return countOccurrence(array.slice(1), value, output); 
  
  
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) {

    //base 
    if (array.length <= 0){
      //return output
      return output
    } else {
      var [nums, ...theRest] = array
      // create an array of the current new array and the result of the current item and the callback function
      var array2 = [...output, callback(nums)]
      // return a recursive call to to map to process the next item.
      return rMap(theRest, callback, array2)
    }

  }

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

var nthFibo = function(n, output = [0, 1], count = 0)  {
  console.log(output);
  if (n < 0){
  return null;
  }
  else if (n === 0){
    return 0;
  }
  else if (n === 1 || n === 2){
    return 1; 
  }
  else if (n === count){
    return output[output.length - 2]; 
  }
  
  else {
    count += 1;
    output.push((output[output.length - 1]) + (output[output.length - 2]));
    return nthFibo(n, output, count);
    }
  }



// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
  //base - return output when input is empty
  if(input.length === 0){
    return output; 
  }
  //recursion - capitalize first element in array, re-invoke on a sliced copy of input array
  output.push(input[0].toUpperCase()); 
  return capitalizeWords(input.slice(1), output); 

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
  //base - return output when array is empty
  if(array.length === 0){
    return output; 
  }
  //recursion - capitalize first element in array, re-invoke on a sliced copy of input array
  output.push(array[0].charAt(0).toUpperCase() + array[0].slice(1)); 
  return capitalizeFirst(array.slice(1), output); 
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  //base - return obj when string has a length of 0
  console.log(str[0]);
  if(str.length === 0){
    return obj; 
  }
  else if (!obj.hasOwnProperty(str[0])){
    obj[str[0]] =1;
    return letterTally(str.slice(1), obj)
  }
  else  if (obj.hasOwnProperty(str[0])) {
    obj[str[0]] += 1;
    return letterTally(str.slice(1), obj);
  }
  
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[]) {
  //base - return output when list has a length of 0
  if(list.length === 0){
    return output; 
  }
  //recursion -- determine if list[0] is an element in output
  if(list[0] !== output[output.length - 1]){
    //if not, push into output array
    output.push(list[0]); }
    //re-invoke function with a sliced copy of list
    return compress(list.slice(1), output); 
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output = []) {
  //base - return output if array has a length of 0
  if(array.length === 0){
    return output; 
  }
  //recursion - determine if array[0] has a value of 0
  if (array[0] !== 0 || output[output.length - 1] !== 0){
    output.push(array[0])
  }
  return minimizeZeroes(array.slice(1), output)
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[]) {
  //base - return output array when length of input array is 0
  if (array.length === 0){
    return output; 
  }
  //recursion
  //determine if it's the first element and positive
  else if(output.length === 0 && array[0] > 0 ){
    //if so, push into output 
    output.push(array[0]); 
    return alternateSign(array.slice(1), output);
  }
  //determine fi it's the first element and negative
  else if (output.length === 0 && array[0] < 0){
    //if so, change the sign
    output.push(array[0] * -1)
    return alternateSign(array.slice(1), output)
  }
  //determine if it's positive and the output length is an even number
  else if (array[0] > 0 && output.length %2 === 0){
    //if so, change the push into output array
    output.push(array[0])
    return alternateSign(array.slice(1), output)
  }
  //determine if it's positive and the output length is an odd number
  else if (array[0] > 0 && output.length % 2 !== 0){
    //if so, change the sign and push
    output.push(array[0] * -1)
    return alternateSign(array.slice(1), output);
  }
  //determine if it's negative and the output length is even
  else if (array[0] < 0 && output.length % 2 !== 0){
    //if so, push as is into output
    output.push(array[0]);
    return alternateSign(array.slice(1), output);
    }
    //else it's negative, and needs to be positive
    output.push(array[0] * -1);
    return alternateSign(array.slice(1), output);
};

var numToText = function(str, output = "") {
  var nums = {"1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine"};
  //base return output string when input is empty
  if(str.length === 0){
    return output;
  }
  //recursion--determine character is a key in nums obj
  else if(nums.hasOwnProperty(str[0])){
    var char = str[0];
    output += nums[char];
    return numToText(str.slice(1), output);
  }
  else { 
    
  //re-invoke function with sliced copy of string
    output += str[0];
    return numToText(str.slice(1), output);
  }
};
console.log( numToText("I have 5 dogs and 6 ponies"))

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
