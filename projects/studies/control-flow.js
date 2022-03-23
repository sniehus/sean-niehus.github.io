/**
 * CONTROL FLOW
 * 0. Conditional statements allow us to control the flow of our application.  We use conditional statement 
 * that are based on boolean values to cotrol which code executes.
 **/
// 1. If statement(s)// there can be one or more if statements, the first one to return true returns and ends execution
function x (age){
    if (age < 1){
        return "baby";
    }
// 2. else if statement(s)//- runs if the previous if statement(s) are all false
    else if (age < 4){
        return "toddler"; 
    }
// 3. else statement// default condition (no statement needed), runs if nothing previous returned true
    else {
        return "big kid"; 
    }
}
// 4. switch // a switch statement evaluates an input expression and runs until it matches a case clause, where it executes the action and ends the execution
    var school = "middle"; 

    switch (school){
        case "pre-school":                              //no match, check next case
          console.log("student is in pre-school");
          break;
        case "elementary":                                //no match, check next case
          console.log("student is in elementary school"); 
          break;
        case "middle":                                    //match
          console.log("student is in middle school");     //message logged to console
          break;                                          //exit
        case "high":
          console.log("student is in high school");
          break;
        default: 
          console.log("student must be out of school");
        

    }

