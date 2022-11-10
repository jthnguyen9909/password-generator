// Character types
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
specialChar += '"';

// Reference to document button
var generateBtn = document.querySelector("#generate");

// Password generation function
function writePassword() {
  var passwordGen = "";
  var passwordChars = "";
  var lengthChoice;

  // Reference to document password id (textarea)
  var passwordText = document.querySelector("#password");

  // Password Length Choice
  var lengthChoice = window.prompt(
    "How long do you want your password to be? Password must be between 8 and 128 characters long."
  );

  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert(
      "Your desired password length does not fit the requirements. Please choose a number between 8 and 128 characters."
    );
    return;
  }

  // Password Character Type Choice scenarios
  var upperCaseChoice = window.confirm(
    "Would you like there to be Uppercase letters in your password?"
  );

  var lowerCaseChoice = window.confirm(
    "Would you like there to be lowercase letters in your password?"
  );

  var numericChoice = window.confirm(
    "Would you like there to be numbers in your password?"
  );

  var specialCharChoice = window.confirm(
    "Would you like there to be special characters in your password?"
  );

  if (upperCaseChoice) {
    passwordChars += upperCase;
  }
  if (lowerCaseChoice) {
    passwordChars += lowerCase;
  }
  if (numericChoice) {
    passwordChars += numbers;
  }
  if (specialCharChoice) {
    passwordChars += specialChar;
  }
  if (
    !upperCaseChoice &&
    !lowerCaseChoice &&
    !numericChoice &&
    !specialCharChoice
  ) {
    window.alert(
      "No characters were selected to create a password. Please select at least one set of characters."
    );
    console.log("No characters selected for password.");
    return;
  }

  console.log(
    "These are the characters available to your password according to your preferences."
  );
  console.log(passwordChars);

  //for loop for adding a random character from list of chosen character types to password string
  var passwordCharsLength = passwordChars.length;

  for (var i = 0; i < lengthChoice; i++) {
    passwordGen += passwordChars.charAt(
      Math.floor(Math.random() * passwordCharsLength)
    );
  }

  //after password has been generated
  console.log(
    "This is the random password generated according to your preferences."
  );
  console.log(passwordGen);
  passwordText.value = passwordGen;
  window.alert("Your password has successfully been generated below.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
