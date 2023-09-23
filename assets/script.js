// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Validates that the length of the Password is in the range of 8 and 128 and that the input is a number.
function validateLength(passLength) {
  
  if (passLength >= 8 && passLength <= 128) {
    return true;
  } else {
    return false;
  }

}
// Function to generate the password itself based on the criteria given.
function generatePassword() {
  var passLength = prompt(" Enter password length 8-128 character")

  if (validateLength(passLength)) {
    
//Boolean prompt to confirm whether you want to include each of the different types of characters.
    const useLowercase = confirm("Include lowercase letters?");
    const useUppercase = confirm("Include uppercase letters?");
    const useNumbers = confirm("Include numbers?");
    const useSpecialChars = confirm("Include special characters?");

//Creates Constant Variables that include all the different characters. Providing us the characters we can use to generate our password.
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

// Creates a base variable that we can then add to from our constant variables.
    var characters = '';

// Determines what characters need to be included in the password based on the User criteria.
    if (useLowercase) characters += lowercaseChars;
    if (useUppercase) characters += uppercaseChars;
    if (useNumbers) characters += numberChars;
    if (useSpecialChars) characters += specialChars;

// If the User chose none of the character types then it will return with a prompt alerting the User they haven't selected any types.
    if (characters === '') {
      alert("You must select at least one character type.");
      return "";
  }

// Creates a base variable to add our new generated password to.
  var newPass = '';

// For loop that will mix the password up based on the numerical length in the User's criteria. This will then set the "newPass" variable to the result of the mixed up word.
  for (var i = 0; i < passLength; i++) {
    var randomPass = Math.floor(Math.random() * characters.length);
    newPass += characters.charAt(randomPass);
  }

// Return the result of the For loop (the generated password)
  return newPass;

// This else is connected the generatePassword function, if the validateLength is returned as false then it will prompt the User that the Password Length input is not valid and will return nothing. 
} else {
  alert("You have entered an invalid Password Length");
  return "";
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
