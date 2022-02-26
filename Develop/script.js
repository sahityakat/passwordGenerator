// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength;

  var validLength = false;

  passwordLength = window.prompt('Please enter the length of the password');

  while(!validLength) {
    if(isNaN(passwordLength)) {
      passwordLength = window.prompt('Please enter a number only');
    } else if (passwordLength == null) {
      passwordLength = window.prompt('Please enter the length of the password');
    } else if(passwordLength < 8 || passwordLength > 128) {
      passwordLength = window.prompt('Please select the length between 8 and 128 characters');
    } else {
      validLength = true;
    }
  }
  console.log('validLength: '+validLength);

  var useUpperCase = window.confirm('Do you want to use uppercase?');
  var useLowerCase = window.confirm('Do you want to use lowercase?');
  var useNumbers = window.confirm('Do you want to use numbers?');
  var useSpecialChar = window.confirm('Do you want to use special characters?');

  console.log('useUpperCase: '+ useUpperCase);
  console.log('useLowerCase: '+ useLowerCase);
  console.log('useNumbers: '+ useNumbers);
  console.log('useSpecialChar: '+ useSpecialChar);

  // Array.from can only be used on Array, not a variable declared as an array
  // Array(26) creates an array with length 26
  // map -> runs the function/logic mentioned inside for each of the array elements. For ex., someArray.map((x) => x+1) adds 1 to each element in someArray 

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const upperCaseArray = alpha.map((x) => String.fromCharCode(x));
  const lowerCaseArray = alpha.map((x) => String.fromCharCode(x).toLowerCase());

  console.log('upperCaseArray: '+upperCaseArray);
  console.log('lowerCaseArray: '+lowerCaseArray);

  const numArray = Array.from(Array(9)).map((e,i) => i + 1);
  numArray.push(0);
  console.log('numArray: '+numArray);

  const specialCharArray = ["~","!","@","#","$","%","^","&","*"];
  console.log('specialCharArray: '+specialCharArray);

  var passwordStr = '';

  for(i=0;i<passwordLength;i++) {
    if(useUpperCase) {
      passwordStr += getRandomChar(upperCaseArray);
    }
    if(useLowerCase) {
      passwordStr += getRandomChar(lowerCaseArray);
    }
    if(useNumbers) {
      passwordStr += getRandomChar(numArray);
    }
    if(useSpecialChar) {
      passwordStr += getRandomChar(specialCharArray);
    }
  }
  console.log('passwordStr: '+passwordStr);

  return passwordStr;
}

function getRandomChar(selector) {
  return selector[Math.floor(Math.random() * selector.length)];
}

