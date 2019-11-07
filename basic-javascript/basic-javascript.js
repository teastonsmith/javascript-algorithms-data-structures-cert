// Reference https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript
// Basic JavaScript
// Introduction to JavaScript

// 1. Comment your JavaScript code

var myVar = 1; // double forward slash creates in-line comment

/* forward slash asterisk
allows you to make multi-line comments */

// 2. Declare JavaScript variables

var myName;

// 3. Storing Values with the Assignment Operator

myName = 'Easton';

// the = is known as the assignment operator, which assigns a variable the value to right of the =

// 4. Initializing Variables with the Assignment Operator

var myNewVar = 2;

// you may use declare and assign a value to a variable on the same line

// 5. Understanding Uninitialized Variables

// when a variable is declared without a value assigned, its default value is undefined

var anotherVar;
console.log(anotherVar); // -> undefined

// if you attempt a mathematical operation on an undefined variable, you will return NaN

var nanVar = anotherVar + 10; // -> NaN (Not a Number)

// 6. Understanding Case Sensitivity in Variables

// variable names are case sensitive
// best practice is to use camel-case i.e. capitalize every word except the first

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// 7. Add Two Numbers with JavaScript

// addition is an operation that may be performed on a number data type
// uses the + symbol as the addition operation

var mySum = 10 + 5; // assigned 15

// 8. Subtract One Number from Another in JavaScript

// uses the - symbol for subtraction

var myDifference = 10 - 1; // assigned 9

// 9. Multiply Two Numbers with JavaScript

// uses the * symbol for multiplication of two numbers

var myProduct = 10 * 10; // assigned 100

// 10. Divide One Number by Another in JavaScript

// uses the / symbol for division

var myQuotient = 10 / 2; // assigned 5

// 11. Increment a Number with JavaScript

// the ++ operator is used to increment a variable by 1

i++;

// is equivalent to

i = i + 1;

// 12. Decrement a Number with JavaScript

// the -- operator is used to decrement (decrease) a variable by 1

i--;

// is equivalent to

i = i - 1;

// 13. Create Decimal Numbers with JavaScript

// decimals may be stored in variables, these are also known as floating-point numbers or floats

var myDecimal = 10.5;

// 14. Multiply Two Decimals with JavaScript

// like whole numbers, basic mathematical operations may be performed on decimals

var myDecimalProduct = 2.5 * 2.0; // assigned 5

// 15. Divide One Decimal by Another with JavaScript

// division may also be performed on decimals

var myDecimalQuotient = 12.2 / 2.0; // assigned 6.1

// 16. Finding a Remainder in JavaScript

// the remainder operator gives the remainder of division between two numbers

var myOddRemainder = 17 % 2; // assigned 1 because 17 is odd
var myEvenRemainder = 48 % 2; // assigned 0 because 48 is even

// note: this is often erroneously referred to as the modulus operator, which is similar but also works with negative numbers

// 17. Compound Assignment with Augmented Addition

// assignments may modify the contents of a variable
// everything to the right of = is evaluated first before being assigned to the variable
// a shortened method of addition to variables is the += operator

var myCompoundVar = myCompoundVar + 5;

// is the same as

myCompoundVar += 5;

// 18. Compound Assignment with Augmented Subtraction

// like the += operator, -= subtracts from a variable

var myNewCompoundVar = myNewCompoundVar - 20;

// is the same as

myNewCompoundVar -= 20;

// 19. Compound Assignment with Augmented Multiplication

// the *= operator multiplies a number

var myCompoundProduct = myCompoundVar * 5;

// is the same as

myCompoundProduct *= 5;

// 20. Compound Assignment with Augmented Division

// the /= operator divides a variable by another number

var myCompoundQuotient = myCompoundQuotient / 3;

// is the same as

myCompoundQuotient /= 3;

// 21. Declare String Variables

var myName = 'Easton';

// the data between the quotation marks is stored as a string literal
// it is a string because it is zero or more characters enclosed in single or double quotes

// 22. Escaping Literal Quotes in Strings

// if we want to use quotation marks within a string literal we must first escape the string
// we do this using \ (backslash) before the embedded quotations
// this tells the JavaScript engine to not consider the inner quotations the end of the string

var myString = "This is a 'quotation' within a string";

// 22. Quoting Strings with Single Quotes

// strings in JavaScript may be written with double ("") or single ('') quotes as long as you start and end with the same type
// you may use the alternate quotes within a string to avoid having to escape

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// is the same as

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// you may also use backticks (``) for the same purpose and include both double and single quotes in a string

// 23. Escape Sequences in Strings

// you may use backslash to escape multiple different characters in JavaScript

/*
CODE -> OUTPUT
\' -> single quote
\" -> double quote
\\ -> backslash
\n -> newline
\r -> carriage return
\t -> tab
\b -> backspace
\f -> form feed
*/

var myString = 'FirstLine\n\t\\SecondLine\nThirdLine'; // produces a string with 3 different lines and a tab and \ character on the first

/*
FirstLine
    \SecondLine
ThirdLine
*/

// 24. Concatenating Strings with the Plus Operator

// when the + operator is used with a string value, it is called the concatenation operator
// you can build a new string from multiple strings by concatenating them together

var myConcatenatedString = 'This is the start. ' + 'This is the end.';

// 25. Concatenating Strings with the Plus Equals Operator

// like with numbers, we may use the += operator concatenate a string on to the end of an existing string variable

var myNewConcatenatedString =
	'This is the first sentence. ' + 'This is the second sentence.';

// is the same as

var myNewConcatenatedString = 'This is the first sentence. ';
myNewConcatenatedString += 'This is the second sentence';

// 26. Constructing Strings with Variables

// variables assigned to strings may be concatenated together with other strings

var myName = "Easton";
var myStr = "My name is " + myName + " and I am well!";

// 27. Appending Variables to Strings

// we can also append variables to a string using the += operator

var someAdjective = "Awesome";
var myStr = "Learning to code is " 
myStr += someAdjective;

// 28.  Find the Length of a String

// you can find the length of a string by writing .length after the string variable or string literal

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length

// 29. Use Bracket Notation to Find the First Character in a String

// bracket notation is a way to find a character's index within a string

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// 30. Understand String Immutability

// in JavaScript strings are immutable, meaning that the individual characters cannot be changed once the string has been assigned a variable

var myStr = "Bob";
myStr[0] = "J";

// this does not work

var myStr = "Bob";
myStr = "Job";

// this does work

// 31. Use Bracket Notation to find Nth Character in a String

// as we can use bracket notation to find the first character in a string, we may also use it to identify other character's index numbers

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

// 32. Use Bracket Notation to find the last Character in a String

//  in order to get a string's length you may subtract 1 from the strings length

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

// 33. Use Bracket Notation to find the Nth-to-last Character in a String

// using the same principle as above, you may find the nth-to-last character of a string

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];