console.log('JS working');

//was going to have everything in one
//document ready for jquery use later on
// $(document).ready(readyNow);

// function readyNow() {
//     console.log('jQuery working');    
// }//end readyNow

//first js challenge
//function that will multiply the arguments passed in
function multiply(num1, num2) {
    return (num1 * num2);
}; //end multiply

//test function
console.log('Answer should be 15', multiply(3, 5));
//it works!


//second js challenge
//function that takes the sum of every number in an array (will need loop)
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

//third challenge
//function that takes an array of strings to see if blue is one
function blueExist(strArray) {
//need to loop through array
    for (let i = 0; i < strArray.length; i++) {
    //need conditional to tell if blue is or not
        if ('blue' === strArray[i]) {
            return true;
        }//end if
    } //end loop
    return false;
};//end blueExist function

//test function
let strings = ['pink', 'yellow', 'purple'];
console.log('Answer should be false', blueExist(strings));
let stringsTwo = ['black', 'red', 'blue'];
console.log('Answer should be true', blueExist(stringsTwo));
//both work

//fourth challenge
//function takes in two strings and returns a new string
function animalColor(animal, color) {
    return (`The ${animal} is ${color}.`);
}//end animalColor function

//test function
console.log('Answer should be the dog is white', animalColor('dog', 'white'));
//make sure it's strings being put into function
//it works!

//fifth challenge
//function that takes 2 strings and returns an object with those as properties
function makeObject(make, model) {
    let newObject = {
        make: make,
        model: model
    }//end object
    return newObject;
}// end makeObject function

//test function
console.log(makeObject('Toyota', 'Camry'));
//it works!