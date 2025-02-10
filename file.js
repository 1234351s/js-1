// // Створити стрілкову функцію hello1(),
// // // яка при визові буде вертати текст “Привіт JavaScript”. */
// // явне повернення
// const Hello1 = () => {
//   return "Hello Js";
// };
// console.log(Hello1());
// // Неявне повернення
// const Hello1 = () => "Hello Js";
// console.log(Hello1());
// /*   2.
// Напишіть стрілкову функцію hello2(),
// яка при виклику буде приймати змінну userName
// (наприклад, «Василь») і виводити рядок
// (в нашому випадку «Привіт, Василь»). */

// const hello2 = (userName) => "Привіт, " + userName;
// console.log(hello2("Vasil"));
// console.log(hello2("Nazar"));
// console.log(hello2("Matviy"));
// console.log(hello2("Andriy"));
// const mul = (n, m) => {
//   const multiply = n * m;
//   const total = n + m;
//   const difference = n - m;
//   return [multiply, total, difference];
// };

// console.log(mul(6, 6));

// const mul = (n, m) => [n * m, n + m, n - m];

// console.log(mul(6, 6));

// const myAverageScore = (array) => {
//     let sum = 0
//     for (const num of array) {
//         sum += num
//     }

//     console.log(sum);

//     const average = sum / array.length;
//     console.log(average);

//     if (average > 90 && average <= 100) {
//         return "Averagescore: A"
//     }
//     if (average >= 81 && average <= 90) {
//         return "Averagescore: B"
//     }
//     if (average >= 71 && average <= 80) {
//         return "Averagescore: C"
//     }
//     if (average
