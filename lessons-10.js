// 1 завдання  Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Hello World!");
});
// не уверен що правильно зробив но работае як должно
// 2 завдання  Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.

const randomNumber = Math.floor(Math.random() * 100) + 1;
const checkButton = document.getElementById("checkButton");
const userGuessInput = document.getElementById("userGuess");
const resultMessage = document.getElementById("resultMessage");

checkButton.addEventListener("click", () => {
  const userGuess = Number(userGuessInput.value);

  if (userGuess === randomNumber) {
    resultMessage.textContent = "Вітаємо! Чісло правільне";
    resultMessage.style.color = "green";
  } else if (userGuess < randomNumber) {
    resultMessage.textContent = " Не вірно треба більше! Спробуйте ще раз.";
    resultMessage.style.color = "red";
  } else {
    resultMessage.textContent = "Не вірно треба меньше!! Спробуйте ще раз.";
    resultMessage.style.color = "red";
  }
});
// 3 завдання  Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
let clickCount = 0;
const clickCountElement = document.getElementById("clickCount");

document.addEventListener("click", () => {
  clickCount++;
  clickCountElement.textContent = clickCount;
});
// 4 завдання  Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
const applyCallbackToArray = function (numbers, callback) {
  const resultArray = [];
  for (let i = 0; i < numbers.length; i++) {
    resultArray.push(callback(numbers[i]));
  }
  return resultArray;
};
const multiplyByTwo = function (number) {
  return number * 2;
};

const numbers = [1, 2, 3, 4, 5];
const newArray = applyCallbackToArray(numbers, multiplyByTwo);

console.log(newArray);
// 5 завдання Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.
const calculateDiscountPrice = (price, discountPercentage, callback) => {
  const discount = price * (discountPercentage / 100);
  const discountedPrice = price - discount;
  return callback(discountedPrice);
};
const displayDiscountedPrice = (discountedPrice) => {
  console.log(`Дисконтна ціна: ${discountedPrice.toFixed(2)} грн`);
};
const originalPrice = 1000;
const discountPercentage = 20;
calculateDiscountPrice(
  originalPrice,
  discountPercentage,
  displayDiscountedPrice
);
