// Chapter 1 (Alerts)
//  Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number
// V. Password
alert("First Name")
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");

// 2. Correct this statement: alert"You're learning JavaScript!";
alert("You're learning JavaScript!");

// 3. Code an alert statement displaying any message you like.
alert("Hello.! Welcome to our website");

// Chapter 2 (Variables for string)
// 1. Declare any variable in the camelCase format.
var sanaullahKhan;

// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
var mohsinAli = "zafarAli";

// 3. Declare the variable teamName and Alert your Team name.
var teamName = "sanaullah, Mohsin, Ali, Ayaz";
alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.
var bestMan = "Mohsin";
alert(bestMan);

// Chapter 3 (Variables for numbers)
// 1. Declare a variable “caseQty”
// 2. Assign to the variable caseQty, which has already been declared, the value 144.
var caseQty = 144;
// 3. Rewrite this statement so the variable can be used in a math operation. var num = "9";
var num = 9;
// 4. In one statement declare a variable. In a second statement assignit the sum of 2 numbers.
var sum = caseQty + num;
alert(sum);

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert(orderTotal);

// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by addingit together with a number.

// Chapter 4 (Variable names Legal and Illegal)
// 1. Correct this statement. var product cost = 3.45;
var productcost = 3.45;
alert(productcost);

// 2. Rewrite this using camelCase. var Nameofband;
var nameOfband;

// 3. In a single statement declare a legally-named variable and assign a number to it.
var _number = 2000;
alert(_number);

// 4. Declare a variable that is a combination of your first and last names. Use camelCase.
var _sanaullahKhan;

// 5. List the legal and Illegal Variables.
var legalVariable = ("a, b, _a, $b _num $sum");
alert(legalVariable);
var illegalVariable =("1a, 23b, @a, %b, &num ?sum");
alert(illegalVariable);

// Chapter 5 (Math Expression I)
// 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
var symbolOfarithmetic = "%";
alert(symbolOfarithmetic);

// 2. What is the value of num?
// var num = 20 % 6;

var num1 = 20 % 6;
alert(num1);

// 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000;
alert(largeNum);

// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable
var firstNumber = 20;
var secondNumber = 4;
var difference = firstNumber - secondNumber;
alert(difference);

// Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand.
// Make up the variable name.
var remainder = 15 % 4;
alert(remainder);

// 6. Code an alert that displays the result of a multiplication on 2 numbers.

// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal expressions.
var x = 4;
var y = x++;
alert(y); //output 4

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
var _x = 100;
var _y = --_x;
alert(_y); //output 99

// 3. var x = 50;
// var y = x++;
// What is the value of y?
var $x = 50;
var $y = $x++;
alert($y); //output 50

// 4. var y = 50;
// var z = --y;
// What is the value of z?
var _1x = 50;
var _1y = --_1x;
alert(_1y); //output 49

// 5. In a single statement, decrement num and assign its original value to newNum.
var decNum = 5;
var newNum = decNum--;
alert(newNum);
alert(decNum);

// 6. In a single statement add 1 to a variable and assign its original value to another variable.
var originalVar = 10;
var anotherVar = originalVar++;
alert(anotherVar);
alert(originalVar);

// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert
var number1 = 19;
var incNumber = ++number1;
alert(incNumber);

// Chapter 7 (Math Expression III)
// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?
var calculatedNum = 2 + (2 * 6);
var calculatedSum = calculatedNum;
alert(calculatedSum);

// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?
var calNum = (2 + 2) * 6;
var calSum = calNum;
alert(calSum);

// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?

var mathNum = (2 + 2) * ( 4 + 2);
var mathSum = mathNum;
alert(mathSum);

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?

var calculatedNum1 =((2 + 2) * 4);
var calculatedSum1 = calculatedNum1;
alert(calculatedSum1);

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
var result = (2 + 2) * (4 + 10);
var resultSum = result;
alert(resultSum);

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
var unit = 2 + (2 * 4) + 10;
var unitSum =unit;
alert(unitSum);

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
// output i try but nhi hwa mujh sai.

// Chapter 8 (Concatenating Text Strings)
// 1. var num = "2" + "2";
// What is the value of num? Include quotation marks.
var  ConcatenatingNum = "2" + "2";
alert(ConcatenatingNum);

// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement
var message = ("Hello," + "Dolly");
alert(message);

// alert("33" + 3);
// What message displays in the alert box?
var displays = ("33" + 3);
alert(displays);

// 4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
var part1 = "Pakistan";
var part2 = "Zindabad";
var fullMessage = part1 + " " + part2;
alert(fullMessage);

// 5. Write a statement that assigns to a variable the concatenation of a string with a number.
var results = "This number is " +25;
alert(results);

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var string1 = "Hello";
var string2 = "World";
var ConcatenatingString = string1 + " " + string2;
alert(ConcatenatingString);

