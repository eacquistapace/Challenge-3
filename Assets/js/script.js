// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password criteria arrays
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

// Variable declarations
var confirmPasswordLength;
var confirmUppercase;
var confirmLowercase;
var confirmNumeric;
var confirmSpecialCharacters;

//Password Length Prompt
function generatePassword() {
  confirmPasswordLength = prompt(
    "How many characters would you like in your password? (Must be between 8 and 128 characters)."
  );
  //Password not within paramater length, will alert user to choose correct length.
  if (confirmPasswordLength < 8 || confirmPasswordLength > 128) {
    alert("Please choose a length between 8 and 128 characters.");
  }
  //Confirming correct length paramaters were met and repeating length back to user.
  else if (confirmPasswordLength >= 8 || confirmPasswordLength <= 128) {
    alert(
      "Your password will be " + confirmPasswordLength + " characters long."
    );
  }
  //If any other paramaters are input (ex: A-Z or special characters), user will be alerted to input correct paramaters.
  else {
    alert("Please choose a length between 8 and 128 characters.");
  }

  //Determine if user will want other paramaters in password (will need to choose at least 1 or else alert will appear).
  confirmUppercase = confirm(
    "Click 'OK' if you would like to include uppercase characters in your password."
  );
  confirmLowercase = confirm(
    "Click 'OK' if you would like to include lowercase characters in your password."
  );
  confirmNumeric = confirm(
    "Click 'OK' if you would like to include numeric characters in your password."
  );
  confirmSpecialCharacters = confirm(
    "Click 'OK' if you would like to include special characters in your password."
  );
  //User did not choose any character options
  if (
    confirmUppercase === false &&
    confirmLowercase === false &&
    confirmNumeric === false &&
    confirmSpecialCharacters === false
  ) {
    alert("You must choose at least one paramater to continue.");
    //User chooses all 4 character options
  } else if (
    confirmUppercase === true &&
    confirmLowercase === true &&
    confirmNumeric === true &&
    confirmSpecialCharacters === true
  ) {
    userChoices = uppercase.concat(lowercase, numeric, specialCharacters);
    console.log(userChoices);
  }
  //User chooses 3 character options
  else if (confirmUppercase && confirmLowercase && confirmNumeric) {
    userChoices = uppercase.concat(lowercase, numeric);
    console.log(userChoices);
  } else if (confirmUppercase && confirmLowercase && confirmSpecialCharacters) {
    userChoices = uppercase.concat(lowercase, specialCharacters);
    console.log(userChoices);
  } else if (confirmLowercase && confirmNumeric && confirmSpecialCharacters) {
    userChoices = lowercase.concat(numeric, specialCharacters);
    console.log(userChoices);
  } else if (confirmUppercase && confirmNumeric && confirmSpecialCharacters) {
    userChoices = uppercase.concat(numeric, specialCharacters);
    console.log(userChoices);
  }
  //User choose 2 character options
  else if (confirmUppercase && confirmLowercase) {
    userChoices = uppercase.concat(lowercase);
    console.log(userChoices);
  } else if (confirmLowercase && confirmNumeric) {
    userChoices = lowercase.concat(numeric);
    console.log(userChoices);
  } else if (confirmLowercase && confirmSpecialCharacters) {
    userChoices = lowercase.concat(specialCharacters);
    console.log(userChoices);
  } else if (confirmUppercase && confirmNumeric) {
    userChoices = uppercase.concat(numeric);
    console.log(userChoices);
  } else if (confirmUppercase && confirmSpecialCharacters) {
    userChoices = uppercase.concat(specialCharacters);
    console.log(userChoices);
  } else if (confirmNumeric && confirmSpecialCharacters) {
    userChoices = numeric.concat(specialCharacters);
    console.log(userChoices);
  }
  //User chooses 1 character option
  else if (confirmLowercase) {
    userChoices = lowercase;
    console.log(userChoices);
  } else if (confirmUppercase) {
    userChoices = uppercase;
    console.log(userChoices);
  } else if (confirmNumeric) {
    userChoices = numeric;
    console.log(userChoices);
  } else if (confirmSpecialCharacters) {
    userChoices = specialCharacters;
    console.log(userChoices);
  }

  // Empty variable for password length
  var passwordBlank = [];

  // Loop for random selection
  for (var i = 0; i < confirmPasswordLength; i++) {
    var allChoices =
      userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }
  return passwordBlank;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
