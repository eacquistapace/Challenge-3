// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password criteria
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?"];

// Declarations
var confirmPasswordLength;
var confirmUppercase;
var confirmLowercase;
var confirmNumeric;
var confirmSpecialCharacters;

//Password Length Prompt
function generatePassword() {
  confirmPasswordLength = prompt(
    "How many characters would you like in your password? (Must be between 8 and 128 characters)"
  );
  if (
    generatePassword.confirmPasswordLength <= 8 &&
    generatePassword.confirmPasswordLength >= 128
  ) {
    prompt("Please choose a length between 8 and 128 characters.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