// Chapter 9 (Prompts)
// Code a prompt with the message "Enter first name".The user's response is assigned to firstName.
var promptMessage = prompt ("Enter first name");
alert(promptMessage);

// 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country = prompt ("country" , "china");
alert("user selected country:", country);

// 3. Correct this statement var yourName = prompt(Enter Your Name");
var yourName = prompt("Enter Your Name");
alert(yourName);

// 4. Code a prompt that specifies a string as the message Include a default input.
var specifiesString = prompt ("Please enter your favorite color:", "Black");
alert("User's favorite color:", specifiesString)

// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable
// as the default response. Assign the user's response to a third variable.
var message1 = "What is your favorite food?";
var defaultResponse = "Biryani";
var userResponse = prompt( message1, defaultResponse);
alert("user's favorate food is:", userResponse);

// 6. Display a prompt, including both a message and a default response. Display the user's response in an alert.
var message2 = "What is your favorate movie";
var defaultResponse1 = "The Night Agents";
var userResponse1 = prompt (message1, defaultResponse1);
alert("user favorate movies is:" +userResponse1);

// Chapter 10 (if statments)
// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself
var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights")
}
else{
    console.log("Not Equal to Karachi")
}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.
var x = 5;
var y =5;
if(x == y){
    var z = prompt("value of z?");
    alert("user enter the vvalue of z:", z);
}

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")
var ZipCode = "10010"
if( ZipCode === "10010"){
    alert("Karachi");
}
else{
    alert("Please write correct city");
}

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;
var x = 5;
if(x === 5){
    x=1;
}
alert("The value of x is :", x);

// Chapter 11 (Comparison Operators)
// 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)
if( f != g){
    //if f is not quall to g
}

// 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or
// equal to the value represented by another variable.
if( a >= b){
    //if a greater than or equl to
}

// 3. Code an if statement. Test whether a variable is unequal to a particular number. 
// If so, assign a number to that variable.
var numm = 15;
if(numm !== 20){
    numm = 25;
}
alert("The Value of numm is :", numm);

// 4. Code an if statement that tests whether a number is unequal to a different number.
// If the condition is true (it will be), display a congratulations alert.
var numm1 = 20;
var numm2 = 25;
if (numm1 !== numm2){
    alert("congratulation.!")
}

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered is unequal to another name.
// If the condition is true (it will be), display an alert that says "No match"
var firstName = prompt ("First name");
var compareName = "sunny";
if(firstName !== compareName){
    alert("No match");
}

// Chapter 12 (if...else and else if statements)
// 1. Code an if statement that tests whether the value represented by a variable is greater than or equal to the value
// represented by another variable. If so, display an alert. If not, display a different alert.
var value1 = 15;
var value2 = 10;
if(value1 >= value2){
    alert("Value1 is greater than or equal to Value2.")
}
else{
    alert("Value1 is less than Value2.")
}

// 2. Write a program using if else and else if statement which take marks from user. And the program will calculate your
// percentage and give you grade A/C to Your percentage. (MARKSHEET)
var perc = +prompt ("ENter your percentage");
if(perc >= 80 && perc <=100){
alert("A+");
}
else if(perc >= 70 && perc < 80){
    alert("A");
}
else if(perc >= 60 && perc < 70){
    alert("B");
}
else if(perc >=50 && perc <60){
    alert("C");
}
else if(perc >= 40 && perc < 50){
    alert("D");
}
else if(perc >= 33 && perc <40){
    alert("E");
}
else if(perc > 100 || perc < 0){
    alert("You insert wrong value");
}
else{
    alert("Fail");
}

// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");}
// If a isn't 10, display an alert that says The correct value of a is.
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it's Lahore.
// If it is, display an alert acknowledging it's Lahore.
// Otherwise, display a different alert.
var city = prompt ("please enter a city:");

if(city === karachi){
    alert("This city is karachi");
}
else if(city === lahore){
    alert("This city is lahore");
}
else{
    alert("The city is not karachi and lahore.");
}
// Chapter 13 (Testing sets of conditions)
// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.
if ( a === b && c === d){
}

// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the same value as d.
if( a===b || c != d ){
}

// 3. Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.
if((userName === "hamza" || userName === "Arslan") &&  age < 60 ){
}

// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than the second variable, display an alert.
var firstValue = 50;
var secondValue = 60;

if( firstValue < secondValue || firstValue > secondValue){
    alert("The first variable is less than the second variable or greater than the second variable,");
}

// 5. Declare 2 variables. Assign one of them your first name and the other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.
var fstName = "sanaullah";
var secName = "khan";

var inputFstvalue = prompt ("Enter Your First Name");
var inputSecName = prompt ("Enter Your Last Name");

if(fstName === "sanaullah" && secName === "khan"){
    alert("Your name matches the stored names!");
}

