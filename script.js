var elUsername = document.querySelector(".js-username");
var elSurname = document.querySelector(".js-surname");
var elAge = document.querySelector(".js-age");
var elEmailAddress = document.querySelector(".js-emailAddress");
var elEntredDOLLOR = document.querySelector(".js-entryDollor");


var userName = prompt("Enter your name");
var familyName = prompt("Enter your surname");
var userAge = prompt("What is your age");
var userEmail = prompt("What is your email address");
var entryDOLLOR = prompt("How much dollor$ you have");

var ExchangeToSom = entryDOLLOR * 12400;

elUsername.textContent = `Your name is: ${userName}`;
elSurname.textContent = `Your surname is: ${familyName}`;
elAge.textContent = `Your age is: ${userAge}`;
elEmailAddress.textContent = `Your email address is: ${userEmail}`;
elEntredDOLLOR.textContent = `Your Dollor would be: ${ExchangeToSom} in som`;



