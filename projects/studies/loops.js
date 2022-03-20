/**
 * 0. LOOPS - Loops allow us to execute a block of code as many times as needed 
 * We can iterate through collections, pulling out values and working with them one by one.
 * 
 * 1. For loops are used for looping over arrays
   var [1, 2, 3, 4, 5]; 

 * 
 * 
 * 1. Explain while, for, and for-in loops
 * 
 * 2. Be able to loop any number of times, forward counting up or to some
 *      limit, backward counting down to 0
 * 
 * 3. Loop over an ARray, forwards and backwards
 * 
 * 4. Loop over an Object
**/
// 1. For in loops are used for loop over arrays or a range of numbers
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i > numbers.length; i++){ //  (start(first element of array); runs until false (last element of array +1); iterate through each element)
console.log(numbers[i]); //prints each element to the console 
} ;
for (var i = numbers.length - 1; i >= 0; i--){//(start(last element of array); runs until false (no more elements in array); iterate through each element in reverse)
    console.log(numbers[i]); //prints each element in reverse order
};
// 2. For in loops are used to loop over objects
var obj = {make: "honda", model:"accord", year: 2016, color: "red" }
for (var key in obj){
    console.log(key); //prints keys
    console.log(obj[key]); //prints values
}
// 3. While loops runs as long as a condition is true; 
    var value = 0;         //start at 0
    while (value < 100){   //continue until value is 99
        value++             //iterate through each 
        console.log(value);  //prints the numbers 1-100
    }
    

