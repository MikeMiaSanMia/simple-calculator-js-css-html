var userName = window.prompt("Please enter your name");
var greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName;
var number1 = parseInt(window.prompt("Enter a number: "));
var number2 = parseInt(window.prompt("Enter another number: "));
document.getElementById("operand1").innerHTML = number1;
document.getElementById("operand2").innerHTML = number2;
var sum = number1 + number2;
var difference = number1 - number2;
var product = number1 * number2;
var quotient = number1 / number2;
var modResult = number1 % number2;
document.getElementById("addition").innerHTML = "The sum of " + number1 +
  " and " + number2 + " is " + sum;
document.getElementById("subtraction").innerHTML = "The difference between " +
  number1 + " and " + number2 + " is " + difference;
document.getElementById("multiplication").innerHTML = "The product of " +
  number1 + " and " + number2 + " is " + product;
document.getElementById("division").innerHTML = "The quotient of " + 
  number1 + " and " + number2 + " is " + quotient;
document.getElementById("modulus").innerHTML = "The result of the mod operation on " + 
  number1 + " and " + number2 + " is " + modResult;