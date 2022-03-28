/**
 * 0. FUNCTIONS
 * 1. The two phases to using functions: First we must declare a function with the keyword "function" followed by
 * the parameters (inputs) in parenthesis.  The function body comes next which we describe the action to take on the inputs. 
 * If the function returns a value that will be inside the function body. 
 */
// 1. Syntax for named functions//
   function add(x, y){//function call "add" declared and given 2 parameters
   console.log(x + y); //the function body contains the code that the function will execute
    };                //end of function
   add(3, 4);          //here the function is being called(invoked)//=> prints 7 
// 2.  Parameters and arguments
//      Parameters are the place holders that will be passed in to the functions as arguments.
//      In the above example (x, y) x and y are the 2 parameters, they represent the 2 inputted values when the function is called
//      When the function is invoked on line 11, 3 and 4 are the arguments, which are in effect, function scoped variables.
// 3.  Assinging a variable to a function
    var quotient = function(x, y){// function is created as it was above, but before it's declared a variable is declared and it is assigned
                                //    the value of an anonymous function
       console.log(x / y); 
    }; 
    quotient(10, 2);            // invoked with arguments/prints => 5 to the console
// 4. Parameters and return statements are optional//
//     Each of the example are functions that have parameters, but function can be created with out parameters as well
    function message(){
        console.log("No Parameters, No Problem");
    }
//   Return statement are also optional, none of the above functions have a return statement but most do.  Once a function
//      hits a return statement the exeution of the funtion ends
    var compare = function(x, y){//var declared and assigned to a function
        if (x > y){
            return "x is greater";//stops and returns message if x is bigger number than y
        }
        return "y is greater"//if the if statement was not true it return this message and stops the execution
    };
    console.log(compare(2, 5)); //prints "y is greater"
//   5. Scope// We know that variables declared with var keyword are globally/function scoped and ones declared with let or const are block scoped
//  The parameters are function scoped variables so anything declared inside a function are only availble while the function is executing, unless closure
//  is created then all variables cease to exist when function is done executing unless returned and when function was declared it was attached to a variable (it's a value);
    function product(a, b){
        return a * b; 
    }
    product(5, 4)//returns -> 20
    console.log(a)//prints -> throws error/ variable no longer exists
//  6.  Closure is when the life of a variable is preserved by giving the functions outer scope via the inner function.
    function foo(){
        x = 20; 
    return function inner(){//the value of x is preserved and can be accessed by invoking the inner function
        return x + 10;
    };
    } 
     
    
    

   