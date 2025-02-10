// 1 завдання  Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

const items = ["Mango", "Poly", "Ajax"];
logItems(items);
// 2 завдання Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
};

console.log(calculateEngravingPrice("Hello world", 10));
// 3 завдання
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("Я люблю JavaScript"));
// 4 завдання Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
const formatString = function (string) {
  const maxLength = 40;
  if (string.length <= maxLength) {
    return string;
  } else {
    return string.slice(0, maxLength) + "...";
  }
};
console.log(formatString("Small"));
console.log(formatString("Big"));
// 5 завдання Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
const checkForSpam = function (message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
};

console.log(checkForSpam("Spam message"));
console.log(checkForSpam("normal message"));
// 6 завдання Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Enter a number");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (Number.isNaN(number)) {
    alert("This is not a Number");
  } else {
    numbers.push(number);
  }
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`The amount is equal ${total}`);
}
// Доробив усі завдання 7 завдання не став пробити тому що лінь)))))
