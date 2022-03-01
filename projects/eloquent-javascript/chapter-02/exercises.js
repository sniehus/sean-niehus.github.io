
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) { 
  //declare a variable that is an empty string
    let string = "";
    //iterate 
    for (var i = 0; i < number; i++){
      console.log(string += "#")
      
    }
   
    
    
  }
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//divisible by 3 - Fizz, divisible by 5 - Buzz, both FizzBuzz
function fizzBuzz() {
  //iterate from 1 to 100
  for (var i = 1; i < 16; i++){
    //determine if number is divsible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    }
      //determine if number is divisble by 3
    else if (i % 3 === 0 && i % 5 !==0){
        //print fizz
        console.log("fizz");
      }
        //determine if number is divisble by 5
        else if (i % 5 === 0 && i % 3 !== 0) {
          console.log("buzz"); 
        }
        else {
          console.log(i);
        }
      
    
  }
}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  var string = "";
//iterate from 1 to input number
for (var i = 1; i <= num; i++){
  //determine if i is even
  if (i % 2 === 0){
    //create pattern for even iterations
    string += "# # # # \n"
  }
  //else it is odd
  else {
    string += " # # # #\n"
  }
    
 
}console.log(string.split("\n"));
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
