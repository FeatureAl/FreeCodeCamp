//Finding a Remainder in JavaScript
// description
//Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.

// solution
const remainder = 11%3;


//Compound Assignment With Augmented Addition
// description
//let a = 3;
//let b = 17;
//let c = 12;

// solution
a += 12;
b += 9;
c += 7;



// description
//Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
//I am a "double quoted" string inside "double quotes".

// solution
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";



// description
//FirstLine
 //   \SecondLine
//ThirdLine

// solution
const mySctr = "FirstLine\n\t\\Secon/dLine\nThirdLine";


// description
/*Concatenating Strings with the Plus Equals Operator
Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator.*/

// solution
let mySbtr = "This is the first sentence.";
myStr += " This is the second sentence.";


// description
/*Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.*/

// solution
const someAdjective = "the best idea";
let mykStr = "Learning to code is ";
myStr += someAdjective;






// description
//Use bracket notation to find the last character in the lastName variable.

// solution
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]



// description
//You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

// solution
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly"; 


const wordBlanks = "My " + myNoun + " is "+ myAdjective + " and " + myVerb + " " + myAdverb + ". ";




// description
//Modify the new array myArray so that it contains both a string and a number (in that order).

// solution
const myArray = ["a big dog", 9];


// description
//Using bracket notation select an element from myArray such that myData is equal to 8.

// solution
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];



  // description
//Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// solution
const myList = [["squash", 7], ["turkey", 2], ["cucumbers", 5], ["banana", 6], ["Sweet things", 12]];




  // description
//Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//Call the function with two numbers as arguments.

// solution
function functionWithArgs(a, b) {
  console.log(a + b);
  }
functionWithArgs(1,2);
functionWithArgs(7,9);