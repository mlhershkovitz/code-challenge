console.log('JS working');

//document ready for jquery use later on
$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery working');    
}//end readyNow

//first js challenge
//function that will multiply the arguments passed in
function multiply(num1, num2) {
    return (num1 * num2);
}; //end multiply

//test function
console.log('Answer should be 15', multiply(3, 5));
//it works!


//second js challenge
//function that takes the sum of every number in an array
function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += Number(array[i]);
    }//end loop
    //return must be outside of loop so it will add every number in the array
    return total;
}//end sumArray function

//test function
//example array
let numArray = [4, 10, 7, 3];
console.log('Answer should be 24', sumArray(numArray));
//it works

