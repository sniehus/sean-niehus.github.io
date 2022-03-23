/**DATA TYPES>>>>Number, string, boolean, array, object, function, undefined, null, Nan, 
 *              Infinity and -Infinity(google)
 *              
 *              What is the difference between primative/simple and complex data types?
 * 
 *              Primitive values are passed to a function BY COPY, complex values are BY REFERENCE
 *              What does this mean? How are they different?
 * 
 * 
 *0.  Datatypes are how we categorize different types of data in Javascript.
      There are two main categories we have for dataypes primitive/simple and complex.
      Primitive/simple datatypes are the most simple and the building blocks of the language, where complex data 
      types are nest structures made up of simple data.

  1. Simple/Primative data immutable, they can not by altered and are copied by value.  They do not hold, collect or aggrate other data.
    
  Types of Simple/Primative data:
**////Numbers:
     let number = 80; 
     let numb = 42.34;
   //Strings: //text enclosed in quotation marks
     let string = "This is an example of a string";
     let str = 'Strings can be wrapped in single or double quotes, and include punctuation and special characters!';
   //Boolean: // true or false values that are used in control flow of programming
     let isCat = false; 
     let isBoolean = true; 
   //Undefined: // a datatype whose variable who has not been initialized
     let isUndefined; //is declared but not given a value, it's value is "undefined"
     isUndefined = false; //now has a boolean value of false
   //null: // intentional absence of any object value; 
     let willHaveValueLater = null; //null represents the absence of value, denotes that it has no value at present but will at some point
   //NaN: // a property on the global object, when returned idicates a piece of data is not a number.
     let x = "x"; //string
     let y = "3";  //string of a number
     let z = x * y; //string divided by string
     console.log(z); //not a number, why are you trying to divide strings? prints Nan

  //2. Complex DataTypes // collections that store data that aggragate data or re-useable code that can be run as many times as 
  //   needed. complex data is of indefinite size
    // Arrays// A zero indexed list that store, various types of data as elements bound with brackets and separted by commas
    let numbers = ["one", 2, "three", 4]//each element has an index number that 
    numbers.push("five"); //push methods adds an element to the end of array
    console.log(numbers[0])// prints => the first element: "one"
    console.log(numbers[1])// prints => the second element: 2
    console.log(numbers[numbers.length - 1])//prints => the last element: "five"

    // Objects // A collection of properties (key/value pairs)
    let object = {firstName: "Gob"};//declared object with 1 property
    object.lastName = "Bluthe";//added property with dot  notation
    object[occupation] = "magician"//added property with bracket notation

    //Functions // Re-useable blocks of code that can be use can be executed an indefinite amount of times
    function add(x,y){//declared, named and given 2 parameters(inputs)
      console.log(x + y); //function body definin the execution
    };
     add(3, 4)// invoked with two numbers as values, prints => 7

    //Infinity and -Infinity// Properties of the Global Scope 
    //The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number.
    //The Number.NEGATIVE_INFINITY property represents the negative Infinity value. An inifinte value less than 0

    //3. Copy by reference vs. Copy by Value//
    //simple// data is immutable, primitive data is copied by value meaning copying does not alter the value of the variable that is being copied (non - destructive), 
    var a = 8       //a "point" to 8
    console.log(a);  //prints: 8
    var b = a         // b also "points" to 8
    console.log(b);   // prints 8
    var b = 10;       //b now "points" to 10
    console.log(a);  //prints 8 ** value of a didn't change when b changed it's value
    console.log(b); //prints 10

    //complex// data is mutable and and copied by reference, the simple data contained inside my be altered by not collections
    var obj1 = {"a": 1}; 
    console.log(obj1);  // prints => {"a": 1};
    var obj2 = obj1;    // although these appeared identical, (obj1 === obj2) =>false (they each have their own copy)
    console.log(obj2);  // prints => {"a": 1};
    obj2.a = 2; 
    console.log(obj1);  // prints => {"a": 2}; => simple data inside was altered...
    console.log(obj2);  // prints => {"a": 2};
    obj2 = {};
    console.log(obj1);  // prints => {"a": 2}; => ...but entire data is will not be mutated
    console.log(obj2);  // prints => {};
   