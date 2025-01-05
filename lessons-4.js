/* завдання 1 */
const checkFields = () => {
  const field1 = document.getElementById("field1");
  const field2 = document.getElementById("field2");
  if (field1 && field2) {
    alert("Все добре");
  } else {
    alert("Не вірно");
  }
};
/* завдання 2 */
const checkSum = () => {
  const num1 = parseFloat(document.getElementById("num1"));
  const num2 = parseFloat(document.getElementById("num2"));
  if (num1 + num2 > 10) {
    alert("The amount is greater than 10");
  } else {
    alert("The amount is less than or equal to 10");
  }
};
/* завдання 3 */
const checkText = () => {
  const text = document.getElementById("textField");
  if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
};
/* завдання 4 */
const checkRange = () => {
  const number = parseFloat(document.getElementById("numberField"));
  if (number > 10 && number < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
};
const validateForm = () => {
  const name = document.getElementById("nameField");
  const email = document.getElementById("emailField");
  const password = document.getElementById("passwordField");
  const nameValid = name.length >= 3;
  const emailValid =
    email.includes("@") && email.includes(".", email.indexOf("@"));
  const passwordValid = password.length >= 6;
  if (nameValid && emailValid && passwordValid) {
    window.location.href = "https://example.com";
  }
};
