// // 1 завдання Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// // Порахувати суму всіх елементів масиву.
// // Знайти мінімальний елемент масиву.
// // Знайти максимальний елемент масиву.
// const processArray = (array, callback) => {
//   return callback(array);
// };

// const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
// const getMin = (arr) => Math.min(...arr);
// const getMax = (arr) => Math.max(...arr);

// const numbers = [1, 2, 3, 4, 5];

// console.log(processArray(numbers, getSum)); // Виведе: 15
// console.log(processArray(numbers, getMin)); // Виведе: 1
// console.log(processArray(numbers, getMax)); // Виведе: 5

// // 2 завдання Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
// // Додавання.
// // Віднімання.
// // Множення.
// // Ділення.

// const operate = (a, b, callback) => {
//   return callback(a, b);
// };

// console.log(operate(10, 5, (a, b) => a - b)); // Віднімання, виведе: 5
// console.log(operate(10, 5, (a, b) => a + b)); // Додавання, виведе: 15
// console.log(operate(10, 5, (a, b) => a * b)); // Множення, виведе: 50
// console.log(operate(10, 5, (a, b) => a / b)); // Ділення, виведе: 2

// // // 3 завдання  Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
// // const applyCallbackToArray = function (numbers, callback) {
// //   const resultArray = [];
// //   for (let i = 0; i < numbers.length; i++) {
// //     resultArray.push(callback(numbers[i]));
// //   }
// //   return resultArray;
// // };
// // const multiplyByTwo = function (number) {
// //   return number * 2;
// // };

// // const numbers = [1, 2, 3, 4, 5];
// // const newArray = applyCallbackToArray(numbers, multiplyByTwo);

// // console.log(newArray);
// // // 4 завдання Розрахунок дисконтної ціни
// // // Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.
// // const calculateDiscountPrice = (price, discountPercentage, callback) => {
// //   const discount = price * (discountPercentage / 100);
// //   const discountedPrice = price - discount;
// //   return callback(discountedPrice);
// // };
// // const displayDiscountedPrice = (discountedPrice) => {
// //   console.log(`Дисконтна ціна: ${discountedPrice.toFixed(2)} грн`);
// // };
// // const originalPrice = 1000;
// // const discountPercentage = 20;
// // calculateDiscountPrice(
// //   originalPrice,
// //   discountPercentage,
// //   displayDiscountedPrice
// // );