// Chapter 14 (If statements nested)
// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".
var password = "12345";
if(password != ""){
    if(password.length <= 5){
        alert("Password must be greater than 5");
    }
    else{
        alert("OK");
    }
}

// 2. Try this statement by yourself
// if (a === 1) {
    // if (c === "Max") {
    // alert("OK");
    // }
    // }
var a = 1;
var b = "Max";

if (a === 1) {
if (c === "Max") {
alert("OK");
}
}

// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
// if (c === "Max") {
// alert("OK");
// }}
if (a === 1 && c === "Max") {
    alert("OK");
}

// 4. Declare two variables and assign them the same number value.Test two conditions, using nested if statements.
// Test whether the first variable equals the second variable and also whether it is lessthan or equal to the second variable.
// If the test passes—and it will—display an alert message.
var nummber1 =10;
var nummber2 =10;

if(nummber1 === nummber2){
    if(nummber1 <= nummber2){
        alert("The test passes: num1 equals num2 and is less than or equal to num2.");
    }
}

// Chapter 15 (Array I)
// 1. Declare an empty array.
var emptyArray = [];

// 2. Code an array with 1 string element
var oneStringarray = ["Hello, World!"];

// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index
var alphabet = ["h","i","j","k"];
alert(alphabet[2]);

// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
var findLength =["h","i","j","k", "l", "m", "n", "o"];
var totalLength = findLength.length;
alert(totalLength);

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new element.
var arryOne = ["fistElement"];
arryOne[1]= "secondElement";
alert(arryOne[1]);

// Chapter 16 (Array II)
// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
var oneString =["Mohsin"];
oneString.push("Ali");
alert("last element" + oneString[oneString.length - 1]);

// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.
var alphabet=["h","i","j","k"];
alphabet.pop();
console.log(alphabet);

// 3. var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.
var numAndalphabet =["h","i","j","k"];
numAndalphabet.push(5);
console.log(numAndalphabet);

// Chapter 16 (Array III)
// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);

// 3. Declare an array with one element.
// Add a second element to the beginning of the array. Create an alert whose message is the new first element.
var addingNewarray = ["old array"];
addingNewarray.unshift("new first element");
alert(addingNewarray[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2,0, "L");
console.log(sizes);

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array, regSizes.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var copySizes = sizes.slice(0,2);
console.log(copySizes);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,3, "parrot" , "hen");
console.log(pets);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1,2);
console.log(pets);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducePets = pets.slice(3,5);
console,log(reducePets);

// Chapter 17 - 20 (for Loops)
// 1. Write a statement in which loop is to run 10 times.
for (let i = 0; i < 10; i++) {
    console.log(`This is iteration number ${i + 1}`);
}

// 2. Code the first line of a for loop with the usual counter name, usual
// starting value, and usual increment. Run it 12 times using <= to specify how many loops.
for (let i = 0; i <= 11; i++) {
    console.log(`Iteration ${i + 1}`);
}

// 3. What are the 5 characters missing from this code, excluding any
// spaces that are missing? Type them in order, with no spaces or commas between them.
// for var i = 0 i <= 4 i++
// Note: Complete this statement by yourself
for (var i = 0; i <= 4; i++) {
    alert("The 5 missing characters, in order, are: '();;'.")
}

// 4. Code the first line of a for loop with a counter name that's not i.
// Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
for (var counter = 0; counter < 100; counter++) {

}

// 5. Code the first line of a for loop with the usual counter and the
// usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.
for (let counter = 3; counter > 0; counter--) {

}

// 7. Set a variable named “flag” with an initial Boolean value of your choice.
var flag = true;

// 8. Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
var pets = ["dog", "cat", "ox", "duck", "frog"];
for (let i = 0; i < pets.length; i++) {

}

// 9. Coding Exercise: Set a for loop to run 10 iterations.
// On the second iteration, display the counter in an alert. (It should be 1.) Break out of the loop.
for (let i = 0; i < 10; i++) {
    if (i === 1) {
      alert(`Counter value: ${i}`);
      break;
    }

  }

// 10. Create an array which contains user names
// Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
// Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing.
// Limit the number of loops by the number of elements in the array user names.Code an if statement that tests the presense 
// of (user name) in anarray.If user name match Alert that "Enter". if not then alert ("Pleasewrite correct user name"). 
var userNames = ["Ali", "Ahmed", "Sanaullah", "Mohsin", "Raza"];
var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Enter");
    break;
  }
}
if (!userNames.includes(firstName)) {
  alert("Please write correct user name");
} 

// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. 
// Limit the number of loops by the number of elements in the array firstArr. In the scope of main loop Code the nested loop.
// Limit the number of nested loops by the number of elements in the array secondArr.
// After that concatenate the both loops.
// Expected Output:
// a1
// a2
// a3
// a4
// f6
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
      console.log(firstArr[i] + secondArr[j]);
    }
  }
  
//   ================= THE END =================