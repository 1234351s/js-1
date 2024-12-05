let age = 14;
console.log(age);

let name = "Арсеній";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = "Життя - це те, що з тобою відбувається, поки ти будуєш плани.";
console.log(myString);

let myNumber = 42;
myNumber += 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

let userName = prompt("Введіть своє ім'я:");
alert("Привіт, " + userName + "!");

let confirmation = confirm("Ви впевнені?");
if (confirmation) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

alert("Ця дія небезпечна!");
let dangerousAction = confirm("Ви впевнені, що хочете продовжити?");
if (dangerousAction) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
